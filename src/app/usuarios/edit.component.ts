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
      let usuarios = JSON.parse(localStorage.getItem("arUsuarios"));

      this.dadosUsuario = usuarios[params.id];
      this.indice_selecionado = params.id;
      console.log(this.indice_selecionado);
    })
  }

  atualizarUsuario(form) {

    let usuarios = JSON.parse(localStorage.getItem("arUsuarios"));
    usuarios[this.indice_selecionado].nome = form.value.nome;
    usuarios[this.indice_selecionado].idade = form.value.idade;
    usuarios[this.indice_selecionado].email = form.value.email;
    
    //Altera o item selecionado na tabela
    localStorage.setItem("arUsuarios", JSON.stringify(usuarios));

    alert("Informações editadas.");
    this.Router.navigate(['']);
    return true;
    
  }

}
