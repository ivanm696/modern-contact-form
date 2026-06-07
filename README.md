# ivanm696 — Developer Portfolio

Personal portfolio website for **Ivan M.** — TypeScript & JavaScript developer from Moldova.

## Live Demo

> Deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ivanm696/modern-contact-form)

---

## Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | React framework (App Router) |
| [React](https://react.dev) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5.7 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Styling |
| [shadcn/ui](https://ui.shadcn.com) | latest | UI components (New York style) |
| [Lucide React](https://lucide.dev) | latest | Icons |
| [Vercel Analytics](https://vercel.com/analytics) | latest | Production analytics |
| [Geist Font](https://vercel.com/font) | latest | Typography |

---

## Страницы и секции

Всё на одной странице (`app/page.tsx`) с якорной навигацией:

| Секция | ID | Описание |
|---|---|---|
| **Hero** | — | Имя, должность, локация (Moldova), статистика GitHub |
| **About** | `#about` | Биография, Quick Facts |
| **Projects** | `#projects` | 4 избранных проекта с ссылками на GitHub |
| **Skills** | `#skills` | TypeScript, JavaScript, React, Node.js, VS Code Extensions, WebContainers |
| **Contact** | `#contact` | Ссылки на GitHub, LinkedIn, Email |
| **Footer** | — | Copyright |

### Контактная форма (`components/contact-form.tsx`)

- Поля: Name, Email, Subject, Message
- Состояния: idle → loading (spinner) → success (✅ анимация)
- Client component (`"use client"`)
- Форма сейчас симулирует отправку (1.5s задержка) — подключи реальный backend (Resend, Formspree, EmailJS)

---

## Структура проекта

```
modern-contact-form/
├── app/
│   ├── layout.tsx          # Root layout: Geist шрифт, метаданные, Vercel Analytics
│   ├── page.tsx            # Главная страница (все секции)
│   └── globals.css         # Tailwind CSS v4 + CSS переменные темы
├── components/
│   ├── contact-form.tsx    # Контактная форма (client component)
│   ├── theme-provider.tsx  # next-themes провайдер
│   └── ui/                 # shadcn/ui компоненты (60+ компонентов)
├── hooks/                  # Кастомные React хуки
├── lib/
│   └── utils.ts            # cn() утилита (clsx + tailwind-merge)
├── public/                 # Иконки: icon.svg, icon-light-32x32.png, icon-dark-32x32.png
├── components.json         # Конфиг shadcn/ui (New York style, neutral base color)
├── next.config.mjs         # Next.js конфиг (images unoptimized)
├── postcss.config.mjs      # PostCSS для Tailwind v4
└── tsconfig.json           # TypeScript конфиг
```

---

## Быстрый старт

```bash
git clone https://github.com/ivanm696/modern-contact-form.git
cd modern-contact-form

pnpm install   # или npm install
pnpm dev       # → http://localhost:3000
```

### Сборка

```bash
pnpm build   # production build
pnpm start   # запуск production сервера
```

---

## Кастомизация

### Изменить проекты

Открой `app/page.tsx`, найди массив `projects`:

```ts
const projects = [
  {
    name: "bolt.new",
    description: "AI-powered development environment...",
    tech: ["TypeScript", "React", "WebContainers"],
    url: "https://github.com/ivanm696/bolt.new",
  },
  // добавь свои проекты
]
```

### Изменить навыки

Там же, массив `skills`:

```ts
const skills = [
  { name: "TypeScript", level: 95 },
  { name: "React", level: 88 },
  // добавь свои навыки (level: 0–100)
]
```

### Подключить реальную отправку формы

В `components/contact-form.tsx` замени симуляцию на реальный API:

```ts
// Пример с Resend
const res = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify({ name, email, subject, message }),
})
```

### Добавить shadcn/ui компонент

```bash
npx shadcn@latest add [component-name]
```

---

## Деплой на Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

Или через [Vercel Dashboard](https://vercel.com/new) — импортируй репозиторий, Next.js определяется автоматически.

> **Analytics** включается автоматически только в `production` окружении.

---

## Метаданные

Определены в `app/layout.tsx`:
- **Title:** `ivanm696 | Developer Portfolio`
- **Description:** TypeScript & JavaScript developer from Moldova...
- **Icons:** SVG + PNG варианты для light/dark темы

---

© 2026 ivanm696
