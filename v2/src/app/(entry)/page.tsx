import { Home } from '@/components/home';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata('fr', 'Développeur logiciel full stack', 'Rayan Tsolefack — six ans de développement, des plateformes métier aux API. Québec, Canada.');
export default function Page() { return <Home locale="fr" />; }
