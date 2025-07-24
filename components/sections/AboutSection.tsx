import { User, MapPin, Mail, Phone } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#1e293b4d]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 animate-on-scroll">
            <User className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate full-stack developer with a strong background
                in reactjs, nextjs, tailwindcss. I enjoy CI/CD development and
                explore latest web technoligies.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                When I'm not coding in web development, I'm coding in Python for
                integraion and automation with AI agents.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Linz, Austria
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  bernard.cryptohk@gmail.com
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
                  <span className="text-muted-foreground">
                    Projects Completed
                  </span>
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
  );
}
