import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-sale',
  templateUrl: './tag-sale.component.html',
  styleUrls: ['./tag-sale.component.scss']
})
export class TagSaleComponent implements OnInit {

  @Input() percDesconto : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
