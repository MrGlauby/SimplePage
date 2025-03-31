import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavfeatureComponent } from "../../../../navfeature/src/lib/navfeature/navfeature.component";

@Component({
  selector: 'lib-contactpage',
  imports: [CommonModule, NavfeatureComponent],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.css',
})
export class ContactpageComponent {}
