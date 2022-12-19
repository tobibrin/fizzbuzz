import {BadRequestException, Controller, Get, Param} from "@nestjs/common";
import {FizzbuzzService} from "./fizzbuzz.service";
import {FizzbuzzDto, FizzbuzzListDto, map, mapList} from "@fizz-buzz/shared";

@Controller("/fizzbuzz")
export class FizzbuzzController {

  constructor(
    private fizzbuzzService: FizzbuzzService
  ) {}

  @Get(':value')
  get(@Param("value") value: string): FizzbuzzDto {
    const parsedParameter = +value;
    if (Number.isNaN(parsedParameter)) {
      throw new BadRequestException();
    }
    return map(parsedParameter, this.fizzbuzzService.getFizzbuzz(parsedParameter));
  }

  @Get('/list/:value')
  getList(@Param("value") value: string): FizzbuzzListDto {
    const parsedParameter = +value;
    if (Number.isNaN(parsedParameter)) {
      throw new BadRequestException();
    }
    return mapList(this.fizzbuzzService.getFizzbuzzList(parsedParameter));
  }
}
