import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
   
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature)
  }

  constructor() { }

  ngOnInit() {
  }

}
