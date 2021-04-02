import { LojaSettingsService } from './../../services/loja-settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private lojaSettingsService: LojaSettingsService) { }

  ngOnInit(): void {
    
  }
  
}
