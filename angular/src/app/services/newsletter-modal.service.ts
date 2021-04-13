import { SettingsService } from './settings.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsletterModalService {

  constructor(private http: HttpClient, private settingsService: SettingsService) { }

}
