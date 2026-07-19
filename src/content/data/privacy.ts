import { siteProfile } from "@/content/data/site";

export const privacyContent = {
  pageNumber: "PR",
  eyebrow: "Privacy",
  title: "Privacy",
  description:
    "How this site handles contact submissions and anonymous usage analytics — kept intentionally small.",
  lastUpdatedLabel: "Last updated",
  lastUpdated: "19 July 2026",
  intro: [
    "This portfolio is a personal professional site. It is designed to collect as little information as possible while still letting relevant recruiters and hiring managers get in touch.",
    "There is no user account system, no marketing email list, and no cookie consent banner, because the site does not rely on advertising cookies or a login.",
  ],
  sections: [
    {
      id: "what-this-site-collects",
      title: "What this site collects",
      paragraphs: [
        "Most visits only generate the anonymous page-view and performance signals described under analytics below.",
        "If you use the contact form, the fields you choose to submit are processed so I can reply. The form is limited to name, email, optional company or opportunity context, and a message. It does not request phone number, precise location, date of birth, government ID, attachments, or other sensitive personal data by default.",
      ],
    },
    {
      id: "contact-form",
      title: "Contact form (Formspree)",
      paragraphs: [
        "Contact submissions are sent from your browser to Formspree, a third-party form backend. Formspree receives the values you enter and delivers them to me (typically by email and through the Formspree dashboard).",
        "Submissions are used only to respond to the inquiry and to evaluate whether the opportunity is a fit. They are not sold, leased, or used for advertising.",
        "Formspree’s own privacy practices apply to data stored in their service. See Formspree’s documentation and privacy policy for retention, security, and account-holder controls on their side.",
      ],
      links: [
        {
          label: "Formspree privacy policy",
          href: "https://formspree.io/legal/privacy-policy",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analytics (Vercel)",
      paragraphs: [
        "This site uses Vercel Web Analytics and Vercel Speed Insights to understand which pages are visited and how the site performs in production.",
        "These products are privacy-oriented traffic and performance tools. They are not used here for advertising retargeting, and this site does not add a separate cookie-based marketing tracker.",
        "Aggregated visit and performance signals help decide what to improve. They are not used to build a personal profile for ads.",
      ],
      links: [
        {
          label: "Vercel Web Analytics docs",
          href: "https://vercel.com/docs/analytics",
        },
        {
          label: "Vercel privacy policy",
          href: "https://vercel.com/legal/privacy-policy",
        },
      ],
    },
    {
      id: "hosting",
      title: "Hosting and logs",
      paragraphs: [
        "The site is hosted on Vercel. Like most hosts, Vercel may process standard technical request data (for example IP address, user agent, and timestamps) as part of delivering pages and protecting the service.",
        "Those operational logs are governed by Vercel’s policies and are not something this portfolio turns into a marketing database.",
      ],
    },
    {
      id: "emails-and-links",
      title: "Email and outbound links",
      paragraphs: [
        `You can also email ${siteProfile.email} directly. Email you send that way is handled in ordinary email clients and is not routed through the contact form unless you choose the form.`,
        "Pages may link to LinkedIn, GitHub, and other external sites. Those services have their own privacy policies once you leave this site.",
      ],
    },
    {
      id: "what-is-not-collected",
      title: "What is not collected",
      bullets: [
        "No account registration or password storage",
        "No newsletter signup on this MVP",
        "No advertising pixels or social “like” trackers embedded for ads",
        "No intentional collection of special-category sensitive data through the contact form",
      ],
    },
    {
      id: "retention-and-requests",
      title: "Retention and requests",
      paragraphs: [
        "Contact messages are kept only as long as needed to reply and manage the conversation. If you want a submission removed from Formspree storage, or you have a question about data on this site, email the address below and include enough detail to identify the message (for example the email address and approximate date you used).",
        "Analytics data is retained according to Vercel’s product defaults for the project; it is reviewed in aggregate rather than as individual visitor histories.",
      ],
    },
  ],
  contact: {
    title: "Privacy questions",
    body: "For privacy questions about this site or contact submissions, email:",
    email: siteProfile.email,
  },
  formspreeNote:
    "Technical detail for operators: the contact form posts to Formspree using the public form ID configured as NEXT_PUBLIC_FORMSPREE_FORM_ID. Do not put secrets in that variable.",
} as const;
