import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter    = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();
  @Output() onClear    = new EventEmitter<void>();

  @Input() placeholder: string = '';

  debouncer = new Subject<string>();
  termino   = '';

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe(valor => this.onDebounce.emit(valor));
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

  limpiar() {
    this.termino = '';
    this.onClear.emit();
  }
}
