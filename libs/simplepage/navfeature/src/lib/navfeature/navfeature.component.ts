import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'lib-navfeature',
  templateUrl: './navfeature.component.html',
  styleUrl: './navfeature.component.css',
  imports: [
    CommonModule, 
    RouterLink],
})
export class NavfeatureComponent {}
