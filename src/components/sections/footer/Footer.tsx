import { footerLinks } from '../../../data/mockData';
import { FooterColumn } from './FooterColumn';
import { BarChart2 } from 'lucide-react';
import { NewsletterSignup } from './NewsletterSignup';

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-canvas">
                <BarChart2 className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-primary">InvestIQ</span>
            </div>
            <p className="text-sm text-text-body leading-relaxed mb-8 max-w-xs">
              The premier AI-native research workspace for analyzing Indian public markets. Built for professional analysts.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="#" className="text-text-muted hover:text-accent-blue transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-text-muted hover:text-accent-blue transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.id} className="col-span-1">
              <FooterColumn group={group} />
            </div>
          ))}

          <div className="col-span-2 lg:col-span-2">
             <NewsletterSignup />
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} InvestIQ Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <span className="h-2 w-2 rounded-full bg-success"></span>
            SYSTEM STATUS: OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
}
