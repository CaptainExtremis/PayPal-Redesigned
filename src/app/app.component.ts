import { Component, Input } from '@angular/core';

@Component({
  selector: 'pay',
  template: `<h1>PayPal</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class AppComponent {
  @Input() name: string;
}
