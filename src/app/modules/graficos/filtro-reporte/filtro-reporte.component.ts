import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import moment from 'moment';
import { ReportesService } from '../service/reporte.service'; 

@Component({
  selector: 'app-filtro-reporte',
  templateUrl: './filtro-reporte.component.html',
  styleUrls: ['./filtro-reporte.component.scss']
})
export class FiltroReporteComponent implements OnInit  {
 
  form : FormGroup;
  mensaje: string = "";
  fechaActual = new Date();
  minDate = new Date;
  maxDate = new Date;

 constructor(
    public dialogRef: MatDialogRef<FiltroReporteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private matSnackBar: MatSnackBar

  ) {
    this.builform(); 
   }

  ngOnInit(): void { 
    console.log('data', this.data);
  }

  private builform(): void{
    this.form = new FormGroup({
      f1: new FormControl(new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), 1), Validators.required),
      f2: new FormControl(new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth() + 1, 0), Validators.required), 
    })
  }
  
 

  onSave(): void {
    const dataForm = this.form.value; 
    if (dataForm.f1 > dataForm.f2 ) {
      this.matSnackBar.open(
        'Fecha no válida',
        'Cerrar',
        { duration: 3000, verticalPosition: 'top', horizontalPosition: 'center' }
      );
      return;
    }
    const Fechas = {
      inicio : moment(dataForm.f1).format('YYYY-MM-DD'),
      fin : moment(dataForm.f2).format('YYYY-MM-DD'),
      tipo : this.data
    }
    this.dialogRef.close(Fechas);
  }

}
