import { SettingsService } from './settings.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartDetailsService {

	states: any = [
			{ sigla:"AC", nome: "Acre"},
			{ sigla:"AL", nome: "Alagoas"},
			{ sigla:"AP", nome: "Amapá"},
			{ sigla:"AM", nome: "Amazonas"},
			{ sigla:"BA", nome: "Bahia"},
			{ sigla:"CE", nome: "Ceará"},
			{ sigla:"DF", nome: "Distrito Federal"},
			{ sigla:"ES", nome: "Espírito Santo"},
			{ sigla:"GO", nome: "Goiás"},
			{ sigla:"MA", nome: "Maranhão"},
			{ sigla:"MT", nome: "Mato Grosso"},
			{ sigla:"MS", nome: "Mato Grosso do Sul"},
			{ sigla:"MG", nome: "Minas Gerais"},
			{ sigla:"PA", nome: "Pará"},
			{ sigla:"PB", nome: "Paraíba"},
			{ sigla:"PR", nome: "Paraná"},
			{ sigla:"PE", nome: "Pernambuco"},
			{ sigla:"PI", nome: "Piauí"},
			{ sigla:"RJ", nome: "Rio de Janeiro"},
			{ sigla:"RN", nome: "Rio Grande do Norte"},
			{ sigla:"RS", nome: "Rio Grande do Sul"},
			{ sigla:"RO", nome: "Rondônia"},
			{ sigla:"RR", nome: "Roraima"},
			{ sigla:"SC", nome: "Santa Catarina"},
			{ sigla:"SP", nome: "São Paulo"},
			{ sigla:"SE", nome: "Sergipe"},
			{ sigla:"TO", nome: "Tocantins"},
	  ];

	months: any = [
		{ num:"01", nome: "Janeiro"},
		{ num:"02", nome: "Fevereiro"},
		{ num:"03", nome: "Março"},
		{ num:"04", nome: "Abril"},
		{ num:"05", nome: "Maio"},
		{ num:"06", nome: "Junho"},
		{ num:"07", nome: "Julho"},
		{ num:"08", nome: "Agosto"},
		{ num:"09", nome: "Setembro"},
		{ num:"10", nome: "Outubro"},
		{ num:"11", nome: "Novembro"},
		{ num:"12", nome: "Dezembro"},
	];

  constructor(private http: HttpClient, private settingsService: SettingsService) { }

  obterStates() {
    return this.states;
  }

  obterMonths() {
    return this.months;
  }

  obterDadosCEP(cep) {
    return this.http.get<any>(this.settingsService.getBaseUrl() + "/api/v1/correios/cep-dados?cep="+cep);
  }

}
