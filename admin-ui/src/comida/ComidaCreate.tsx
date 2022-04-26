import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { ComidaTitle } from "./ComidaTitle";

export const ComidaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="calorias" source="calorias" />
        <BooleanInput label="celiacos" source="celiacos" />
        <ReferenceArrayInput
          source="comidas"
          reference="Comida"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComidaTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="costo"
          label="costo"
          choices={[
            { label: "Barato", value: "Barato" },
            { label: "Medio", value: "Medio" },
            { label: "Caro", value: "Caro" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="foto" source="foto" />
        <TextInput label="nombre" source="nombre" />
        <DateTimeInput label="UltimoUso" source="ultimoUso" />
        <ReferenceInput
          source="comida.id"
          reference="Comida"
          label="usuario_id"
        >
          <SelectInput optionText={ComidaTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
