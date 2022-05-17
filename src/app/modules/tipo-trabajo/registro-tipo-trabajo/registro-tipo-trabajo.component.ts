import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ITipoTrabajo } from '../interfaces/tipo-trabajo';
import { TipoTrabajoService } from '../services/tipo-trabajo.service';

@Component({
  selector: 'app-registro-tipo-trabajo',
  templateUrl: './registro-tipo-trabajo.component.html',
  styleUrls: ['./registro-tipo-trabajo.component.scss']
})
export class RegistroTipoTrabajoComponent implements OnInit {

  form : FormGroup;
  mensaje: string = "";

  constructor(
    public dialogRef: MatDialogRef<RegistroTipoTrabajoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: TipoTrabajoService,
    private matSnackBar: MatSnackBar

  ) {
    this.builform();
   }

  ngOnInit(): void {
  }


  private builform(): void{
    this.form = new FormGroup({
      abreviatura : new FormControl(this.data?.abreviatura, Validators.required),
      nombreTipoTrabajo: new FormControl(this.data?.nombreTipoTrabajo, Validators.required)
    })
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

    const newTipoTrabajo: ITipoTrabajo = {
      idTipoTrabajo: this.data ? this.data.idTipoTrabajo : 0,
      abreviatura: data.abreviatura,
      nombreTipoTrabajo: data.nombreTipoTrabajo, 
    };
    if (!this.data) {
      this.mensaje = 'Sede registrada con éxito.';
      this.apiService.saveTipoTrabajo(newTipoTrabajo).subscribe((response) => {
        if (response) {
          this.matSnackBar.open(
            this.mensaje,
            'Cerrar',
            { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
          );
          this.dialogRef.close(true);
        }
      });
    } else {
      this.mensaje = 'Sede actualizada con éxito.';
      this.apiService.updateTipoTrabajo(newTipoTrabajo).subscribe((response) => {
        if (response) {
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
}