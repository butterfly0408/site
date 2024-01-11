import { Component, OnInit } from '@angular/core';
import { SanityService } from '../sanity.service';


@Component({
  selector: 'app-sanity-data',
  templateUrl: './sanity-data.component.html',
  styleUrl: './sanity-data.component.css'
})
export class SanityDataComponent implements OnInit {

  content: any;

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.sanityService.getClient().fetch('*[_type == "hero"]').then((data) => {
      this.content = data;
      console.log(this.content[0].name);
    });
  }

}
