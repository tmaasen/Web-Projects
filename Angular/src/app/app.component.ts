import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html', // this will render the very beginning page that tells you how to generate a
 template: '<app-customers></app-customers>'
})
export class AppComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}
/*
to create a new folder, type in powershell terminal 'ng g(generate) c(component) nameOfComponent
*/
