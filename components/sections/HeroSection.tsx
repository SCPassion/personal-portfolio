import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, Mail } from "lucide-react";

interface HeroSectionProps {
  scrollProgress: number;
}

export default function HeroSection({ scrollProgress }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative py-10 overflow-hidden min-h-screen flex items-center justify-center"
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

      <div className="container px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-12 animate-fade-in">
          <div className="text-center lg:text-left">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-4 animate-slide-up">
                SCP
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6 animate-slide-up animation-delay-200">
                Full Stack Developer & Unity Developer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-slide-up animation-delay-400">
                Passionate developer for building web applications and Unity
                games
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-600">
                <Button
                  size="lg"
                  className="gap-2 hover:scale-105 transition-transform"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
                <div className="gap-2 hover:scale-105 transition-transform bg-transparent flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                  <p className="text-sm">bernard.cryptohk@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 animate-float">
            <Avatar className="h-64 w-64 border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-300">
              <AvatarImage src="/SCP.png" alt="SCP" />
              <AvatarFallback className="text-4xl">SCP</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
}
