import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IDiaFestivo } from '../interface/dia-festivo';
import { DiaFestivoService } from '../service/dia-festivo.service';

@Component({
  selector: 'app-registro-dia-festivo',
  templateUrl: './registro-dia-festivo.component.html',
  styleUrls: ['./registro-dia-festivo.component.scss']
})
export class RegistroDiaFestivoComponent implements OnInit {
  form: FormGroup;
  mensaje: string = "";
  minDate: Date;
  maxDate: Date;



  constructor(
    public dialogRef: MatDialogRef<RegistroDiaFestivoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: DiaFestivoService,
    private matSnackBar: MatSnackBar
  ) { 
    this.builform();
    this.minDate = new Date(new Date().getFullYear(), 0, 1); //Obtiene el primer día del año actual
    this.maxDate = new Date(new Date().getFullYear(), 11, 31); //Obtiene el último día del año actual
  }

  ngOnInit(): void {
  }
  
  private builform(): void {
    this.form = new FormGroup({
      nombreDiaFestivo: new FormControl(this.data?.nombreDiaFestivo, Validators.required),
      fechaDiaFestivo: new FormControl(this.data?.fechaDiaFestivo, Validators.required),//Editar
    });
  }
  
  onSave(): void {
    if (!this.form.valid) {
      this.matSnackBar.open(
        'Por favor, completa el formulario.',
        'Cerrar',
        { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
      );
      return;
    }

    const data = this.form.getRawValue();

    const newDiaFestivo: IDiaFestivo = {
      idDiaFestivo: this.data ? this.data.idDiaFestivo : 0,
      fechaDiaFestivo: data.fechaDiaFestivo,//Editar
      nombreDiaFestivo: data.nombreDiaFestivo,
    };

    if (!this.data) {
      this.mensaje = 'Dia Festivo registrado con éxito.';
    } else {
      this.mensaje = 'Dia Festivo actualizado con éxito.';
    }

    this.apiService.saveDiaFestivo(newDiaFestivo).subscribe((response) => {
      if (response) {
        this.matSnackBar.open(
          this.mensaje,
          'Cerrar',
          { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
        );
        this.dialogRef.close(true);
      }
    });









    minDate: Date;
    maxDate: Date;
  
   





  }








   









}
