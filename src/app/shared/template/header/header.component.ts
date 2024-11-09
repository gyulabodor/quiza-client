import {Component, OnInit} from '@angular/core';
import {MenuItem, pageList} from "../../globals/pages/page-list";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'mobile-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //todo.: upload nav menu items with page list
  public pages$= new BehaviorSubject<MenuItem[]>([]);

  ngOnInit(): void {
    this.pages$.next(pageList);
  }

}
