import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './edit.component.html'
})
export class EditUsuariosComponent implements OnInit {

  model: any = {};
  arUsuarios: any = {};
  indice_selecionado = -1;
  dadosUsuario;

  constructor(
    private Router: Router,
    private ActivatedRoute: ActivatedRoute,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Edição de Usuário');

    this.ActivatedRoute.params.subscribe(params => {
      let usuario = JSON.parse(localStorage.getItem("arUsuarios"));

      this.dadosUsuario = usuario[params.id];
    })
  }

  atualizarUsuario(form) {
    this.ActivatedRoute.params.subscribe(params => {

      // arUsuarios.push({ nome: form.value.nome, idade: form.value.idade, email: form.value.email })
      console.log(this.arUsuarios[0]);
      this.arUsuarios[0] = JSON.stringify({
        nome: form.value.nome, idade: form.value.idade, email: form.value.email
      });//Altera o item selecionado na tabela
      localStorage.setItem("arUsuarios", JSON.stringify(this.arUsuarios));
    });
    alert("Informações editadas.")
    // this.Router.navigate(['']);
    
    return true;
  }

}
