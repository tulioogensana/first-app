import { ComidaUpdateManyWithoutComidasInput } from "./ComidaUpdateManyWithoutComidasInput";
import { ComidaWhereUniqueInput } from "./ComidaWhereUniqueInput";

export type ComidaUpdateInput = {
  calorias?: number | null;
  celiacos?: boolean | null;
  comidas?: ComidaUpdateManyWithoutComidasInput;
  costo?: "Barato" | "Medio" | "Caro" | null;
  foto?: string | null;
  nombre?: string | null;
  ultimoUso?: Date | null;
  usuarioId?: ComidaWhereUniqueInput | null;
};
