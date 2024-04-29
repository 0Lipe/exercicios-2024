import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussoes',
  templateUrl: './discussoes.component.html',
  styleUrls: ['./discussoes.component.scss']
})
export class DiscussoesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitForm(event: Event) {
    event.preventDefault();
  }
  showForm() {
    var ideias = document.getElementById('ideias');
    var comentarios = document.getElementById('comentario');


    if (comentarios && ideias) {
      if (ideias.style.display === "none") {
          comentarios.style.display = 'none';
          ideias.style.display = 'flex';
      } else {
          comentarios.style.display = 'flex';
          ideias.style.display = 'none';
      }
  }
}
  showResposta(){
    var comentarios = document.getElementById('comentario');
    var resposta =document.getElementById('comentarioEnviado');
    var card = document.getElementById('cardOver');

    if(resposta && comentarios && card){
      if (resposta.style.display === 'none'){
        resposta.style.display = 'flex';
        card.style.display = 'flex';
        comentarios.style.display = 'none';
      }else {
        comentarios.style.display = 'flex';
        resposta.style.display = 'none';
        card.style.display = 'none;'
      }
    }
  }
  respostaComentario(){
    var respostaComentario = document.getElementById('respostaComentariotest');
    if (respostaComentario){
      if(respostaComentario.style.display ==='none'){
        respostaComentario.style.display ='flex';
      }else {
        respostaComentario.style.display= 'none';
      }
    }
  }
}

