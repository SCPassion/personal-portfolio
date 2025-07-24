"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Briefcase,
  GraduationCap,
  User,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
// import { useScrollAnimation } from "../hooks/use-scroll-animation"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 z-50 shadow-lg"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function Component() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)

  // useScrollAnimation()

  // Handle scroll events for animations and navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const sectionElements = sections.map((id) => document.getElementById(id))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section && scrollTop >= section.offsetTop - 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        }
      })
    }, observerOptions)

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Tailwind CSS",
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with data visualization and forecasting",
      tech: ["React", "D3.js", "Weather API", "Tailwind"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Led development of customer-facing applications serving 100k+ users. Improved performance by 40% and implemented modern React patterns.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client websites and web applications. Collaborated with design teams to implement pixel-perfect UIs.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description:
        "Built responsive web applications and contributed to backend API development. Gained experience in agile development methodologies.",
    },
  ]

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Navigation */}
      <nav className="fixed top-1 left-1/2 transform -translate-x-1/2 z-40 bg-background/80 backdrop-blur-md border rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center space-x-6">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <ThemeToggle />

      {/* Header/Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 overflow-hidden"
      >
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"
            style={{ transform: `translateY(${scrollProgress * 0.5}px)` }}
          />
          <div
            className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-xl"
            style={{ transform: `translateY(${-scrollProgress * 0.3}px)` }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 animate-fade-in">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4 animate-slide-up">John Doe</h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6 animate-slide-up animation-delay-200">
                Full Stack Developer & UI/UX Enthusiast
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-slide-up animation-delay-400">
                Passionate developer with 5+ years of experience creating modern web applications. I love turning
                complex problems into simple, beautiful solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-600">
                <Button size="lg" className="gap-2 hover:scale-105 transition-transform">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0 animate-float">
              <Avatar className="h-64 w-64 border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-300">
                <AvatarImage src="/placeholder.svg?height=256&width=256" alt="John Doe" />
                <AvatarFallback className="text-4xl">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 animate-on-scroll">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll">
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate full-stack developer with a strong background in modern web technologies. I enjoy
                  creating efficient, scalable solutions and have a keen eye for user experience design.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  When I'm not coding, you can find me contributing to open-source projects, learning new technologies,
                  or mentoring junior developers in my community.
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    john.doe@email.com
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    (555) 123-4567
                  </div>
                </div>
              </div>
              <div className="space-y-4 animate-on-scroll animation-delay-200">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-medium">5+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects Completed</span>
                    <span className="font-medium">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Happy Clients</span>
                    <span className="font-medium">30+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Coffee Consumed</span>
                    <span className="font-medium">∞</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 animate-on-scroll">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Skills & Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-3 animate-on-scroll">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm py-2 px-4 hover:scale-110 transition-transform cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12 animate-on-scroll">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-on-scroll"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 hover:scale-105 transition-transform"
                        asChild
                      >
                        <Link href={project.github}>
                          <Github className="h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" className="gap-2 hover:scale-105 transition-transform" asChild>
                        <Link href={project.demo}>
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12 animate-on-scroll">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 animate-on-scroll"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <Badge variant="outline">{job.period}</Badge>
                    </div>
                    <CardDescription className="text-lg font-medium text-foreground">{job.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 animate-on-scroll">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-on-scroll animation-delay-200">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-on-scroll animation-delay-400">
              <Button size="lg" className="gap-2 hover:scale-105 transition-transform" asChild>
                <Link href="mailto:john.doe@email.com">
                  <Mail className="h-4 w-4" />
                  Send Email
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform" asChild>
                <Link href="tel:+15551234567">
                  <Phone className="h-4 w-4" />
                  Call Me
                </Link>
              </Button>
            </div>
            <div className="flex justify-center gap-6 animate-on-scroll animation-delay-600">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <Link href="https://github.com" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform" asChild>
                <Link href="https://linkedin.com" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
