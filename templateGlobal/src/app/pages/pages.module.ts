import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {ParametreModule} from './parametre/parametre.module';
import { ExempleComponent } from './exemple/exemple.component';
import {ExempleModule} from "./exemple/exemple.module";
import { TraitementComponent } from './traitement/traitement.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ParametreModule,
    ExempleModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    ExempleComponent,
    TraitementComponent,
  ],
})
export class PagesModule {
}
