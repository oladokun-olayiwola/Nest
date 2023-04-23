import { Controller, Get } from "@nestjs/common";
@Controller("/app")
export class AppController {
  @Get("/root")
  getRootRoute() {
    return "Still having problems with the basics";
  };
  @Get("/message")
  getMessageRoute() {
    return "I think it's getting better"
  }
}
