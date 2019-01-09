import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsuariosComponent } from './usuarios/list.component';
import { NewUsuariosComponent } from './usuarios/new.component';
import { EditUsuariosComponent } from './usuarios/edit.component';

const routes: Routes = [
  { path: '', component: ListUsuariosComponent },
  { path: 'usuarios/lista', component: ListUsuariosComponent },
  { path: 'usuario/novo', component: NewUsuariosComponent },
  { path: 'usuario/editar/:id', component: EditUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
