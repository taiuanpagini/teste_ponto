import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './list.component.html'
})
export class ListUsuariosComponent implements OnInit {

  listaUsuarios: any;

  constructor(
    private Router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Listagem de Usuários');

    this.listaUsuarios = JSON.parse(localStorage.getItem('arUsuarios'));
    console.log(this.listaUsuarios);
  }

  Excluir(i) {
    this.listaUsuarios.splice(i, 1);
    localStorage.setItem("arUsuarios", JSON.stringify(this.listaUsuarios));
    alert("Registro excluído.");
  }

  Editar(i) {
    this.Router.navigate([`usuario/editar/${i}`]);
  }

}
