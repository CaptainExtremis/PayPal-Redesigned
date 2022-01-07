import { Component, Input } from '@angular/core';

@Component({
  selector: 'home',
  template: `<h1></h1>`,
  //styles: [`h1 { font-family: Lato; }`],
})
export class AppComponent {
  @Input() name: string;
}
