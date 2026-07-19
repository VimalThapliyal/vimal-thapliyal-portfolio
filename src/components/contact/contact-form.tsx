"use client";

import { useId, useRef, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { contactContent } from "@/content/data/contact";
import { siteProfile } from "@/content/data/site";
import {
  contactPayloadSchema,
  contactReasonLabels,
  type ContactPayload,
} from "@/lib/schemas/contact";
import { cn } from "@/lib/utils/cn";

type FormStatus =
  | { type: "idle" }
  | { type: "invalid"; message: string }
  | { type: "submitting" }
  | { type: "success" }
  | { type: "error"; message: string };

const initialValues: ContactPayload = {
  name: "",
  email: "",
  company: "",
  reason: "",
  roleOrProjectUrl: "",
  timeline: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const formId = useId();
  const successRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<ContactPayload>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactPayload, string>>
  >({});
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });
  const [isPending, startTransition] = useTransition();

  const formIdEnv = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "";
  const formConfigured = formIdEnv.length > 0;
  const disabled = isPending || status.type === "submitting";

  function updateField<K extends keyof ContactPayload>(
    field: K,
    value: ContactPayload[K],
  ) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function resetForm() {
    setValues(initialValues);
    setFieldErrors({});
    setStatus({ type: "idle" });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formConfigured) {
      setStatus({
        type: "error",
        message: contactContent.unconfiguredBody,
      });
      return;
    }

    const parsed = contactPayloadSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof ContactPayload, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactPayload | undefined;
        if (key && !nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      }
      setFieldErrors(nextErrors);
      setStatus({
        type: "invalid",
        message: "Please check the highlighted fields.",
      });
      return;
    }

    setFieldErrors({});
    setStatus({ type: "submitting" });

    startTransition(async () => {
      try {
        const response = await fetch(`https://formspree.io/f/${formIdEnv}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsed.data),
        });

        if (response.status === 429) {
          setStatus({
            type: "error",
            message: `The contact form has reached its monthly limit. Email ${siteProfile.email} directly instead.`,
          });
          return;
        }

        if (!response.ok) {
          setStatus({
            type: "error",
            message: `Something went wrong sending the form. Please email ${siteProfile.email} instead.`,
          });
          return;
        }

        setValues(initialValues);
        setStatus({ type: "success" });
        window.setTimeout(() => successRef.current?.focus(), 0);
      } catch {
        setStatus({
          type: "error",
          message: `Network error. Please try again or email ${siteProfile.email}.`,
        });
      }
    });
  }

  if (!formConfigured) {
    return (
      <div className="border border-dashed border-border bg-surface px-5 py-6">
        <h2 className="text-[length:var(--text-h3)] font-semibold">
          {contactContent.unconfiguredTitle}
        </h2>
        <p className="mt-2 text-text-muted">{contactContent.unconfiguredBody}</p>
        <p className="mt-4">
          <a
            href={`mailto:${siteProfile.email}`}
            className="text-accent no-underline hover:underline"
          >
            {siteProfile.email}
          </a>
        </p>
      </div>
    );
  }

  if (status.type === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="border border-accent/30 bg-accent-soft/40 px-5 py-6 outline-none"
      >
        <h2 className="text-[length:var(--text-h3)] font-semibold">
          {contactContent.successTitle}
        </h2>
        <p className="mt-2 text-text-muted">{contactContent.successBody}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button type="button" variant="secondary" onClick={resetForm}>
            Send another message
          </Button>
          <Button href={`mailto:${siteProfile.email}`} variant="ghost">
            Email directly
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
      aria-describedby={
        status.type === "invalid" || status.type === "error"
          ? `${formId}-status`
          : undefined
      }
    >
      <div
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label="Name"
          required
          error={fieldErrors.name}
        >
          <input
            id={`${formId}-name`}
            name="name"
            autoComplete="name"
            required
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={
              fieldErrors.name ? `${formId}-name-error` : undefined
            }
            value={values.name}
            disabled={disabled}
            onChange={(event) => updateField("name", event.target.value)}
            className={inputClassName(fieldErrors.name)}
          />
        </Field>

        <Field
          id={`${formId}-email`}
          label="Email"
          required
          error={fieldErrors.email}
        >
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={
              fieldErrors.email ? `${formId}-email-error` : undefined
            }
            value={values.email}
            disabled={disabled}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClassName(fieldErrors.email)}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field id={`${formId}-company`} label="Company" error={fieldErrors.company}>
          <input
            id={`${formId}-company`}
            name="company"
            autoComplete="organization"
            value={values.company ?? ""}
            disabled={disabled}
            onChange={(event) => updateField("company", event.target.value)}
            className={inputClassName(fieldErrors.company)}
          />
        </Field>

        <Field id={`${formId}-reason`} label="Reason" error={fieldErrors.reason}>
          <select
            id={`${formId}-reason`}
            name="reason"
            value={values.reason ?? ""}
            disabled={disabled}
            onChange={(event) =>
              updateField(
                "reason",
                event.target.value as ContactPayload["reason"],
              )
            }
            className={inputClassName(fieldErrors.reason)}
          >
            <option value="">Select a reason</option>
            {Object.entries(contactReasonLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          id={`${formId}-url`}
          label="Role or project link"
          error={fieldErrors.roleOrProjectUrl}
        >
          <input
            id={`${formId}-url`}
            name="roleOrProjectUrl"
            type="url"
            inputMode="url"
            placeholder="https://"
            value={values.roleOrProjectUrl ?? ""}
            disabled={disabled}
            onChange={(event) =>
              updateField("roleOrProjectUrl", event.target.value)
            }
            className={inputClassName(fieldErrors.roleOrProjectUrl)}
          />
        </Field>

        <Field
          id={`${formId}-timeline`}
          label="Timeline"
          error={fieldErrors.timeline}
        >
          <input
            id={`${formId}-timeline`}
            name="timeline"
            placeholder="Within 30 days"
            value={values.timeline ?? ""}
            disabled={disabled}
            onChange={(event) => updateField("timeline", event.target.value)}
            className={inputClassName(fieldErrors.timeline)}
          />
        </Field>
      </div>

      <Field
        id={`${formId}-message`}
        label="Message"
        required
        error={fieldErrors.message}
      >
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={7}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={
            fieldErrors.message ? `${formId}-message-error` : undefined
          }
          value={values.message}
          disabled={disabled}
          onChange={(event) => updateField("message", event.target.value)}
          className={cn(inputClassName(fieldErrors.message), "resize-y")}
        />
      </Field>

      {(status.type === "invalid" || status.type === "error") && (
        <p
          id={`${formId}-status`}
          role="alert"
          className="border border-danger/30 bg-surface px-4 py-3 text-danger"
        >
          {status.message}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" variant="primary" disabled={disabled}>
          {disabled ? "Sending…" : "Send message"}
        </Button>
        <a
          href={`mailto:${siteProfile.email}`}
          className="font-mono text-[length:var(--text-small)] text-text-muted no-underline hover:text-accent"
        >
          Or email {siteProfile.email}
        </a>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-[length:var(--text-small)] text-text">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="text-[length:var(--text-small)] text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClassName(error?: string) {
  return cn(
    "min-h-11 w-full rounded-[var(--radius-sm)] border bg-surface px-3 py-2 text-[length:var(--text-body)] text-text outline-none transition-colors",
    error ? "border-danger" : "border-border focus:border-accent",
  );
}
