import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-labor',
  templateUrl: './eliminar-labor.component.html',
  styleUrls: ['./eliminar-labor.component.scss']
})
export class EliminarLaborComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EliminarLaborComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
