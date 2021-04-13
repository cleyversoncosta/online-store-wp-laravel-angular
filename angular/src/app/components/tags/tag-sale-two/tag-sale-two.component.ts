import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-sale-two',
  templateUrl: './tag-sale-two.component.html',
  styleUrls: ['./tag-sale-two.component.scss']
})
export class TagSaleTwoComponent implements OnInit {

  @Input() percDesconto : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
