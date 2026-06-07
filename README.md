# ivanm696 — Developer Portfolio

Personal developer portfolio with contact form built with Next.js 16, React 19 and shadcn/ui.

**Live:** [Deploy on Vercel](#deploy)

---

## Stack

| Technology | Version |
|---|---|
| Next.js | 16.2.6 |
| React | 19 |
| TypeScript | 5.7.3 |
| Tailwind CSS | v4 |
| shadcn/ui | latest |
| Vercel Analytics | 1.6.1 |

---

## Pages & Sections

### Portfolio (`app/page.tsx`)

| Section | Description |
|---|---|
| **Hero** | Name, tagline, location badge, GitHub + Contact buttons, stats (repos / followers / years active) |
| **About** | Bio text + quick facts card |
| **Projects** | Featured repositories with tech stack badges and external links |
| **Skills** | Progress bars for TypeScript, JavaScript, React, Node.js, VS Code Extensions, WebContainers |
| **Contact** | GitHub, LinkedIn, Email links |
| **Footer** | Copyright |

### Contact Form (`components/contact-form.tsx`)

- Fields: Name, Email, Subject, Message
- Loading state with spinner
- Success state with checkmark animation
- Reset button to send another message

---

## Project Structure

```
modern-contact-form/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout (metadata, fonts, Analytics)
│   └── page.tsx             # Portfolio page (all sections)
├── components/
│   ├── contact-form.tsx     # Contact form component
│   ├── theme-provider.tsx   # next-themes wrapper
│   └── ui/                  # shadcn/ui components (60+)
├── hooks/
│   ├── use-mobile.ts        # Mobile breakpoint hook
│   └── use-toast.ts         # Toast notifications hook
├── lib/
│   └── utils.ts             # cn() utility (clsx + tailwind-merge)
├── public/                  # Icons and placeholder images
├── styles/
│   └── globals.css          # Tailwind base styles
├── components.json          # shadcn/ui config
├── next.config.mjs          # Next.js config
├── postcss.config.mjs       # PostCSS + Tailwind
└── tsconfig.json            # TypeScript config
```

---

## Quick Start

```bash
git clone https://github.com/ivanm696/modern-contact-form.git
cd modern-contact-form
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customization

### Update your info — `app/page.tsx`

```ts
// Projects
const projects = [
  {
    name: "your-project",
    description: "Description",
    tech: ["TypeScript", "React"],
    url: "https://github.com/ivanm696/your-project",
  },
]

// Skills
const skills = [
  { name: "TypeScript", level: 95 },
]

// Stats
const stats = [
  { label: "Repositories", value: "90+" },
]
```

### Connect real email — `components/contact-form.tsx`

Replace the simulated submit with a real API call:

```ts
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsSubmitting(true)

  const formData = new FormData(e.currentTarget)

  // Example: Resend, EmailJS, Formspree, etc.
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json' },
  })

  setIsSubmitting(false)
  setIsSubmitted(true)
}
```

---

## Deploy

### Vercel (recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import `ivanm696/modern-contact-form`
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

Vercel Analytics activates automatically in production — no extra config needed.

### Other platforms

```bash
pnpm build   # generates .next/
pnpm start   # starts production server on :3000
```

---

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | ESLint check |

---

## License

MIT © 2026 [ivanm696](https://github.com/ivanm696)
