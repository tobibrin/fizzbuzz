import {Injectable} from "@nestjs/common";
import {Fizzbuzz, FizzbuzzEntry} from "@fizz-buzz/shared";

@Injectable()
export class FizzbuzzService {

  getFizzbuzz(value: number): Fizzbuzz {

    if (value % 15 === 0) {
      return Fizzbuzz.FIZZ_BUZZ;
    }

    if (value % 5 === 0) {
      return Fizzbuzz.BUZZ;
    }

    if (value % 3 === 0) {
      return Fizzbuzz.FIZZ;
    }

    return Fizzbuzz.NONE;
  }

  getFizzbuzzList(upperBound: number, result: Array<FizzbuzzEntry> = []): Array<FizzbuzzEntry> {
    if (upperBound === 0) {
      return result;
    } else {
      result.push({
        value: upperBound,
        result: this.getFizzbuzz(upperBound)
      });
      return this.getFizzbuzzList(upperBound - 1, result);
    }
  }

}
