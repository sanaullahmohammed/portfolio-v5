import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { LeetCodeIcon } from "@/components/icons/LeetCodeIcon";
import { useToast } from "@/hooks/use-toast";
import { Seo } from "@/components/Seo";

const socialLinks = [
  { href: "https://github.com/sanaullahmohammed", icon: Github, label: "GitHub", handle: "@sanaullahmohammed" },
  { href: "https://www.linkedin.com/in/mohammed-sanaullah-2040711a0/", icon: Linkedin, label: "LinkedIn", handle: "/in/mohammed-sanaullah" },
  { href: "https://leetcode.com/u/Mohammed_Sanaullah/", icon: LeetCodeIcon, label: "LeetCode", handle: "@Mohammed_Sanaullah" },
  { href: "mailto:mohammedsanaullah.dev@gmail.com", icon: Mail, label: "Email", handle: "mohammedsanaullah.dev@gmail.com" },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const CONTACT_EMAIL = "mohammedsanaullah.dev@gmail.com";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots tend to fill every field. Silently no-op.
    if ((data.get("company") as string)?.trim()) {
      form.reset();
      return;
    }

    const name = ((data.get("name") as string) ?? "").trim();
    const email = ((data.get("email") as string) ?? "").trim();
    const message = ((data.get("message") as string) ?? "").trim();

    setIsSubmitting(true);

    const subject = `Portfolio contact from ${name || "anonymous"}`;
    const body = `${message}\n\n— ${name}${email ? ` <${email}>` : ""}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    toast({
      title: "Opening your email app",
      description: `If nothing opens, email me directly at ${CONTACT_EMAIL}.`,
    });

    setIsSubmitting(false);
  };

  return (
    <Layout>
      <Seo
        title="Contact"
        description="Get in touch with Mohammed Sanaullah — open to interesting conversations, collaborations, and engineering opportunities."
      />
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or want to discuss opportunities? 
              I'm always open to interesting conversations and collaborations.
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <CodeDivider label="Send a Message" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot — invisible to humans, catches naive bots */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono text-sm">
                    <span className="text-primary">//</span> Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-card border-border font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-sm">
                    <span className="text-primary">//</span> Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-card border-border font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-sm">
                    <span className="text-primary">//</span> Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-card border-border font-mono text-sm resize-none"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="font-mono">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <CodeDivider label="Connect" />
              
              <div className="space-y-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                      <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                        {link.label}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {link.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="mt-8 p-4 bg-card border border-border rounded-lg">
                <p className="font-mono text-xs text-muted-foreground mb-2">
                  <span className="text-primary">/*</span> Availability <span className="text-primary">*/</span>
                </p>
                <p className="text-sm text-foreground">
                  Currently open to new opportunities and freelance projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
