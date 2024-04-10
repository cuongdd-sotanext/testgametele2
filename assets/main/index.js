System.register("chunks:///_virtual/BalanceBar.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var t,s,e,o,n,r,a,h,l,c,p,u,f,v,g,P,d,y,m,S;return{setters:[function(i){t=i.applyDecoratedDescriptor,s=i.inheritsLoose,e=i.initializerDefineProperty,o=i.assertThisInitialized},function(i){n=i.cclegacy,r=i._decorator,a=i.Sprite,h=i.sp,l=i.RigidBody2D,c=i.input,p=i.Input,u=i.Vec2,f=i.math,v=i.randomRange,g=i.tween,P=i.Vec3,d=i.Color,y=i.ERigidBody2DType,m=i.Tween,S=i.Component}],execute:function(){var b,w,R,B,V,T,z,k,D,A,_;n._RF.push({},"d901b8uynZMR5Ne9JE1QyKZ","BalanceBar",void 0);var E=r.ccclass,F=r.property;i("BalanceBar",(b=E("BalanceBar"),w=F(a),R=F(h.Skeleton),B=F(a),V=F(l),b((k=t((z=function(i){function t(){for(var t,s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return t=i.call.apply(i,[this].concat(n))||this,e(t,"spProgress",k,o(t)),e(t,"fishPivot",D,o(t)),e(t,"spRoot",A,o(t)),e(t,"pivot",_,o(t)),t.currentValue=0,t.basePush=.0015,t.isProcessing=!1,t.isPushing=!1,t.isStart=!0,t.powerOfFish=.0015,t.callback=void 0,t}s(t,i);var n=t.prototype;return n.onLoad=function(){c.on(p.EventType.TOUCH_START,this.onTouchStart,this)},n.start=function(){},n.setDiff=function(i){this.pivot.gravityScale=i},n.update=function(i){if(this.isProcessing){var t=u.distance(this.fishPivot.node.position,this.pivot.node.position);this.isPushing=t<20,this.currentValue=f.clamp(this.currentValue+(this.isPushing?this.basePush:-this.powerOfFish),0,1),this.updateBar()}},n.randomSwimming=function(){var i=this,t=this.isStart?1:v(.75,1.25),s=f.clamp(this.fishPivot.node.position.y+(this.isStart?20:v(-20,50)),-145,145);this.currentValue>.5&&(this.fishPivot.node.position.y<-80&&(s=this.fishPivot.node.position.y+v(30,60)),this.fishPivot.node.position.y>80&&(s=this.fishPivot.node.position.y-v(30,60))),g(this.fishPivot.node).to(t,{position:new P(0,s)},{easing:"quadOut"}).call((function(){return i.randomSwimming()})).start(),this.isStart=!1},n.updateBar=function(){this.spProgress.fillRange=this.currentValue;var i=255-510*Math.max(0,this.currentValue-.5),t=510*Math.min(.5,this.currentValue);this.spProgress.color=new d(i,t,0,255),1==this.spProgress.fillRange?(this.callback(!0),this.stopProcess()):0==this.spProgress.fillRange&&(this.callback(!1),this.stopProcess())},n.startProcess=function(i,t){0!=this.pivot.gravityScale?(this.fishPivot.setSkin(i.id.toString()),this.fishPivot.node.setScale(new P(i.size,i.size)),this.isStart=!0,this.spRoot.color=d.GRAY,this.callback=t,this.pivot.linearVelocity=new u(0,0),this.pivot.node.position=new P(0,-130),this.pivot.type=y.Dynamic,this.fishPivot.node.position=new P(0,-130),this.spProgress.fillRange=this.currentValue=.3,this.isProcessing=!0,this.randomSwimming()):t(!0)},n.stopProcess=function(){m.stopAllByTarget(this.fishPivot.node),this.pivot.type=y.Static,this.isProcessing=!1,this.currentValue=0,this.spRoot.color=d.TRANSPARENT},n.onTouchStart=function(i){if(this.isProcessing){var t=this.pivot.linearVelocity;t.y+=2,this.pivot.linearVelocity=t}},t}(S)).prototype,"spProgress",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=t(z.prototype,"fishPivot",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=t(z.prototype,"spRoot",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=t(z.prototype,"pivot",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=z))||T));n._RF.pop()}}}));

System.register("chunks:///_virtual/CameraFollow.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,r,i,n,a,s,l,c;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,r=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){n=t.cclegacy,a=t._decorator,s=t.Node,l=t.Vec3,c=t.Component}],execute:function(){var u,p,f,h,d;n._RF.push({},"82a8ewhxhxL24DPNq11mLQu","CameraFollow",void 0);var g=a.ccclass,y=a.property;t("CameraFollow",(u=g("CameraFollow"),p=y(s),u((d=e((h=function(t){function e(){for(var e,o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n))||this,r(e,"target",d,i(e)),e.offset=-59.5,e}o(e,t);var n=e.prototype;return n.start=function(){this.offset=this.target.getWorldPosition().y-this.node.getWorldPosition().y},n.update=function(t){var e=new l(this.target.getWorldPosition().x,this.target.getWorldPosition().y-this.offset);this.node.setWorldPosition(e)},e}(c)).prototype,"target",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=h))||f));n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/FishEntity.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,o,n,s,r,a,l,h,c,f,d,u,p,b;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,r=t._decorator,a=t.Node,l=t.sp,h=t.UITransform,c=t.Vec3,f=t.randomRangeInt,d=t.Tween,u=t.tween,p=t.randomRange,b=t.Component}],execute:function(){var w,P,g,y,m,v,S,k,z,B,R,F,x;s._RF.push({},"f7f75aoc35IcIqGwzVBPd0g","FishEntity",void 0);var I=r.ccclass,T=r.property;t("FishEntity",(w=I("FishEntity"),P=T([a]),g=T(l.Skeleton),y=T(h),m=T(a),v=T(Boolean),w((z=e((k=function(t){function e(){for(var e,i=arguments.length,s=new Array(i),r=0;r<i;r++)s[r]=arguments[r];return e=t.call.apply(t,[this].concat(s))||this,o(e,"roots",z,n(e)),o(e,"skeleton",B,n(e)),o(e,"transform",R,n(e)),e.basePost=void 0,o(e,"baseParent",F,n(e)),o(e,"isBot",x,n(e)),e.currentRoot=void 0,e.offset=void 0,e.fishType=void 0,e}i(e,t);var s=e.prototype;return s.start=function(){this.basePost=new c(this.node.worldPosition),this.isBot?this.init(f(1,21)):this.node.active=!1},s.init=function(t,e){void 0===e&&(e=null),this.fishType=t,this.skeleton.node.setScale(new c(1,1,1)),d.stopAllByTarget(this.node),this.node.parent=this.baseParent,this.node.angle=0,this.skeleton.setSkin(t.toString()),this.skeleton.setAnimation(0,"idle",!0),this.currentRoot=this.roots.find((function(e){return e.name==t.toString()})),this.skeleton.node.setPosition(this.currentRoot.position),this.offset=1==f(0,2)?1:-1,this.isBot?this.randomSwimming(!0):(this.node.worldPosition=new c(this.basePost.x+1e3*this.offset,this.basePost.y),this.node.setScale(new c(1*this.offset,1,1)),u(this.node).delay(p(3,5)).to(4,{worldPosition:new c(this.basePost.x+(t>5?400:200)*this.offset,this.basePost.y)},{easing:"linear"}).to(1,{worldPosition:this.basePost},{easing:t>5?"cubicIn":"linear"}).call((function(){e()})).start())},s.update=function(t){},s.catching=function(t){this.skeleton.setAnimation(0,"get_caught",!0)},s.catched=function(t){this.node.parent=t,this.node.worldPosition=this.basePost,u(this.node).to(.1,{position:new c(0,-10,0),angle:this.currentRoot.angle*this.offset}).start()},s.escaped=function(){this.skeleton.setAnimation(0,"idle",!0),this.offset=-this.offset,this.node.setScale(new c(1,1,1)),this.randomSwimming()},s.randomSwimming=function(t){var e=this;void 0===t&&(t=!1);for(var i=t?p(4,10):2,o=p(-300,3e3);Math.abs(o)<100;)o=p(-300,3e3);var n=t?p(300,800):2e3;t&&(this.node.worldPosition=new c(this.basePost.x+n*this.offset,this.basePost.y+o));var s=u(this.node).to(i,{worldPosition:new c(this.basePost.x-n*this.offset,this.basePost.y+(t?o:0))},{onStart:function(){e.skeleton.node.setScale(new c(1*e.offset,1,1))}}),r=u(this.node).to(i,{worldPosition:new c(this.basePost.x+n*this.offset,this.basePost.y+(t?o:0))},{onStart:function(){e.skeleton.node.setScale(new c(-1*e.offset,1,1))}});u(this.node).sequence(s,r).repeatForever().start()},e}(b)).prototype,"roots",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),B=e(k.prototype,"skeleton",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=e(k.prototype,"transform",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=e(k.prototype,"baseParent",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=e(k.prototype,"isBot",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),S=k))||S));s._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./FishEntity.ts","./BalanceBar.ts","./NetworkManager.ts","./PopupManager.ts"],(function(t){var e,n,i,a,o,r,s,c,u,h,l,f,p,b,d,g,y,m,w,S,v,T,z,k,C;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,a=t.assertThisInitialized,o=t.asyncToGenerator,r=t.regeneratorRuntime},function(t){s=t.cclegacy,c=t._decorator,u=t.UITransform,h=t.Node,l=t.ParticleSystem2D,f=t.sp,p=t.Button,b=t.Label,d=t.input,g=t.Input,y=t.tween,m=t.math,w=t.Vec2,S=t.Component,v=t.randomRangeInt},function(t){T=t.FishEntity},function(t){z=t.BalanceBar},function(t){k=t.NetworkManager},function(t){C=t.PopupManager}],execute:function(){var I,L,F,R,E,U,x,B,D,M,P,W,N,O,_,G,A,H,K,Y,j,V,X;s._RF.push({},"15267zXalNKYbkp8P21bWCu","GameManager",void 0);var q=c.ccclass,J=c.property;t("GameManager",(I=q("GameManager"),L=J(u),F=J(h),R=J(T),E=J([T]),U=J(l),x=J(f.Skeleton),B=J(z),D=J(p),M=J(p),P=J(b),I((O=e((N=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o))||this,i(e,"hook",O,a(e)),i(e,"hookReal",_,a(e)),i(e,"fish",G,a(e)),i(e,"fishBot",A,a(e)),i(e,"effectWater",H,a(e)),i(e,"effectCongratulation",K,a(e)),i(e,"bar",Y,a(e)),i(e,"btnLeaderboard",j,a(e)),i(e,"btnCollection",V,a(e)),i(e,"lblScore",X,a(e)),e.baseSize=new w(2,60),e.hiSize=new w(2,3330),e.isReady=!0,e.isTouching=!1,e.duration=5,e.dataFish=void 0,e}n(e,t);var s=e.prototype;return s.onLoad=function(){d.on(g.EventType.TOUCH_START,this.onTouchStart,this),d.on(g.EventType.TOUCH_END,this.onTouchEnd,this)},s.start=function(){var t=o(r().mark((function t(){var e,n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new URLSearchParams(window.location.search),n=e.get("token"),k.Instance.setToken(n),this.effectWater.stopSystem(),t.next=6,this.syncData();case 6:this.btnLeaderboard.node.on(p.EventType.CLICK,(function(){return C.Instance.popupLeaderboard.open()}),this),this.btnCollection.node.on(p.EventType.CLICK,(function(){return C.Instance.popupCollection.open()}),this);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),s.syncData=function(){var t=o(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.Instance.getUser(this.updateUserInfo.bind(this));case 2:return t.next=4,k.Instance.getLeaderboard(this.updateScore.bind(this));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),s.updateScore=function(t){this.lblScore.string=t.me.score},s.updateUserInfo=function(t){},s.update=function(t){},s.shot=function(){var t=o(r().mark((function t(e){var n=this;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.dataFish=e.fish,this.fish.node.active=!0,this.fishBot.forEach((function(t){t.init(v(1,21))})),this.fish.init(this.dataFish.id,this.catching.bind(this)),this.bar.setDiff(this.dataFish.diff),y(this.hook).to(this.duration,{contentSize:m.size(this.hiSize.x,this.hiSize.y)},{easing:"backOut",onUpdate:function(t,e){e>.05&&n.effectWater.stopped&&n.effectWater.resetSystem()},onComplete:function(){}}).call((function(){})).start();case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),s.catching=function(){this.bar.startProcess(this.dataFish,this.complete.bind(this))},s.complete=function(t){var e=this;t?(this.fish.catched(this.hookReal),k.Instance.catched(this.syncData.bind(this))):this.fish.escaped(),y(this.hook).to(this.duration/2,{contentSize:m.size(this.baseSize.x,this.baseSize.y)},{onStart:function(){e.effectWater.resetSystem()},onUpdate:function(t,n){n>.95&&!e.effectWater.stopped&&e.effectWater.stopSystem()}}).call((function(){if(e.fish.node.active=!1,console.log(t),t){e.effectCongratulation.setAnimation(0,"Level_up",!1);var n="",i="";e.dataFish.point>0?(n="CONGRATULATION",i="You got a new fish \n"+e.dataFish.name):(n="OOOPS",i="Thank you for cleaning the ocean!"),C.Instance.popupNotice.open(n,i,(function(){e.isTouching=!1}))}else e.isTouching=!1})).start()},s.onTouchStart=function(t){this.isTouching||(this.isTouching=!0,k.Instance.getFish(this.shot.bind(this)))},s.onTouchEnd=function(t){this.isTouching},e}(S)).prototype,"hook",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=e(N.prototype,"hookReal",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=e(N.prototype,"fish",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=e(N.prototype,"fishBot",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),H=e(N.prototype,"effectWater",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=e(N.prototype,"effectCongratulation",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=e(N.prototype,"bar",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=e(N.prototype,"btnLeaderboard",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=e(N.prototype,"btnCollection",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=e(N.prototype,"lblScore",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=N))||W));s._RF.pop()}}}));

System.register("chunks:///_virtual/Interface.ts",["cc"],(function(i){var t;return{setters:[function(i){t=i.cclegacy}],execute:function(){t._RF.push({},"a5140v8271FJopbUPMDzlXX","Interface",void 0);i("FishData",(function(){this.id=void 0,this.name=void 0,this.point=void 0,this.diff=void 0,this.weigh=void 0,this.size=void 0}));t._RF.pop()}}}));

System.register("chunks:///_virtual/ItemCollection.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,l,i,n,a,o,r,c,s,u,b;return{setters:[function(e){t=e.applyDecoratedDescriptor,l=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,r=e.sp,c=e.Label,s=e.Node,u=e.Vec3,b=e.Component}],execute:function(){var p,m,f,h,g,v,y,d,k,z,w,N,S;a._RF.push({},"c339fuB5YVJ0Zp8Z0aGMPig","ItemCollection",void 0);var C=o.ccclass,I=o.property;e("ItemCollection",(p=C("ItemCollection"),m=I(r.Skeleton),f=I(c),h=I(c),g=I(s),v=I(s),p((k=t((d=function(e){function t(){for(var t,l=arguments.length,a=new Array(l),o=0;o<l;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,i(t,"skeleton",k,n(t)),i(t,"lblName",z,n(t)),i(t,"lblNumber",w,n(t)),i(t,"black",N,n(t)),i(t,"available",S,n(t)),t}l(t,e);var a=t.prototype;return a.start=function(){},a.update=function(e){},a.setData=function(e,t){console.log(e,t),this.node.active=!0,0==t.size?this.skeleton.node.setScale(new u(.7,.7)):this.skeleton.node.setScale(new u(3*t.size,3*t.size)),this.skeleton.setSkin(t.id.toString()),this.lblName.string=t.name,this.lblNumber.string=e.amount,this.black.active=e.amount<=0,this.available.active=1==e.available},t}(b)).prototype,"skeleton",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=t(d.prototype,"lblName",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=t(d.prototype,"lblNumber",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=t(d.prototype,"black",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=t(d.prototype,"available",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=d))||y));a._RF.pop()}}}));

System.register("chunks:///_virtual/ItemLeaderboard.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,a,i,n,l,o,c;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,a=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){n=e.cclegacy,l=e._decorator,o=e.Label,c=e.Component}],execute:function(){var s,u,b,p,d,f,h,m,y;n._RF.push({},"32189JDhnZNaJMZYxufT3pt","ItemLeaderboard",void 0);var g=l.ccclass,v=l.property;e("ItemLeaderboard",(s=g("ItemLeaderboard"),u=v(o),b=v(o),p=v(o),s((h=r((f=function(e){function r(){for(var r,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return r=e.call.apply(e,[this].concat(n))||this,a(r,"lblRank",h,i(r)),a(r,"lblName",m,i(r)),a(r,"lblScore",y,i(r)),r}t(r,e);var n=r.prototype;return n.start=function(){},n.update=function(e){},n.setData=function(e){this.lblRank.string=e.rank,this.lblName.string=e.user,this.lblScore.string=e.score,this.node.active=!0},r}(c)).prototype,"lblRank",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=r(f.prototype,"lblName",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=r(f.prototype,"lblScore",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=f))||d));n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./BalanceBar.ts","./CameraFollow.ts","./FishEntity.ts","./GameManager.ts","./Interface.ts","./ItemCollection.ts","./ItemLeaderboard.ts","./NetworkManager.ts","./PopupCollection.ts","./PopupEntity.ts","./PopupLeaderboard.ts","./PopupManager.ts","./PopupNotice.ts","./debug-view-runtime-control.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/NetworkManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PopupManager.ts"],(function(t){var n,e,r,o,a,i,s,u,c,f,h;return{setters:[function(t){n=t.inheritsLoose,e=t.createClass,r=t.asyncToGenerator,o=t.regeneratorRuntime},function(t){a=t.cclegacy,i=t._decorator,s=t.assetManager,u=t.SpriteFrame,c=t.Texture2D,f=t.Component},function(t){h=t.PopupManager}],execute:function(){var l,p;a._RF.push({},"4a679tQR9tJL5aAoFSCnN/F","NetworkManager",void 0);var g=i.ccclass,d=(i.property,t("NetworkManager",g("NetworkManager")(((p=function(t){function a(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).urlBase="https://tg.monsterra.io/",n.urlMainBase="https://telegamehub.monsterra.io/",n.userInfo=void 0,n.token=void 0,n}n(a,t);var i=a.prototype;return i.onLoad=function(){a.instance=this},i.setToken=function(t){this.token=t,console.log(this.token)},i.getUser=function(){var t=r(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.urlMainBase+"customer/get-user-info",t.next=3,this.post(e,JSON.stringify({game_id:3}),v.user_info,n);case 3:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),i.getFish=function(){var t=r(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.urlBase+"getFish",t.next=3,this.get(e,d.fish,n);case 3:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),i.catched=function(){var t=r(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.urlBase+"catched",t.next=3,this.get(e,d.catched,n);case 3:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),i.getLeaderboard=function(){var t=r(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.urlMainBase+"public/get-rank",t.next=3,this.post(e,JSON.stringify({game_id:3,customer_id:this.userInfo.id}),v.get_ranking,n);case 3:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),i.getCollection=function(){var t=r(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.urlBase+"collection",t.next=3,this.get(e,d.collection,n);case 3:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),i.get=function(){var t=r(o().mark((function t(n,e,r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n,{headers:{authorization:"Bearer "+this.token,game:"fishing"}}).then((function(t){return console.log(t),t.text()})).then((function(t){console.log(t);var n=JSON.parse(t);if(n.ok)switch(e){case d.fish:default:null==r||r(n.data)}else h.Instance.popupNotice.open("NOTICE",n.error,(function(){return null==r?void 0:r(null)}))}));case 2:case"end":return t.stop()}}),t,this)})));return function(n,e,r){return t.apply(this,arguments)}}(),i.post=function(){var t=r(o().mark((function t(n,e,r,a){var i=this;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n,{method:"POST",headers:{"Content-Type":"application/json",authorization:"Bearer "+this.token,game:"fishing"},body:e}).then((function(t){if(console.log(t),200==t.status)return t.text();t.text().then((function(t){var n=JSON.parse(t);h.Instance.popupNotice.open("NOTICE",n.message,(function(){return null==a?void 0:a(null)}))}))})).then((function(t){console.log(t);var n=JSON.parse(t);switch(r){case v.user_info:i.userInfo=n,null==a||a(n);break;case v.get_ranking:default:null==a||a(n)}}));case 2:case"end":return t.stop()}}),t,this)})));return function(n,e,r,o){return t.apply(this,arguments)}}(),i.loadImage=function(t,n){console.log("loadImage = ",t),s.loadRemote(t,(function(t,e){var r=new u,o=new c;o.image=e,r.texture=o,n.spriteFrame=r}))},e(a,null,[{key:"Instance",get:function(){return this.instance||(this.instance=new this)}}]),a}(f)).instance=void 0,l=p))||l),function(t){return t[t.fish=0]="fish",t[t.collection=1]="collection",t[t.catched=2]="catched",t}(d||{})),v=function(t){return t[t.user_info=0]="user_info",t[t.get_ranking=1]="get_ranking",t}(v||{});a._RF.pop()}}}));

System.register("chunks:///_virtual/PopupCollection.ts",["./rollupPluginModLoBabelHelpers.js","cc","./NetworkManager.ts","./PopupEntity.ts","./ItemCollection.ts"],(function(t){var e,o,n,i,l,r,a,c,s,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){l=t.cclegacy,r=t._decorator,a=t.instantiate},function(t){c=t.NetworkManager},function(t){s=t.PopupEntity},function(t){p=t.ItemCollection}],execute:function(){var u,f,h,m,C;l._RF.push({},"8a327vaWYdFS4AqZfLHPNjt","PopupCollection",void 0);var I=r.ccclass,v=r.property;t("PopupCollection",(u=I("PopupCollection"),f=v(p),u((C=e((m=function(t){function e(){for(var e,o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return e=t.call.apply(t,[this].concat(l))||this,n(e,"objItemCollection",C,i(e)),e.listItem=[],e}o(e,t);var l=e.prototype;return l.open=function(){this.listItem.forEach((function(t){t.node.active=!1})),this.show("COLLECTION",null),c.Instance.getCollection(this.fillData.bind(this))},l.fillData=function(t){for(var e=t.collection,o=t.fishs,n=0;n<e.length;n++){var i=e[n],l=o[n];if(n>=this.listItem.length){var r=a(this.objItemCollection.node).getComponent(p);r.node.setParent(this.objItemCollection.node.parent),this.listItem.push(r)}this.listItem[n].setData(i,l)}},e}(s)).prototype,"objItemCollection",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=m))||h));l._RF.pop()}}}));

System.register("chunks:///_virtual/PopupEntity.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,i,e,n,r,a,l,c,s,p,u,b,h;return{setters:[function(t){o=t.applyDecoratedDescriptor,i=t.inheritsLoose,e=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,l=t.Label,c=t.Button,s=t.UIOpacity,p=t.Vec3,u=t.Tween,b=t.tween,h=t.Component}],execute:function(){var y,f,d,g,v,m,T,k,E;r._RF.push({},"60c13zeS19PvJWIjZgAkBbu","PopupEntity",void 0);var w=a.ccclass,B=a.property;t("PopupEntity",(y=w("PopupEntity"),f=B(l),d=B(c),g=B(s),y((T=o((m=function(t){function o(){for(var o,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return o=t.call.apply(t,[this].concat(r))||this,e(o,"lbTitle",T,n(o)),e(o,"btnConfirm",k,n(o)),e(o,"root",E,n(o)),o.callback=void 0,o}i(o,t);var r=o.prototype;return r.start=function(){this.btnConfirm.node.on(c.EventType.CLICK,this.confirm,this)},r.update=function(t){},r.show=function(t,o){this.root.node.scale=p.ZERO,this.root.opacity=0,this.lbTitle.string=t,this.callback=o,this.node.active=!0,u.stopAllByTarget(this.root.node),u.stopAllByTarget(this.root),b(this.root.node).to(.2,{scale:p.ONE},{easing:"backOut"}).start(),b(this.root).to(.2,{opacity:255}).start()},r.confirm=function(){var t=this;u.stopAllByTarget(this.root.node),u.stopAllByTarget(this.root),b(this.root.node).to(.2,{scale:p.ZERO},{easing:"backIn"}).call((function(){t.node.active=!1,null==t.callback||t.callback(),t.callback=null})).start(),b(this.root).to(.1,{opacity:0}).start()},o}(h)).prototype,"lbTitle",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=o(m.prototype,"btnConfirm",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=o(m.prototype,"root",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=m))||v));r._RF.pop()}}}));

System.register("chunks:///_virtual/PopupLeaderboard.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PopupEntity.ts","./NetworkManager.ts","./ItemLeaderboard.ts"],(function(e){var t,r,o,a,n,i,s,d,p,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,o=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){n=e.cclegacy,i=e._decorator,s=e.instantiate},function(e){d=e.PopupEntity},function(e){p=e.NetworkManager},function(e){l=e.ItemLeaderboard}],execute:function(){var c,u,h,b,f;n._RF.push({},"e05e5hMdddA4Y9aJMmkRK5y","PopupLeaderboard",void 0);var m=i.ccclass,L=i.property;e("PopupLeaderboard",(c=m("PopupLeaderboard"),u=L(l),c((f=t((b=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n))||this,o(t,"objItemLeaderboard",f,a(t)),t.listItem=[],t}r(t,e);var n=t.prototype;return n.open=function(){this.listItem.forEach((function(e){e.node.active=!1})),this.show("LEADERBOARD",null),p.Instance.getLeaderboard(this.fillData.bind(this))},n.fillData=function(e){for(var t=0;t<e.top.length;t++){var r=e.top[t];if(t>=this.listItem.length){var o=s(this.objItemLeaderboard.node).getComponent(l);o.node.setParent(this.objItemLeaderboard.node.parent),this.listItem.push(o)}this.listItem[t].setData(r)}},t}(d)).prototype,"objItemLeaderboard",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=b))||h));n._RF.pop()}}}));

