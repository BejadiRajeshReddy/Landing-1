import { cn } from '../../../utils/cn';
import { securityItems } from '../../../data/mockData';
import { SectionEyebrow } from '../../foundation/SectionEyebrow';
import { SectionHeading } from '../../foundation/SectionHeading';
import { SectionSubcopy } from '../../foundation/SectionSubcopy';
import { Shield, Lock } from 'lucide-react';

interface SecuritySectionProps {
  className?: string;
}

export function SecuritySection({ className }: SecuritySectionProps) {
  return (
    <section id="security" className={cn("py-24 bg-primary text-primary-text", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionEyebrow className="text-white/70">Enterprise Ready</SectionEyebrow>
            <SectionHeading className="mb-6 text-white">Bank-grade security. <br/>Compliance baked in.</SectionHeading>
            <SectionSubcopy className="mb-12 text-white/80">
              InvestIQ is built for institutional compliance from day one. Data is siloed, interactions are audited, and models are completely private.
            </SectionSubcopy>

            <div className="space-y-8">
              {securityItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1 flex items-center gap-3">
                      {item.title}
                      {item.complianceTag && (
                        <span className="rounded bg-success/20 px-2 py-0.5 text-[10px] font-mono tracking-wider text-success uppercase border border-success/30">
                          {item.complianceTag}
                        </span>
                      )}
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm overflow-hidden">
             {/* Decorative abstract secure elements */}
             <div className="absolute top-0 right-0 p-6 opacity-20">
               <Shield className="h-48 w-48 text-white" strokeWidth={0.5} />
             </div>

             <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <Lock className="h-5 w-5 text-success" />
                  <span className="font-mono text-sm tracking-wider text-white">SYSTEM_AUDIT_LOG_ACTIVE</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-white/60">
                  <div className="flex justify-between p-3 bg-primary rounded border border-white/10">
                    <span className="text-success">[OK]</span>
                    <span>src/data/signals/Q4_reliance.json</span>
                    <span>AES-256</span>
                  </div>
                  <div className="flex justify-between p-3 bg-primary rounded border border-white/10">
                    <span className="text-success">[OK]</span>
                    <span>auth/session/token_validation</span>
                    <span>OAUTH2</span>
                  </div>
                  <div className="flex justify-between p-3 bg-primary rounded border border-white/10">
                    <span className="text-success">[OK]</span>
                    <span>llm/context/isolation_check</span>
                    <span>SILO_VERIFIED</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
