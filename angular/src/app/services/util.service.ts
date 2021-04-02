import { SettingsService } from './settings.service';
import { BaseUrlPipe } from './../pipes/base-url.pipe';
import { Meta } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private meta: Meta, private settingsService: SettingsService) { }
  
	pad(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }	
    
    dias() {
      let dias: any[] = [];
      for (let i = 1; i <= 31; i++) {
        dias.push(this.pad(i, 2, null));
      }
      return dias;   
    }

    anos() {
      let anos: any[] = [];
      for (let i = (2020 - 15); i >= (2020 - 80); i--) {
        anos.push(i);
      }
      return anos;
    }

    
	emailMatch(email, email_conf) {
		if (email === email_conf) {
			return true;
		 } else {
			return false;
		 }
  }
  
	prepareENDate(data) {
    
    if (data === null) return false;

		let dia = data.substring(0,2);
		let mes = data.substring(2,4);
		let ano = data.substring(4,8);

		let dataEN = `${ano}-${mes}-${dia}`;

		return this.validateDate(dataEN);
	}

  validateDate(date){
    var regex=new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");
    return regex.test(date);
  }

  addMetaTags(
	  titleService, 
	  metaService,
	  title,
	  description,
	  url,
      imageURL,
      ogType,
      priceAmount,
	  ) {
	
	titleService.setTitle(title);   

	metaService.updateTag({ name: 'canonical', content: this.settingsService.getSiteUrl()+url })
    metaService.updateTag({ name: 'description', content: description })
	metaService.updateTag({ name: 'og:locale', content: 'pt_BR' })
	metaService.updateTag({ name: 'og:title', content: title })
	metaService.updateTag({ name: 'og:description', content: description })
	metaService.updateTag({ name: 'og:url', content: this.settingsService.getSiteUrl()+url })
	metaService.updateTag({ name: 'og:site_name', content: 'NOME-DA-LOJA' })
	metaService.updateTag({ name: 'og:image', content: imageURL })
	metaService.updateTag({ name: 'og:image:secure_url', content: imageURL })
	metaService.updateTag({ name: 'og:type', content: ogType })


	if (priceAmount !== null) {
		metaService.updateTag({ name: 'og:price:amount', content: priceAmount })
		metaService.updateTag({ name: 'og:price:currency', content: 'BRL' })	  
	} else {
		metaService.removeTag("name='og:price:amount'");
		metaService.removeTag("name='og:price:currency'");
		
	}
  }
  
}
