import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'landingpage',
    pathMatch: 'full',
  },

  {
    path: 'landingpage',
    loadComponent: () =>
      import('@simplepage/landingpage').then((m) => m.LandingpageComponent),
  },

  {
    path: 'blogpage',
    loadComponent: () =>
      import('@simplepage/blogpage').then((m) => m.BlogpageComponent),
  },

  {
    path: 'contactpage',
    loadComponent: () =>
      import('@simplepage/contactpage').then((m) => m.ContactpageComponent),
  },

  {
    path: 'datenschutzpage',
    loadComponent: () =>
      import('@simplepage/datenschutzpage').then(
        (m) => m.DatenschutzpageComponent
      ),
  },

  {
    path: 'faqpage',
    loadComponent: () =>
      import('@simplepage/faqpage').then((m) => m.FaqpageComponent),
  },

  {
    path: 'impressum',
    loadComponent: () =>
      import('@simplepage/impressumpage').then((m) => m.ImpressumpageComponent),
  },

  {
    path: 'newsletterpage',
    loadComponent: () =>
      import('@simplepage/newsletter').then((m) => m.NewsletterComponent),
  },

  {
    path: 'offerpage',
    loadComponent: () =>
      import('@simplepage/offerpage').then((m) => m.OfferpageComponent),
  },

  {
    path: 'aboutpage',
    loadComponent: () =>
      import('@simplepage/aboutpage').then((m) => m.AboutpageComponent),
  },

];
