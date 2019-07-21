import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {TraitementComponent} from './traitement.component';
import {TraitementRoutingModule} from './traitement-routing.module';
import { DemandeinterventionComponent } from './demandeintervention/demandeintervention.component';
import { OrdretravailComponent } from './ordretravail/ordretravail.component';
import { PlanmaintenanceComponent } from './planmaintenance/planmaintenance.component';
import { RapportinterventionComponent } from './rapportintervention/rapportintervention.component';
import { PreventiveComponent } from './preventive/preventive.component';
import { CorrectiveComponent } from './corrective/corrective.component';
import { ConditionnelleComponent } from './conditionnelle/conditionnelle.component';
import { ContratsComponent } from './contrats/contrats.component';
import { FacturesComponent } from './factures/factures.component';
import { ModalOrdretravailComponent } from './ordretravail/modal-ordretravail/modal-ordretravail.component';
import { RefreshOrdretravailComponent } from './ordretravail/refresh-ordretravail/refresh-ordretravail.component';
import { ShowOrdretravailComponent } from './ordretravail/show-ordretravail/show-ordretravail.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NbWindowModule} from '@nebular/theme';

@NgModule({
  imports: [
    ThemeModule,
    TraitementRoutingModule,
    Ng2SmartTableModule,
    NbWindowModule.forChild(),
  ],
  declarations: [
    TraitementComponent,
    DemandeinterventionComponent,
    OrdretravailComponent,
    PlanmaintenanceComponent,
    RapportinterventionComponent,
    PreventiveComponent,
    CorrectiveComponent,
    ConditionnelleComponent,
    ContratsComponent,
    FacturesComponent,
    ModalOrdretravailComponent,
    RefreshOrdretravailComponent,
    ShowOrdretravailComponent,

  ],
  providers: [

  ],
  entryComponents: [
    ModalOrdretravailComponent,
    ShowOrdretravailComponent,
    RefreshOrdretravailComponent,
  ],
})
export class TraitementModule { }
