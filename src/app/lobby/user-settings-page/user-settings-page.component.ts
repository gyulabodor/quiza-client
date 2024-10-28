import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'user-settings-page',
  templateUrl: './user-settings-page.component.html',
  styleUrls: ['./user-settings-page.component.scss']
})
export class UserSettingsPageComponent extends Component implements OnInit {
  public constructor() {
    super();
  }
  ngOnInit(): void {
  }

}
