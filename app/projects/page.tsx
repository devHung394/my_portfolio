import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Nền tảng thương mại điện tử hiện đại với giỏ hàng, thanh toán và quản lý sản phẩm.",
      image: "/modern-ecommerce-interface.png",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Task Management App",
      description: "Ứng dụng quản lý công việc với drag-and-drop, real-time updates và team collaboration.",
      image: "/task-management-dashboard.png",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard thời tiết với dự báo chi tiết, biểu đồ và thông tin thời tiết theo thời gian thực.",
      image: "/weather-dashboard-interface.png",
      tags: ["Vue.js", "Chart.js", "Weather API", "CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Portfolio Builder",
      description: "Công cụ tạo portfolio trực tuyến với nhiều template và tùy chỉnh linh hoạt.",
      image: "/portfolio-builder-interface.jpg",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Social Media Dashboard",
      description: "Dashboard quản lý mạng xã hội với analytics, scheduling và content management.",
      image: "/social-media-analytics-dashboard.png",
      tags: ["React", "TypeScript", "GraphQL", "Recharts"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Learning Platform",
      description: "Nền tảng học tập trực tuyến với video courses, quizzes và progress tracking.",
      image: "/online-learning-platform.png",
      tags: ["Next.js", "Supabase", "Video.js", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full animate-pulse-glow" />
      <div
        className="absolute bottom-40 left-20 w-[500px] h-[500px] bg-accent/15 rounded-full animate-pulse-glow"
        style={{ animationDelay: "3s" }}
      />

      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
              My <span className="text-primary">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Khám phá các dự án tôi đã xây dựng - từ ứng dụng web đến các công cụ phát triển và nhiều hơn nữa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-video bg-muted/20">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-border hover:bg-foreground/5 bg-transparent"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/30 relative z-10">
        <div className="container mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2025 Portfolio. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
