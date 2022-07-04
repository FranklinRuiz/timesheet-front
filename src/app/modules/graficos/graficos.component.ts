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
 
  cols : any[]=[];
  arrayAsistencias: any[]=[];

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
    this.apiService.IndPersonas().subscribe((resp) => { 
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
    this.apiService.IndPersonasPorArea().subscribe((resp) => { 
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
    this.apiService.IndHorasPorSedes().subscribe((resp) => { 
      if(resp.data){
        this.dataHorasPorSede = resp.data;
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
 
  numeroAFecha(num, esExcel = false) {
    var newFecha = esExcel ? 25567 + 1 : 25567;
    // 86400 es el número de segundos en un día, luego multiplicamos por 1000 para obtener milisegundos.
    return new Date((num - newFecha) * 86400 * 1000);
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
          'Se importo el excel de asistencias sin problemas!.',
          'Cerrar',
          { duration: 3000, verticalPosition: 'top', horizontalPosition: 'end' }
        );
      }
    })
  }
  // onExpReporte(filter : any){
  // const dialgoref = this.dialog.open(FiltroReporteComponent,{
  //   width: '500px',
  //   data: filter
  // }); 

  // dialgoref.afterClosed().subscribe((resp) => {
  //   if(resp){
  //     this.ngOnInit();
  //   }
  // })
  // }
  

  onExpReporteHoras(filter : any){
    const Params = {
      idsede :  0,
      idturno: 0,
      tipohora: filter,
    }  
     
    this.apiReportes.repHorasTrabajo(Params).subscribe((resp) => { 
      console.log('resp', resp);
      if(resp){  
        this.onDescargarExcel(resp.data);
      }    
    }) 
 
  }

 
  onDescargarExcel(listado){   
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(listado);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer,  "Reporte.xlsx"); 
  }
  
  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
    FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + '.xlsx');
  }


  onExpReporteTurno(){
    const Params = {idturno: 0}   
    this.apiReportes.repTurnos(Params).subscribe((resp) => {  
      if(resp){  
        this.onDescargarExcel(resp.data);
      }    
    }) 
  }


  onExpReporteGeneral(tipo){ 
    const Params = {
      idsede :  0,
      idturno: 0, 
    }   
    this.apiReportes.repGeneral(Params).subscribe((resp) => {  
      if(resp){  
        if(tipo === 'EXCEL'){
          this.onDescargarExcel(resp.data);
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
    doc.save('Reporte.pdf');
  }
  
}
