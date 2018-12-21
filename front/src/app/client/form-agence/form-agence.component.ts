import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Agence, Addresse } from 'src/app/services/interfaces';
import { AgenceService } from 'src/app/services/agence.service';
import { AddresseService } from 'src/app/services/addresse.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-agence',
  templateUrl: './form-agence.component.html',
  styleUrls: ['./form-agence.component.scss']
})

export class FormAgenceComponent implements OnInit {
  agents: any[] = [];
  form: FormGroup = this.fb.group({
    nomAgence: [null, [Validators.required]],
    idResponsable: [null, []],
    addresse: this.fb.group({
      fax: [null, [Validators.required]],
      adresse: [null, [Validators.required]],
      ville: [null, [Validators.required]],
      codePostal: [null, [Validators.required]],
      telephone: [null, [Validators.required]],
      email: [null, [Validators.required]],
    })
  });
  error: string = null;
  success: string = null;
  loading: boolean;
  id: number = null;
  agence: Agence = new Agence();
  addresse: Addresse = new Addresse();

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
    @Inject(FormBuilder) public fb: FormBuilder,
    @Inject(AgenceService) public agenceService: AgenceService,
    @Inject(AddresseService) public addresseService: AddresseService,
    @Inject(ActivatedRoute) public route: ActivatedRoute,
    @Inject(Router) public router: Router,
  ) { }

  ngOnInit() {
    this.layoutService.title = 'Formulaire d\'agence';

    this.route.params.subscribe((params) => {
      // console.log(params);
      if (params.id) {
        this.id = params.id;
        this.agenceService.getAgence(this.id).subscribe(
          (data) => {
            // console.log(data);
            this.agence = data;
            this.form.patchValue(
              {
                nomAgence: data.AGC_NOM,
                //idResponsable: [null, []],
                addresse: {
                  fax: data.AGC_FAX,
                  adresse: data,
                  ville: null,
                  codePostal: null,
                  telephone: data.AGC_TEL,
                  email: data.AGC_EMAIL,
                }
              }
            );
            this.addresseService.getAddresse(this.agence.AGC_IDTADR).subscribe(
              (dataAdr) => {
                this.addresse = dataAdr;
                console.log(this.addresse);
                this.form.patchValue(
                  {                    
                    addresse: {
                      adresse: dataAdr.ADR_COMP,
                      ville: dataAdr.ADR_VILLE,
                      codePostal: dataAdr.ADR_CODEPOSTAL,
                    }
                  }
                )
              },
              (err) => {
                console.error(err);
              }
            );
          },
          (err) => {
            console.error(err);
          }
        );
      }
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    const value = this.form.value;

    this.agence.AGC_NOM = value.nomAgence;
    this.agence.AGC_EMAIL = value.addresse.email;
    this.agence.AGC_FAX = value.addresse.fax;// value.addresse.fax;
    this.agence.AGC_IDTPHO = null;
    this.agence.AGC_TEL = value.addresse.telephone// value.telephone;
    this.agence.AGC_VALIDE = true;

    this.addresse.ADR_NUM = null;
    this.addresse.ADR_COMP = null;
    this.addresse.ADR_VOIE = null;
    this.addresse.ADR_PAYS = null;
    this.addresse.ADR_VALIDE = true;
    this.addresse.ADR_COMP = value.addresse.adresse;
    this.addresse.ADR_CODEPOSTAL = value.addresse.codePostal;
    this.addresse.ADR_VILLE = value.addresse.ville;

    console.log('formulaire', value, this.addresse);

    this.loading = true;
    if (this.id == null) {
      this.addresseService.getNextId().subscribe(
        (data) => {
          this.addresse.ADR_IDTADR = data.results[0].MAXID;
        }
      )
      this.addresseService.createAddresse(this.addresse).subscribe(
        (data) => {
          this.agence.AGC_IDTADR = this.addresse.ADR_IDTADR;
          this.agenceService.createAgence(this.agence).subscribe(
            (data) => {
              this.success = data.message;
              setTimeout(() => {
                this.router.navigate(['client', 'liste-agence']);
              }, 2000);
            },
            (err) => {
              this.loading = false;
              this.error = err;
              console.error(err);
            }
          );
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      console.log(this.agence);
      this.addresseService.updateAddresse(this.addresse).subscribe(
        (data) => {
          this.agenceService.updateAgence(this.agence).subscribe(
            (data) => {
              this.success = data.message;
              setTimeout(() => {
                this.router.navigate(['client', 'liste-agence']);
              }, 2000);
            },
            (err) => {
              this.loading = false;
              this.error = err;
              console.error(err);
            }
          );
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }
}
