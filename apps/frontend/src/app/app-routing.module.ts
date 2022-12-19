import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {FizzbuzzComponent} from "./fizzbuzz/fizzbuzz.component";
import {FizzbuzzResolver} from "./fizzbuzz/fizzbuzz.resolver";

const routes: Routes = [
  {
    path: "fizzbuzz/:value",
    resolve: {
      list: FizzbuzzResolver
    },
    component: FizzbuzzComponent
  },
  {
    path: "**",
    redirectTo: 'fizzbuzz/0'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
