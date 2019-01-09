import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsuariosComponent } from './usuarios/list.component';
import { NewUsuariosComponent } from './usuarios/new.component';
import { EditUsuariosComponent } from './usuarios/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsuariosComponent,
    NewUsuariosComponent,
    EditUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
