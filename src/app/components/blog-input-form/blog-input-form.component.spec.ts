import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogInputFormComponent } from './blog-input-form.component';

describe('BlogInputFormComponent', () => {
  let component: BlogInputFormComponent;
  let fixture: ComponentFixture<BlogInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
