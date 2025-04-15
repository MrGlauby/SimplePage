import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavfeatureComponent } from '@simplepage/navfeature';
import { FooterfeatureComponent } from '@simplepage/footerfeature';

interface FaqItem {
  title: string;
  content: string;
}

@Component({
  selector: 'lib-contactpage',
  imports: [CommonModule, NavfeatureComponent, FooterfeatureComponent],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.css',
})
export class ContactpageComponent {







 // --- BEGINN: Code für das Akkordeon ---

  // Die FAQ-Daten direkt hier definieren
  faqItems: FaqItem[] = [
    {
      title: 'Frage 1: Was ist das?',
      content: 'Das ist die Antwort auf die erste Frage. Sie wird angezeigt, wenn man auf den Titel klickt.'
    },
    {
      title: 'Frage 2: Wie funktioniert es?',
      content: 'Es verwendet Angular mit *ngFor zum Auflisten und *ngIf zum Ein-/Ausblenden des Inhalts. Eine Variable speichert den Index des offenen Elements.'
    },
    {
      title: 'Frage 3: Warum schließt sich das andere?',
      content: 'Die `toggleItem`-Funktion setzt den Index des aktuell geöffneten Elements. Wenn ein neuer Index gesetzt wird, wird das vorherige Element automatisch durch die Bedingung in *ngIf ausgeblendet.'
    },
    {
      title: 'Frage 4: Kann ich HTML im Inhalt haben?',
      content: 'Ja, mit <code>[innerHTML]</code>. <strong>Aber Vorsicht:</strong> Nur verwenden, wenn der Inhalt sicher ist (kein User-Input ohne Bereinigung!), um XSS zu vermeiden.'
    }
  ];

  // Hält den Index des aktuell geöffneten Elements. null bedeutet, keines ist offen.
  currentlyOpenIndex: number | null = null;

  /**
   * Öffnet/Schließt ein Akkordeon-Element.
   * @param index Der Index des Elements, das umgeschaltet werden soll.
   */
  toggleItem(index: number): void {
    if (this.currentlyOpenIndex === index) {
      this.currentlyOpenIndex = null; // Schließen
    } else {
      this.currentlyOpenIndex = index; // Öffnen
    }
  }


  pageTitle = 'Meine App'; // Beispiel für andere Eigenschaft





}
