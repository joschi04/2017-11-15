import {
  AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList,
  ViewEncapsulation
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabbedPaneService } from './tabbed-pane.service';

@Component({
  selector: 'tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.css'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'tabbedPane',
  providers: [TabbedPaneService]
})
export class TabbedPaneComponent implements OnInit, AfterContentInit {

  @Input() activeId: number;
  @Output() activeIdChange = new EventEmitter<number>();

  @ContentChildren(TabComponent)
  tabList: QueryList<TabComponent>;

  constructor(private service: TabbedPaneService) {

  }

  get tabs() {
    if (!this.tabList) {
      return [];
    }
    return this.tabList.toArray();
  }



  ngAfterContentInit(): void {
    this.activate(this.activeId);
  }

  activate(id: number) {
    this.activeId = id;
    this.tabs.forEach(tab => {
      tab.active = tab.id == this.activeId;
    });
    this.service.activateId = id;
    this.activeIdChange.next(id);
  }

  ngOnInit() {
  }

}
