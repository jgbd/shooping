import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShoppingComponent } from './card-shopping.component';

describe('CardShoppingComponent', () => {
  let component: CardShoppingComponent;
  let fixture: ComponentFixture<CardShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
