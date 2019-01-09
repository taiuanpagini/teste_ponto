import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './new.component.html'
})
export class NewUsuariosComponent implements OnInit {

  model: any = {};
  // arUsuarios: any = {};

  constructor(
    private Router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Novo Usuário');
  }

  cadastraUsuario(form) {
    let arUsuarios = new Array()

    if (localStorage.hasOwnProperty("arUsuarios")) {
      arUsuarios = JSON.parse(localStorage.getItem("arUsuarios"))
    }

    /* Adiciona um novo valor no array criado */
    arUsuarios.push({ nome: form.value.nome, idade: form.value.idade, email: form.value.email })

    /* Salva o item */
    localStorage.setItem("arUsuarios", JSON.stringify(arUsuarios))
    form.reset();
    alert('Usuário salvo com sucesso!')

    this.Router.navigate(['']);
  }

}
