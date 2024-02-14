import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodyComponent } from './foody.component';

describe('FoodyComponent', () => {
  let component: FoodyComponent;
  let fixture: ComponentFixture<FoodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
