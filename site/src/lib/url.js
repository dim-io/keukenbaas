// Maakt een pad base-bewust (voor GitHub Pages onder /repo-naam).
export const href = (path = '/') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}` || '/';
};

export const functies = [
  { label: 'Rooster en personeel', text: 'Wie wanneer werkt, en iedereen weet het.', href: '/rooster' },
  { label: 'Uren, loon en fooi', text: 'Uren goedkeuren, fooi verdelen naar uren.', href: '/uren-en-fooi' },
  { label: 'Keuken en prep', text: 'Wat er vandaag gemaakt wordt, en door wie.', href: '/keuken' },
  { label: 'HACCP en labels', text: 'Metingen, THT-labels en een rapport voor de NVWA.', href: '/haccp' },
  { label: 'Recepten en inkoop', text: 'Kostprijs per gerecht en één bestelmail per leverancier.', href: '/inkoop' },
];
