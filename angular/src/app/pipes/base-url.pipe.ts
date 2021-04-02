import { SettingsService } from '../services/settings.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'baseUrl'
})
export class BaseUrlPipe implements PipeTransform {

  constructor(private settingsService: SettingsService) {

  }

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.settingsService.getbaseUrlImg() + '/assets/' + value + '?timestamp='+(Math.floor(Date.now() / 1000));
    //return this.settingsService.getbaseUrlImg() + '/assets/' + value;
  }

}
