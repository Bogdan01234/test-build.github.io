(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6POH":function(n,l,o){"use strict";o.r(l);var u=o("CcnG"),t=function(){return function(){}}(),e=o("9AJC"),r=o("pMnS"),i=o("gIcY"),s=o("A7o+"),a=o("Ip0R"),c=o("ZYCi"),d=o("8PDw"),p=function(){function n(n,l,o){this.authService=n,this.router=l,this.fb=o,this.errorMessage="",this.successMessage="",this.registerForm=this.fb.group({email:["",i.Validators.required],password:["",i.Validators.required]})}return n.prototype.ngOnInit=function(){},n.prototype.ngOnDestroy=function(){},n.prototype.tryFacebookLogin=function(){var n=this;this.authService.doFacebookLogin().then(function(l){n.router.navigate(["/app-dev/app-store"])},function(n){return console.log(n)})},n.prototype.tryTwitterLogin=function(){var n=this;this.authService.doTwitterLogin().then(function(l){n.router.navigate(["/app-dev/app-store"])},function(n){return console.log(n)})},n.prototype.tryGoogleLogin=function(){var n=this;this.authService.doGoogleLogin().then(function(l){n.router.navigate(["/app-dev/app-store"])},function(n){return console.log(n)})},n.prototype.singUp=function(){var n=this;this.authService.doRegister(this.registerForm.value).then(function(l){console.log(l),n.errorMessage="",n.successMessage="Your account has been created"},function(l){console.log(l),n.errorMessage=l.message,n.successMessage=""})},n}(),g=u["\u0275crt"]({encapsulation:0,styles:[[".content[_ngcontent-%COMP%]{margin:6rem auto 0;min-height:calc(100vh - 20.9rem)}.form[_ngcontent-%COMP%]{width:100%;padding:37px 10px;border-radius:.1875rem;box-shadow:0 5px 25px 0 rgba(0,0,0,.2)}.pull-left[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:#2c2c2c}.error[_ngcontent-%COMP%]{color:red;font-size:.8rem}@media (min-width:768px){.content[_ngcontent-%COMP%]{min-height:calc(100vh - 10.2rem)}}@media (min-width:992px){.content[_ngcontent-%COMP%]{min-height:calc(100vh - 11.2rem)}}@media (min-width:1200px){.content[_ngcontent-%COMP%]{min-height:calc(100vh - 12.36rem)}}"]],data:{}});function m(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,55,"div",[["class","col-md-4 content d-flex align-items-center"]],null,null,null,null,null)),(n()(),u["\u0275eld"](1,0,null,null,54,"form",[["action",""],["class","form"],["method",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,o){var t=!0;return"submit"===l&&(t=!1!==u["\u0275nov"](n,3).onSubmit(o)&&t),"reset"===l&&(t=!1!==u["\u0275nov"](n,3).onReset()&&t),t},null,null)),u["\u0275did"](2,16384,null,0,i["\u0275angular_packages_forms_forms_bh"],[],null,null),u["\u0275did"](3,540672,null,0,i.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),u["\u0275prd"](2048,null,i.ControlContainer,null,[i.FormGroupDirective]),u["\u0275did"](5,16384,null,0,i.NgControlStatusGroup,[[4,i.ControlContainer]],null,null),(n()(),u["\u0275eld"](6,0,null,null,9,"div",[["class","header header-primary text-center"]],null,null,null,null,null)),(n()(),u["\u0275eld"](7,0,null,null,3,"div",[["class","logo-container"]],null,null,null,null,null)),(n()(),u["\u0275eld"](8,0,null,null,2,"h2",[["class","mb-2"]],null,null,null,null,null)),(n()(),u["\u0275ted"](9,null,["",""])),u["\u0275pid"](131072,s.i,[s.j,u.ChangeDetectorRef]),(n()(),u["\u0275eld"](11,0,null,null,4,"div",[["class","text-center mb-2"]],null,null,null,null,null)),(n()(),u["\u0275eld"](12,0,null,null,1,"button",[["class","btn btn-primary btn-icon btn-round"]],null,[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==n.component.tryGoogleLogin()&&u),u},null,null)),(n()(),u["\u0275eld"](13,0,null,null,0,"i",[["class","fab fa-google-plus"]],null,null,null,null,null)),(n()(),u["\u0275eld"](14,0,null,null,1,"button",[["class","btn btn-primary btn-icon btn-round"]],null,[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==n.component.tryFacebookLogin()&&u),u},null,null)),(n()(),u["\u0275eld"](15,0,null,null,0,"i",[["class","fab fa-facebook-square"]],null,null,null,null,null)),(n()(),u["\u0275eld"](16,0,null,null,12,"div",[["class","input-group input-lg"]],null,null,null,null,null)),u["\u0275did"](17,278528,null,0,a.NgClass,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](18,{"input-group-focus":0}),(n()(),u["\u0275eld"](19,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(n()(),u["\u0275eld"](20,0,null,null,1,"span",[["class","input-group-text"]],null,null,null,null,null)),(n()(),u["\u0275eld"](21,0,null,null,0,"i",[["class","now-ui-icons ui-1_email-85"]],null,null,null,null,null)),(n()(),u["\u0275eld"](22,0,null,null,6,"input",[["class","form-control"],["formControlName","email"],["type","text"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var t=!0,e=n.component;return"input"===l&&(t=!1!==u["\u0275nov"](n,23)._handleInput(o.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,23).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,23)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,23)._compositionEnd(o.target.value)&&t),"focus"===l&&(t=0!=(e.focus=!0)&&t),"blur"===l&&(t=0!=(e.focus=!1)&&t),t},null,null)),u["\u0275did"](23,16384,null,0,i.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,i.NG_VALUE_ACCESSOR,function(n){return[n]},[i.DefaultValueAccessor]),u["\u0275did"](25,671744,null,0,i.FormControlName,[[3,i.ControlContainer],[8,null],[8,null],[6,i.NG_VALUE_ACCESSOR],[2,i["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,i.NgControl,null,[i.FormControlName]),u["\u0275did"](27,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),u["\u0275pid"](131072,s.i,[s.j,u.ChangeDetectorRef]),(n()(),u["\u0275eld"](29,0,null,null,12,"div",[["class","input-group input-lg"]],null,null,null,null,null)),u["\u0275did"](30,278528,null,0,a.NgClass,[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](31,{"input-group-focus":0}),(n()(),u["\u0275eld"](32,0,null,null,2,"div",[["class","input-group-prepend"]],null,null,null,null,null)),(n()(),u["\u0275eld"](33,0,null,null,1,"span",[["class","input-group-text"]],null,null,null,null,null)),(n()(),u["\u0275eld"](34,0,null,null,0,"i",[["class","now-ui-icons objects_key-25"]],null,null,null,null,null)),(n()(),u["\u0275eld"](35,0,null,null,6,"input",[["class","form-control"],["formControlName","password"],["type","password"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,o){var t=!0,e=n.component;return"input"===l&&(t=!1!==u["\u0275nov"](n,36)._handleInput(o.target.value)&&t),"blur"===l&&(t=!1!==u["\u0275nov"](n,36).onTouched()&&t),"compositionstart"===l&&(t=!1!==u["\u0275nov"](n,36)._compositionStart()&&t),"compositionend"===l&&(t=!1!==u["\u0275nov"](n,36)._compositionEnd(o.target.value)&&t),"focus"===l&&(t=0!=(e.focus1=!0)&&t),"blur"===l&&(t=0!=(e.focus1=!1)&&t),t},null,null)),u["\u0275did"](36,16384,null,0,i.DefaultValueAccessor,[u.Renderer2,u.ElementRef,[2,i.COMPOSITION_BUFFER_MODE]],null,null),u["\u0275prd"](1024,null,i.NG_VALUE_ACCESSOR,function(n){return[n]},[i.DefaultValueAccessor]),u["\u0275did"](38,671744,null,0,i.FormControlName,[[3,i.ControlContainer],[8,null],[8,null],[6,i.NG_VALUE_ACCESSOR],[2,i["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,i.NgControl,null,[i.FormControlName]),u["\u0275did"](40,16384,null,0,i.NgControlStatus,[[4,i.NgControl]],null,null),u["\u0275pid"](131072,s.i,[s.j,u.ChangeDetectorRef]),(n()(),u["\u0275eld"](42,0,null,null,1,"label",[["class","error"]],null,null,null,null,null)),(n()(),u["\u0275ted"](43,null,["",""])),(n()(),u["\u0275eld"](44,0,null,null,1,"label",[["class","success"]],null,null,null,null,null)),(n()(),u["\u0275ted"](45,null,["",""])),(n()(),u["\u0275eld"](46,0,null,null,3,"div",[["class","footer text-center"]],null,null,null,null,null)),(n()(),u["\u0275eld"](47,0,null,null,2,"button",[["class","btn btn-primary btn-round btn-lg btn-block"],["type","submit"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,o){var u=!0;return"click"===l&&(u=!1!==n.component.singUp()&&u),u},null,null)),(n()(),u["\u0275ted"](48,null,[" "," "])),u["\u0275pid"](131072,s.i,[s.j,u.ChangeDetectorRef]),(n()(),u["\u0275eld"](50,0,null,null,5,"div",[["class","pull-left"]],null,null,null,null,null)),(n()(),u["\u0275eld"](51,0,null,null,4,"h6",[],null,null,null,null,null)),(n()(),u["\u0275eld"](52,0,null,null,3,"a",[["class","link"],["routerLink","/app-dev/login"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,o){var t=!0;return"click"===l&&(t=!1!==u["\u0275nov"](n,53).onClick(o.button,o.ctrlKey,o.metaKey,o.shiftKey)&&t),t},null,null)),u["\u0275did"](53,671744,null,0,c.m,[c.l,c.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),(n()(),u["\u0275ted"](54,null,[" "," "])),u["\u0275pid"](131072,s.i,[s.j,u.ChangeDetectorRef])],function(n,l){var o=l.component;n(l,3,0,o.registerForm);var u=n(l,18,0,!0===o.focus);n(l,17,0,"input-group input-lg",u),n(l,25,0,"email");var t=n(l,31,0,!0===o.focus1);n(l,30,0,"input-group input-lg",t),n(l,38,0,"password"),n(l,53,0,"/app-dev/login")},function(n,l){var o=l.component;n(l,1,0,u["\u0275nov"](l,5).ngClassUntouched,u["\u0275nov"](l,5).ngClassTouched,u["\u0275nov"](l,5).ngClassPristine,u["\u0275nov"](l,5).ngClassDirty,u["\u0275nov"](l,5).ngClassValid,u["\u0275nov"](l,5).ngClassInvalid,u["\u0275nov"](l,5).ngClassPending),n(l,9,0,u["\u0275unv"](l,9,0,u["\u0275nov"](l,10).transform("REGISTRATION.TITLE"))),n(l,22,0,u["\u0275inlineInterpolate"](1,"",u["\u0275unv"](l,22,0,u["\u0275nov"](l,28).transform("LANDING.EMAIL")),""),u["\u0275nov"](l,27).ngClassUntouched,u["\u0275nov"](l,27).ngClassTouched,u["\u0275nov"](l,27).ngClassPristine,u["\u0275nov"](l,27).ngClassDirty,u["\u0275nov"](l,27).ngClassValid,u["\u0275nov"](l,27).ngClassInvalid,u["\u0275nov"](l,27).ngClassPending),n(l,35,0,u["\u0275inlineInterpolate"](1,"",u["\u0275unv"](l,35,0,u["\u0275nov"](l,41).transform("LOGIN.PASSWORD")),""),u["\u0275nov"](l,40).ngClassUntouched,u["\u0275nov"](l,40).ngClassTouched,u["\u0275nov"](l,40).ngClassPristine,u["\u0275nov"](l,40).ngClassDirty,u["\u0275nov"](l,40).ngClassValid,u["\u0275nov"](l,40).ngClassInvalid,u["\u0275nov"](l,40).ngClassPending),n(l,43,0,o.errorMessage),n(l,45,0,o.successMessage),n(l,47,0,o.registerForm.invalid),n(l,48,0,u["\u0275unv"](l,48,0,u["\u0275nov"](l,49).transform("LOGIN.ACCOUNT"))),n(l,52,0,u["\u0275nov"](l,53).target,u["\u0275nov"](l,53).href),n(l,54,0,u["\u0275unv"](l,54,0,u["\u0275nov"](l,55).transform("REGISTRATION.RETURN")))})}function f(n){return u["\u0275vid"](0,[(n()(),u["\u0275eld"](0,0,null,null,1,"app-registration",[],null,null,null,m,g)),u["\u0275did"](1,245760,null,0,p,[d.a,c.l,i.FormBuilder],null,null)],function(n,l){n(l,1,0)},null)}var v=u["\u0275ccf"]("app-registration",p,f,{},{},[]),h=o("4GxJ"),C=o("RFs3"),_=o("bjCr"),b=o("0tkt"),y=function(){return function(){}}();o.d(l,"RegistrationModuleNgFactory",function(){return k});var k=u["\u0275cmf"](t,[],function(n){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[e.a,e.b,e.f,e.g,e.c,e.d,e.e,r.a,v]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[u.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,i["\u0275angular_packages_forms_forms_j"],i["\u0275angular_packages_forms_forms_j"],[]),u["\u0275mpd"](4608,i.FormBuilder,i.FormBuilder,[]),u["\u0275mpd"](4608,h.u,h.u,[u.ComponentFactoryResolver,u.Injector,h.eb,h.v]),u["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),u["\u0275mpd"](1073742336,i["\u0275angular_packages_forms_forms_bc"],i["\u0275angular_packages_forms_forms_bc"],[]),u["\u0275mpd"](1073742336,i.FormsModule,i.FormsModule,[]),u["\u0275mpd"](1073742336,i.ReactiveFormsModule,i.ReactiveFormsModule,[]),u["\u0275mpd"](1073742336,h.c,h.c,[]),u["\u0275mpd"](1073742336,h.g,h.g,[]),u["\u0275mpd"](1073742336,h.h,h.h,[]),u["\u0275mpd"](1073742336,h.l,h.l,[]),u["\u0275mpd"](1073742336,h.m,h.m,[]),u["\u0275mpd"](1073742336,h.r,h.r,[]),u["\u0275mpd"](1073742336,h.s,h.s,[]),u["\u0275mpd"](1073742336,h.w,h.w,[]),u["\u0275mpd"](1073742336,h.A,h.A,[]),u["\u0275mpd"](1073742336,h.D,h.D,[]),u["\u0275mpd"](1073742336,h.G,h.G,[]),u["\u0275mpd"](1073742336,h.J,h.J,[]),u["\u0275mpd"](1073742336,h.M,h.M,[]),u["\u0275mpd"](1073742336,h.Q,h.Q,[]),u["\u0275mpd"](1073742336,h.R,h.R,[]),u["\u0275mpd"](1073742336,h.S,h.S,[]),u["\u0275mpd"](1073742336,h.x,h.x,[]),u["\u0275mpd"](1073742336,C.NouisliderModule,C.NouisliderModule,[]),u["\u0275mpd"](1073742336,_.OwlModule,_.OwlModule,[]),u["\u0275mpd"](1073742336,s.g,s.g,[]),u["\u0275mpd"](1073742336,b.a,b.a,[]),u["\u0275mpd"](1073742336,c.n,c.n,[[2,c.t],[2,c.l]]),u["\u0275mpd"](1073742336,y,y,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,c.j,function(){return[[{path:"",component:p}]]},[])])})},"8PDw":function(n,l,o){"use strict";o.d(l,"a",function(){return i}),o("q8iK");var u=o("Wcq6"),t=(o("6nsN"),o("CcnG")),e=o("ZBkt"),r=o("t/Na"),i=function(){function n(n,l){this.afAuth=n,this.http=l}return n.prototype.doFacebookLogin=function(){var n=this;return new Promise(function(l,o){var t=new u.auth.FacebookAuthProvider;n.afAuth.auth.signInWithPopup(t).then(function(n){l(n)},function(n){console.log(n),o(n)})})},n.prototype.doTwitterLogin=function(){var n=this;return new Promise(function(l,o){var t=new u.auth.TwitterAuthProvider;n.afAuth.auth.signInWithPopup(t).then(function(n){l(n)},function(n){console.log(n),o(n)})})},n.prototype.doGoogleLogin=function(){var n=this;return new Promise(function(l,o){var t=new u.auth.GoogleAuthProvider;t.addScope("profile"),t.addScope("email"),n.afAuth.auth.signInWithPopup(t).then(function(n){l(n)},function(n){console.log(n),o(n)})})},n.prototype.doRegister=function(n){return new Promise(function(l,o){u.auth().createUserWithEmailAndPassword(n.email,n.password).then(function(n){l(n)},function(n){return o(n)})})},n.prototype.doLogin=function(n){return new Promise(function(l,o){u.auth().signInWithEmailAndPassword(n.email,n.password).then(function(n){l(n)},function(n){return o(n)})})},n.prototype.sentMsg=function(n){return this.http.post("https://cors-anywhere.herokuapp.com/https://us-central1-tekla-apps.cloudfunctions.net/sendMail",n)},n.prototype.doLogout=function(){var n=this;return new Promise(function(l,o){u.auth().currentUser?(n.afAuth.auth.signOut(),l()):o()})},n.ngInjectableDef=t.defineInjectable({factory:function(){return new n(t.inject(e.a),t.inject(r.c))},token:n,providedIn:"root"}),n}()},q8iK:function(n,l){}}]);