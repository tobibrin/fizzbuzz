import {Module} from "@nestjs/common";
import {FizzbuzzController} from "./fizzbuzz.controller";
import {FizzbuzzService} from "./fizzbuzz.service";

@Module({
  imports: [],
  controllers: [FizzbuzzController],
  providers: [FizzbuzzService],
})
export class FizzbuzzModule {}
