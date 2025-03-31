import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImpressumpageComponent } from './impressumpage.component';

describe('ImpressumpageComponent', () => {
  let component: ImpressumpageComponent;
  let fixture: ComponentFixture<ImpressumpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpressumpageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImpressumpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
