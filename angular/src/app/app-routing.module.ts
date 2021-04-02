import { CompraConcluidaComponent } from './components/compra-concluida/compra-concluida.component';
import { CuidadosBasicosComponent } from './components/cuidados-basicos/cuidados-basicos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PerguntasFrequentesComponent } from './components/perguntas-frequentes/perguntas-frequentes.component';
import { AcompanharProdutoComponent } from './components/acompanhar-produto/acompanhar-produto.component';
import { TermosDeServicoComponent } from './components/termos-de-servico/termos-de-servico.component';
import { PoliticaDePrivacidadeComponent } from './components/politica-de-privacidade/politica-de-privacidade.component';
import { PoliticaDeRetornoComponent } from './components/politica-de-retorno/politica-de-retorno.component';
import { PoliticaDeEnvioComponent } from './components/politica-de-envio/politica-de-envio.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';
import { ProdutoDetalhesComponent } from './components/produto-detalhes/produto-detalhes.component';
import { CarrinhoDetalhesComponent } from './components/carrinho-detalhes/carrinho-detalhes.component';
import { FaleConoscoComponent } from './components/fale-conosco/fale-conosco.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "sobre-nos", component: SobreNosComponent },
  { path: "politica-de-envio", component: PoliticaDeEnvioComponent },
  { path: "politica-de-retorno", component: PoliticaDeRetornoComponent },
  { path: "politica-de-privacidade", component: PoliticaDePrivacidadeComponent },
  { path: "fale-conosco", component: FaleConoscoComponent },
  { path: "termos-de-servico", component: TermosDeServicoComponent },
  { path: "acompanhar-produto", component: AcompanharProdutoComponent },
  { path: "perguntas-frequentes", component: PerguntasFrequentesComponent },
  { path: "produto/:id/:slug", component: ProdutoDetalhesComponent },
  { path: "carrinho/detalhes", component: CarrinhoDetalhesComponent },
  { path: "cuidados-basicos", component: CuidadosBasicosComponent },
  { path: "compra-concluida", component: CompraConcluidaComponent },
  { path: "nao-encontrado", component: NaoEncontradoComponent },
  { path: "**", component: NaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
