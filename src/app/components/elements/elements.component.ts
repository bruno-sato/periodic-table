import { Component, OnInit } from '@angular/core';
import { ElementsService } from 'src/app/services/elements.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  constructor(
    private elementsService: ElementsService
  ) { }

  title = 'periodic-table';
  elements = [];

  ngOnInit() {
    this.elementsService.getAll()
    .subscribe((data: any[]) => {
      this.elements = data.copyWithin(0, 0, 102);
      console.log(data);
    });
  }

}