System.register("chunks:///_virtual/PopupManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PopupNotice.ts","./PopupLeaderboard.ts","./PopupCollection.ts"],(function(e){var t,o,n,i,r,p,a,u,c,l,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.createClass,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){p=e.cclegacy,a=e._decorator,u=e.Component},function(e){c=e.PopupNotice},function(e){l=e.PopupLeaderboard},function(e){s=e.PopupCollection}],execute:function(){var f,d,b,y,P,g,h,v,L,z;p._RF.push({},"555d2aysiJGbLzAzp6ilWNP","PopupManager",void 0);var C=a.ccclass,m=a.property;e("PopupManager",(f=C("PopupManager"),d=m(c),b=m(l),y=m(s),f(((z=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),p=0;p<o;p++)n[p]=arguments[p];return t=e.call.apply(e,[this].concat(n))||this,i(t,"popupNotice",h,r(t)),i(t,"popupLeaderboard",v,r(t)),i(t,"popupCollection",L,r(t)),t}o(t,e);var p=t.prototype;return p.onLoad=function(){t.instance=this},p.start=function(){},p.update=function(e){},n(t,null,[{key:"Instance",get:function(){return this.instance||(this.instance=new this)}}]),t}(u)).instance=void 0,h=t((g=z).prototype,"popupNotice",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=t(g.prototype,"popupLeaderboard",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=t(g.prototype,"popupCollection",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=g))||P));p._RF.pop()}}}));

System.register("chunks:///_virtual/PopupNotice.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PopupEntity.ts"],(function(t){var e,o,n,i,r,p,c,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,p=t._decorator,c=t.Label},function(t){u=t.PopupEntity}],execute:function(){var l,a,s,f,y;r._RF.push({},"0a721fK04xM9YTqKxpWcRyP","PopupNotice",void 0);var h=p.ccclass,P=p.property;t("PopupNotice",(l=h("PopupNotice"),a=P(c),l((y=e((f=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),p=0;p<o;p++)r[p]=arguments[p];return e=t.call.apply(t,[this].concat(r))||this,n(e,"lbContent",y,i(e)),e}return o(e,t),e.prototype.open=function(t,e,o){this.lbContent.string=e,this.show(t,o)},e}(u)).prototype,"lbContent",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=f))||s));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});