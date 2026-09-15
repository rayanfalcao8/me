import type { ReactNode } from 'react';
import { SiteShell } from '@/components/shell';
import '@fontsource-variable/manrope';
import '../globals.css';

export default function EntryLayout({ children }: { children: ReactNode }) {
  return <html lang="fr"><body><SiteShell locale="fr">{children}</SiteShell></body></html>;
}
