import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {FirtComponentComponent} from './firt-component/firt-component.component';

const routs: Routes = [
  {path: 'learn', component: FirtComponentComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routs)]
})
export class AppRoutingModule {
}
