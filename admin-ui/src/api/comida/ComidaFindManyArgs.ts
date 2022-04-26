import { ComidaWhereInput } from "./ComidaWhereInput";
import { ComidaOrderByInput } from "./ComidaOrderByInput";

export type ComidaFindManyArgs = {
  where?: ComidaWhereInput;
  orderBy?: Array<ComidaOrderByInput>;
  skip?: number;
  take?: number;
};
