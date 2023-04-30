import{ async, ComponentFixture, TestBed} from '@angular/core/testing'
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { PlantasComponent } from './plantas.component';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker'
import { Planta } from './planta';

describe('PlantasComponent', () => {
  let component: PlantasComponent;
  let fixture: ComponentFixture<PlantasComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientModule
      ],
      declarations: [
        AppComponent, PlantasComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasComponent);
    component = fixture.componentInstance;



    for(let i = 0; i < 3; i++) {
      const planta = new Planta(
        i.toString(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.word(),
        faker.datatype.number().toString(),
        faker.lorem.word(),
        faker.lorem.sentence()

      );
      component.plantas.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create 1 encabezado y 3 lineas de plantas', () => {
    expect(debug.queryAll(By.css('tr.encabezado'))).toHaveSize(1)
    expect(debug.queryAll(By.css('tr.detalle'))).toHaveSize(3)
  });
});
