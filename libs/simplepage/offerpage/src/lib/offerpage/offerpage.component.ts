import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavfeatureComponent } from '@simplepage/navfeature';
import { FooterfeatureComponent } from '@simplepage/footerfeature';

@Component({
  selector: 'lib-offerpage',
  imports: [CommonModule, NavfeatureComponent, FooterfeatureComponent],
  templateUrl: './offerpage.component.html',
  styleUrl: './offerpage.component.css',
})
export class OfferpageComponent {}
