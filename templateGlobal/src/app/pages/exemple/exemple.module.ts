import {NgModule} from "@angular/core";
import {ThemeModule} from "../../@theme/theme.module";
import {ExempleComponent} from "./exemple.component";
import { SousExempleComponent } from './sous-exemple/sous-exemple.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ExempleComponent,
    SousExempleComponent,
  ],
  providers: [

  ],
})
export class ExempleModule { }
