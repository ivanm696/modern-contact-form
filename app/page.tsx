"use client"

import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    name: "bolt.new",
    description: "AI-powered development environment for building web applications",
    tech: ["TypeScript", "React", "WebContainers"],
    url: "https://github.com/ivanm696/bolt.new",
  },
  {
    name: "codinit-dev",
    description: "Developer tools and utilities for modern web development",
    tech: ["TypeScript", "Node.js"],
    url: "https://github.com/ivanm696/codinit-dev-1.2.4",
  },
  {
    name: "console",
    description: "Modern console application with enhanced developer experience",
    tech: ["TypeScript", "CLI"],
    url: "https://github.com/ivanm696/console",
  },
  {
    name: "github.com",
    description: "GitHub integration tools and automation scripts",
    tech: ["JavaScript", "GitHub API"],
    url: "https://github.com/ivanm696/github.com",
  },
]

const skills = [
  { name: "TypeScript", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "VS Code Extensions", level: 80 },
  { name: "WebContainers", level: 75 },
]

const stats = [
  { label: "Repositories", value: "90+" },
  { label: "Followers", value: "19" },
  { label: "Years Active", value: "6+" },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold text-foreground">ivanm696</span>
          <div className="flex items-center gap-6">
            <Link href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link href="#skills" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Skills
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col justify-center px-6 pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 font-mono text-sm text-primary">Hi, my name is</p>
              <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground lg:text-6xl">
                Ivan M.
              </h1>
              <h2 className="mb-6 text-3xl font-semibold text-muted-foreground lg:text-4xl">
                I build developer tools.
              </h2>
              <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {"I'm a TypeScript and JavaScript developer from Moldova, focused on building modern web applications, VS Code extensions, and developer tools like WebContainers."}
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Moldova</span>
                <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Open to work
                </span>
              </div>
              <div className="mt-8 flex gap-4">
                <Link
                  href="https://github.com/ivanm696"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary bg-transparent px-6 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Mail className="h-5 w-5" />
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
                  >
                    <span className="text-3xl font-bold text-primary">{stat.value}</span>
                    <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-foreground">About Me</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                {"I'm a passionate developer with over 6 years of experience building web applications and developer tools. My journey started in 2020, and since then I've been constantly learning and contributing to open-source projects."}
              </p>
              <p className="leading-relaxed">
                My main focus is on TypeScript and JavaScript ecosystems, where I build everything from VS Code extensions to full-stack applications. I particularly enjoy working with modern tooling like WebContainers and AI-powered development environments.
              </p>
              <p className="leading-relaxed">
                {"When I'm not coding, I'm exploring new technologies, contributing to open-source, or helping other developers learn and grow."}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-semibold text-foreground">Quick Facts</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  90+ public repositories on GitHub
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Active contributor since January 2020
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Specialized in TypeScript and JavaScript
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Experience with VS Code extensions
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Working with WebContainers and bolt.diy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-card/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-foreground">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.name}
                href={project.url}
                target="_blank"
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">
                    {project.name}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-3 text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="https://github.com/ivanm696?tab=repositories"
              target="_blank"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              View all repositories
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-foreground">Skills & Technologies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="rounded-xl border border-border bg-card p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-card/50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Get In Touch</h2>
          <p className="mb-8 text-muted-foreground">
            {"I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!"}
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="https://github.com/ivanm696"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-5 w-5" />
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Link>
            <Link
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Mail className="h-5 w-5" />
              Email Me
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Built with Next.js and Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground">
            © 2026 ivanm696. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
