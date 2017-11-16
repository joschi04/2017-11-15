import { AfterContentInit, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.css'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tabbedPane'
})
export class TabbedPaneComponent implements OnInit, AfterContentInit {

  @Input() activeId: number;
  @Output() activeIdChange = new EventEmitter<number>();

  tabs: TabComponent[] = [];

  constructor() { }

  register(tab: TabComponent) {
    this.tabs.push(tab);
  }

  ngAfterContentInit(): void {
    this.activate(this.activeId);
  }

  activate(id: number) {
    this.activeId = id;
    this.tabs.forEach(tab => {
      tab.active = tab.id == this.activeId;
    });
    this.activeIdChange.next(id);
  }

  ngOnInit() {
  }

}
