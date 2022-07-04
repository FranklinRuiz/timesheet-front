import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Personal } from '../interface/personal';
import { PersonalService } from '../service/personal-service.service';

@Component({
  selector: 'app-registro-personal',
  templateUrl: './registro-personal.component.html',
  styleUrls: ['./registro-personal.component.scss']
})
export class RegistroPersonalComponent implements OnInit {

  form: FormGroup;
  mensaje: string = "";
  titulo: string = "Registro Personal";

  tiposDocumento = [];
  tiposGenero = [];
  horarios = [];
  cargos = [];
  areas = [];

  constructor(
    public dialogRef: MatDialogRef<RegistroPersonalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: PersonalService,
    private matSnackBar: MatSnackBar
  ) {
    if (!!data) {
      this.titulo = "Actualizar Personal";
    }
    this.builform();
  }

  ngOnInit(): void {
    this.onListTipoDocumento();
    this.onListTipoGenero();
    this.onListHorario();
    this.onListcargo();
    this.onListAreas();
  }

  private builform(): void {
    this.form = new FormGroup({
      tipoDocumento: new FormControl(this.data?.tipoDocumento, Validators.required),
      numeroDocumento: new FormControl(this.data?.numeroDocumento, Validators.required),
      nombres: new FormControl(this.data?.nombres, Validators.required),
      apellidoPaterno: new FormControl(this.data?.apellidoPaterno, Validators.required),
      apellidoMaterno: new FormControl(this.data?.apellidoMaterno, Validators.required),
      fechaNacimiento: new FormControl(this.data?.fechaNacimiento, Validators.required),
      sexo: new FormControl(+this.data?.sexo, Validators.required),
      idArea: new FormControl(+this.data?.idArea, Validators.required),
      idCargo: new FormControl(this.data?.idCargo, Validators.required),
      idHorario: new FormControl(this.data?.idHorario, Validators.required),
      telefono: new FormControl(this.data?.telefono, Validators.required),
      correo: new FormControl(this.data?.correo, Validators.required),
      direccion: new FormControl(this.data?.direccion, Validators.required),
    });
  }

  onListTipoDocumento() {
    this.apiService.listTipoDocumento().subscribe((response: any) => {
      this.tiposDocumento = response.data
    })
  }

  onListTipoGenero() {
    this.apiService.listTipoGenero().subscribe((response: any) => {
      this.tiposGenero = response.data
    })
  }

  onListHorario() {
    this.apiService.listHorario().subscribe((response: any) => {
      this.horarios = response.data
    })
  }

  onListcargo() {
    this.apiService.listCargo().subscribe((response: any) => {
      this.cargos = response.data
    })
  }

  onListAreas() {
    this.apiService.listArea().subscribe((response: any) => {
      this.areas = response.data
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

    const newPersonal: Personal = {
      idEmpleado: this.data ? this.data.idEmpleado : 0,
      tipoDocumento: data.tipoDocumento,
      numeroDocumento: data.numeroDocumento,
      nombres: data.nombres,
      apellidoPaterno: data.apellidoPaterno,
      apellidoMaterno: data.apellidoMaterno,
      fechaNacimiento: data.fechaNacimiento,
      sexo: data.sexo,
      idArea:  data.idArea,
      idCargo: data.idCargo,
      idHorario: data.idHorario,
      telefono: data.telefono,
      correo: data.correo,
      direccion: data.direccion
    };

    if (!this.data) {
      this.mensaje = 'Personal registrado con éxito.';
      this.apiService.savePersonal(newPersonal).subscribe((response) => {
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
      this.mensaje = 'Personal actualizado con éxito.';
      this.apiService.updatePersonal(newPersonal).subscribe((response) => {
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
