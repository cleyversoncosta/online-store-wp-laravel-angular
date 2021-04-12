import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductTrackingService {

  constructor(private http: HttpClient) { }

  trackingCorreios(trackID) {

    return this.http.get('https://api.linketrack.com/track/json?user=cleyversoncosta@gmail.com&token=65fbb54a38ff960614d88896a568d78e7f25580800225de8930d1823767b3355&codigo='+trackID);
  }

}

