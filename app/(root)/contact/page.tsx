import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";

import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="relative flex flex-col items-center justify-center min-h-[60vh] w-full max-w-5xl mx-auto px-4 py-12">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse pointer-events-none" />

        <div className="w-full grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left visual/cta column */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left animate-in fade-in slide-in-from-left-4 duration-700">
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">Let's create something</span> <br />
              <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">amazing</span> together.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new opportunities.
            </p>
          </div>

          {/* Right contact details styling */}
          <div className="relative group animate-in fade-in slide-in-from-right-4 duration-700 delay-150">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/50 to-purple-600/50 rounded-3xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative p-8 md:p-10 rounded-3xl bg-card/90 backdrop-blur-xl border border-border/50 shadow-2xl">
              <div className="space-y-8">
                {/* Phone */}
                <a href="tel:+94740697048" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all duration-300 group/item cursor-pointer">
                  <div className="p-4 rounded-full bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-300 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-0.5 uppercase tracking-wide">Phone</p>
                    <p className="text-lg font-bold tracking-tight text-foreground">+94 740 697 048</p>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all duration-300 group/item">
                  <div className="p-4 rounded-full bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-300 shadow-sm mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <p className="text-xs font-semibold text-muted-foreground mb-0.5 uppercase tracking-wide">Email</p>
                    <a href="mailto:rnsithmafernando02@gmail.com" className="block text-base font-medium hover:text-primary transition-colors">rnsithmafernando02@gmail.com</a>
                    <a href="mailto:fernandowwrns.21@uom.lk" className="block text-base font-medium hover:text-primary transition-colors">fernandowwrns.21@uom.lk</a>
                  </div>
                </div>

                {/* Socials */}
                <div className="pt-6 mt-2 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Connect with me</p>
                    <div className="flex gap-3">
                      <a
                        href="https://github.com/rnsfernando"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-border bg-background hover:bg-black hover:text-white hover:border-black transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
                        aria-label="GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/rebecca-fernando-bb4873397/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-border bg-background hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
