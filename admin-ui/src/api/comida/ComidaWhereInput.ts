import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ComidaListRelationFilter } from "./ComidaListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ComidaWhereUniqueInput } from "./ComidaWhereUniqueInput";

export type ComidaWhereInput = {
  celiacos?: BooleanNullableFilter;
  comidas?: ComidaListRelationFilter;
  costo?: "Barato" | "Medio" | "Caro";
  foto?: StringNullableFilter;
  id?: StringFilter;
  nombre?: StringNullableFilter;
  ultimoUso?: DateTimeNullableFilter;
  usuarioId?: ComidaWhereUniqueInput;
};
