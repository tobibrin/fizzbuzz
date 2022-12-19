import {Injectable} from "@angular/core";
import {FizzbuzzRepository} from "./fizzbuzz.repository";
import {Fizzbuzz, FizzbuzzEntry} from "@fizz-buzz/shared";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FizzbuzzService {

  constructor(
    private repository: FizzbuzzRepository
  ) {
  }

  loadList(value: number = 0): Observable<Array<FizzbuzzEntry>> {
    if (value === 0) {
      return of([]);
    }
    return this.repository.getFizzbuzzList(value);
  }

  load(value: number = 0): Observable<Fizzbuzz> {
    if (value === 0) {
      return of(Fizzbuzz.NONE);
    }
    return this.repository.getFizzbuzz(value);
  }
}
