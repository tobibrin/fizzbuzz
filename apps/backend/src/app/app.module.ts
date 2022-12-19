import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {FizzbuzzModule} from "./fizz-buzz/fizzbuzz.module";

@Module({
  imports: [
    FizzbuzzModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
