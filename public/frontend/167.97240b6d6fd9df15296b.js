(self.webpackChunkarrowsoft_project_management=self.webpackChunkarrowsoft_project_management||[]).push([[167],{9167:(e,t,n)=>{"use strict";n.r(t),n.d(t,{UsersReportModule:()=>x});var r=n(8583),o=n(7441),s=n(4655),c=n(8002),i=n(7716),a=n(4674),g=n(2820),p=n(7659),m=n(8295),d=n(2458);const l=function(e,t){return[e,t]};function u(e,t){if(1&e&&(i.TgZ(0,"mat-option",6),i._uU(1),i.ALo(2,"titlecase"),i.qZA()),2&e){const e=t.$implicit;i.Q6J("value",i.WLB(4,l,e.id,e.name)),i.xp6(1),i.hij(" ",i.lcZ(2,2,e.name)," ")}}function _(e,t){1&e&&(i.TgZ(0,"p"),i._uU(1,"Loading..."),i.qZA())}function Z(e,t){1&e&&(i.TgZ(0,"p"),i._uU(1,"No Screenshot for This User!"),i.qZA())}function f(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"span"),i.TgZ(1,"img",16),i.NdJ("click",function(){const t=i.CHM(e).index,n=i.oxw(2).ngIf;return i.oxw().confirmService.openImageModal(n.screenshot,t)}),i.qZA(),i.TgZ(2,"p"),i._uU(3),i.ALo(4,"date"),i.qZA(),i.qZA()}if(2&e){const e=t.$implicit;i.xp6(1),i.Q6J("src","https://niramoy.xyz/"+e.screenshot,i.LSH)("alt","taken at "+e.created_at),i.xp6(2),i.AsE(" ",e.created_at.split(" ")[1]," on ",i.lcZ(4,4,e.created_at)," ")}}function h(e,t){if(1&e&&(i.TgZ(0,"div",14),i.YNc(1,f,5,6,"span",15),i.qZA()),2&e){const e=i.oxw().ngIf;i.xp6(1),i.Q6J("ngForOf",e.screenshot)}}function O(e,t){if(1&e&&(i.TgZ(0,"div",18),i.TgZ(1,"h2"),i._uU(2),i.ALo(3,"titlecase"),i.qZA(),i.TgZ(4,"div",19),i.TgZ(5,"p"),i.TgZ(6,"b"),i._uU(7,"Start Date:"),i.qZA(),i._uU(8),i.ALo(9,"date"),i.qZA(),i.TgZ(10,"p"),i.TgZ(11,"b"),i._uU(12,"Deadline:"),i.qZA(),i._uU(13),i.ALo(14,"date"),i.qZA(),i.qZA(),i.qZA()),2&e){const e=t.$implicit;i.xp6(2),i.Oqu(i.lcZ(3,3,e.project_name)),i.xp6(6),i.hij(" ",i.lcZ(9,5,e.start_date),""),i.xp6(5),i.hij(" ",i.lcZ(14,7,e.target_end_date),"")}}function M(e,t){if(1&e&&(i.ynx(0),i.YNc(1,O,15,9,"div",17),i.BQk()),2&e){const e=i.oxw().ngIf;i.xp6(1),i.Q6J("ngForOf",e.project)}}function C(e,t){if(1&e&&(i.TgZ(0,"div",7),i.TgZ(1,"div",8),i.TgZ(2,"div",9),i.TgZ(3,"p"),i._uU(4,"Worked Today"),i.qZA(),i.TgZ(5,"h2"),i._uU(6),i.qZA(),i.qZA(),i.TgZ(7,"div",10),i.TgZ(8,"p"),i._uU(9,"Worked this Week"),i.qZA(),i.TgZ(10,"h2"),i._uU(11),i.qZA(),i.qZA(),i.qZA(),i.TgZ(12,"div",11),i.TgZ(13,"h2"),i._uU(14,"Recent Screenshots"),i.qZA(),i.YNc(15,Z,2,0,"p",4),i.YNc(16,h,2,1,"div",12),i.qZA(),i.TgZ(17,"div",13),i.TgZ(18,"h2"),i._uU(19),i.qZA(),i.YNc(20,M,2,1,"ng-container",4),i.qZA(),i.qZA()),2&e){const e=t.ngIf;i.xp6(6),i.Oqu(e.todayRecord),i.xp6(5),i.Oqu(e.lastSevenDayRecord),i.xp6(4),i.Q6J("ngIf",!e.screenshot.length),i.xp6(1),i.Q6J("ngIf",e.screenshot.length),i.xp6(3),i.hij(" ",e.project.length?"Projects":"User is Currently Not Assigned to Any Projects."," "),i.xp6(1),i.Q6J("ngIf",e.project.length)}}const A=[{path:"",component:(()=>{class e{constructor(e,t,n){this.memberService=e,this.reportService=t,this.confirmService=n}ngOnInit(){this.members$=this.memberService.getMembers().pipe((0,c.U)(e=>e.map(e=>({id:e.id,name:e.first_name+" "+e.last_name}))))}showMemberReport(e){this.member=e.value[1],this.member_report$=this.reportService.getUserReport(e.value[0]).pipe((0,c.U)(e=>e.data))}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(a.Z),i.Y36(g.r),i.Y36(p.Y))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-users-report"]],decls:14,vars:12,consts:[[1,"control-panel"],["appearance","outline"],[3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["class","report",4,"ngIf"],[3,"value"],[1,"report"],[1,"times"],[1,"today"],[1,"week"],[1,"screenshot"],["class","screenshots",4,"ngIf"],[1,"projects"],[1,"screenshots"],[4,"ngFor","ngForOf"],["loading","lazy",3,"src","alt","click"],["class","project",4,"ngFor","ngForOf"],[1,"project"],[1,"information"]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"h1"),i._uU(2),i.ALo(3,"titlecase"),i.qZA(),i.TgZ(4,"mat-form-field",1),i.TgZ(5,"mat-label"),i._uU(6,"Select Member"),i.qZA(),i.TgZ(7,"mat-select",2),i.NdJ("selectionChange",function(e){return t.showMemberReport(e)}),i.YNc(8,u,3,7,"mat-option",3),i.ALo(9,"async"),i.qZA(),i.qZA(),i.qZA(),i.YNc(10,_,2,0,"p",4),i.ALo(11,"async"),i.YNc(12,C,21,6,"div",5),i.ALo(13,"async")),2&e&&(i.xp6(2),i.hij(" ",t.member?"Report for "+i.lcZ(3,4,t.member):"Please Select a Member..."," "),i.xp6(6),i.Q6J("ngForOf",i.lcZ(9,6,t.members$)),i.xp6(2),i.Q6J("ngIf",t.member&&!i.lcZ(11,8,t.member_report$)),i.xp6(2),i.Q6J("ngIf",i.lcZ(13,10,t.member_report$)))},directives:[m.KE,m.hX,o.gD,r.sg,r.O5,d.ey],pipes:[r.rS,r.Ov,r.uU],styles:[".control-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.report[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-bottom:2rem}.times[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-gap:1rem;gap:1rem}.times[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:1rem 1rem 0}.screenshot[_ngcontent-%COMP%], .times[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background:#00081405;border-radius:.5rem}.screenshot[_ngcontent-%COMP%]{padding:1rem}.screenshot[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,200px));grid-gap:1rem;gap:1rem}.screenshot[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{cursor:pointer}.screenshot[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:100px;border-radius:.25rem}.screenshot[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;transition:.2s ease-in;opacity:0;margin:0}.screenshot[_ngcontent-%COMP%]   .screenshots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{opacity:1}.projects[_ngcontent-%COMP%]{background:#00081405;border-radius:.5rem;padding:.5rem 1rem}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]{border:1px solid #00081410;border-radius:.25rem;padding:.5rem 1rem;margin-bottom:1rem}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0;padding:0}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]{display:flex;grid-gap:2rem;gap:2rem}.projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:0;color:#00081480}@media (max-width: 750px){.control-panel[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}}"]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[s.Bz.forChild(A)],s.Bz]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[r.ez,P,o.LD]]}),e})()},4674:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(5917),o=n(8002),s=n(8307),c=n(9019),i=n(7716),a=n(1841);let g=(()=>{class e{constructor(e){this.http=e,this.URL=c.N.BASE_API_URL}getMembers(){return sessionStorage.getItem("users")?(0,r.of)(JSON.parse(sessionStorage.getItem("users"))):this.http.get(`${this.URL}/users`).pipe((0,o.U)(e=>e.user.data),(0,s.b)(e=>sessionStorage.setItem("users",JSON.stringify(e))))}createMember(e){return this.http.post(`${this.URL}/register`,e)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(a.eN))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);