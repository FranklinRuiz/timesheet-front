"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[630],{5532:(G,u,n)=>{n.r(u),n.d(u,{HorarioModule:()=>L});var p=n(6019),s=n(9133),c=n(5304),o=n(3668),f=n(4522),_=n(8260);let h=(()=>{class e{constructor(t){this.http=t,this.url=_.N.apiurl}listHorario(t,r,a){let l=new f.LE;return l=l.append("page",t),l=l.append("size",r),l=l.append("nombre",a),l=l.append("sort","idHorario,desc"),this.http.get(`${this.url}/api/horario/list`,{params:l})}saveHorario(t){return this.http.post(`${this.url}/api/horario/save`,t)}updateHorario(t){return this.http.put(`${this.url}/api/horario/update`,t)}deleteHorario(t){return this.http.delete(`${this.url}/api/horario/delete/${t}`)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(f.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=n(9966),g=n(86),Z=n(9112),d=n(8167),H=n(138);function C(e,i){1&e&&(o.TgZ(0,"mat-error"),o._uU(1," Nombre es obligatorio "),o.qZA())}function x(e,i){1&e&&(o.TgZ(0,"mat-error"),o._uU(1," Hora Inicio es obligatorio "),o.qZA())}function A(e,i){1&e&&(o.TgZ(0,"mat-error"),o._uU(1," Hora Fin es obligatorio "),o.qZA())}let v=(()=>{class e{constructor(t,r,a,l){this.dialogRef=t,this.data=r,this.apiService=a,this.matSnackBar=l,this.mensaje="",this.builform()}ngOnInit(){}builform(){var t,r,a;this.form=new s.cw({nombre:new s.NI(null===(t=this.data)||void 0===t?void 0:t.nombre,s.kI.required),horaInicio:new s.NI(null===(r=this.data)||void 0===r?void 0:r.horaInicio,s.kI.required),horaFin:new s.NI(null===(a=this.data)||void 0===a?void 0:a.horaFin,s.kI.required)})}onSave(){if(!this.form.valid)return void this.matSnackBar.open("Por favor, completa el formulario.","Cerrar",{duration:3e3,verticalPosition:"top",horizontalPosition:"end"});const t=this.form.getRawValue(),r={idHorario:this.data?this.data.idHorario:0,nombre:t.nombre,horaInicio:t.horaInicio,horaFin:t.horaFin};this.data?(this.mensaje="Horario actualizado con \xe9xito.",this.apiService.updateHorario(r).subscribe(a=>{a&&(this.matSnackBar.open(this.mensaje,"Cerrar",{duration:3e3,verticalPosition:"top",horizontalPosition:"end"}),this.dialogRef.close(!0))})):(this.mensaje="Horario registrado con \xe9xito.",this.apiService.saveHorario(r).subscribe(a=>{a&&(this.matSnackBar.open(this.mensaje,"Cerrar",{duration:3e3,verticalPosition:"top",horizontalPosition:"end"}),this.dialogRef.close(!0))}))}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(c.so),o.Y36(c.WI),o.Y36(h),o.Y36(b.ux))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-registro-horario"]],decls:31,vars:4,consts:[[1,"dialog-content-wrapper"],["mat-dialog-title",""],[1,"flex","flex-row","sm:items-center","sm:justify-between"],["tabindex","-1","mat-icon-button","","mat-dialog-close",""],["mat-dialog-content","",1,"mt-3"],[3,"formGroup"],[1,"fuse-mat-no-subscript","w-full"],["type","text","matInput","","formControlName","nombre"],[4,"ngIf"],[1,"fuse-mat-no-subscript","w-full","mt-4"],["type","time","matInput","","formControlName","horaInicio"],["type","time","matInput","","formControlName","horaFin"],["mat-dialog-actions","","align","end"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","mat-dialog-close","","color","accent"]],template:function(t,r){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"mat-toolbar",1),o.TgZ(2,"div",2),o.TgZ(3,"div"),o.TgZ(4,"span"),o._uU(5,"Registro Horario"),o.qZA(),o.qZA(),o.TgZ(6,"button",3),o.TgZ(7,"mat-icon"),o._uU(8,"close"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(9,"div",4),o.TgZ(10,"form",5),o.TgZ(11,"mat-form-field",6),o.TgZ(12,"mat-label"),o._uU(13,"Nombre Horario"),o.qZA(),o._UZ(14,"input",7),o.qZA(),o.YNc(15,C,2,0,"mat-error",8),o.TgZ(16,"mat-form-field",9),o.TgZ(17,"mat-label"),o._uU(18,"Hora Inicio"),o.qZA(),o._UZ(19,"input",10),o.qZA(),o.YNc(20,x,2,0,"mat-error",8),o.TgZ(21,"mat-form-field",9),o.TgZ(22,"mat-label"),o._uU(23,"Hora Fin"),o.qZA(),o._UZ(24,"input",11),o.qZA(),o.YNc(25,A,2,0,"mat-error",8),o.qZA(),o.qZA(),o.TgZ(26,"div",12),o.TgZ(27,"button",13),o.NdJ("click",function(){return r.onSave()}),o._uU(28,"GRABAR"),o.qZA(),o.TgZ(29,"button",14),o._uU(30,"CANCELAR"),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(10),o.Q6J("formGroup",r.form),o.xp6(5),o.Q6J("ngIf",(null==r.form.controls.nombre.errors?null:r.form.controls.nombre.errors.required)&&r.form.controls.nombre.touched),o.xp6(5),o.Q6J("ngIf",(null==r.form.controls.horaInicio.errors?null:r.form.controls.horaInicio.errors.required)&&r.form.controls.horaInicio.touched),o.xp6(5),o.Q6J("ngIf",(null==r.form.controls.horaFin.errors?null:r.form.controls.horaFin.errors.required)&&r.form.controls.horaFin.touched))},directives:[c.uh,g.lW,c.ZT,Z.Hw,c.xY,s._Y,s.JL,s.sg,d.KE,d.hX,H.Nt,s.Fj,s.JJ,s.u,p.O5,c.H8,d.TO],styles:[".dialog-content-wrapper[_ngcontent-%COMP%]{max-height:87vh}.width-input[_ngcontent-%COMP%]{width:100%}"]}),e})();var q=n(4034),I=n(7444),m=n(960),T=n(2968);function w(e,i){1&e&&(o.TgZ(0,"th",32),o._uU(1," NOMBRE "),o.qZA())}function N(e,i){if(1&e&&(o.TgZ(0,"td",33),o.TgZ(1,"span",34),o._uU(2),o.qZA(),o.qZA()),2&e){const t=i.$implicit;o.xp6(2),o.hij(" ",t.nombre," ")}}function B(e,i){1&e&&(o.TgZ(0,"th",32),o._uU(1," INICIO "),o.qZA())}function j(e,i){if(1&e&&(o.TgZ(0,"td",33),o.TgZ(1,"span",34),o._uU(2),o.qZA(),o.qZA()),2&e){const t=i.$implicit;o.xp6(2),o.hij(" ",t.horaInicio," ")}}function R(e,i){1&e&&(o.TgZ(0,"th",32),o._uU(1," FIN "),o.qZA())}function y(e,i){if(1&e&&(o.TgZ(0,"td",33),o.TgZ(1,"span",34),o._uU(2),o.qZA(),o.qZA()),2&e){const t=i.$implicit;o.xp6(2),o.hij(" ",t.horaFin," ")}}function U(e,i){1&e&&(o.TgZ(0,"th",35),o._uU(1," ACCI\xd3N "),o.qZA())}function J(e,i){if(1&e){const t=o.EpF();o.TgZ(0,"td",36),o.TgZ(1,"button",37),o.NdJ("click",function(){const l=o.CHM(t).$implicit;return o.oxw(2).onEditHorario(l)}),o.TgZ(2,"mat-icon"),o._uU(3,"edit"),o.qZA(),o.qZA(),o.TgZ(4,"button",38),o.NdJ("click",function(){const l=o.CHM(t).$implicit;return o.oxw(2).onDeleteHorario(l.idHorario)}),o.TgZ(5,"mat-icon"),o._uU(6,"delete"),o.qZA(),o.qZA(),o.qZA()}}function S(e,i){1&e&&o._UZ(0,"tr",39)}function Y(e,i){1&e&&o._UZ(0,"tr",40)}const F=function(){return[5,10,15,20]};function z(e,i){if(1&e){const t=o.EpF();o.TgZ(0,"div",18),o.TgZ(1,"div",19),o.TgZ(2,"table",20),o.ynx(3,21),o.YNc(4,w,2,0,"th",22),o.YNc(5,N,3,1,"td",23),o.BQk(),o.ynx(6,24),o.YNc(7,B,2,0,"th",22),o.YNc(8,j,3,1,"td",23),o.BQk(),o.ynx(9,25),o.YNc(10,R,2,0,"th",22),o.YNc(11,y,3,1,"td",23),o.BQk(),o.ynx(12,26),o.YNc(13,U,2,0,"th",27),o.YNc(14,J,7,0,"td",28),o.BQk(),o.YNc(15,S,1,0,"tr",29),o.YNc(16,Y,1,0,"tr",30),o.qZA(),o.qZA(),o.TgZ(17,"mat-paginator",31),o.NdJ("page",function(a){return o.CHM(t),o.oxw().onChangePagination(a)}),o.qZA(),o.qZA()}if(2&e){const t=o.oxw();o.xp6(2),o.Q6J("dataSource",t.tableHorario.content),o.xp6(13),o.Q6J("matHeaderRowDef",t.displayedColumnsHorario),o.xp6(1),o.Q6J("matRowDefColumns",t.displayedColumnsHorario),o.xp6(1),o.Q6J("length",t.tableHorario.totalElements)("pageSize",t.tableHorario.size)("pageSizeOptions",o.DdM(6,F))}}function D(e,i){1&e&&(o.TgZ(0,"div"),o.TgZ(1,"div",41),o._uU(2,"\xa1No hay datos!"),o.qZA(),o.qZA())}let M=(()=>{class e{constructor(t,r,a){this.dialog=t,this.apiService=r,this._fuseConfirmationService=a,this.displayedColumnsHorario=["nombre","horaInicio","horaFin","accion"],this.nombreHorario="",this.pagina=0,this.size=10}ngOnInit(){this.onLoadTableHorario()}onRefresh(){this.nombreHorario="",this.onLoadTableHorario()}onAddHorario(){this.dialog.open(v,{width:"400px"}).afterClosed().subscribe(r=>{r&&this.onLoadTableHorario()})}onLoadTableHorario(){this.apiService.listHorario(this.pagina,this.size,this.nombreHorario).subscribe(t=>{t&&(this.tableHorario=t.data)})}onChangePagination(t){this.pagina=t.pageIndex,this.size=t.pageSize,this.apiService.listHorario(this.pagina,this.size,this.nombreHorario).subscribe(r=>{this.tableHorario=r.data})}onEditHorario(t){this.dialog.open(v,{width:"400px",data:t}).afterClosed().subscribe(a=>{a&&this.onLoadTableHorario()})}onDeleteHorario(t){this._fuseConfirmationService.delete().afterClosed().subscribe(a=>{"confirmed"==a&&this.apiService.deleteHorario(t).subscribe(l=>{this.onLoadTableHorario()})})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(c.uw),o.Y36(h),o.Y36(q.R))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-bandeja-horario"]],decls:22,vars:8,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex","flex-col","min-w-0"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],[1,"fuse-mat-dense","fuse-mat-no-subscript","fuse-mat-rounded","min-w-50"],["mat-icon-button","","type","button","matPrefix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["matInput","","matTooltip","Presione Enter para buscar",3,"autocomplete","placeholder","ngModel","ngModelChange","keyup.enter"],["mat-flat-button","",1,"fuse-mat-button-rounded",3,"color","click"],[1,"ml-2"],[1,"flex-auto","p-6","sm:p-10"],[1,"flex","flex-col","p-2","pb-4","bg-card","rounded-2xl","shadow","overflow-hidden"],["class","example-container",4,"ngIf"],[4,"ngIf"],[1,"example-container"],[1,"flex"],["mat-table","","multiTemplateDataRows","",3,"dataSource"],["matColumnDef","nombre"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","horaInicio"],["matColumnDef","horaFin"],["matColumnDef","accion"],["mat-header-cell","","class","width-action",4,"matHeaderCellDef"],["mat-cell","","class","width-action",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"],["mat-header-cell",""],["mat-cell",""],[1,"pr-6","whitespace-nowrap"],["mat-header-cell","",1,"width-action"],["mat-cell","",1,"width-action"],["mat-icon-button","","matTooltip","Editar registro",3,"click"],["mat-icon-button","","matTooltip","Eliminar registro",3,"click"],["mat-header-row",""],["mat-row",""],[1,"text-3xl","pt-2","font-semibold","tracking-tight","text-center"]],template:function(t,r){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"div",4),o.TgZ(5,"div",5),o.TgZ(6,"div",6),o._uU(7,"Lista de horarios"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(8,"div",7),o.TgZ(9,"div"),o.TgZ(10,"mat-form-field",8),o.TgZ(11,"button",9),o.NdJ("click",function(){return r.onRefresh()}),o._UZ(12,"mat-icon",10),o.qZA(),o.TgZ(13,"input",11),o.NdJ("ngModelChange",function(l){return r.nombreHorario=l})("keyup.enter",function(){return r.onLoadTableHorario()}),o.qZA(),o.qZA(),o.qZA(),o.TgZ(14,"button",12),o.NdJ("click",function(){return r.onAddHorario()}),o._UZ(15,"mat-icon",10),o.TgZ(16,"span",13),o._uU(17,"Agregar Horario"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(18,"div",14),o.TgZ(19,"div",15),o.YNc(20,z,18,7,"div",16),o.YNc(21,D,3,0,"div",17),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(12),o.Q6J("svgIcon","heroicons_solid:x"),o.xp6(1),o.Q6J("autocomplete","off")("placeholder","Buscar por nombre")("ngModel",r.nombreHorario),o.xp6(1),o.Q6J("color","primary"),o.xp6(1),o.Q6J("svgIcon","heroicons_solid:document-add"),o.xp6(5),o.Q6J("ngIf",!!r.tableHorario&&!r.tableHorario.empty),o.xp6(1),o.Q6J("ngIf",!!r.tableHorario&&r.tableHorario.empty))},directives:[d.KE,g.lW,d.qo,Z.Hw,H.Nt,s.Fj,I.gM,s.JJ,s.On,p.O5,m.BZ,m.w1,m.fO,m.Dz,m.as,m.nj,T.NW,m.ge,m.ev,m.XQ,m.Gk],styles:["table[_ngcontent-%COMP%]{width:100%}.width-action[_ngcontent-%COMP%]{width:150px}"]}),e})();var Q=n(1553),k=n(495),O=n(9367),P=n(3072);const E=[{path:"",component:M}];let L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[{provide:T.ye,useClass:P.N}],imports:[[p.ez,Q.Bz.forChild(E),k.q,O.m]]}),e})()}}]);