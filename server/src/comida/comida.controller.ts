import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComidaService } from "./comida.service";
import { ComidaControllerBase } from "./base/comida.controller.base";

@swagger.ApiTags("comidas")
@common.Controller("comidas")
export class ComidaController extends ComidaControllerBase {
  constructor(
    protected readonly service: ComidaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
