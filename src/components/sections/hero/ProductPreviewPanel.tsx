import { ProductScreenshotFrame } from '../../ui/ProductScreenshotFrame';
import { FloatingUICard } from '../../ui/FloatingUICard';
import { InlineDataPill } from '../../ui/InlineDataPill';
import { ProductMockupBadge } from '../../ui/ProductMockupBadge';

export function ProductPreviewPanel() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <ProductScreenshotFrame>
        <div className="aspect-[16/9] w-full bg-surface p-6 md:p-10 flex flex-col">
          {/* Mockup Top Bar */}
          <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-bold text-text-strong">RELIANCE IND.</h3>
              <InlineDataPill dotColor="green">Live NSE</InlineDataPill>
            </div>
            <ProductMockupBadge label="Q4 FY25 Analysis" />
          </div>

          {/* Mockup Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
            <div className="col-span-2 space-y-4">
              <div className="h-4 w-3/4 rounded bg-border animate-pulse" />
              <div className="h-4 w-full rounded bg-border animate-pulse" />
              <div className="h-4 w-5/6 rounded bg-border animate-pulse" />
              <div className="h-32 w-full rounded-lg border border-border bg-canvas mt-6" />
            </div>
            <div className="space-y-4">
              <div className="h-20 w-full rounded-lg bg-accent-indigo/5 border border-accent-indigo/10 p-4">
                <div className="h-3 w-1/2 rounded bg-accent-indigo/20 mb-2" />
                <div className="h-6 w-1/3 rounded bg-accent-indigo/30" />
              </div>
              <div className="h-20 w-full rounded-lg border border-border bg-canvas p-4" />
              <div className="h-20 w-full rounded-lg border border-border bg-canvas p-4" />
            </div>
          </div>
        </div>

        {/* Floating elements to make it feel dynamic */}
        <FloatingUICard className="absolute -right-4 top-1/4 w-64 hidden lg:block" delay={800}>
          <div className="flex items-start gap-3">
            <div className="h-8 w-8 rounded-full bg-success/20 flex items-center justify-center text-success shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-text-strong">Guidance Maintained</p>
              <p className="text-xs text-text-muted mt-1">Capex commitments hit in 9/10 quarters. Sourced from Q4 Concall.</p>
            </div>
          </div>
        </FloatingUICard>

        <FloatingUICard className="absolute -left-4 bottom-1/4 w-56 hidden lg:block" delay={1000}>
          <p className="text-xs font-mono text-text-muted mb-2">MANAGEMENT CREDIBILITY</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-text-strong">7.8</span>
            <span className="text-sm text-success mb-1">↑ Rising</span>
          </div>
        </FloatingUICard>
      </ProductScreenshotFrame>
    </div>
  );
}
