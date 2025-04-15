import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@simplepage/button';

@Component({
  selector: 'footer',
  imports: [CommonModule, RouterLink, ButtonComponent],
  templateUrl: './footerfeature.component.html',
  styleUrl: './footerfeature.component.css',
})
export class FooterfeatureComponent {
  public onSubmit() {
    alert('Danke für deine Anmeldung! (Demo)');
  }
}
