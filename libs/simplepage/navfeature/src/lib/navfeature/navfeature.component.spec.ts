import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavfeatureComponent } from './navfeature.component';

describe('NavfeatureComponent', () => {
  let component: NavfeatureComponent;
  let fixture: ComponentFixture<NavfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavfeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
