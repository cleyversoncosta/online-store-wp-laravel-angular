import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nao-encontrado',
  templateUrl: './nao-encontrado.component.html',
  styleUrls: ['./nao-encontrado.component.scss']
})
export class NaoEncontradoComponent implements OnInit {

  
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Página não encontrada - NOME-DA-LOJA');   
  }

}
