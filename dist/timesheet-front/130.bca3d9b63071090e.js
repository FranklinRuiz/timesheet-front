"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[130],{9130:(L,m,i)=>{i.r(m),i.d(m,{AsistenciaModule:()=>R});var d=i(6019),t=i(3668),u=i(5304),r=i(4522),f=i(8260);let A=(()=>{class e{constructor(n){this.http=n,this.url=f.N.apiurl}listAsistencia(n,s){let o=new r.LE;return o=o.append("page",n),o=o.append("size",s),o=o.append("sort","idAsistencia,desc"),this.http.get(`${this.url}/api/asistencia/list`,{params:o})}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(r.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Z=i(9966),g=i(86),h=i(9112),c=i(960),p=i(2968),x=i(7444);function T(e,a){1&e&&(t.TgZ(0,"th",31),t._uU(1," EMPLEADO "),t.qZA())}function _(e,a){if(1&e&&(t.TgZ(0,"td",32),t.TgZ(1,"span",33),t._uU(2),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",n.empleado," ")}}function v(e,a){1&e&&(t.TgZ(0,"th",31),t._uU(1," TIPO TRABAJO "),t.qZA())}function C(e,a){if(1&e&&(t.TgZ(0,"td",32),t.TgZ(1,"span",33),t._uU(2),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",n.tipoTrabajo," ")}}function j(e,a){1&e&&(t.TgZ(0,"th",31),t._uU(1," ENTRADA "),t.qZA())}function B(e,a){if(1&e&&(t.TgZ(0,"td",32),t.TgZ(1,"span",33),t._uU(2),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",n.horaEntrada," ")}}function w(e,a){1&e&&(t.TgZ(0,"th",31),t._uU(1," SALIDA "),t.qZA())}function y(e,a){if(1&e&&(t.TgZ(0,"td",32),t.TgZ(1,"span",33),t._uU(2),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",n.horaSalida," ")}}function q(e,a){1&e&&(t.TgZ(0,"th",31),t._uU(1," FECHA "),t.qZA())}function N(e,a){if(1&e&&(t.TgZ(0,"td",32),t.TgZ(1,"span",33),t._uU(2),t.ALo(3,"date"),t.qZA(),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",t.xi3(3,1,n.fecha,"dd/MM/yyyy")," ")}}function b(e,a){1&e&&(t.TgZ(0,"th",34),t._uU(1," ACCI\xd3N "),t.qZA())}function D(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"td",35),t.TgZ(1,"button",36),t.NdJ("click",function(){const l=t.CHM(n).$implicit;return t.oxw(2).onEditHorario(l)}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA(),t.qZA(),t.TgZ(4,"button",37),t.NdJ("click",function(){const l=t.CHM(n).$implicit;return t.oxw(2).onDeleteHorario(l.idHorario)}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA(),t.qZA(),t.qZA()}}function U(e,a){1&e&&t._UZ(0,"tr",38)}function Y(e,a){1&e&&t._UZ(0,"tr",39)}const Q=function(){return[5,10,15,20]};function S(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div",15),t.TgZ(1,"div",16),t.TgZ(2,"table",17),t.ynx(3,18),t.YNc(4,T,2,0,"th",19),t.YNc(5,_,3,1,"td",20),t.BQk(),t.ynx(6,21),t.YNc(7,v,2,0,"th",19),t.YNc(8,C,3,1,"td",20),t.BQk(),t.ynx(9,22),t.YNc(10,j,2,0,"th",19),t.YNc(11,B,3,1,"td",20),t.BQk(),t.ynx(12,23),t.YNc(13,w,2,0,"th",19),t.YNc(14,y,3,1,"td",20),t.BQk(),t.ynx(15,24),t.YNc(16,q,2,0,"th",19),t.YNc(17,N,4,4,"td",20),t.BQk(),t.ynx(18,25),t.YNc(19,b,2,0,"th",26),t.YNc(20,D,7,0,"td",27),t.BQk(),t.YNc(21,U,1,0,"tr",28),t.YNc(22,Y,1,0,"tr",29),t.qZA(),t.qZA(),t.TgZ(23,"mat-paginator",30),t.NdJ("page",function(o){return t.CHM(n),t.oxw().onChangePagination(o)}),t.qZA(),t.qZA()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("dataSource",n.tableAsistencia.content),t.xp6(19),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("length",n.tableAsistencia.totalElements)("pageSize",n.tableAsistencia.size)("pageSizeOptions",t.DdM(6,Q))}}function J(e,a){1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div",40),t._uU(2,"\xa1No hay datos!"),t.qZA(),t.qZA())}let E=(()=>{class e{constructor(n,s,o){this.dialog=n,this.apiService=s,this.matSnackBar=o,this.displayedColumns=["empleado","tipoTrabajo","horaEntrada","horaSalida","fecha"],this.pagina=0,this.size=10}ngOnInit(){this.onLoadTableAsistencia()}onLoadTableAsistencia(){this.apiService.listAsistencia(this.pagina,this.size).subscribe(n=>{n&&(this.tableAsistencia=n.data)})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.uw),t.Y36(A),t.Y36(Z.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-bandeja-asistencia"]],decls:21,vars:6,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex","flex-col","min-w-0"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["mat-flat-button","",1,"fuse-mat-button-rounded",3,"color"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],[1,"flex-auto","p-6","sm:p-10"],[1,"flex","flex-col","p-2","pb-4","bg-card","rounded-2xl","shadow","overflow-hidden"],["class","example-container",4,"ngIf"],[4,"ngIf"],[1,"example-container"],[1,"flex"],["mat-table","","multiTemplateDataRows","",3,"dataSource"],["matColumnDef","empleado"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","tipoTrabajo"],["matColumnDef","horaEntrada"],["matColumnDef","horaSalida"],["matColumnDef","fecha"],["matColumnDef","accion"],["mat-header-cell","","class","width-action",4,"matHeaderCellDef"],["mat-cell","","class","width-action",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"length","pageSize","pageSizeOptions","page"],["mat-header-cell",""],["mat-cell",""],[1,"pr-6","whitespace-nowrap"],["mat-header-cell","",1,"width-action"],["mat-cell","",1,"width-action"],["mat-icon-button","","matTooltip","Editar registro",3,"click"],["mat-icon-button","","matTooltip","Eliminar registro",3,"click"],["mat-header-row",""],["mat-row",""],[1,"text-3xl","pt-2","font-semibold","tracking-tight","text-center"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t._uU(7,"Registros horas de trabajo "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",7),t.TgZ(9,"button",8),t._UZ(10,"mat-icon",9),t.TgZ(11,"span",10),t._uU(12,"Importar Asistencia"),t.qZA(),t.qZA(),t.TgZ(13,"button",8),t._UZ(14,"mat-icon",9),t.TgZ(15,"span",10),t._uU(16,"Descargar"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",11),t.TgZ(18,"div",12),t.YNc(19,S,24,7,"div",13),t.YNc(20,J,3,0,"div",14),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(9),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:upload"),t.xp6(3),t.Q6J("color","primary"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:document-download"),t.xp6(5),t.Q6J("ngIf",!!s.tableAsistencia&&!s.tableAsistencia.empty),t.xp6(1),t.Q6J("ngIf",!!s.tableAsistencia&&s.tableAsistencia.empty))},directives:[g.lW,h.Hw,d.O5,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,p.NW,c.ge,c.ev,x.gM,c.XQ,c.Gk],pipes:[d.uU],styles:["table[_ngcontent-%COMP%]{width:100%}.width-action[_ngcontent-%COMP%]{width:150px}"]}),e})();var M=i(1553),z=i(495),I=i(9367),H=i(3072);const O=[{path:"",component:E}];let R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[{provide:p.ye,useClass:H.N}],imports:[[d.ez,M.Bz.forChild(O),z.q,I.m]]}),e})()}}]);