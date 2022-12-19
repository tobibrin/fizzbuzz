import {Fizzbuzz, FizzbuzzDto, FizzbuzzEntry} from "@fizz-buzz/shared";
import {FizzbuzzListDto} from "./fizzbuzz-list-dto";

export function map(value: number, fizzBuzz: Fizzbuzz): FizzbuzzDto {
  if (!fizzBuzz) {
    return null;
  }
  return {
    value,
    result: fizzBuzz
  }
}
export function mapDto(dto: FizzbuzzDto): Fizzbuzz {
  if (!dto) {
    return null;
  }
  return dto.result;
}


export function mapList(fizzBuzzEntries: Array<FizzbuzzEntry>): FizzbuzzListDto {
  if (!fizzBuzzEntries) {
    return {
      result: []
    }
  }

  return {
    result: fizzBuzzEntries
      .map(entry => map(entry.value, entry.result))
      .filter(dto => dto !== null)
  }
}

export function mapListDto(listDto: FizzbuzzListDto): Array<FizzbuzzEntry> {
  if (!listDto) {
    return [];
  }

  return listDto.result
      .map(entry => map(entry.value, entry.result))
      .filter(dto => dto !== null);
}
