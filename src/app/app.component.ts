import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1> Hellow World </h1>`,
  //styles: [`h1 { font-family: Lato; }`],
})
export class AppComponent {
  @Input() name: string;
}
