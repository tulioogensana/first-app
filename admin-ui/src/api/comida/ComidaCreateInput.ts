import { ComidaCreateNestedManyWithoutComidasInput } from "./ComidaCreateNestedManyWithoutComidasInput";
import { ComidaWhereUniqueInput } from "./ComidaWhereUniqueInput";

export type ComidaCreateInput = {
  calorias?: number | null;
  celiacos?: boolean | null;
  comidas?: ComidaCreateNestedManyWithoutComidasInput;
  costo?: "Barato" | "Medio" | "Caro" | null;
  foto?: string | null;
  nombre?: string | null;
  ultimoUso?: Date | null;
  usuarioId?: ComidaWhereUniqueInput | null;
};
