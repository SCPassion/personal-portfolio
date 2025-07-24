import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#1b293b4d]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 animate-on-scroll">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-on-scroll animation-delay-200">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-on-scroll animation-delay-400">
            <Button
              size="lg"
              className="gap-2 hover:scale-105 transition-transform"
              asChild
            >
              <Link href="mailto:bernard.cryptohk@gmail.com">
                <Mail className="h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 hover:scale-105 transition-transform bg-transparent"
              asChild
            >
              <Link href="tel:+15551234567">
                <Phone className="h-4 w-4" />
                Call Me
              </Link>
            </Button>
          </div>
          <div className="flex justify-center gap-6 animate-on-scroll animation-delay-600">
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform"
              asChild
            >
              <Link href="https://github.com/SCPassion" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:scale-110 transition-transform"
              asChild
            >
              <Link href="https://x.com/KaiCryptohk" aria-label="X">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
