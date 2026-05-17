import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino  = '';
  hayError = false;
  cargando = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino  = termino;
    this.cargando = true;

    this.paisService.buscarCapital(termino).subscribe(
      paises => { this.paises = paises; this.cargando = false; },
      ()     => { this.hayError = true; this.paises = []; this.cargando = false; }
    );
  }

  limpiar() {
    this.paises   = [];
    this.hayError = false;
    this.termino  = '';
    this.cargando = false;
  }
}
