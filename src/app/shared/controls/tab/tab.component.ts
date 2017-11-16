import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TabbedPaneComponent } from '../tabbed-pane/tabbed-pane.component';
import { TabbedPaneService } from '../tabbed-pane/tabbed-pane.service';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabComponent {
  @Input() title: string;
  @Input() id: number;
  @Input() active: boolean = false;

  constructor(private service: TabbedPaneService) {
    this.service.activateId = 17;
  }

  get activeId() {
    return this.service.activateId;
  }
}
