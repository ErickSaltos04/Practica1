import { ComponentFixture, TestBed } from '@angular/core/testing';



describe('PaginaTablaComponent', () => {
  let component: PaginaTablaComponent;
  let fixture: ComponentFixture<PaginaTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
