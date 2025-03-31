import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavfeatureComponent } from '@simplepage/navfeature';
import { FooterfeatureComponent } from '@simplepage/footerfeature';

@Component({
  selector: 'lib-datenschutzpage',
  imports: [CommonModule, NavfeatureComponent, FooterfeatureComponent],
  templateUrl: './datenschutzpage.component.html',
  styleUrl: './datenschutzpage.component.css',
})
export class DatenschutzpageComponent {}
