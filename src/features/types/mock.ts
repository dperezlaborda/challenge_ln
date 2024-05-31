export interface MockDataType {
  imagen_nota: string | null;
  volanta: string | null;
  titulo: string;
  subtitulo: string | null;
  nombre_autor: string;
  imagen_autor: string | null;
  url_nota: string;
}

export interface MockLinksType {
  link?: string;
  revistas?: Link[] | undefined;
  clubDelVino?: Link[] | undefined;
  envios?: Link[] | undefined;
  [index: number]: News | Magazine | WineClub | Shipping;
}

export interface Link {
  link: string;
}

interface Magazine {
  revistas: Link[];
}

interface WineClub {
  "Club del Vino": Link[];
}

interface Shipping {
  envios: Link[];
}

interface News {
  link: string;
}