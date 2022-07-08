import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISede } from '../interface/sede';
import { SedeService } from '../service/sede.service';

@Component({
  selector: 'app-registro-sede',
  templateUrl: './registro-sede.component.html',
  styleUrls: ['./registro-sede.component.scss']
})
export class RegistroSedeComponent implements OnInit {

  form: FormGroup;
  mensaje: string = "";

  constructor(
    public dialogRef: MatDialogRef<RegistroSedeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: SedeService,
    private matSnackBar: MatSnackBar
  ) { 
    this.builform();
  }

  ngOnInit(): void {
  }

  private builform(): void {
    this.form = new FormGroup({
      nombre: new FormControl(this.data?.nombreSede, Validators.required),
      descripcion: new FormControl(this.data?.descripcion, Validators.required),
      direccion: new FormControl(this.data?.direccion, Validators.required),
      beacon: new FormControl(this.data?.beacon, Validators.required),
    });
  }

  
  onSave(): void {
    if (!this.form.valid) {
      this.matSnackBar.open(
        'Ingresar datos requeridos para la sede',
        'Cerrar',
        { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
      );
      return;
    }

    const data = this.form.getRawValue();

    const newSede: ISede = {
      idSede: this.data ? this.data.idSede : 0,
      nombreSede: data.nombre,
      descripcion: data.descripcion,
      direccion: data.direccion,
      beacon: data.beacon,
    };

    console.log('newSede', newSede); 

    if (!this.data) {
      this.mensaje = 'Sede registrada con éxito.';
      this.apiService.saveSede(newSede).subscribe((response) => {
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
      this.apiService.updateSede(newSede).subscribe((response) => {
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


 


