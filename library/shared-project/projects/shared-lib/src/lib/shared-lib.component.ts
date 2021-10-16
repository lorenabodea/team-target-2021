import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-lib',
  template: ` <button>Click if you rock!</button> `,
  styles: [],
})
export class SharedLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
