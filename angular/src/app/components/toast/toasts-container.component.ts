import { Component, TemplateRef, OnInit } from '@angular/core';

import { NgbootstrapService } from './../../services/ngbootstrap.service';

  @Component({
    selector: 'app-toasts',
    template: `
        <ngb-toast
          *ngFor="let toast of ngbootstrapService.toasts"
          [class]="toast.classname"
          [autohide]="true"
          [delay]="toast.delay || 5000"
          (hide)="ngbootstrapService.remove(toast)"
        >
          <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
            <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
          </ng-template>
      
          <ng-template #text>{{ toast.textOrTpl }}</ng-template>
        </ngb-toast>
      `,
  host: {'[class.ngb-toasts]': 'true'}
  })
  
  export class ToastsContainer {
  
    constructor(public ngbootstrapService: NgbootstrapService) {}
  
    isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
  
  }
  