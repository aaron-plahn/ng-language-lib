import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alphabet-card',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit {

  tile = {
    'image': 'https://www.tsilhqotin.ca/wp-content/uploads/2020/11/cropped-tng_logo_resized.png',
    'word': 'tng',
    'letter': 't'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
