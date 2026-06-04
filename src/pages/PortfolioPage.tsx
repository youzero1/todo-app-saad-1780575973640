import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code2, Briefcase, User, Home } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  repo: string;
};

type Skill = {
  category: string;
  items: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce app with cart, checkout, and product management.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    link: '#',
    repo: '#',
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'A productivity app to manage todos with filtering, priorities, and local persistence.',
    tags: ['React', 'Vite', 'CSS Modules'],
    link: '#',
    repo: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard with charts, forecasts, and location search.',
    tags: ['React', 'Chart.js', 'API'],
    link: '#',
    repo: '#',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'This portfolio — built with React, Vite, and Tailwind v4.',
    tags: ['React', 'Vite', 'Tailwind'],
    link: '#',
    repo: '#',
  },
];

const skills: Skill[] = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'GraphQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code', 'Linux'] },
];

const navLinks = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Projects', href: '#projects', icon: Briefcase },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-indigo-400 font-bold text-xl tracking-tight">JohnDoe.dev</span>
          {/* Desktop nav */}
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-400 hover:text-indigo-400 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-indigo-400 transition-colors text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-4xl font-bold mb-6 shadow-lg shadow-indigo-900">
          JD
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-indigo-400">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl">
          Full-Stack Developer crafting clean, performant web experiences.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-indigo-400 text-gray-300 hover:text-indigo-400 rounded-lg font-semibold transition-colors"
          >
            Contact Me
          </a>
        </div>
        <div className="flex gap-5 mt-10">
          <a href="#" aria-label="GitHub" className="text-gray-500 hover:text-indigo-400 transition-colors">
            <Github size={22} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-indigo-400 transition-colors">
            <Linkedin size={22} />
          </a>
          <a href="#" aria-label="Email" className="text-gray-500 hover:text-indigo-400 transition-colors">
            <Mail size={22} />
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-24">
        <SectionHeading>About Me</SectionHeading>
        <div className="mt-6 text-gray-400 space-y-4 text-base leading-relaxed">
          <p>
            I'm a passionate full-stack developer with 5+ years of experience building web applications.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p>
            When I'm not coding, you'll find me hiking, reading sci-fi, or experimenting with new technologies.
            I believe in writing clean, maintainable code and collaborating with great teams.
          </p>
          <p>
            I'm currently open to new opportunities — feel free to reach out!
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
        <SectionHeading>Projects</SectionHeading>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-3xl mx-auto px-6 py-24">
        <SectionHeading>Skills</SectionHeading>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
              <h3 className="text-indigo-400 font-semibold mb-3 text-sm uppercase tracking-wider">
                {skill.category}
              </h3>
              <ul className="space-y-1">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-xl mx-auto px-6 py-24 text-center">
        <SectionHeading>Contact</SectionHeading>
        <p className="text-gray-400 mt-4 mb-8">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
        <ContactForm />
        <div className="flex justify-center gap-6 mt-10">
          <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="mailto:john@example.com" className="text-gray-500 hover:text-indigo-400 transition-colors" aria-label="Email">
            <Mail size={22} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} John Doe. Built with React & Tailwind.
      </footer>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white">{children}</h2>
      <div className="mt-2 w-12 h-1 bg-indigo-500 rounded-full" />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col gap-3 hover:border-indigo-700 transition-colors">
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-indigo-950 text-indigo-300 rounded text-xs font-medium border border-indigo-800"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-1">
        <a
          href={project.link}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-indigo-400 transition-colors"
        >
          <ExternalLink size={14} /> Live
        </a>
        <a
          href={project.repo}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-indigo-400 transition-colors"
        >
          <Github size={14} /> Repo
        </a>
      </div>
    </div>
  );
}

type ContactFormState = {
  name: string;
  email: string;
  message: string;
  sent: boolean;
};

function ContactForm() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
    sent: false,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setForm((prev) => ({ ...prev, sent: true }));
  }

  if (form.sent) {
    return (
      <div className="bg-indigo-950 border border-indigo-700 rounded-xl px-6 py-8 text-indigo-300 font-medium">
        Thanks for reaching out! I'll get back to you soon. 🎉
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
      <div>
        <label className="block text-sm text-gray-400 mb-1" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-400 mb-1" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm resize-none"
          placeholder="What's on your mind?"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm"
      >
        Send Message
      </button>
    </form>
  );
}
