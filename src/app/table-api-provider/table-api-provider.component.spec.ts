import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableApiProviderComponent } from './table-api-provider.component';

describe('TableApiProviderComponent', () => {
  let component: TableApiProviderComponent;
  let fixture: ComponentFixture<TableApiProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableApiProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableApiProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
