import type { FooterLinkGroup } from '../../../data/mockData';
import { FooterLink } from './FooterLink';

interface FooterColumnProps {
  group: FooterLinkGroup;
}

export function FooterColumn({ group }: FooterColumnProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-text-strong mb-4">{group.title}</h4>
      <ul className="space-y-3">
        {group.links.map((link, i) => (
          <li key={i}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
