import { NgbootstrapService } from './../../services/ngbootstrap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor(public ngbootstrapService: NgbootstrapService) { }

  ngOnInit(): void {
  }

  showStandard() {
    this.ngbootstrapService.show('I am a standard toast');
  }  


  showSuccess() {
    this.ngbootstrapService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(dangerTpl) {
    this.ngbootstrapService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }  

}
