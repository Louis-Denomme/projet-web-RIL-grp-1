import { Component, OnInit, Inject } from '@angular/core';
import { LayoutService } from '../layout.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Agence } from 'src/app/services/interfaces';
import { AgenceService } from 'src/app/services/agence.service';
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
    })
  });
  error: string = null;
  success: string = null;
  loading: boolean;
  id: number = null;
  agence: Agence = new Agence();

  constructor(
    @Inject(LayoutService) public layoutService: LayoutService,
    @Inject(FormBuilder) public fb: FormBuilder,
    @Inject(AgenceService) public agenceService: AgenceService,
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
                }
              }
            );
          },
          (err) => {
            console.error(err);
          }
        );
      }
    });
    /*for (let i = 0; i < 10; i++) {
      this.agents.push({ nom: 'Agent ' + i });
    }*/

  }

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    const value = this.form.value;

    this.agence.AGC_NOM = value.nomAgence;
    //this.agence.AGC_EMAIL = null;
    this.agence.AGC_FAX = value.addresse.fax;
    /*this.agence.AGC_IDTADR = 1;
    this.agence.AGC_IDTPHO = null;
    this.agence.AGC_TEL = '0606060606';*/
    this.agence.AGC_VALIDE = true;


    console.log('formulaire', value, this.agence);

    this.loading = true;
    if (this.id == null) {
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
    } else {
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
    }

  }
}
