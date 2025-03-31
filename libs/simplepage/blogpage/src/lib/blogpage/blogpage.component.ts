import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterfeatureComponent } from '@simplepage/footerfeature';
import { NavfeatureComponent } from '@simplepage/navfeature';

@Component({
  selector: 'lib-blogpage',
  imports: [CommonModule, FooterfeatureComponent, NavfeatureComponent],
  templateUrl: './blogpage.component.html',
  styleUrl: './blogpage.component.css',
})
export class BlogpageComponent {}
