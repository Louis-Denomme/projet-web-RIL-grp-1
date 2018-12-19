import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-from-address',
  templateUrl: './from-address.component.html',
  styleUrls: ['./from-address.component.sass']
})
export class FromAddressComponent implements OnInit {
  @Input() fg: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
