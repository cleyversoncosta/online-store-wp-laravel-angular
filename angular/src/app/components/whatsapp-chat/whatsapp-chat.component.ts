import { SettingsService } from './../../services/settings.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp-chat',
  templateUrl: './whatsapp-chat.component.html',
  styleUrls: ['./whatsapp-chat.component.scss']
})
export class WhatsappChatComponent implements OnInit {

  cssMarginBottomWhatsApp: any;
  whatsAppUrl : string = "";

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private settingsService: SettingsService) {

    this.whatsAppUrl = this.settingsService.getWhatsAppUrl();

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 

        if (window.location.href.includes('/produto/')) {
          this.cssMarginBottomWhatsApp = 'b-extendido';
        } else {
          this.cssMarginBottomWhatsApp = 'b-regular';
        }

      }
    });    
   }

  ngOnInit(): void {

  }

}
