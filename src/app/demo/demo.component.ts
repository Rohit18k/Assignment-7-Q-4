import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  displayText: string = "marvellous infosystems";

  changeCase(casing: string): void {
    if (casing === 'UPPER') {
      this.displayText = this.displayText.toUpperCase();
    } else if (casing === 'LOWER') {
      this.displayText = this.displayText.toLowerCase();
    }
  }
}
