import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavfeatureComponent } from '@simplepage/navfeature';
import { FooterfeatureComponent } from '@simplepage/footerfeature';

@Component({
  selector: 'lib-faqpage',
  imports: [CommonModule, NavfeatureComponent, FooterfeatureComponent],
  templateUrl: './faqpage.component.html',
  styleUrl: './faqpage.component.css',
})
export class FaqpageComponent {}
