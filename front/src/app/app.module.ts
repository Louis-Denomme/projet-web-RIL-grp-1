import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientSpaceLayoutComponent } from './client/client-space-layout/client-space-layout.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { MouvementVehiculeComponent } from './client/mouvement-vehicule/mouvement-vehicule.component';
import { RechercheComponent } from './client/recherche/recherche.component';
import { DemandeTransfertComponent } from './client/demande-transfert/demande-transfert.component';
import { ShowVehiculeComponent } from './client/show-vehicule/show-vehicule.component';
import { InfoVehiculeComponent } from './client/show-vehicule/info-vehicule/info-vehicule.component';
import { HistoVehiculeComponent } from './client/show-vehicule/histo-vehicule/histo-vehicule.component';
import { ListeVehiculeParcComponent } from './client/liste-vehicule-parc/liste-vehicule-parc.component';
import { FormVehiculeComponent } from './client/form-vehicule/form-vehicule.component';
import { ListeAgentComponent } from './client/liste-agent/liste-agent.component';
import { ListeAgenceComponent } from './client/liste-agence/liste-agence.component';
import { FormAgentComponent } from './client/form-agent/form-agent.component';
import { FormAgenceComponent } from './client/form-agence/form-agence.component';
import { FromAddressComponent } from './from-address/from-address.component';
import { RemonteeSAVComponent } from './client/remontee-sav/remontee-sav.component';
import { FormsModule } from '@angular/forms';
import { ShowCaracteristiqueVehiculeComponent } from './client/show-caracteristique-vehicule/show-caracteristique-vehicule.component';
import { ShowHistoriqueVehiculeComponent } from './client/show-historique-vehicule/show-historique-vehicule.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientSpaceLayoutComponent,
    LoginComponent,
    DashboardComponent,
    MouvementVehiculeComponent,
    RechercheComponent,
    DemandeTransfertComponent,
    ShowVehiculeComponent,
    InfoVehiculeComponent,
    HistoVehiculeComponent,
    ListeVehiculeParcComponent,
    FormVehiculeComponent,
    ListeAgentComponent,
    ListeAgenceComponent,
    FormAgentComponent,
    FormAgenceComponent,
    FromAddressComponent,
    RemonteeSAVComponent,
    ShowCaracteristiqueVehiculeComponent,
    ShowHistoriqueVehiculeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
