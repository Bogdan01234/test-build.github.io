(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{QcA3:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),i=function(){return function(){}}(),u=t("9AJC"),a=t("pMnS"),o=t("mrSG"),s=t("4c35"),r=t("Wf4p"),d=t("K9Ia"),c=(t("pugT"),t("bne5"),t("F/XL")),p=t("p0ib"),m=(t("gI3B"),t("ihYY"),t("p0Sj"),t("ad02"),t("ny24")),g=(t("n6gG"),t("YSh2"),t("lLAP")),f=t("dWZg"),h=new e.InjectionToken("MatInkBarPositioner",{providedIn:"root",factory:function(){return function(l){return{left:l?(l.offsetLeft||0)+"px":"0",width:l?(l.offsetWidth||0)+"px":"0"}}}}),v=function(){function l(l,n,t){this._elementRef=l,this._ngZone=n,this._inkBarPositioner=t}return l.prototype.alignToElement=function(l){var n=this;this.show(),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(function(){requestAnimationFrame(function(){return n._setStyles(l)})}):this._setStyles(l)},l.prototype.show=function(){this._elementRef.nativeElement.style.visibility="visible"},l.prototype.hide=function(){this._elementRef.nativeElement.style.visibility="hidden"},l.prototype._setStyles=function(l){var n=this._inkBarPositioner(l),t=this._elementRef.nativeElement;t.style.left=n.left,t.style.width=n.width},l}(),b=function(){return function(l){this._elementRef=l}}(),k=function(l){function n(n,t,e,i,u){var a=l.call(this,n)||this;return a._dir=t,a._ngZone=e,a._changeDetectorRef=i,a._viewportRuler=u,a._onDestroy=new d.a,a}return Object(o.__extends)(n,l),Object.defineProperty(n.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(l){var n=this._elementRef.nativeElement;n.classList.remove("mat-background-"+this.backgroundColor),l&&n.classList.add("mat-background-"+l),this._backgroundColor=l},enumerable:!0,configurable:!0}),n.prototype.updateActiveLink=function(l){this._activeLinkChanged=!!l,this._changeDetectorRef.markForCheck()},n.prototype.ngAfterContentInit=function(){var l=this;this._ngZone.runOutsideAngular(function(){var n=l._dir?l._dir.change:Object(c.a)(null);return Object(p.a)(n,l._viewportRuler.change(10)).pipe(Object(m.a)(l._onDestroy)).subscribe(function(){return l._alignInkBar()})})},n.prototype.ngAfterContentChecked=function(){if(this._activeLinkChanged){var l=this._tabLinks.find(function(l){return l.active});this._activeLinkElement=l?l._elementRef:null,this._alignInkBar(),this._activeLinkChanged=!1}},n.prototype.ngOnDestroy=function(){this._onDestroy.next(),this._onDestroy.complete()},n.prototype._alignInkBar=function(){this._activeLinkElement?(this._inkBar.show(),this._inkBar.alignToElement(this._activeLinkElement.nativeElement)):this._inkBar.hide()},n}(Object(r.z)(Object(r.y)(b,"primary"))),_=function(){return function(){}}(),w=function(l){function n(n,t,e,i,u,a,o){var s=l.call(this)||this;return s._tabNavBar=n,s._elementRef=t,s._focusMonitor=o,s._isActive=!1,s._tabLinkRipple=new r.v(s,e,t,i),s._tabLinkRipple.setupTriggerEvents(t.nativeElement),s.rippleConfig=u||{},s.tabIndex=parseInt(a)||0,o&&o.monitor(t),s}return Object(o.__extends)(n,l),Object.defineProperty(n.prototype,"active",{get:function(){return this._isActive},set:function(l){l!==this._isActive&&(this._isActive=l,this._tabNavBar.updateActiveLink(this._elementRef))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"rippleDisabled",{get:function(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled},enumerable:!0,configurable:!0}),n.prototype.ngOnDestroy=function(){this._tabLinkRipple._removeTriggerEvents(),this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef)},n}(Object(r.C)(Object(r.z)(Object(r.A)(_)))),x=function(){return function(){}}(),y=t("ZYCi"),R=t("Ip0R"),C=t("M2Lx"),j=t("Fzqc"),I=t("ZYjt"),O=(t("wFw1"),t("qAlS")),P=e["\u0275crt"]({encapsulation:2,styles:[".mat-tab-nav-bar{overflow:hidden;position:relative;flex-shrink:0}.mat-tab-links{position:relative;display:flex}[mat-align-tabs=center] .mat-tab-links{justify-content:center}[mat-align-tabs=end] .mat-tab-links{justify-content:flex-end}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:0}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}@media (-ms-high-contrast:active){.mat-tab-link:focus{outline:dotted 2px}}.mat-tab-link.mat-tab-disabled{cursor:default}@media (-ms-high-contrast:active){.mat-tab-link.mat-tab-disabled{opacity:.5}}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}@media (-ms-high-contrast:active){.mat-tab-link{opacity:1}}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media (max-width:599px){.mat-tab-link{min-width:72px}}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:.5s cubic-bezier(.35,0,.25,1)}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}@media (-ms-high-contrast:active){.mat-ink-bar{outline:solid 2px;height:0}}"],data:{}});function S(l){return e["\u0275vid"](2,[e["\u0275qud"](402653184,1,{_inkBar:0}),(l()(),e["\u0275eld"](1,0,null,null,4,"div",[["class","mat-tab-links"]],null,[[null,"cdkObserveContent"]],function(l,n,t){var e=!0;return"cdkObserveContent"===n&&(e=!1!==l.component._alignInkBar()&&e),e},null,null)),e["\u0275did"](2,1196032,null,0,C.a,[C.b,e.ElementRef,e.NgZone],null,{event:"cdkObserveContent"}),e["\u0275ncd"](null,0),(l()(),e["\u0275eld"](4,0,null,null,1,"mat-ink-bar",[["class","mat-ink-bar"]],null,null,null,null,null)),e["\u0275did"](5,16384,[[1,4]],0,v,[e.ElementRef,e.NgZone,h],null,null)],null,null)}var A=function(){function l(l,n,t){this.route=l,this.router=n,this.changeDetector=t,this.isViewInitialized=!1,this.navLinks=[]}return l.prototype.ngAfterViewInit=function(){this.isViewInitialized=!0,this.changeDetector.detectChanges()},l.prototype.ngOnInit=function(){this.navLinks=this.route.routeConfig&&this.route.routeConfig.children?this.buildNavItems(this.route.routeConfig.children):[],console.log(this.router.url)},l.prototype.buildNavItems=function(l){return l.filter(function(l){return l.data}).map(function(l){var n=l.path,t=l.data;return{path:void 0===n?"":n,label:t.label,icon:t.icon}})},l.prototype.isLinkActive=function(l){return this.router.isActive(l.linksWithHrefs.first.urlTree,!1)},l}(),D=e["\u0275crt"]({encapsulation:0,styles:[["a[_ngcontent-%COMP%]:hover{color:rgba(0,0,0,.87);text-decoration:none}a[_ngcontent-%COMP%]:focus{color:rgba(0,0,0,.87)}.content[_ngcontent-%COMP%]{margin:0 auto;min-height:calc(40vh - 9.31rem)}.page-header[_ngcontent-%COMP%]:before{background-color:rgba(0,0,0,.22)}.content-center[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;padding:0 15px;color:#fff;width:100%;max-width:880px}.mat-tab-link[_ngcontent-%COMP%]{height:50px!important;padding:0 9px!important;white-space:normal!important}@media (min-width:768px) and (max-width:991px){.container[_ngcontent-%COMP%]{min-height:calc(40vh - 7.1rem)}}@media (min-width:992px) and (max-width:1199px){.content[_ngcontent-%COMP%]{min-height:calc(40vh - 8.2rem)}}"]],data:{}});function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"a",[["class","mat-tab-link"],["mat-tab-link",""],["routerLinkActive",""]],[[1,"aria-current",0],[1,"aria-disabled",0],[1,"tabIndex",0],[2,"mat-tab-disabled",null],[2,"mat-tab-label-active",null],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var i=!0;return"click"===n&&(i=!1!==e["\u0275nov"](l,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&i),i},null,null)),e["\u0275did"](1,147456,[[1,4]],0,w,[k,e.ElementRef,e.NgZone,f.a,[2,r.i],[8,null],g.e],{active:[0,"active"]},null),e["\u0275did"](2,671744,[[3,4]],0,y.n,[y.l,y.a,R.LocationStrategy],{routerLink:[0,"routerLink"]},null),e["\u0275did"](3,1720320,[["rla",4]],2,y.m,[y.l,e.ElementRef,e.Renderer2,e.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),e["\u0275qud"](603979776,2,{links:1}),e["\u0275qud"](603979776,3,{linksWithHrefs:1}),(l()(),e["\u0275ted"](6,null,[" "," "]))],function(l,n){var t=n.component;l(n,1,0,t.isViewInitialized&&t.isLinkActive(e["\u0275nov"](n,3))),l(n,2,0,n.context.$implicit.path),l(n,3,0,"")},function(l,n){l(n,0,0,e["\u0275nov"](n,1).active,e["\u0275nov"](n,1).disabled.toString(),e["\u0275nov"](n,1).tabIndex,e["\u0275nov"](n,1).disabled,e["\u0275nov"](n,1).active,e["\u0275nov"](n,2).target,e["\u0275nov"](n,2).href),l(n,6,0,n.context.$implicit.label)})}function L(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,4,"div",[["class","page-header page-header-small"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"div",[["class","page-header-image rellax-header"],["data-rellax-speed","-8"],["style","background-image: url(assets/img/4.Villa-Balsta/6.jpg); z-index: -1; transform: translate3d(0px, 0px, 0px);"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"div",[["class","content-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"h2",[["class","title text-center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\u0414\u0435\u0440\u0435\u0432\u044f\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438"])),(l()(),e["\u0275eld"](5,0,null,null,7,"div",[["class","content container mb-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,4,"nav",[["class","mat-tab-nav-bar"],["mat-align-tabs","center"],["mat-tab-nav-bar",""]],null,null,null,S,P)),e["\u0275did"](7,3325952,null,1,k,[e.ElementRef,[2,j.b],e.NgZone,e.ChangeDetectorRef,O.d],null,null),e["\u0275qud"](603979776,1,{_tabLinks:1}),(l()(),e["\u0275and"](16777216,null,0,1,null,M)),e["\u0275did"](10,278528,null,0,R.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](11,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["\u0275did"](12,212992,null,0,y.p,[y.b,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null)],function(l,n){l(n,10,0,n.component.navLinks),l(n,12,0)},null)}function B(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-wooden-structures",[],null,null,null,L,D)),e["\u0275did"](1,4308992,null,0,A,[y.a,y.l,e.ChangeDetectorRef],null,null)],function(l,n){l(n,1,0)},null)}var E=e["\u0275ccf"]("app-wooden-structures",A,B,{},{},[]),N=function(){function l(l){this.route=l}return l.prototype.ngOnInit=function(){console.log(this.route.snapshot.paramMap.get("tab"))},l}(),V=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function F(l){return e["\u0275vid"](0,[],null,null)}function H(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"ngx-clt",[],null,null,null,F,V)),e["\u0275did"](1,114688,null,0,N,[y.a],null,null)],function(l,n){l(n,1,0)},null)}var z=e["\u0275ccf"]("ngx-clt",N,H,{},{},[]),G=function(){function l(l){this.activeModal=l}return l.prototype.ngOnInit=function(){console.log(this.presentation)},l}(),T=function(){function l(l){this.modalService=l}return l.prototype.ngOnInit=function(){},l.prototype.openSvingveien=function(){this.open(["assets/img/1.Svingveien/1.jpg","assets/img/1.Svingveien/2.jpg","assets/img/1.Svingveien/3.jpg","assets/img/1.Svingveien/4.jpg","assets/img/1.Svingveien/5.jpg","assets/img/1.Svingveien/6.jpg","assets/img/1.Svingveien/7.jpg"],"Svingveien","Q-Haus Baltic O\xdc","Norway, Leknes","246m2","https://youtu.be/9tAQiVA1RUE")},l.prototype.openSkog=function(){this.open(["assets/img/2.Skog/1.jpg","assets/img/2.Skog/2.jpg","assets/img/2.Skog/3.jpg","assets/img/2.Skog/4.jpg","assets/img/2.Skog/5.jpg"],"Skog","Q-Haus Baltic O\xdc","Norway, Kval\xf8ysletta","245m2")},l.prototype.openReggestad=function(){this.open(["assets/img/3.Reggestad/R1.JPG","assets/img/3.Reggestad/R2.JPG","assets/img/3.Reggestad/R3.JPG","assets/img/3.Reggestad/R4.JPG","assets/img/3.Reggestad/R5.jpg","assets/img/3.Reggestad/R6.jpg","assets/img/3.Reggestad/R7.JPG","assets/img/3.Reggestad/R8.JPG"],"Reggestad","Q-Haus Baltic O\xdc","Norway, Nykirke","196m2")},l.prototype.openUpsideDownHouse=function(){this.open(["assets/img/5.Upside-Down-House/1.jpg","assets/img/5.Upside-Down-House/2.jpg","assets/img/5.Upside-Down-House/3.jpg","assets/img/5.Upside-Down-House/4.jpg","assets/img/5.Upside-Down-House/5.jpg","assets/img/5.Upside-Down-House/6.jpg"],"Upside Down House","Q-Haus Baltic O\xdc","Estonia, Tartu","154m2","","https://katus.eu/learn/news/tagurpidi-maja-upside-down-house-tartu?fbclid=IwAR1x9kBtEtk56IHO3jYyGDh1HyhPrnX-C8TTfp_zvy7qW8kUIL6IY6wzDmg")},l.prototype.openVillaBalsta=function(){this.open(["assets/img/4.Villa-Balsta/1.jpg","assets/img/4.Villa-Balsta/2.jpg","assets/img/4.Villa-Balsta/3.jpg","assets/img/4.Villa-Balsta/4.jpg","assets/img/4.Villa-Balsta/5.jpg","assets/img/4.Villa-Balsta/6.jpg","assets/img/4.Villa-Balsta/7.jpg"],"Villa Balsta","AS Saare Erek","Sweden, Stockholm","254m2","https://youtu.be/zwuSNTIt0zQ")},l.prototype.openAlstahaug=function(){this.open(["assets/img/6.Alstahaug/1.JPG","assets/img/6.Alstahaug/2.JPG","assets/img/6.Alstahaug/3.JPG","assets/img/6.Alstahaug/4.JPG","assets/img/6.Alstahaug/5.JPG"],"Sea Port Waiting Pavilion ","Nordic Houses KT O\xdc","Norway, Alstahaug","92m2")},l.prototype.open=function(l,n,t,e,i,u,a){var o=this.modalService.open(G,{windowClass:"lx"});o.componentInstance.imgUrls=l,o.componentInstance.name=n,o.componentInstance.customer=t,o.componentInstance.location=e,o.componentInstance.additionalInfo=i,o.componentInstance.presentation=u||"",o.componentInstance.publication=a||""},l}(),U=t("4GxJ"),J=e["\u0275crt"]({encapsulation:2,styles:[[".grid-item{position:relative;overflow:hidden;width:100%;min-height:210px}.grid-imd{min-height:100%;min-width:315px;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);cursor:pointer}.info{position:absolute;display:none;width:100%;cursor:pointer;height:100%;z-index:2;background:#333333a6;color:#fff;text-align:center}.grid-item:hover .info{display:block}.text-img{margin-top:8em}.lx .modal-dialog{max-width:100%;margin:0 auto}.highlight-button-dark{border:2px solid #b30000;display:inline-block;padding:8px 20px 9px;font-size:12px;color:#000;background-color:#f2f2f2}.highlight-button-dark:hover{background-color:transparent;border:2px solid #b30000;color:#191919}"]],data:{}});function Z(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,35,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,34,"div",[["class","col-md-12 ml-auto mr-auto"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,33,"div",[["class","row collections"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,10,"div",[["class","col-md-4 p-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,4,"div",[["class","grid-item"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openSvingveien()&&e),e},null,null)),(l()(),e["\u0275eld"](5,0,null,null,0,"img",[["alt",""],["class","img-raised grid-imd"],["src","assets/img/1.Svingveien/1.jpg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,2,"div",[["class","info"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,1,"h5",[["class","text-img"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Svingveien"])),(l()(),e["\u0275eld"](9,0,null,null,4,"div",[["class","grid-item"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openSkog()&&e),e},null,null)),(l()(),e["\u0275eld"](10,0,null,null,0,"img",[["alt",""],["class","img-raised grid-imd"],["src","assets/img/2.Skog/1.jpg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,2,"div",[["class","info"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,1,"h5",[["class","text-img"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Skog"])),(l()(),e["\u0275eld"](14,0,null,null,10,"div",[["class","col-md-4 p-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,4,"div",[["class","grid-item"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openReggestad()&&e),e},null,null)),(l()(),e["\u0275eld"](16,0,null,null,0,"img",[["alt",""],["class","img-raised grid-imd"],["src","assets/img/3.Reggestad/R1.JPG"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,2,"div",[["class","info"]],null,null,null,null,null)),(l()(),e["\u0275eld"](18,0,null,null,1,"h5",[["class","text-img"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Reggestad"])),(l()(),e["\u0275eld"](20,0,null,null,4,"div",[["class","grid-item"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openVillaBalsta()&&e),e},null,null)),(l()(),e["\u0275eld"](21,0,null,null,0,"img",[["class","img-raised grid-imd"],["src","assets/img/4.Villa-Balsta/3.jpg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](22,0,null,null,2,"div",[["class","info"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,1,"h5",[["class","text-img"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Villa Balsta"])),(l()(),e["\u0275eld"](25,0,null,null,10,"div",[["class","col-md-4 p-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,4,"div",[["class","grid-item"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openUpsideDownHouse()&&e),e},null,null)),(l()(),e["\u0275eld"](27,0,null,null,0,"img",[["alt",""],["class","img-raised grid-imd"],["src","assets/img/5.Upside-Down-House/1.jpg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,2,"div",[["class","info"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,1,"h5",[["class","text-img"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Upside Down House"])),(l()(),e["\u0275eld"](31,0,null,null,4,"div",[["class","grid-item"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.openAlstahaug()&&e),e},null,null)),(l()(),e["\u0275eld"](32,0,null,null,0,"img",[["class","img-raised grid-imd"],["src","assets/img/6.Alstahaug/1.JPG"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,2,"div",[["class","info"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,1,"h5",[["class","text-img"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Sea Port Waiting Pavilion"])),(l()(),e["\u0275eld"](36,0,null,null,3,"div",[["class","text-center mt-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,2,"a",[["class","inner-link button btn xs-margin-ten-bottom highlight-button-dark btn-small"],["href","#"],["onclick","window.open('assets/pdf/pdfModularCascadeHouses.pdf', '_blank'); return false;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,0,"i",[["class","far fa-file-pdf"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" TIMBER FRAME HOUSE DESIGN (PDF) "]))],null,null)}function Y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"ngx-modular-cascade-houses",[],null,null,null,Z,J)),e["\u0275did"](1,114688,null,0,T,[U.u],null,null)],function(l,n){l(n,1,0)},null)}var q=e["\u0275ccf"]("ngx-modular-cascade-houses",T,Y,{},{},[]),K=e["\u0275crt"]({encapsulation:0,styles:[[".closeCustom[_ngcontent-%COMP%]{font-size:2rem}.close-box[_ngcontent-%COMP%]{z-index:20;position:absolute;right:.5em;top:.2em;padding:.7em;background:#ffffff9e}.img-carousel[_ngcontent-%COMP%]{min-height:100%;max-width:none;min-width:76rem;width:77vw;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.viewDescription[_ngcontent-%COMP%]{color:#191919}@media screen and (max-width:1147px){.viewDescription[_ngcontent-%COMP%]{padding-top:3rem!important;padding-left:1rem!important}}@media screen and (max-width:850px){.viewDescription[_ngcontent-%COMP%]{padding-top:3rem!important;padding-left:1rem!important}h2[_ngcontent-%COMP%]{font-size:2em}}@media screen and (max-width:767px){.viewDescription[_ngcontent-%COMP%]{text-align:center;padding:3rem!important}}"]],data:{}});function W(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","carousel-item width-heidth-100 "]],null,null,null,null,null)),e["\u0275did"](1,278528,null,0,R.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](2,{active:0}),(l()(),e["\u0275eld"](3,0,null,null,0,"img",[["alt","1 slide"],["class","d-block img-carousel"]],[[8,"src",4]],null,null,null,null))],function(l,n){var t=l(n,2,0,0===n.context.index);l(n,1,0,"carousel-item width-heidth-100 ",t)},function(l,n){l(n,3,0,n.context.$implicit)})}function Q(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Video Presentation"]))],null,function(l,n){l(n,1,0,n.component.presentation)})}function $(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Publication"]))],null,function(l,n){l(n,1,0,n.component.publication)})}function X(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,28,"div",[["class","modal-body p-0"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,3,"div",[["class","close-box"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,2,"button",[["aria-label","Close"],["class","close closeCustom"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.activeModal.dismiss("Cross click")&&e),e},null,null)),(l()(),e["\u0275eld"](3,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\xd7"])),(l()(),e["\u0275eld"](5,0,null,null,23,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,9,"div",[["class","page-header col-md-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,8,"div",[["class","page-header-image rellax-header"],["data-rellax-speed","-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,7,"div",[["class","carousel slide width-heidth-100"],["data-ride","carousel"],["id","carouselExampleIndicators"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,2,"div",[["class","carousel-inner width-heidth-100"],["role","listbox"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,W)),e["\u0275did"](11,278528,null,0,R.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](12,0,null,null,1,"a",[["class"," carousel-control-prev z-index-a"],["data-slide","prev"],["href","#carouselExampleIndicators"],["role","button"]],null,null,null,null,null)),(l()(),e["\u0275eld"](13,0,null,null,0,"i",[["class","now-ui-icons arrows-1_minimal-left"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,1,"a",[["class","carousel-control-next z-index-a"],["data-slide","next"],["href","#carouselExampleIndicators"],["role","button"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,0,"i",[["class","now-ui-icons arrows-1_minimal-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,12,"div",[["class","col-md-3 p-5 viewDescription"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](18,null,["",""])),(l()(),e["\u0275eld"](19,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](20,null,["",""])),(l()(),e["\u0275eld"](21,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](22,null,["Customer: ",""])),(l()(),e["\u0275eld"](23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](24,null,["Additional info: ",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,Q)),e["\u0275did"](26,16384,null,0,R.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,$)),e["\u0275did"](28,16384,null,0,R.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,11,0,t.imgUrls),l(n,26,0,t.presentation),l(n,28,0,t.publication)},function(l,n){var t=n.component;l(n,18,0,t.location),l(n,20,0,t.name),l(n,22,0,t.customer),l(n,24,0,t.additionalInfo)})}function ll(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"ngx-view-img",[],null,null,null,X,K)),e["\u0275did"](1,114688,null,0,G,[U.d],null,null)],function(l,n){l(n,1,0)},null)}var nl=e["\u0275ccf"]("ngx-view-img",G,ll,{name:"name",customer:"customer",location:"location",additionalInfo:"additionalInfo",presentation:"presentation",publication:"publication",imgUrls:"imgUrls"},{},[]),tl=t("gIcY"),el=t("BBZF"),il=t("Izlp"),ul=t("Ry/H"),al=t("RFs3"),ol={label:"CLT \u0438 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0438\u0437 \u043a\u043b\u0435\u0435\u043d\u043e\u0433\u043e \u0434\u0435\u0440\u0435\u0432\u0430"},sl={label:"\u041c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0435 \u0438 \u043a\u0430\u0440\u043a\u0430\u0441\u043d\u044b\u0435 \u0434\u043e\u043c\u0430"},rl=function(){return function(){}}(),dl=t("bjCr"),cl=t("0tkt"),pl=t("/fSM");t.d(n,"WoodenStructuresModuleNgFactory",function(){return ml});var ml=e["\u0275cmf"](i,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,u.b,u.h,u.i,u.e,u.f,u.g,a.a,E,z,q,nl]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[e.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,tl["\u0275angular_packages_forms_forms_j"],tl["\u0275angular_packages_forms_forms_j"],[]),e["\u0275mpd"](4608,U.u,U.u,[e.ComponentFactoryResolver,e.Injector,U.hb,U.v]),e["\u0275mpd"](4608,C.c,C.c,[]),e["\u0275mpd"](4608,el.c,el.c,[]),e["\u0275mpd"](4608,el.b,el.b,[]),e["\u0275mpd"](4608,il.a,ul.b,[[2,ul.a],el.c,el.b]),e["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),e["\u0275mpd"](1073742336,tl["\u0275angular_packages_forms_forms_bc"],tl["\u0275angular_packages_forms_forms_bc"],[]),e["\u0275mpd"](1073742336,tl.FormsModule,tl.FormsModule,[]),e["\u0275mpd"](1073742336,U.c,U.c,[]),e["\u0275mpd"](1073742336,U.g,U.g,[]),e["\u0275mpd"](1073742336,U.h,U.h,[]),e["\u0275mpd"](1073742336,U.l,U.l,[]),e["\u0275mpd"](1073742336,U.m,U.m,[]),e["\u0275mpd"](1073742336,U.r,U.r,[]),e["\u0275mpd"](1073742336,U.s,U.s,[]),e["\u0275mpd"](1073742336,U.w,U.w,[]),e["\u0275mpd"](1073742336,U.A,U.A,[]),e["\u0275mpd"](1073742336,U.D,U.D,[]),e["\u0275mpd"](1073742336,U.G,U.G,[]),e["\u0275mpd"](1073742336,U.J,U.J,[]),e["\u0275mpd"](1073742336,U.P,U.P,[]),e["\u0275mpd"](1073742336,U.T,U.T,[]),e["\u0275mpd"](1073742336,U.U,U.U,[]),e["\u0275mpd"](1073742336,U.V,U.V,[]),e["\u0275mpd"](1073742336,U.x,U.x,[]),e["\u0275mpd"](1073742336,al.NouisliderModule,al.NouisliderModule,[]),e["\u0275mpd"](1073742336,j.a,j.a,[]),e["\u0275mpd"](1073742336,r.j,r.j,[[2,r.c],[2,I.g]]),e["\u0275mpd"](1073742336,s.d,s.d,[]),e["\u0275mpd"](1073742336,f.b,f.b,[]),e["\u0275mpd"](1073742336,r.s,r.s,[]),e["\u0275mpd"](1073742336,C.d,C.d,[]),e["\u0275mpd"](1073742336,g.a,g.a,[]),e["\u0275mpd"](1073742336,x,x,[]),e["\u0275mpd"](1073742336,y.o,y.o,[[2,y.u],[2,y.l]]),e["\u0275mpd"](1073742336,rl,rl,[]),e["\u0275mpd"](1073742336,dl.OwlModule,dl.OwlModule,[]),e["\u0275mpd"](1073742336,cl.a,cl.a,[]),e["\u0275mpd"](1073742336,pl.a,pl.a,[]),e["\u0275mpd"](1073742336,i,i,[]),e["\u0275mpd"](1024,y.j,function(){return[[{path:"",component:A,children:[{path:"",redirectTo:"clt",pathMatch:"full"},{path:"clt",component:N,data:ol},{path:"modular-cascade-houses",component:T,data:sl}]}]]},[]),e["\u0275mpd"](256,ul.a,{apiKey:"YOUR_KEY_HERE"},[])])})}}]);