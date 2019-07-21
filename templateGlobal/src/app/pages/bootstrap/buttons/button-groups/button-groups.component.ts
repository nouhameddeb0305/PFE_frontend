import { Component } from '@angular/core';

@Component({
  selector: 'ngx-button-groups',
  styleUrls: ['./button-groups.component.scss'],
  templateUrl: './button-groups.component.html',
})
export class ButtonGroupsComponent {

  dividedCheckboxModel = {
    monday: true,
    tuesday: true,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  };
  dividedButtonGroupOne = 'left';
}
