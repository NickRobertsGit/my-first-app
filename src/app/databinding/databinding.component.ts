import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  username = '';
  stringNotEmpty = true;

  constructor() {

  }

  onReset() {
    this.username = '';
  }

}
