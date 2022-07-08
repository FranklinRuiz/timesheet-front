import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FiltroReporteComponent } from './filtro-reporte/filtro-reporte.component';
import { IndHorasPorSede, IndPersonas, IndPersonasPorArea } from './interfaces/graficos.interfaces';
import { GraficosService } from './service/graficos.service'; 
import * as FileSaver from 'file-saver'; 
import * as XLSX from 'xlsx';  
import { ReportesService } from './service/reporte.service';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"
import { MatSnackBar } from '@angular/material/snack-bar';
import moment from 'moment';


@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html'
})
export class GraficosComponent implements OnInit {

  dataPersonas : IndPersonas; 
  totalPersonas :any[] = [];


  dataPersonasPorArea : IndPersonasPorArea[]=[];  
  totalPersonasPorArea :any[] = [];
  dataPersonasPorAreaGrafico: any;
  horizontalOptions : any;

  dataHorasPorSede : IndHorasPorSede[]=[]; 
  mostrarHorasPorSede: any[]=[];
  totalHoras :any[] = [];
  fechaActual = new Date();
  cols : any[]=[];
  arrayAsistencias: any[]=[];

  f1 = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), 1);
  f2 = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth() + 1, 0);

  constructor(
    private apiService : GraficosService,
    private apiReportes: ReportesService,
    public dialog : MatDialog,
    private matSnackBar: MatSnackBar
  ) {
   }

  ngOnInit(): void { 
    this.onIndicadorPersonas(); 
    this.onIndicadorPersonasPorArea(); 
    this.onIndicadorHorasPorSede(); 

    
    this.cols = [ 
      { field: 'personal', header: 'PERSONAL'}, 
      { field: 'area', header: 'AREA'}, 
      { field: 'cargo', header: 'CARGO'}, 
      { field: 'sede', header: 'SEDE'}, 
      { field: 'hentrada', header: 'H.ING'}, 
      { field: 'hsalida', header: 'H.SAL'}, 
      { field: 'turno', header: 'TURNO'}, 
      { field: 'horatrabajada', header: 'H.TRAB'}, 
      { field: 'horaextra', header: 'H.EXTR'}, 
      { field: 'horatardanza', header: 'H.TARD'},   
      { field: 'correo', header: 'EMAIL'},  
      { field: 'telefono', header: 'TELEFONO'},   
      { field: 'direccion', header: 'DIRECCION'},
      { field: 'genero', header: 'GENERO'},
      { field: 'fecnacimiento', header: 'FEC. NACTO'},
      { field: 'tipoDocumento', header: 'TIPO DOC'},  
    ];   
  }

  onIndicadorPersonas(){
    const filtro = {
      f1 :  moment(this.f1).format('YYYY-MM-DD'), 
      f2 :  moment(this.f2).format('YYYY-MM-DD')
    }
    this.apiService.IndPersonas(filtro).subscribe((resp) => { 
      if(resp.data){
        this.dataPersonas = resp.data[0];
        this.onLlenarDataPersonas();
      }
    }); 
  }

  onLlenarDataPersonas(){
    this.totalPersonas.push( 
      {nombre : 'Total', valor : this.dataPersonas.total, color: "#xxxxxx".replace(/x/g, y => (Math.random()*16|0).toString(16)) },
      {nombre : 'Hombres', valor : this.dataPersonas.hombres, color: "#xxxxxx".replace(/x/g, y => (Math.random()*16|0).toString(16)) },
      {nombre : 'Mujeres', valor : this.dataPersonas.mujeres, color: "#xxxxxx".replace(/x/g, y => (Math.random()*16|0).toString(16)) }
    )  
  }


  onIndicadorPersonasPorArea(){
    const filtro = {
      f1 :  moment(this.f1).format('YYYY-MM-DD'), 
      f2 :  moment(this.f2).format('YYYY-MM-DD')
    }
    this.apiService.IndPersonasPorArea(filtro).subscribe((resp) => { 
      if(resp){
        this.dataPersonasPorArea = resp.data;
        this.onLlenarDataPersonasPorArea();
      }
    }); 
  }

  onLlenarDataPersonasPorArea(){ 
    let labels : any[] = [];
    let cantidades : any[] = [];
    let colores : any[] = []; 
      /* ARMAR LA GRAFICA DE BARRAS */
    this.dataPersonasPorArea.forEach(element => {
      labels.push(element.area); 
      cantidades.push(+element.cantidad); 
      const newcolor2 = "#xxxxxx".replace(/x/g, y => (Math.random()*16|0).toString(16));
      colores.push(newcolor2) 
    }) 

    this.dataPersonasPorAreaGrafico = {
      labels: labels,
      datasets: [{data: cantidades, backgroundColor: colores }]
    }
    this.horizontalOptions = {
      indexAxis: 'y'
    };
  }


  onIndicadorHorasPorSede(){
    const filtro = {
      f1 :  moment(this.f1).format('YYYY-MM-DD'), 
      f2 :  moment(this.f2).format('YYYY-MM-DD')
    }
    this.apiService.IndHorasPorSedes(filtro).subscribe((resp) => { 
      if(resp.data.length){
        this.dataHorasPorSede = resp.data;
      }else{
        this.dataHorasPorSede =  [
          {
          sede : "Sin datos",
          htrabajadas : "00:00:00",
          hextra : "00:00:00",
          htardanza : "00:00:00"
          }
        ]
      }
    }); 
  }
 

  onImportarAsistencias(e: any){
   
    let EXTENSION = ['xlsx','xls','csv']
    let part = e.target.files[0].name.split('.')
    let exten = part[part.length-1] 

    if(EXTENSION.includes(exten)){
      let file = e.target.files[0]
      let reader = new FileReader()
      reader.onload = (event) => {
        let bstr = event.target.result
        let wbook = XLSX.read(bstr, {type: "binary"})
  
        let wsName = wbook.SheetNames[0]
        let wSheet = wbook.Sheets[wsName]
        let fileDate = XLSX.utils.sheet_to_json(wSheet, {header:1})
   
        let Header: any = fileDate[0] 
        fileDate.splice(0,1)
        this.onArmarJsonaGuardar(Header, fileDate); 
      }
      reader.readAsBinaryString(file)
    }else{
      this.matSnackBar.open(
        'Selecciona un archivo de excel porfavor!.',
        'Cerrar',
        { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
      );
      return;
    } 
  }
  
  onArmarJsonaGuardar(head, body){
    this.arrayAsistencias = []; 

      body.forEach(row => {
        let rowData = {};
        row.forEach((element, index) => {
          rowData[head[index]] = element
        });
        this.arrayAsistencias.push(rowData)
      });
      this.onGrabarAsistenciasImportadas(this.arrayAsistencias);
  }

  onGrabarAsistenciasImportadas(data){
    this.apiReportes.importarAsistencias(data).subscribe((resp) => {
      if(resp){
        this.matSnackBar.open(
          'Archivo cargado correctamente',
          'Cerrar',
          { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
        );
      }
    }, error => {
      this.matSnackBar.open(
        'Archivo cargado incorrectamente',
        'Cerrar',
        { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
      );
    })
  }


  onFilter(tipo){
  const dialgoref = this.dialog.open(FiltroReporteComponent,{
    width: '500px',
    data: tipo
  }); 

  dialgoref.afterClosed().subscribe((resp) => {
    if(resp){
      this.f1 = resp.inicio,
      this.f2 = resp.fin

      if(resp.tipo === 'IPersonas'){
        this.totalPersonas = [];
        this.onIndicadorPersonas();
      }else if(resp.tipo === 'IHoras'){
        this.onIndicadorHorasPorSede();
      }else if(resp.tipo === 'IPersonasAreas'){
        this.onIndicadorPersonasPorArea();
      }
   
      }
    })
  }


  onExporAsistencias(){  
    this.apiReportes.repAsistencias().subscribe((resp) => {  
      if(resp){  
        console.log('asistencias',resp);
        this.onDescargarExcel(resp.data, 'Reporte-Asistencias');
      }    
    }) 
  }

  onExporInasistencias(){  
    this.apiReportes.repInasistencias().subscribe((resp) => {  
      if(resp){  
        this.onDescargarExcel(resp.data, 'Reporte-Inasistencias');
      }    
    }) 
  }


  onExpReporteHoras(filter : any){
    const Params = {idsede : 0, tipohora: filter}   
    this.apiReportes.repHorasTrabajo(Params).subscribe((resp) => {  
      if(resp){  
        this.onDescargarExcel(resp.data, 'Reporte-Horas');
      }    
    }) 
 
  }
 
  onExpReporteTurno(){
    const Params = {idturno: 0}   
    this.apiReportes.repTurnos(Params).subscribe((resp) => {  
      if(resp.data){  
        this.onDescargarExcel(resp.data, 'Reporte-turno');
      }else{
        this.matSnackBar.open(
          'No se encontraron resultados',
          'Cerrar',
          { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
        );
        return;
      }
    }) 
  }


  onExpReporteGeneral(tipo){ 
      const Params = {idsede :  0, idturno: 0}   
    this.apiReportes.repGeneral(Params).subscribe((resp) => {  
      if(resp){  
        if(tipo === 'EXCEL'){
          this.onDescargarExcel(resp.data, 'Reporte-General');
        }else{
          this.onDescargarPDF(resp.data);
        }
      }    
    }) 
  }

  onDescargarPDF(data){
    let exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
// FPDF('L','mm','A4');
    const doc = new jsPDF('l','mm','A3');
      autoTable(doc, {
        headStyles: { fontSize: 8, overflow : 'linebreak'},
        bodyStyles: { fontSize: 8, overflow : 'visible'},
        columns: exportColumns,
        horizontalPageBreak : true,
        body: data,  
    }); 
    doc.save('Reporte-General.pdf');
  }
  
  onDescargarExcel(listado, nomArchivo){   
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(listado);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer,  nomArchivo); 
  }
  
  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
    FileSaver.saveAs(data, fileName +  '.xlsx');
  }
}
