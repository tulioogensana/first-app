import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ComidaResolverBase } from "./base/comida.resolver.base";
import { Comida } from "./base/Comida";
import { ComidaService } from "./comida.service";

@graphql.Resolver(() => Comida)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ComidaResolver extends ComidaResolverBase {
  constructor(
    protected readonly service: ComidaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
