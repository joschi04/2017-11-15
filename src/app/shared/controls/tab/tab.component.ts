import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TabbedPaneComponent } from '../tabbed-pane/tabbed-pane.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabComponent implements OnInit {

  @Input() title: string;
  @Input() id: number;
  @Input() active: boolean = false;

  constructor(private tabbedPane: TabbedPaneComponent) {
  }

  ngOnInit() {
    this.tabbedPane.register(this);
  }
}
