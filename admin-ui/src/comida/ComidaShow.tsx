import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMIDA_TITLE_FIELD } from "./ComidaTitle";

export const ComidaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Comida"
          target="ComidaId"
          label="comidas"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
