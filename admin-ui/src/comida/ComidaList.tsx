import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { COMIDA_TITLE_FIELD } from "./ComidaTitle";

export const ComidaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"comidas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="calorias" source="calorias" />
        <BooleanField label="celiacos" source="celiacos" />
        <TextField label="costo" source="costo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="foto" source="foto" />
        <TextField label="ID" source="id" />
        <TextField label="nombre" source="nombre" />
        <TextField label="UltimoUso" source="ultimoUso" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="usuario_id"
          source="comida.id"
          reference="Comida"
        >
          <TextField source={COMIDA_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
