import { StoreSettingsService } from '../../services/store-settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private storeSettingsService: StoreSettingsService) { }

  ngOnInit(): void {

  }

}
