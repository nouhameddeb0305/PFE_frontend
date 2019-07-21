import {TraitementComponent} from './traitement.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DemandeinterventionComponent} from './demandeintervention/demandeintervention.component';
import {OrdretravailComponent} from './ordretravail/ordretravail.component';
import {PlanmaintenanceComponent} from './planmaintenance/planmaintenance.component';
import {RapportinterventionComponent} from './rapportintervention/rapportintervention.component';
import {PreventiveComponent} from './preventive/preventive.component';
import {CorrectiveComponent} from './corrective/corrective.component';
import {ConditionnelleComponent} from './conditionnelle/conditionnelle.component';
import {ContratsComponent} from './contrats/contrats.component';
import {FacturesComponent} from './factures/factures.component';


const routes: Routes = [{
  path: '',
  component: TraitementComponent,
  children: [
    {
      path: 'demandeintervention',
      component: DemandeinterventionComponent,
    },

    {
      path: 'ordretravail',
      component: OrdretravailComponent,
    },
    {
      path: 'planmaintenance',
      component: PlanmaintenanceComponent,
    },

    {
      path: 'rapportintervention',
      component: RapportinterventionComponent,
    },

    {
      path: 'preventive',
      component: PreventiveComponent,
    },

    {
      path: 'corrective',
      component: CorrectiveComponent,
    },

    {
      path: 'conditionnelle',
      component: ConditionnelleComponent,
    },

    {
      path: 'contrats',
      component: ContratsComponent,
    },

    {
      path: 'factures',
      component: FacturesComponent,
    },
    ],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraitementRoutingModule {
}
