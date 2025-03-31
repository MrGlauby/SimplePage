import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterfeatureComponent } from './footerfeature.component';

describe('FooterfeatureComponent', () => {
  let component: FooterfeatureComponent;
  let fixture: ComponentFixture<FooterfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterfeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
