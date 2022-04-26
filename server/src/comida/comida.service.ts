import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ComidaServiceBase } from "./base/comida.service.base";

@Injectable()
export class ComidaService extends ComidaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
