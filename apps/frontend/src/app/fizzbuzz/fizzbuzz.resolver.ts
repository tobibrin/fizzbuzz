import {Injectable} from "@angular/core";
import {FizzbuzzService} from "../core/fizzbuzz/fizzbuzz.service";
import {FizzbuzzEntry} from "@fizz-buzz/shared";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FizzbuzzResolver implements Resolve<Array<FizzbuzzEntry>>{
  constructor(
    private fizzbuzzService: FizzbuzzService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<FizzbuzzEntry>> {
    return this.fizzbuzzService.loadList(+route.paramMap.get("value"));
  }


}
