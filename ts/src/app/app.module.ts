import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { TopComponent } from './components/top/top.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { ResumoComponent } from './components/resumo/resumo.component';
import { DiscussoesComponent } from './components/discussoes/discussoes.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    TopComponent,
    ConteudoComponent,
    ResumoComponent,
    DiscussoesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
