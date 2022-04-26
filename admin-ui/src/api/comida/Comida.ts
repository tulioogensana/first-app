export type Comida = {
  calorias: number | null;
  celiacos: boolean | null;
  comidas?: Array<Comida>;
  costo?: "Barato" | "Medio" | "Caro" | null;
  createdAt: Date;
  foto: string | null;
  id: string;
  nombre: string | null;
  ultimoUso: Date | null;
  updatedAt: Date;
  usuarioId?: Comida | null;
};
