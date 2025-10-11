import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

export default function ActivitiesPage() {
  const activities = [
    {
      title: "Tech Talk: Modern Frontend Architecture",
      type: "Speaker",
      date: "Tháng 12, 2024",
      location: "Tech Hub Hà Nội",
      description: "Chia sẻ về kiến trúc frontend hiện đại, best practices và các công cụ phát triển mới nhất.",
      attendees: "150+",
      tags: ["React", "Architecture", "Best Practices"],
    },
    {
      title: "Hackathon 2024",
      type: "Participant",
      date: "Tháng 11, 2024",
      location: "TP. Hồ Chí Minh",
      description: "Tham gia hackathon 48 giờ, xây dựng ứng dụng AI-powered task management và đạt giải Nhì.",
      attendees: "200+",
      tags: ["AI", "Hackathon", "Team Work"],
    },
    {
      title: "Frontend Workshop Series",
      type: "Organizer",
      date: "Tháng 10, 2024",
      location: "Online",
      description: "Tổ chức series workshop về Next.js, TypeScript và Tailwind CSS cho cộng đồng developer.",
      attendees: "300+",
      tags: ["Workshop", "Next.js", "Education"],
    },
    {
      title: "Open Source Contribution",
      type: "Contributor",
      date: "Tháng 9, 2024",
      location: "GitHub",
      description: "Đóng góp cho các dự án open source về React components và developer tools.",
      attendees: "Community",
      tags: ["Open Source", "React", "Community"],
    },
    {
      title: "Web Development Bootcamp",
      type: "Mentor",
      date: "Tháng 8, 2024",
      location: "Đà Nẵng",
      description: "Hướng dẫn và mentor cho học viên bootcamp về frontend development và career path.",
      attendees: "50+",
      tags: ["Mentoring", "Education", "Career"],
    },
    {
      title: "Tech Conference 2024",
      type: "Attendee",
      date: "Tháng 7, 2024",
      location: "Hà Nội",
      description: "Tham dự hội nghị công nghệ lớn nhất năm, networking và học hỏi từ các chuyên gia.",
      attendees: "1000+",
      tags: ["Conference", "Networking", "Learning"],
    },
  ]

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      Speaker: "bg-primary/20 text-primary border-primary/30",
      Participant: "bg-accent/20 text-accent border-accent/30",
      Organizer: "bg-chart-4/20 text-chart-4 border-chart-4/30",
      Contributor: "bg-chart-3/20 text-chart-3 border-chart-3/30",
      Mentor: "bg-chart-5/20 text-chart-5 border-chart-5/30",
      Attendee: "bg-muted text-muted-foreground border-border",
    }
    return colors[type] || "bg-muted text-muted-foreground border-border"
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-primary/20 rounded-full animate-pulse-glow" />
      <div
        className="absolute bottom-20 right-1/3 w-[500px] h-[500px] bg-accent/15 rounded-full animate-pulse-glow"
        style={{ animationDelay: "4s" }}
      />

      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16 text-center animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
              My <span className="text-primary">Activities</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Các hoạt động cộng đồng, sự kiện công nghệ và đóng góp của tôi cho cộng đồng developer.
            </p>
          </div>

          <div className="space-y-6">
            {activities.map((activity, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 text-foreground">{activity.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed text-muted-foreground">
                        {activity.description}
                      </CardDescription>
                    </div>
                    <Badge className={getTypeColor(activity.type)}>{activity.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-6 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{activity.attendees} người tham gia</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activity.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-border/50 text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
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
