import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleResumo(){
    var pontos = document.getElementById('pontos');
    var mais = document.getElementById('mais');
    var btn_mais = document.querySelector('.btn-show-more');

    if(pontos?.style.display === "none"){
      pontos.style.display="inline";
      if(mais){
        mais.style.display="none";
      }
      if (btn_mais) {
        btn_mais.innerHTML = 'Leia mais';
      }
    } else {
      if(pontos){
        pontos.style.display="none";
      }
      if(mais){
        mais.style.display="block";
      }
      if (btn_mais) {
        btn_mais.innerHTML = '';
      }
    }
  }

}
