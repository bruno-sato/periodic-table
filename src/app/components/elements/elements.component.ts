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
  otherElement = [];

  ngOnInit() {
    this.elementsService.getAll()
    .subscribe((data: any[]) => {
      this.elements = [...data];
      this.otherElement = [...data];
      this.otherElement.splice(0, 88);
      this.elements.splice(88, 30);
      console.log(data);
    });
  }

}
