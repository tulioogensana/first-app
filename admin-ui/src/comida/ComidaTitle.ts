import { Comida as TComida } from "../api/comida/Comida";

export const COMIDA_TITLE_FIELD = "foto";

export const ComidaTitle = (record: TComida): string => {
  return record.foto || record.id;
};
