import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ComidaController } from "../comida.controller";
import { ComidaService } from "../comida.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  calorias: 42,
  celiacos: "true",
  createdAt: new Date(),
  foto: "exampleFoto",
  id: "exampleId",
  nombre: "exampleNombre",
  ultimoUso: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  calorias: 42,
  celiacos: "true",
  createdAt: new Date(),
  foto: "exampleFoto",
  id: "exampleId",
  nombre: "exampleNombre",
  ultimoUso: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    calorias: 42,
    celiacos: "true",
    createdAt: new Date(),
    foto: "exampleFoto",
    id: "exampleId",
    nombre: "exampleNombre",
    ultimoUso: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  calorias: 42,
  celiacos: "true",
  createdAt: new Date(),
  foto: "exampleFoto",
  id: "exampleId",
  nombre: "exampleNombre",
  ultimoUso: new Date(),
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Comida", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ComidaService,
          useValue: service,
        },
      ],
      controllers: [ComidaController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /comidas", async () => {
    await request(app.getHttpServer())
      .post("/comidas")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        ultimoUso: CREATE_RESULT.ultimoUso.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /comidas", async () => {
    await request(app.getHttpServer())
      .get("/comidas")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          ultimoUso: FIND_MANY_RESULT[0].ultimoUso.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /comidas/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/comidas"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /comidas/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/comidas"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        ultimoUso: FIND_ONE_RESULT.ultimoUso.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
