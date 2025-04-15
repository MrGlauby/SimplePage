import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavfeatureComponent} from '@simplepage/navfeature';
import { FooterfeatureComponent } from '@simplepage/footerfeature';

@Component({
  selector: 'lib-newsletter',
  imports: [CommonModule, NavfeatureComponent],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css',
})
export class NewsletterComponent {}
