import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { 
  HomeComponent,
  NosotrosComponent
} from "./components/index.paginas";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'nosotros', component: NosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
