import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`li { cursor: pointer; }`],
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino          = '';
  hayError         = false;
  cargando         = false;
  paises: Country[]         = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias         = false;

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino  = termino;
    this.mostrarSugerencias = false;
    this.cargando = true;

    this.paisService.buscarPais(termino).subscribe(
      paises => { this.paises = paises; this.cargando = false; },
      ()     => { this.hayError = true; this.paises = []; this.cargando = false; }
    );
  }

  sugerencias(termino: string) {
    this.hayError  = false;
    this.termino   = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino).subscribe(
      paises => this.paisesSugeridos = paises.slice(0, 5),
      ()     => this.paisesSugeridos = []
    );
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }

  limpiarBusqueda() {
    this.paises             = [];
    this.paisesSugeridos    = [];
    this.mostrarSugerencias = false;
    this.hayError           = false;
    this.termino            = '';
    this.cargando           = false;
  }
}
