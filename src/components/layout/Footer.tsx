import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { LeetCodeIcon } from "@/components/icons/LeetCodeIcon";

const socialLinks = [
  { href: "https://github.com/sanaullahmohammed", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/mohammed-sanaullah-2040711a0/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://leetcode.com/u/Mohammed_Sanaullah/", icon: LeetCodeIcon, label: "LeetCode" },
  { href: "mailto:mohammedsanaullah.dev@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">//</span> © {currentYear} Mohammed Sanaullah
          </p>

          {/* Footer Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/styleguide"
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Styleguide
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
