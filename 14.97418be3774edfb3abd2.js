(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{B1AT:function(n,e,t){"use strict";t.r(e);var o=t("CcnG"),l=function(){return function(){}}(),u=t("pMnS"),r=t("VTKs"),a=t("EtQq"),d=t("ZYCi"),i=t("RANn"),c=t("A7o+"),p=t("fDe+"),m=t("jQpT"),s=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),f=o["\u0275crt"]({encapsulation:0,styles:[""],data:{}});function h(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-navbar",[],null,null,null,r.b,r.a)),o["\u0275did"](1,245760,null,0,a.a,[o.Renderer,d.l,i.a,c.j],null,null),(n()(),o["\u0275eld"](2,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o["\u0275did"](3,212992,null,0,d.o,[d.b,o.ViewContainerRef,o.ComponentFactoryResolver,[8,null],o.ChangeDetectorRef],null,null),(n()(),o["\u0275eld"](4,0,null,null,1,"app-footer",[],null,null,null,p.b,p.a)),o["\u0275did"](5,4440064,null,0,m.a,[d.l],null,null)],function(n,e){n(e,1,0),n(e,3,0),n(e,5,0)},null)}function g(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-dev",[],null,null,null,h,f)),o["\u0275did"](1,114688,null,0,s,[],null,null)],function(n,e){n(e,1,0)},null)}var v=o["\u0275ccf"]("app-dev",s,g,{},{},[]),C=t("Ip0R"),b=t("eDkP"),j=t("Fzqc"),M=t("M2Lx"),y=t("uGex"),R=t("mVsa"),A=(t("q8iK"),t("Wcq6")),w=t("fvl4"),I=t("ZBkt"),L=function(){function n(n,e){this.db=n,this.afAuth=e}return n.prototype.getCurrentUser=function(){return new Promise(function(n,e){A.auth().onAuthStateChanged(function(t){t?n(t):e("No user logged in")})})},n.prototype.updateCurrentUser=function(n){return new Promise(function(e,t){var o=A.auth().currentUser;o.updateProfile({displayName:n.name,photoURL:o.photoURL}).then(function(n){e(n)},function(n){return t(n)})})},n.ngInjectableDef=o.defineInjectable({factory:function(){return new n(o.inject(w.a),o.inject(I.a))},token:n,providedIn:"root"}),n}(),N=function(){function n(n,e,t){this.afAuth=n,this.userService=e,this.router=t}return n.prototype.canActivate=function(){var n=this;return new Promise(function(e,t){n.userService.getCurrentUser().then(function(n){return e(!0)},function(t){return n.router.navigate(["/app-dev/login"]),e(!1)})})},n.ngInjectableDef=o.defineInjectable({factory:function(){return new n(o.inject(I.a),o.inject(L),o.inject(d.l))},token:n,providedIn:"root"}),n}(),D=function(){return function(){}}(),k=t("4c35"),q=t("dWZg"),F=t("qAlS"),P=t("Wf4p"),S=t("ZYjt"),U=t("seP3"),E=t("PCNd");t.d(e,"ApplicationDevelopmentsModuleNgFactory",function(){return x});var x=o["\u0275cmf"](l,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,v]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,C.NgLocalization,C.NgLocaleLocalization,[o.LOCALE_ID,[2,C["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,b.c,b.c,[b.i,b.e,o.ComponentFactoryResolver,b.h,b.f,o.Injector,o.NgZone,C.DOCUMENT,j.b,[2,C.Location]]),o["\u0275mpd"](5120,b.j,b.k,[b.c]),o["\u0275mpd"](4608,M.c,M.c,[]),o["\u0275mpd"](5120,y.a,y.b,[b.c]),o["\u0275mpd"](5120,R.a,R.c,[b.c]),o["\u0275mpd"](1073742336,d.n,d.n,[[2,d.t],[2,d.l]]),o["\u0275mpd"](1073742336,D,D,[]),o["\u0275mpd"](1073742336,C.CommonModule,C.CommonModule,[]),o["\u0275mpd"](1073742336,j.a,j.a,[]),o["\u0275mpd"](1073742336,k.d,k.d,[]),o["\u0275mpd"](1073742336,q.b,q.b,[]),o["\u0275mpd"](1073742336,F.b,F.b,[]),o["\u0275mpd"](1073742336,b.g,b.g,[]),o["\u0275mpd"](1073742336,P.j,P.j,[[2,P.c],[2,S.g]]),o["\u0275mpd"](1073742336,P.s,P.s,[]),o["\u0275mpd"](1073742336,P.q,P.q,[]),o["\u0275mpd"](1073742336,P.o,P.o,[]),o["\u0275mpd"](1073742336,M.d,M.d,[]),o["\u0275mpd"](1073742336,U.d,U.d,[]),o["\u0275mpd"](1073742336,y.d,y.d,[]),o["\u0275mpd"](1073742336,R.b,R.b,[]),o["\u0275mpd"](1073742336,c.g,c.g,[]),o["\u0275mpd"](1073742336,E.a,E.a,[]),o["\u0275mpd"](1073742336,l,l,[]),o["\u0275mpd"](1024,d.j,function(){return[[{path:"",component:s,children:[{path:"",loadChildren:"../examples/examples.module#ExamplesModule"},{path:"eas-starditoetus",loadChildren:"../eas-starditoetus/eas-starditoetus.module#EasStarditoetusModule"},{path:"app-store",loadChildren:"../app-store/app-store.module#AppStoreModule",canActivate:[N]},{path:"contacts",loadChildren:"../contacts/contacts.module#ContactsModule"},{path:"about",loadChildren:"../about/about.module#AboutModule"},{path:"development",loadChildren:"../development/development.module#DevelopmentModule"},{path:"education",loadChildren:"../education/education.module#EducationModule"},{path:"login",loadChildren:"../login/login.module#LoginModule"},{path:"registration",loadChildren:"../registration/registration.module#RegistrationModule"},{path:"**",redirectTo:""}]}]]},[])])})}}]);