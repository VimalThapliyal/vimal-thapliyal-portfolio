# 06 — Motion and Interaction Specification

## 1. Motion principles

Motion must:

- Explain hierarchy
- Confirm interaction
- Preserve orientation
- Feel responsive
- Respect user preference
- Avoid delaying access to content

Motion must not:

- Decorate every element
- Force the user to wait
- cause nausea
- move large backgrounds continuously
- create scroll-jacking
- hide content until animation completes

---

## 2. Timing tokens

| Token | Duration | Use |
|---|---:|---|
| Instant | 80–120ms | Press feedback |
| Fast | 140–180ms | Hover, focus, small reveal |
| Standard | 220–300ms | Drawer, list transition |
| Deliberate | 350–450ms | Page-level orientation |
| Maximum | 600ms | Rare hero sequence |

Most interactions should use Fast or Standard.

---

## 3. Easing

Recommended:

- Enter: `cubic-bezier(0.22, 1, 0.36, 1)`
- Exit: `cubic-bezier(0.4, 0, 1, 1)`
- Standard: `cubic-bezier(0.2, 0, 0, 1)`

Avoid exaggerated spring movement for core navigation.

---

## 4. Page transition

Preferred behavior:

- Main content fades from 0 to 1.
- Translate Y no more than 8–12px.
- Duration 220–320ms.
- Navigation rail remains stable.
- Page title may enter slightly before body.
- Route change must not wait for exit animation.

Use CSS View Transitions only as progressive enhancement. Provide normal navigation fallback.

---

## 5. Navigation interactions

### Desktop row

Hover:

- Active marker expands 4–8px.
- Text color changes.
- Number remains readable.
- Transition under 180ms.

Active:

- `aria-current="page"`
- Persistent marker
- Stronger text weight
- No animation loop

### Mobile sheet

- Overlay fades in.
- Sheet translates from top or right.
- Duration under 300ms.
- Focus moves into sheet.
- Escape closes.
- Focus returns to trigger.

---

## 6. List item interactions

Project and article rows:

- Border or background changes subtly.
- Arrow translates no more than 4px.
- Title may underline or shift color.
- Entire row should be clickable only when semantics remain clear.
- No perspective tilt.

---

## 7. Home hero reveal

Sequence:

1. Page label
2. Main statement
3. Supporting copy
4. CTA group
5. Signal panel

Total sequence should complete within 550ms.

On repeat visits or reduced motion, render immediately.

---

## 8. Theme transition

- Change colors without white flash.
- Avoid animating every property.
- Transition background, color, and border for 150–220ms.
- Disable theme transition during initial hydration.
- Persist preference.
- System option must respond to OS changes.

---

## 9. Command palette

Optional post-MVP.

Behavior:

- `Cmd/Ctrl + K` opens.
- Search routes, projects, and articles.
- Arrow keys navigate.
- Enter selects.
- Escape closes.
- Search results announce count.
- Dialog traps focus.
- No animation longer than 180ms.

---

## 10. Reading progress

Optional.

- 2–3px line at top of article.
- Uses transform scale for performance.
- Hidden in reduced-motion mode if movement is distracting.
- Not a replacement for table of contents.

---

## 11. Reduced motion

When `prefers-reduced-motion: reduce`:

- Remove staggered reveals.
- Remove smooth scrolling.
- Remove translate-based page transitions.
- Keep only instant opacity changes where needed.
- Do not autoplay animated diagrams.
- Do not animate progress continuously.

---

## 12. Performance rules

Animate only:

- `opacity`
- `transform`
- Occasionally `clip-path` for small, tested elements

Avoid animating:

- `width`
- `height`
- `top`
- `left`
- large `filter: blur()`
- box-shadow on many elements

---

## 13. Interaction acceptance criteria

- No animation blocks pointer or keyboard input.
- No content remains hidden if JavaScript fails.
- No cumulative layout shift from animation.
- Mobile sheet handles focus correctly.
- Theme loads without visible mismatch.
- Reduced-motion audit passes.
