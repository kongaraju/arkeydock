import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class ImageSearchResultsComponent implements OnInit {
  @Input() imageSearchResults;
  constructor() { }

  ngOnInit() {
  }

}
