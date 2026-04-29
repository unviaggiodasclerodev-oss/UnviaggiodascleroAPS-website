export type CategoriaArticolo = 'news' | 'intervista' | 'articolo' | 'radio' | 'tv'

export interface ArticoloRassegna {
  id: string
  titolo: string
  descrizione: string
  data: string
  fonte: string
  immagine?: string
  link?: string
  categoria: CategoriaArticolo
}

export const articoli: ArticoloRassegna[] = [
  // Esempio di articolo (da sostituire con i tuoi dati reali)
  // {
  //   id: '1',
  //   titolo: 'Titolo Articolo',
  //   descrizione: 'Descrizione breve dell\'articolo...',
  //   data: '2026-04-15',
  //   fonte: 'Il Giornale',
  //   immagine: 'articolo-1.jpg',  // File in public/rassegna/
  //   link: 'https://...',
  //   categoria: 'news'
  // }
]

export function getArticoliOrdinati(): ArticoloRassegna[] {
  return [...articoli].sort((a, b) => 
    new Date(b.data).getTime() - new Date(a.data).getTime()
  )
}

export function filtraPerCategoria(categoria: CategoriaArticolo | 'tutti'): ArticoloRassegna[] {
  if (categoria === 'tutti') return getArticoliOrdinati()
  return getArticoliOrdinati().filter(a => a.categoria === categoria)
}