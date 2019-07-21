import {RouterModule, Routes} from "@angular/router";
import {ExtraComponentsComponent} from "../extra-components/extra-components.component";
import {CalendarComponent} from "../extra-components/calendar/calendar.component";
import {AccordionComponent} from "../extra-components/accordion/accordion.component";
import {ProgressBarComponent} from "../extra-components/progress-bar/progress-bar.component";
import {SpinnerComponent} from "../extra-components/spinner/spinner.component";
import {AlertComponent} from "../extra-components/alert/alert.component";
import {Tab1Component, Tab2Component, TabsComponent} from "../extra-components/tabs/tabs.component";
import {CalendarKitFullCalendarShowcaseComponent} from "../extra-components/calendar-kit/calendar-kit.component";
import {NgModule} from "@angular/core";
import {ExempleComponent} from "./exemple.component";
import {SousExempleComponent} from "./sous-exemple/sous-exemple.component";

const routes: Routes = [{
  path: '',
  component: ExempleComponent,
  children: [
    {
      path: 'sous-exemple',
      component: SousExempleComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExempleRoutingModule {
}
