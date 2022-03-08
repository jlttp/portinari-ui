import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  readonly menu: Array<PoMenuItem> = [
    { label: 'Página inicial' },
    { label: 'Página dois' },
    { label: 'Página três' },
    { label: 'Página quatro' },
    { label: 'Página cinco' }
  ];

  ngOnInit(): void {
  }

}
