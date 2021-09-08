import { Component } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrls: ['./random-number.component.css'],
})
export class RandomNumberComponent {
  generatedNumber?: number;

  onNumberGenerated(generatedNumber: number): void {
    this.generatedNumber = generatedNumber;
  }
}
