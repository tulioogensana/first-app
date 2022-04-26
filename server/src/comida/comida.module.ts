import { Module } from "@nestjs/common";
import { ComidaModuleBase } from "./base/comida.module.base";
import { ComidaService } from "./comida.service";
import { ComidaController } from "./comida.controller";
import { ComidaResolver } from "./comida.resolver";

@Module({
  imports: [ComidaModuleBase],
  controllers: [ComidaController],
  providers: [ComidaService, ComidaResolver],
  exports: [ComidaService],
})
export class ComidaModule {}
