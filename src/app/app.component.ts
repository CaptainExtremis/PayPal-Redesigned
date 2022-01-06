import { Component, Input } from '@angular/core';

@Component({
  selector: 'home',
  template: `<h1> {{Homepage}} </h1>`,
  //styles: [`h1 { font-family: Lato; }`],
})
export class HomepageComponent {
  @Input() name: string;
}
