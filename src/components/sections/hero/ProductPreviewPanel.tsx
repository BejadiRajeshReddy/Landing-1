export function ProductPreviewPanel() {
  return (
    <div className="relative mx-auto max-w-5xl mt-16 px-4">
      <div className="rounded-xl border border-border bg-canvas overflow-hidden shadow-2xl">
        <div className="bg-[#1A1F2E] flex items-center justify-center h-8 border-b border-border/50 relative">
           <div className="absolute left-4 flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
           </div>
           <div className="text-[10px] text-text-muted font-mono tracking-wider">investiq.in/workspace</div>
        </div>
        <div className="aspect-[16/9] w-full bg-surface p-6 md:p-10 flex flex-col relative overflow-hidden">
          {/* Mockup Top Bar */}
          <div className="flex items-center justify-between border-b border-border pb-4 mb-6 relative z-10">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-text-strong tracking-tight">RELIANCE IND.</h3>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-border/50 bg-canvas/30 text-xs text-text-muted">
                <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                Live NSE
              </div>
            </div>
            <div className="px-3 py-1 rounded bg-canvas border border-border/50 text-[10px] font-mono tracking-wider text-text-strong uppercase shadow-sm">
              Q4 FY25 Analysis
            </div>
          </div>

          {/* Mockup Content */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 flex-1 relative z-10">
            <div className="space-y-4">
              <div className="h-6 w-3/4 rounded bg-border/40" />
              <div className="h-6 w-full rounded bg-border/40" />
              <div className="h-6 w-5/6 rounded bg-border/40" />
              <div className="h-32 w-full rounded-lg border border-border/40 bg-canvas/30 mt-6" />
            </div>
            <div className="space-y-4">
              <div className="h-[88px] w-full rounded-lg border border-border/40 bg-canvas/30 p-4">
                 <div className="h-4 w-1/2 rounded bg-accent-indigo/20 mb-3" />
                 <div className="h-4 w-3/4 rounded bg-accent-indigo/10" />
              </div>
              <div className="h-[88px] w-full rounded-lg border border-border/40 bg-canvas/30 p-4" />
              <div className="h-[88px] w-full rounded-lg border border-border/40 bg-canvas/30 p-4" />
            </div>
          </div>

          {/* Absolute Overlays (Matching screenshot details) */}
          <div className="absolute right-10 top-36 w-64 rounded-xl border border-border bg-canvas p-4 shadow-xl z-20">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-success/20 flex items-center justify-center text-success shrink-0 mt-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-strong">Guidance Maintained</p>
                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">Capex commitments hit in 9/10 quarters. Sourced from Q4 Concall.</p>
              </div>
            </div>
          </div>

          <div className="absolute left-10 bottom-10 w-56 rounded-xl border border-border bg-canvas p-4 shadow-xl z-20">
            <p className="text-[10px] font-mono tracking-wider text-text-muted mb-2 uppercase">Management Credibility</p>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold text-text-strong leading-none">7.8</span>
              <span className="text-sm text-success font-medium mb-0.5">↑ Rising</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
