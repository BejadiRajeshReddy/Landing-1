import { cn } from '../../../utils/cn';

interface LogoCloudProps {
  className?: string;
}

export function LogoCloud({ className }: LogoCloudProps) {
  // Using generic placeholders since specific logos weren't provided.
  // The prompt asked to use neutral trust categories if real logos are unavailable.
  const placeholders = [
    "Top-Tier AMC",
    "Boutique PMS",
    "Family Office",
    "Quant Desk",
    "IB Research"
  ];

  return (
    <div className={cn("flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale", className)}>
      {placeholders.map((name, i) => (
        <div key={i} className="flex items-center justify-center h-12">
          <span className="text-xl font-bold font-serif tracking-tight text-text-strong">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
