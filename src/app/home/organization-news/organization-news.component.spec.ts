import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationNewsComponent } from './organization-news.component';

describe('OrganizationNewsComponent', () => {
  let component: OrganizationNewsComponent;
  let fixture: ComponentFixture<OrganizationNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
