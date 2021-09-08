import { Directive, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  exportAs: 'appRandomNumber',
  selector: '[appRandomNumber]',
})
export class RandomNumberDirective implements OnInit {
  #generatedNumber?: number;
  @Output()
  numberGenerated = new EventEmitter<number>();

  ngOnInit(): void {
    this.generateNumber();
  }

  generateNumber(): void {
    this.#generatedNumber = Math.floor(1000 * Math.random());
    this.numberGenerated.emit(this.#generatedNumber);
  }
}
