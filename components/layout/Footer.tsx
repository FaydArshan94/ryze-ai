import React from "react";
import { Sparkles, Twitter, Linkedin, Github, Youtube } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Integrations", href: "#integrations" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Docs", href: "#docs" },
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Github, href: "#github", label: "GitHub" },
    { icon: Youtube, href: "#youtube", label: "YouTube" },
  ];

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Headings + logo animate together
      gsap.fromTo(
        ".footer-heading",
        { opacity: 0, x: "-5", scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 60%",
          },
        }
      );


      gsap.to(
        ".footer-p",

        {
          opacity: 1,
          duration: 2,
          stagger: 0.15,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 60%",
          },
        }
      );



      // List items animate together (staggered)
      gsap.to(
        ".footer-link",

        {
          opacity: 1,
          duration: 2,
          stagger: 0.15,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 60%",
          },
        }
      );

      // Bottom bar last
      gsap.from(".footer-bottom", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power1.in",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 78%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-slate-950 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1 - Logo & Value Prop */}
          <div className="  col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="footer-heading text-2xl xl:text-4xl font-black font-[Inter] text-white">
                Ryze
              </span>
            </div>
            <p className="footer-p text-sm opacity-0 text-slate-400 leading-relaxed">
              AI that engages and converts visitors automatically.
            </p>
          </div>

          {/* Column 2 - Product */}
          <div className="footer-item">
            <h3 className="footer-heading text-sm font-semibold text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="footer-link text-sm opacity-0 text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="footer-item">
            <h3 className="footer-heading text-sm font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer-link text-sm opacity-0 text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div className="footer-item">
            <h3 className="footer-heading text-sm font-semibold text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer-link text-sm opacity-0 text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-slate-500">
              © 2026 Ryze AI. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
