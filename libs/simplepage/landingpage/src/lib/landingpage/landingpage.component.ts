import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavfeatureComponent } from '@simplepage/navfeature';
import { FooterfeatureComponent } from '@simplepage/footerfeature';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
  imports: [CommonModule, NavfeatureComponent, FooterfeatureComponent, RouterLink],
})
export class LandingpageComponent {
  public aboutMe = [
    {
      question: 'Natus velit sapiente.?',
      answer:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime velit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime velit incidunt porro cupiditate magni a, at recusandae quas doloremque vero! Tempora cupiditate deleniti omnis saepe ducimus temporibus explicabo assumenda quis? Facilis quasi error, deserunt commodi velit, sit aspernatur eligendi consequuntur sequi saepe et illo, ipsum rerum maxime! Hic cumque dignissimos veritatis voluptate et possimus eveniet labore tempora eligendi sint inventore doloremque ullam ut quisquam.',
      isOpen: false,
    },

    {
      question: 'Doloremque ullam ut quisquam.',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate itaquenon eos velit ipsa. Sit accusamus tenetur dicta neque asperiores modi, autem amet reiciendis porro quibusdam voluptatibus a quasi odit.',
      isOpen: false,
    },

    {
      question: 'Eiciendis porro quibusdam?',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, reiciendis delectus eius at enim quod ea atque voluptatem, nulla cum earum voluptate quis repudiandae fuga. Magni labore, nulla nemo, libero voluptas possimus porro sint iste maxime ipsam alias architecto quod iusto quoofficia facilis enim? Nesciunt quidem nemo inventore eum explicabo.',
      isOpen: false,
    },
  ];

  public toggleAnswer(about: any) {
    about.isOpen = !about.isOpen;
  }
}
