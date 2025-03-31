import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatenschutzpageComponent } from './datenschutzpage.component';

describe('DatenschutzpageComponent', () => {
  let component: DatenschutzpageComponent;
  let fixture: ComponentFixture<DatenschutzpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatenschutzpageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatenschutzpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
