import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Fizzbuzz, FizzbuzzDto, FizzbuzzEntry, FizzbuzzListDto, mapDto, mapListDto} from "@fizz-buzz/shared";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FizzbuzzRepository {
  constructor(
    private httpClient: HttpClient
  ) {}

  getFizzbuzz(value: number): Observable<Fizzbuzz> {
    return this.httpClient
      .get<FizzbuzzDto>("/api/fizzbuzz/" + value)
      .pipe(
        map(dto => mapDto(dto))
      );
  }

  getFizzbuzzList(value: number): Observable<Array<FizzbuzzEntry>> {
    return this.httpClient
      .get<FizzbuzzListDto>("/api/fizzbuzz/list/" + value)
      .pipe(
        map(dto => mapListDto(dto))
      );
  }


}
