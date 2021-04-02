import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-sale-dois',
  templateUrl: './tag-sale-dois.component.html',
  styleUrls: ['./tag-sale-dois.component.scss']
})
export class TagSaleDoisComponent implements OnInit {

  @Input() percDesconto : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
