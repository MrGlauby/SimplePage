import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterfeatureComponent } from '@simplepage/footerfeature';
import { NavfeatureComponent } from '@simplepage/navfeature';

@Component({
  selector: 'lib-impressumpage',
  imports: [CommonModule, FooterfeatureComponent, NavfeatureComponent],
  templateUrl: './impressumpage.component.html',
  styleUrl: './impressumpage.component.css',
})
export class ImpressumpageComponent {}
