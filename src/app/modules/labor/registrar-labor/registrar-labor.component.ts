/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILabor } from '../interface/labor.interface';
import { LaborService } from '../services/labor.service';

@Component({
  selector: 'labor-registrar-labor',
  templateUrl: './registrar-labor.component.html',
  styleUrls: ['./registrar-labor.component.scss']
})
export class RegistrarLaborComponent implements OnInit {

  form: FormGroup;
  block = [];
  tipoLabor = [];
  fase = [];
  seccion = [];
  puntocardinal = [];

  abrevSelect: string = "";
  tipoLaborSelect: string = "";
  faseSSelect: string = "";

  mensaje: string = "";
  constructor(
    public dialogRef: MatDialogRef<RegistrarLaborComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: LaborService,
    private matSnackBar: MatSnackBar
  ) {
    this.builform();
    this.listBlock();
    this.listTipoLabor();
    this.listFase();
    this.listSeccion();
    this.listPuntoCardinal();
  }

  ngOnInit(): void {
  }


  private builform(): void {
    this.form = new FormGroup({
      nombre: new FormControl(this.data?.nombre, Validators.required),
      referencia: new FormControl(this.data?.referencia),
      block: new FormControl(this.data?.block, Validators.required),
      veta: new FormControl(this.data?.veta, Validators.required),
      tajo: new FormControl(this.data?.tajo, Validators.required),
      tAvance: new FormControl(this.data?.tavance, Validators.required),
      nivel: new FormControl(this.data?.nivel, Validators.required),
      faseP: new FormControl(this.data?.faseP, Validators.required),
      hV: new FormControl(this.data?.hv, Validators.required),
      seccion: new FormControl(this.data?.seccion, Validators.required),
      ptoCardinal: new FormControl(this.data?.ptoCardinal, Validators.required),
      und: new FormControl(this.data?.und, Validators.required),
      ruta : new FormControl(this.data?.ruta, Validators.required)
    });
  }


  listBlock(): void {
    this.apiService.getBlock().subscribe((data) => {
      this.block = data;
    });
  }

  listTipoLabor(): void {
    this.apiService.getTipoLabor().subscribe((data) => {
      this.tipoLabor = data;
    });
  }

  listFase(): void {
    this.apiService.getFase().subscribe((data) => {
      this.fase = data;
    });
  }

  listSeccion(): void {
    this.apiService.getSeccion().subscribe((data) => {
      this.seccion = data;
    });
  }

  listPuntoCardinal(): void {
    this.apiService.getPuntoCardinal().subscribe((data) => {
      this.puntocardinal = data;
    });
  }


  onChangeBlock(event, data): void  {
    if (event.isUserInput) {
      this.form.get("veta").setValue(data.veta);
    }
  }

  onChangeTipoLabor(event, data): void {
    if (event.isUserInput) {
      this.form.get('hV').setValue(data.hv);
      this.form.get('und').setValue(data.und);
      this.abrevSelect = data.abrev;
      this.tipoLaborSelect = data.tipoLabor;
    }else{
        this.tipoLaborSelect = this.data.tlabor;
    }
  }

  onChangeFase(event, data): void  {
    if (event.isUserInput) {
      this.faseSSelect = data.faseS;
    }
  }

  /**
   *
    private String nombre;
    private String block;
    private String veta;
    private String tajo;
    private String tAvance;
    private String nivel;
    private String faseP;
    private String faseS;
    private String hV;
    private String tLabor;
    private String referencia;
    private String seccion;
    private String ptoCardinal;
    private String und;
    private String ruta;
   */

  onGrabar(): void {

    if (!this.form.valid) {
        this.matSnackBar.open(
          'Por favor, completa el formulario.',
          'Cerrar',
          { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
        );
      return;
    }

    const data = this.form.getRawValue();

    const newLabor: ILabor = {
        idLabor : this.data ? this.data.idLabor : 0,
        nombre : data.nombre,
        referencia : data.referencia,
        block : data.block,
        veta : data.veta,
        tajo : data.tajo,
        nivel: data.nivel,
        faseP: data.faseP,
        faseS: this.faseSSelect,
        hv : data.hV,
        seccion :data.seccion,
        ptoCardinal : data.ptoCardinal,
        und  : data.und,
        ruta : data.ruta,
        tavance : data.tAvance,
        tlabor : this.tipoLaborSelect,
        abrev : this.abrevSelect,
        md  : '',
        este : 0,
        norte  : 0,
        cantidad  : '',
    };

    if(!this.data){
        this.mensaje = 'Labor registrado con éxito.';
    }else{
        this.mensaje = 'Labor actualizado con éxito.';
    }
 
    this.apiService.createLabor(newLabor).subscribe((response) => {
        if(response) {
            this.matSnackBar.open(
            this.mensaje,
            'Cerrar',
            { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
            );
        this.dialogRef.close(true);
        }
    });
 
  }
}
