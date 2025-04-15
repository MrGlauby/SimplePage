import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavfeatureComponent } from '@simplepage/navfeature';
import { FooterfeatureComponent } from '@simplepage/footerfeature';

@Component({
  selector: 'lib-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.css',
  imports: [CommonModule, NavfeatureComponent, FooterfeatureComponent],
})
export class AboutpageComponent {}
