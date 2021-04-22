import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLanguagesUsedComponent } from './project-languages-used.component';

describe('ProjectLanguagesUsedComponent', () => {
  let component: ProjectLanguagesUsedComponent;
  let fixture: ComponentFixture<ProjectLanguagesUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectLanguagesUsedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLanguagesUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
