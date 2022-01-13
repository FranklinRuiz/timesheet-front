import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IHorario } from '../interface/horario';
import { HorarioService } from '../service/horario.service';

@Component({
  selector: 'app-registro-horario',
  templateUrl: './registro-horario.component.html',
  styleUrls: ['./registro-horario.component.scss']
})
export class RegistroHorarioComponent implements OnInit {

  form: FormGroup;
  mensaje: string = "";

  constructor(
    public dialogRef: MatDialogRef<RegistroHorarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: HorarioService,
    private matSnackBar: MatSnackBar
  ) {
    this.builform();
  }

  ngOnInit(): void {
  }

  private builform(): void {
    this.form = new FormGroup({
      horaInicio: new FormControl(this.data?.horaInicio, Validators.required),
      horaFin: new FormControl(this.data?.horaFin, Validators.required),
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

    const newHorario: IHorario = {
      idHorario: this.data ? this.data.idHorario : 0,
      horaInicio: data.horaInicio,
      horaFin: data.horaFin,
    };

    if (!this.data) {
      this.mensaje = 'Horario registrado con éxito.';
    } else {
      this.mensaje = 'Horario actualizado con éxito.';
    }

    this.apiService.saveHorario(newHorario).subscribe((response) => {
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
