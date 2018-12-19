import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientSpaceLayoutComponent } from './client/client-space-layout/client-space-layout.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { RemonteeSAVComponent } from './client/remontee-sav/remontee-sav.component';
import { DemandeTransfertComponent } from './client/demande-transfert/demande-transfert.component';
import { FormAgenceComponent } from './client/form-agence/form-agence.component';
import { FormAgentComponent } from './client/form-agent/form-agent.component';
import { FormVehiculeComponent } from './client/form-vehicule/form-vehicule.component';
import { ListeAgenceComponent } from './client/liste-agence/liste-agence.component';
import { ListeAgentComponent } from './client/liste-agent/liste-agent.component';
import { ListeVehiculeParcComponent } from './client/liste-vehicule-parc/liste-vehicule-parc.component';
import { MouvementVehiculeComponent } from './client/mouvement-vehicule/mouvement-vehicule.component';
import { RechercheComponent } from './client/recherche/recherche.component';
import { InfoVehiculeComponent } from './client/show-vehicule/info-vehicule/info-vehicule.component';
import { HistoVehiculeComponent } from './client/show-vehicule/histo-vehicule/histo-vehicule.component';

const routes: Routes = [
  { path: '', component: LoginComponent, },
  {
    path: 'client', component: ClientSpaceLayoutComponent,
    children: [
      { path: '', component: DashboardComponent, },
      { path: 'demande-transfert', component: DemandeTransfertComponent, },
      { path: 'mouvement-vehicule', component: MouvementVehiculeComponent, },
      { path: 'remontee-sav', component: RemonteeSAVComponent, },
      { path: 'ajout-agence', component: FormAgenceComponent, },
      { path: 'edit-agence/:id', component: FormAgenceComponent, },
      { path: 'ajout-agent', component: FormAgentComponent, },
      { path: 'edit-agent/:id', component: FormAgentComponent, },
      { path: 'ajout-vehicule', component: FormVehiculeComponent, },
      { path: 'edit-vehicule/:id', component: FormVehiculeComponent, },
      { path: 'liste-agence', component: ListeAgenceComponent, },
      { path: 'liste-agent', component: ListeAgentComponent, },
      { path: 'liste-vehicule-parc', component: ListeVehiculeParcComponent, },
      { path: 'recherche', component: RechercheComponent, },
      { path: 'show-vehicle/:id', component: InfoVehiculeComponent, children:[
        { path: '', redirectTo: 'info', pathMatch: 'full'  },
        { path: 'info', component: InfoVehiculeComponent, },
        { path: 'historique', component: HistoVehiculeComponent, },
      ] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
