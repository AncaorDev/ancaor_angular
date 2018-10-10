import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AncaorInicio } from './pages/inicio/ancaor-inicio.component';

const ROUTES: Routes = [
{ path: '', component: AncaorInicio },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }