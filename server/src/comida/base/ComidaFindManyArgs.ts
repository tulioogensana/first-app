/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComidaWhereInput } from "./ComidaWhereInput";
import { Type } from "class-transformer";
import { ComidaOrderByInput } from "./ComidaOrderByInput";

@ArgsType()
class ComidaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ComidaWhereInput,
  })
  @Field(() => ComidaWhereInput, { nullable: true })
  @Type(() => ComidaWhereInput)
  where?: ComidaWhereInput;

  @ApiProperty({
    required: false,
    type: [ComidaOrderByInput],
  })
  @Field(() => [ComidaOrderByInput], { nullable: true })
  @Type(() => ComidaOrderByInput)
  orderBy?: Array<ComidaOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ComidaFindManyArgs };