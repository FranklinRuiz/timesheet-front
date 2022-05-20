"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[713],{713:(Co,A,l)=>{l.r(A),l.d(A,{PersonalModule:()=>vo});var p=l(6019),a=l(9133),c=l(5304),o=l(3668),q=l(4522),w=l(8260);let b=(()=>{class t{constructor(e){this.http=e,this.url=w.N.apiurl}listPersonal(e,r,i){let s=new q.LE;return s=s.append("page",e),s=s.append("size",r),s=s.append("nombre",i),s=s.append("sort","idEmpleado,desc"),this.http.get(`${this.url}/api/personal/list`,{params:s})}savePersonal(e){return this.http.post(`${this.url}/api/personal/save`,e)}updatePersonal(e){return this.http.put(`${this.url}/api/personal/update`,e)}deletePersonal(e){return this.http.delete(`${this.url}/api/personal/delete/${e}`)}listTipoDocumento(){return this.http.get(`${this.url}/api/personal/list-tipo-documento`)}listTipoGenero(){return this.http.get(`${this.url}/api/personal/list-tipo-genero`)}listHorario(){return this.http.get(`${this.url}/api/horario/list-all`)}listCargo(){return this.http.get(`${this.url}/api/cargo/list-all`)}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(q.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var D=l(9966),P=l(86),x=l(9112),d=l(8167),J=l(6400),N=l(138),f=l(8727),R=l(6731);function j(t,n){if(1&t&&(o.TgZ(0,"mat-option",31),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.Q6J("value",e.id),o.xp6(1),o.hij(" ",e.nombre," ")}}function B(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Tipo es obligatorio "),o.qZA())}function Y(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," N\xb0 Documento es obligatorio "),o.qZA())}function Q(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Nombres es obligatorio "),o.qZA())}function S(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Apellido Paterno es obligatorio "),o.qZA())}function k(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Apellido Materno es obligatorio "),o.qZA())}function y(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Fecha Nacimiento es obligatorio "),o.qZA())}function M(t,n){if(1&t&&(o.TgZ(0,"mat-option",31),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.Q6J("value",e.id),o.xp6(1),o.hij(" ",e.nombre," ")}}function H(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Genero es obligatorio "),o.qZA())}function F(t,n){if(1&t&&(o.TgZ(0,"mat-option",31),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.Q6J("value",e.idCargo),o.xp6(1),o.hij(" ",e.nombreCargo," ")}}function L(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Cargo es obligatorio "),o.qZA())}function z(t,n){if(1&t&&(o.TgZ(0,"mat-option",31),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.Q6J("value",e.idHorario),o.xp6(1),o.lnq(" ",e.nombre," | ",e.horaInicio," - ",e.horaFin," ")}}function $(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Horario es obligatorio "),o.qZA())}function E(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Telefono es obligatorio "),o.qZA())}function O(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Correo es obligatorio "),o.qZA())}function G(t,n){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Direcci\xf3n es obligatorio "),o.qZA())}let U=(()=>{class t{constructor(e,r,i,s){this.dialogRef=e,this.data=r,this.apiService=i,this.matSnackBar=s,this.mensaje="",this.tiposDocumento=[],this.tiposGenero=[],this.horarios=[],this.cargos=[],this.builform()}ngOnInit(){this.onListTipoDocumento(),this.onListTipoGenero(),this.onListHorario(),this.onListcargo()}builform(){var e,r,i,s,u,g,Z,h,_,T,v,C;this.form=new a.cw({tipoDocumento:new a.NI(null===(e=this.data)||void 0===e?void 0:e.tipoDocumento,a.kI.required),numeroDocumento:new a.NI(null===(r=this.data)||void 0===r?void 0:r.numeroDocumento,a.kI.required),nombres:new a.NI(null===(i=this.data)||void 0===i?void 0:i.nombres,a.kI.required),apellidoPaterno:new a.NI(null===(s=this.data)||void 0===s?void 0:s.apellidoPaterno,a.kI.required),apellidoMaterno:new a.NI(null===(u=this.data)||void 0===u?void 0:u.apellidoMaterno,a.kI.required),fechaNacimiento:new a.NI(null===(g=this.data)||void 0===g?void 0:g.fechaNacimiento,a.kI.required),sexo:new a.NI(+(null===(Z=this.data)||void 0===Z?void 0:Z.sexo),a.kI.required),idCargo:new a.NI(null===(h=this.data)||void 0===h?void 0:h.idCargo,a.kI.required),idHorario:new a.NI(null===(_=this.data)||void 0===_?void 0:_.idHorario,a.kI.required),telefono:new a.NI(null===(T=this.data)||void 0===T?void 0:T.telefono,a.kI.required),correo:new a.NI(null===(v=this.data)||void 0===v?void 0:v.correo,a.kI.required),direccion:new a.NI(null===(C=this.data)||void 0===C?void 0:C.direccion,a.kI.required)})}onListTipoDocumento(){this.apiService.listTipoDocumento().subscribe(e=>{this.tiposDocumento=e.data})}onListTipoGenero(){this.apiService.listTipoGenero().subscribe(e=>{this.tiposGenero=e.data})}onListHorario(){this.apiService.listHorario().subscribe(e=>{this.horarios=e.data})}onListcargo(){this.apiService.listCargo().subscribe(e=>{this.cargos=e.data})}onSave(){if(!this.form.valid)return void this.matSnackBar.open("Por favor, completa el formulario.","Cerrar",{duration:3e3,verticalPosition:"top",horizontalPosition:"end"});const e=this.form.getRawValue(),r={idEmpleado:this.data?this.data.idEmpleado:0,tipoDocumento:e.tipoDocumento,numeroDocumento:e.numeroDocumento,nombres:e.nombres,apellidoPaterno:e.apellidoPaterno,apellidoMaterno:e.apellidoMaterno,fechaNacimiento:e.fechaNacimiento,sexo:e.sexo,idCargo:e.idCargo,idHorario:e.idHorario,telefono:e.telefono,correo:e.correo,direccion:e.direccion};this.data?(this.mensaje="Personal actualizado con \xe9xito.",this.apiService.updatePersonal(r).subscribe(i=>{i&&(this.matSnackBar.open(this.mensaje,"Cerrar",{duration:3e3,verticalPosition:"top",horizontalPosition:"end"}),this.dialogRef.close(!0))})):(this.mensaje="Personal registrado con \xe9xito.",this.apiService.savePersonal(r).subscribe(i=>{i&&(this.matSnackBar.open(this.mensaje,"Cerrar",{duration:3e3,verticalPosition:"top",horizontalPosition:"end"}),this.dialogRef.close(!0))}))}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(c.so),o.Y36(c.WI),o.Y36(b),o.Y36(D.ux))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-registro-personal"]],decls:99,vars:19,consts:[[1,"dialog-content-wrapper"],["mat-dialog-title",""],[1,"flex","flex-row","sm:items-center","sm:justify-between"],["tabindex","-1","mat-icon-button","","mat-dialog-close",""],["mat-dialog-content","",1,"mt-3"],[3,"formGroup"],[1,"grid","sm:grid-cols-2","gap-6","w-full"],[1,"sm:col-span-1"],[1,"fuse-mat-no-subscript","w-full"],["formControlName","tipoDocumento","placeholder","Seleccione una opci\xf3n"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["matInput","","formControlName","numeroDocumento"],[1,"grid","sm:grid-cols-3","gap-6","w-full","mt-3"],["matInput","","formControlName","nombres"],["matInput","","formControlName","apellidoPaterno"],["matInput","","formControlName","apellidoMaterno"],[1,"grid","sm:grid-cols-2","gap-6","w-full","mt-3"],["matInput","","formControlName","fechaNacimiento",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["formControlName","sexo","placeholder","Seleccione una opci\xf3n"],["formControlName","idCargo","placeholder","Seleccione una opci\xf3n"],["formControlName","idHorario","placeholder","Seleccione una opci\xf3n"],["matInput","","formControlName","telefono"],["matInput","","formControlName","correo"],[1,"fuse-mat-no-subscript","w-full","mt-3"],["type","text","matInput","","formControlName","direccion"],["mat-dialog-actions","","align","end"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","mat-dialog-close","","color","accent"],[3,"value"]],template:function(e,r){if(1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"mat-toolbar",1),o.TgZ(2,"div",2),o.TgZ(3,"div"),o.TgZ(4,"span"),o._uU(5,"Registro Personal"),o.qZA(),o.qZA(),o.TgZ(6,"button",3),o.TgZ(7,"mat-icon"),o._uU(8,"close"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(9,"div",4),o.TgZ(10,"form",5),o.TgZ(11,"div",6),o.TgZ(12,"div",7),o.TgZ(13,"mat-form-field",8),o.TgZ(14,"mat-label"),o._uU(15,"Tipo Documento"),o.qZA(),o.TgZ(16,"mat-select",9),o.YNc(17,j,2,2,"mat-option",10),o.qZA(),o.qZA(),o.YNc(18,B,2,0,"mat-error",11),o.qZA(),o.TgZ(19,"div",7),o.TgZ(20,"mat-form-field",8),o.TgZ(21,"mat-label"),o._uU(22,"N\xb0 Documento"),o.qZA(),o._UZ(23,"input",12),o.qZA(),o.YNc(24,Y,2,0,"mat-error",11),o.qZA(),o.qZA(),o.TgZ(25,"div",13),o.TgZ(26,"div",7),o.TgZ(27,"mat-form-field",8),o.TgZ(28,"mat-label"),o._uU(29,"Nombres"),o.qZA(),o._UZ(30,"input",14),o.qZA(),o.YNc(31,Q,2,0,"mat-error",11),o.qZA(),o.TgZ(32,"div",7),o.TgZ(33,"mat-form-field",8),o.TgZ(34,"mat-label"),o._uU(35,"Apellido Paterno"),o.qZA(),o._UZ(36,"input",15),o.qZA(),o.YNc(37,S,2,0,"mat-error",11),o.qZA(),o.TgZ(38,"div",7),o.TgZ(39,"mat-form-field",8),o.TgZ(40,"mat-label"),o._uU(41,"Apellido Materno"),o.qZA(),o._UZ(42,"input",16),o.qZA(),o.YNc(43,k,2,0,"mat-error",11),o.qZA(),o.qZA(),o.TgZ(44,"div",17),o.TgZ(45,"div",7),o.TgZ(46,"mat-form-field",8),o.TgZ(47,"mat-label"),o._uU(48,"Fecha Nacimiento"),o.qZA(),o._UZ(49,"input",18),o._UZ(50,"mat-datepicker-toggle",19),o._UZ(51,"mat-datepicker",null,20),o.qZA(),o.YNc(53,y,2,0,"mat-error",11),o.qZA(),o.TgZ(54,"div",7),o.TgZ(55,"mat-form-field",8),o.TgZ(56,"mat-label"),o._uU(57,"Genero"),o.qZA(),o.TgZ(58,"mat-select",21),o.YNc(59,M,2,2,"mat-option",10),o.qZA(),o.qZA(),o.YNc(60,H,2,0,"mat-error",11),o.qZA(),o.qZA(),o.TgZ(61,"div",17),o.TgZ(62,"div",7),o.TgZ(63,"mat-form-field",8),o.TgZ(64,"mat-label"),o._uU(65,"Cargo"),o.qZA(),o.TgZ(66,"mat-select",22),o.YNc(67,F,2,2,"mat-option",10),o.qZA(),o.qZA(),o.YNc(68,L,2,0,"mat-error",11),o.qZA(),o.TgZ(69,"div",7),o.TgZ(70,"mat-form-field",8),o.TgZ(71,"mat-label"),o._uU(72,"Horario"),o.qZA(),o.TgZ(73,"mat-select",23),o.YNc(74,z,2,4,"mat-option",10),o.qZA(),o.qZA(),o.YNc(75,$,2,0,"mat-error",11),o.qZA(),o.qZA(),o.TgZ(76,"div",17),o.TgZ(77,"div",7),o.TgZ(78,"mat-form-field",8),o.TgZ(79,"mat-label"),o._uU(80,"Telefono"),o.qZA(),o._UZ(81,"input",24),o.qZA(),o.YNc(82,E,2,0,"mat-error",11),o.qZA(),o.TgZ(83,"div",7),o.TgZ(84,"mat-form-field",8),o.TgZ(85,"mat-label"),o._uU(86,"Correo"),o.qZA(),o._UZ(87,"input",25),o.qZA(),o.YNc(88,O,2,0,"mat-error",11),o.qZA(),o.qZA(),o.TgZ(89,"mat-form-field",26),o.TgZ(90,"mat-label"),o._uU(91,"Direcci\xf3n"),o.qZA(),o._UZ(92,"input",27),o.qZA(),o.YNc(93,G,2,0,"mat-error",11),o.qZA(),o.qZA(),o.TgZ(94,"div",28),o.TgZ(95,"button",29),o.NdJ("click",function(){return r.onSave()}),o._uU(96,"GRABAR"),o.qZA(),o.TgZ(97,"button",30),o._uU(98,"CANCELAR"),o.qZA(),o.qZA(),o.qZA()),2&e){const i=o.MAs(52);o.xp6(10),o.Q6J("formGroup",r.form),o.xp6(7),o.Q6J("ngForOf",r.tiposDocumento),o.xp6(1),o.Q6J("ngIf",(null==r.form.controls.tipoDocumento.errors?null:r.form.controls.tipoDocumento.errors.required)&&r.form.controls.tipoDocumento.touched),o.xp6(6),o.Q6J("ngIf",(null==r.form.controls.numeroDocumento.errors?null:r.form.controls.numeroDocumento.errors.required)&&r.form.controls.numeroDocumento.touched),o.xp6(7),o.Q6J("ngIf",(null==r.form.controls.nombres.errors?null:r.form.controls.nombres.errors.required)&&r.form.controls.nombres.touched),o.xp6(6),o.Q6J("ngIf",(null==r.form.controls.apellidoPaterno.errors?null:r.form.controls.apellidoPaterno.errors.required)&&r.form.controls.apellidoPaterno.touched),o.xp6(6),o.Q6J("ngIf",(null==r.form.controls.apellidoMaterno.errors?null:r.form.controls.apellidoMaterno.errors.required)&&r.form.controls.apellidoMaterno.touched),o.xp6(6),o.Q6J("matDatepicker",i),o.xp6(1),o.Q6J("for",i),o.xp6(3),o.Q6J("ngIf",(null==r.form.controls.fechaNacimiento.errors?null:r.form.controls.fechaNacimiento.errors.required)&&r.form.controls.fechaNacimiento.touched),o.xp6(6),o.Q6J("ngForOf",r.tiposGenero),o.xp6(1),o.Q6J("ngIf",(null==r.form.controls.sexo.errors?null:r.form.controls.sexo.errors.required)&&r.form.controls.sexo.touched),o.xp6(7),o.Q6J("ngForOf",r.cargos),o.xp6(1),o.Q6J("ngIf",(null==r.form.controls.idCargo.errors?null:r.form.controls.idCargo.errors.required)&&r.form.controls.idCargo.touched),o.xp6(6),o.Q6J("ngForOf",r.horarios),o.xp6(1),o.Q6J("ngIf",(null==r.form.controls.idHorario.errors?null:r.form.controls.idHorario.errors.required)&&r.form.controls.idHorario.touched),o.xp6(7),o.Q6J("ngIf",(null==r.form.controls.telefono.errors?null:r.form.controls.telefono.errors.required)&&r.form.controls.telefono.touched),o.xp6(6),o.Q6J("ngIf",(null==r.form.controls.correo.errors?null:r.form.controls.correo.errors.required)&&r.form.controls.correo.touched),o.xp6(5),o.Q6J("ngIf",(null==r.form.controls.direccion.errors?null:r.form.controls.direccion.errors.required)&&r.form.controls.direccion.touched)}},directives:[c.uh,P.lW,c.ZT,x.Hw,c.xY,a._Y,a.JL,a.sg,d.KE,d.hX,J.gD,a.JJ,a.u,p.sg,p.O5,N.Nt,a.Fj,f.hl,f.nW,d.R9,f.Mq,c.H8,R.ey,d.TO],styles:[".dialog-content-wrapper[_ngcontent-%COMP%]{max-height:87vh}.width-input[_ngcontent-%COMP%]{width:100%}"]}),t})();var W=l(4034),X=l(7444),m=l(960),I=l(2968);function K(t,n){1&t&&(o.TgZ(0,"th",33),o._uU(1," Empleado "),o.qZA())}function V(t,n){if(1&t&&(o.TgZ(0,"td",34),o.TgZ(1,"span",35),o._uU(2),o.qZA(),o.qZA()),2&t){const e=n.$implicit;o.xp6(2),o.hij(" ",e.nombreCompleto," ")}}function oo(t,n){1&t&&(o.TgZ(0,"th",33),o._uU(1," Cargo "),o.qZA())}function eo(t,n){if(1&t&&(o.TgZ(0,"td",34),o.TgZ(1,"span",35),o._uU(2),o.qZA(),o.qZA()),2&t){const e=n.$implicit;o.xp6(2),o.hij(" ",e.cargo," ")}}function to(t,n){1&t&&(o.TgZ(0,"th",33),o._uU(1," Horario "),o.qZA())}function ro(t,n){if(1&t&&(o.TgZ(0,"td",34),o.TgZ(1,"span",35),o._uU(2),o.qZA(),o.qZA()),2&t){const e=n.$implicit;o.xp6(2),o.hij(" ",e.horario," ")}}function no(t,n){1&t&&(o.TgZ(0,"th",33),o._uU(1," Tel\xe9fono "),o.qZA())}function ao(t,n){if(1&t&&(o.TgZ(0,"td",34),o.TgZ(1,"span",35),o._uU(2),o.qZA(),o.qZA()),2&t){const e=n.$implicit;o.xp6(2),o.hij(" ",e.telefono," ")}}function io(t,n){1&t&&(o.TgZ(0,"th",36),o._uU(1," Acciones "),o.qZA())}function lo(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"td",37),o.TgZ(1,"button",38),o.NdJ("click",function(){const s=o.CHM(e).$implicit;return o.oxw(2).onEdit(s)}),o.TgZ(2,"mat-icon"),o._uU(3,"edit"),o.qZA(),o.qZA(),o.TgZ(4,"button",39),o.NdJ("click",function(){const s=o.CHM(e).$implicit;return o.oxw(2).onDelete(s.idEmpleado)}),o.TgZ(5,"mat-icon"),o._uU(6,"delete"),o.qZA(),o.qZA(),o.qZA()}}function so(t,n){1&t&&o._UZ(0,"tr",40)}function mo(t,n){1&t&&o._UZ(0,"tr",41)}const co=function(){return[5,10,15,20]};function uo(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"div",18),o.TgZ(1,"div",19),o.TgZ(2,"table",20),o.ynx(3,21),o.YNc(4,K,2,0,"th",22),o.YNc(5,V,3,1,"td",23),o.BQk(),o.ynx(6,24),o.YNc(7,oo,2,0,"th",22),o.YNc(8,eo,3,1,"td",23),o.BQk(),o.ynx(9,25),o.YNc(10,to,2,0,"th",22),o.YNc(11,ro,3,1,"td",23),o.BQk(),o.ynx(12,26),o.YNc(13,no,2,0,"th",22),o.YNc(14,ao,3,1,"td",23),o.BQk(),o.ynx(15,27),o.YNc(16,io,2,0,"th",28),o.YNc(17,lo,7,0,"td",29),o.BQk(),o.YNc(18,so,1,0,"tr",30),o.YNc(19,mo,1,0,"tr",31),o.qZA(),o.qZA(),o.TgZ(20,"mat-paginator",32),o.NdJ("page",function(i){return o.CHM(e),o.oxw().onChangePagination(i)}),o.qZA(),o.qZA()}if(2&t){const e=o.oxw();o.xp6(2),o.Q6J("dataSource",e.tablaPersonal.content),o.xp6(16),o.Q6J("matHeaderRowDef",e.displayedColumns),o.xp6(1),o.Q6J("matRowDefColumns",e.displayedColumns),o.xp6(1),o.Q6J("length",e.tablaPersonal.totalElements)("pageSize",e.tablaPersonal.size)("pageSizeOptions",o.DdM(6,co))}}function po(t,n){1&t&&(o.TgZ(0,"div"),o.TgZ(1,"div",42),o._uU(2,"\xa1No hay datos!"),o.qZA(),o.qZA())}let fo=(()=>{class t{constructor(e,r,i){this.dialog=e,this.apiService=r,this._fuseConfirmationService=i,this.displayedColumns=["nombreCompleto","cargo","horario","telefono","accion"],this.nombreCargo="",this.pagina=0,this.size=10}ngOnInit(){this.onLoadTable()}onRefresh(){this.nombreCargo="",this.onLoadTable()}onAdd(){this.dialog.open(U,{width:"500px"}).afterClosed().subscribe(r=>{r&&this.onLoadTable()})}onLoadTable(){this.apiService.listPersonal(this.pagina,this.size,this.nombreCargo).subscribe(e=>{e&&(this.tablaPersonal=e.data)})}onChangePagination(e){this.pagina=e.pageIndex,this.size=e.pageSize,this.apiService.listPersonal(this.pagina,this.size,this.nombreCargo).subscribe(r=>{this.tablaPersonal=r.data})}onEdit(e){this.dialog.open(U,{width:"500px",data:e}).afterClosed().subscribe(i=>{i&&this.onLoadTable()})}onDelete(e){this._fuseConfirmationService.delete().afterClosed().subscribe(i=>{"confirmed"==i&&this.apiService.deletePersonal(e).subscribe(s=>{this.onLoadTable()})})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(c.uw),o.Y36(b),o.Y36(W.R))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-bandeja-personal"]],decls:22,vars:8,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex","flex-col","min-w-0"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],[1,"fuse-mat-dense","fuse-mat-no-subscript","fuse-mat-rounded","min-w-50"],["mat-icon-button","","type","button","matPrefix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["matInput","","matTooltip","Presione Enter para buscar",3,"autocomplete","placeholder","ngModel","ngModelChange","keyup.enter"],["mat-flat-button","",1,"fuse-mat-button-rounded",3,"color","click"],[1,"ml-2"],[1,"flex-auto","p-6","sm:p-10"],[1,"flex","flex-col","p-2","pb-4","bg-card","rounded-2xl","shadow","overflow-hidden"],["class","example-container",4,"ngIf"],[4,"ngIf"],[1,"example-container"],[1,"flex"],["mat-table","","multiTemplateDataRows","",3,"dataSource"],["matColumnDef","nombreCompleto"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","cargo"],["matColumnDef","horario"],["matColumnDef","telefono"],["matColumnDef","accion"],["mat-header-cell","","class","width-action",4,"matHeaderCellDef"],["mat-cell","","class","width-action",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"],["mat-header-cell",""],["mat-cell",""],[1,"pr-6","whitespace-nowrap"],["mat-header-cell","",1,"width-action"],["mat-cell","",1,"width-action"],["mat-icon-button","","matTooltip","Editar registro",3,"click"],["mat-icon-button","","matTooltip","Eliminar registro",3,"click"],["mat-header-row",""],["mat-row",""],[1,"text-3xl","pt-2","font-semibold","tracking-tight","text-center"]],template:function(e,r){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"div",4),o.TgZ(5,"div",5),o.TgZ(6,"div",6),o._uU(7,"Lista de personal"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(8,"div",7),o.TgZ(9,"div"),o.TgZ(10,"mat-form-field",8),o.TgZ(11,"button",9),o.NdJ("click",function(){return r.onRefresh()}),o._UZ(12,"mat-icon",10),o.qZA(),o.TgZ(13,"input",11),o.NdJ("ngModelChange",function(s){return r.nombreCargo=s})("keyup.enter",function(){return r.onLoadTable()}),o.qZA(),o.qZA(),o.qZA(),o.TgZ(14,"button",12),o.NdJ("click",function(){return r.onAdd()}),o._UZ(15,"mat-icon",10),o.TgZ(16,"span",13),o._uU(17,"Nuevo Personal"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(18,"div",14),o.TgZ(19,"div",15),o.YNc(20,uo,21,7,"div",16),o.YNc(21,po,3,0,"div",17),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(12),o.Q6J("svgIcon","heroicons_solid:x"),o.xp6(1),o.Q6J("autocomplete","off")("placeholder","Buscar por nombre... ")("ngModel",r.nombreCargo),o.xp6(1),o.Q6J("color","primary"),o.xp6(1),o.Q6J("svgIcon","heroicons_solid:document-add"),o.xp6(5),o.Q6J("ngIf",!!r.tablaPersonal&&!r.tablaPersonal.empty),o.xp6(1),o.Q6J("ngIf",!!r.tablaPersonal&&r.tablaPersonal.empty))},directives:[d.KE,P.lW,d.qo,x.Hw,N.Nt,a.Fj,X.gM,a.JJ,a.On,p.O5,m.BZ,m.w1,m.fO,m.Dz,m.as,m.nj,I.NW,m.ge,m.ev,m.XQ,m.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}.width-action[_ngcontent-%COMP%]{width:150px}"]}),t})();var go=l(1553),Zo=l(495),ho=l(9367),_o=l(3072);const To=[{path:"",component:fo}];let vo=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[{provide:I.ye,useClass:_o.N}],imports:[[p.ez,go.Bz.forChild(To),Zo.q,ho.m]]}),t})()}}]);