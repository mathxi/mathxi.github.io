(function(e){function t(t){for(var i,r,a=t[0],c=t[1],u=t[2],d=0,m=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},s={app:0},o=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},"206d":function(e,t,n){"use strict";var i=n("4413"),s=n.n(i);s.a},2237:function(e,t,n){},3:function(e,t){},"38d5":function(e,t,n){"use strict";var i=n("2237"),s=n.n(i);s.a},4:function(e,t){},4413:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"router-anim"}},[e.logged?n("router-view"):n("div",{staticClass:"container__loader"},[n("loader")],1)],1),n("md-snackbar",{style:e.snackBar.M_style,attrs:{"md-position":"center","md-duration":e.snackBar.M_mdDuration,"md-active":e.snackBar.M_showSnackbar},on:{"update:mdActive":function(t){return e.$set(e.snackBar,"M_showSnackbar",t)},"update:md-active":function(t){return e.$set(e.snackBar,"M_showSnackbar",t)}}},[n("span",[e._v(e._s(e.snackBar.M_message))]),n("md-button",{on:{click:function(t){e.snackBar.M_showSnackbar=!1}}},[e._v("Ok!")])],1),n("AdminButton")],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loader"},[e._v("Loading...")])},a=[],c={name:"loader"},u=c,l=(n("74ae"),n("2877")),d=Object(l["a"])(u,r,a,!1,null,null,null),m=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("md-speed-dial",{staticClass:"md-top-left",attrs:{"md-direction":"bottom"}},[n("md-speed-dial-target",[n("md-icon",{staticClass:"md-morph-initial"},[e._v("unfold_more")]),n("md-icon",{staticClass:"md-morph-final"},[e._v("unfold_less")])],1),n("md-speed-dial-content",[e.admin.connected?n("md-button",{staticClass:"md-fab",staticStyle:{"background-color":"#F44336"},on:{click:e.disconnectAdmin}},[n("md-icon",[e._v("toggle_on")])],1):n("md-button",{staticClass:"md-fab md-primary",attrs:{to:"/admin"}},[n("md-icon",[e._v("toggle_off")])],1),n("md-button",{staticClass:"md-fab md-primary",attrs:{to:"/"}},[n("md-icon",[e._v("home")])],1)],1)],1)],1)},p=[],f={name:"AdminButton",methods:{disconnectAdmin:function(){var e=this;this.admin.connected=!1,this.$store.commit("updateSnackBar",{M_showSnackbar:!0,M_style:"background-color: #bd4747;",M_message:"Déconnecté"}),setTimeout((function(t){e.snackBar.M_showSnackbar=!1}),1e3)}},computed:{admin:{get:function(){return this.$store.getters.getAdmin},set:function(e){this.$store.commit("updateAdmin",e)}},snackBar:{get:function(){return this.$store.getters.getSnackBar},set:function(e){this.$store.commit("updateUser",e)}}}},b=f,v=Object(l["a"])(b,h,p,!1,null,null,null),g=v.exports,_={name:"appBase",data(){return{logged:!1}},methods:{},async created(){this.logged=!1,"login"!=this.$router.app.$route.name?await this.$store.dispatch("isConnected")?this.logged=!0:(this.snackBar.M_showSnackbar=!0,this.snackBar.M_style="background-color: #bd4747;",this.snackBar.M_message="Non connecté",this.$router.replace("/"),setTimeout(e=>{this.snackBar.M_showSnackbar=!1},1e3)):this.logged=!0},computed:{snackBar:{get(){return this.$store.getters.getSnackBar},set(e){this.$store.commit("updateUser",e)}}},mounted(){},components:{loader:m,AdminButton:g}},k=_,C=(n("5c0b"),Object(l["a"])(k,s,o,!1,null,null,null)),w=C.exports,q=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("md-card",{staticClass:"card__login"},[n("md-card-header",[n("div",{staticClass:"md-title"},[e._v("Login")])]),n("md-card-content",[n("md-field",[n("label",[e._v("Prénom")]),n("md-input",{staticClass:"inputLogin",attrs:{placeholder:"Marc"},model:{value:e.user.prenom,callback:function(t){e.$set(e.user,"prenom",t)},expression:"user.prenom"}})],1),n("md-field",[n("label",[e._v("Nom")]),n("md-input",{staticClass:"inputLogin",attrs:{placeholder:"Janio"},model:{value:e.user.nom,callback:function(t){e.$set(e.user,"nom",t)},expression:"user.nom"}})],1),n("md-field",[n("label",[e._v("Entreprise")]),n("md-input",{staticClass:"inputLogin",attrs:{placeholder:"C2C WorldWide"},model:{value:e.user.entreprise,callback:function(t){e.$set(e.user,"entreprise",t)},expression:"user.entreprise"}})],1)],1),n("md-card-actions",[n("md-button",{staticClass:"md-raised md-primary",on:{click:function(t){return e.verifierInscription()}}},[e._v("Commencer le test")])],1)],1)],1)},Q=[],$=(n("fb6a"),n("d3b7"),n("96cf"),{questionnaires:[{idQuestionnaire:1,label:"Tests de sécurité",currentQuestion:0,questions:[{idQuestion:1,type:"checkbox",label:"VERMONDEN Daniel est le plus beau ?",choices:[{idChoice:1,label:"oui",value:!1},{idChoice:2,label:"non",value:!1}],trueAnswer:[{idChoice:1,label:"oui",value:!0},{idChoice:2,label:"non",value:!1}]},{idQuestion:2,type:"checkbox",label:"Tu m'aimes?",choices:[{idChoice:1,label:"oui",value:!1},{idChoice:2,label:"non",value:!1}],trueAnswer:[{idChoice:1,label:"oui",value:!1},{idChoice:2,label:"non",value:!0}]},{idQuestion:3,type:"checkbox",label:"Comestible?",choices:[{idChoice:1,label:"Pâtes",value:!1},{idChoice:2,label:"Pneux",value:!1},{idChoice:3,label:"Epinards",value:!1}],trueAnswer:[{idChoice:1,label:"Pâtes",value:!0},{idChoice:2,label:"Pneux",value:!1},{idChoice:3,label:"Epinards",value:!1}]},{idQuestion:4,type:"checkbox",label:"Quel âge à Mathieu Janio?",choices:[{idChoice:1,label:"18",value:!1},{idChoice:2,label:"19",value:!1},{idChoice:3,label:"20",value:!1},{idChoice:4,label:"21",value:!1}],trueAnswer:[{idChoice:1,label:"18",value:!1},{idChoice:2,label:"19",value:!1},{idChoice:3,label:"20",value:!1},{idChoice:4,label:"21",value:!0}]},{idQuestion:5,type:"checkbox",label:"Le casque est-il utile?",choices:[{idChoice:1,label:"Oui ! tu veux mourir ?",value:!1},{idChoice:2,label:"Non",value:!1}],trueAnswer:[{idChoice:1,label:"Oui ! tu veux mourir ?",value:!0},{idChoice:2,label:"Non",value:!1}]},{idQuestion:6,type:"checkbox",label:"Les gants nous protègent de tous dégats aux mains?",choices:[{idChoice:1,label:"Oui",value:!1},{idChoice:2,label:"Non",value:!1}],trueAnswer:[{idChoice:1,label:"Oui",value:!1},{idChoice:2,label:"Non",value:!0}]}]}]}),M={name:"login",created:function(){for(var e=$.questionnaires[0],t=e.questions.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=e.questions[t];e.questions[t]=e.questions[n],e.questions[n]=i}e.questions=e.questions.slice(0,3),this.$store.commit("updateQuestionnaire",e)},methods:{verifierInscription:function(){var e=this;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$store.dispatch("isConnected"));case 2:if(!t.sent){t.next=6;break}this.$router.push("questionnaire"),t.next=8;break;case 6:this.$store.commit("updateSnackBar",{M_showSnackbar:!0,M_style:"background-color: #bd4747;",M_message:"Champs non remplis"}),setTimeout((function(t){e.snackBar.M_showSnackbar=!1}),1e3);case 8:case"end":return t.stop()}}),null,this)}},computed:{user:{get:function(){return this.$store.getters.getUser},set:function(e){this.$store.commit("updateUser",e)}},snackBar:{get:function(){return this.$store.getters.getSnackBar},set:function(e){this.$store.commit("updateUser",e)}}},components:{},data:function(){return{}}},B=M,S=(n("206d"),Object(l["a"])(B,y,Q,!1,null,null,null)),x=S.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"questionnaire"},[n("div",{staticClass:"center__elem"},[n("h1",[e._v("Questionnaire de "+e._s(e.user.nom)+" "+e._s(e.user.prenom))]),n("md-card",[n("md-progress-bar",{staticClass:"md-accent",attrs:{"md-mode":"determinate","md-value":e.percentresponce}}),n("md-card-header",[n("div",{staticClass:"md-title"},[e._v(e._s(e.questionnaire.label))]),n("div",{staticClass:"md-subhead"},[e._v("Total questions: "+e._s(e.questionnaire.questions.length))])]),n("CheckboxQuestion",{attrs:{disable:!1,question:e.questionnaire.questions[e.curQuestionPosition()-1]}}),n("md-card-actions",[e.isFirstQuestion()?e._e():n("md-button",{on:{click:e.precQuestion}},[e._v("Précédent")]),e.isLastQuestion()?e._e():n("md-button",{on:{click:e.nextQuestion}},[e._v("Suivant")]),e.isLastQuestion()?n("md-button",{on:{click:e.endSurvey}},[e._v("Terminer")]):e._e()],1)],1)],1)])},O=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("md-card-header",[n("div",{staticClass:"md-title"},[e._v(e._s(e.question.label))])]),n("md-card-content",e._l(e.question.choices,(function(t){return n("md-checkbox",{key:t.idResponse,attrs:{disabled:e.disable},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"choice.value"}},[e._v(e._s(t.label))])})),1)],1)},j=[],E={name:"CheckboxQuestion",props:["question","disable"]},T=E,U=Object(l["a"])(T,P,j,!1,null,null,null),D=U.exports,L=n("16b2"),I={name:"questionnaire",computed:{percentresponce:function(){var e=100*this.questionnaire.currentQuestion/this.questionnaire.questions.length;return e},snackBar:{get:function(){return this.$store.getters.getSnackBar},set:function(e){this.$store.commit("updateUser",e)}},questionnaire:{get:function(){return this.$store.getters.getQuestionnaire()},set:function(e){this.$store.commit("updateQuestionnaire",e)}},user:{get:function(){return this.$store.getters.getUser},set:function(e){this.$store.commit("updateUser",e)}}},methods:{endSurvey:function(){var e=this,t=new L["a"]("app-questionnaire"),n=this.user.nom+this.user.prenom+this.user.entreprise+this.questionnaire.idQuestionnaire,i=Object.assign({},this.questionnaire,this.user);i["_id"]=n,t.put(i),this.snackBar.M_showSnackbar=!0,this.snackBar.M_style="background-color: #58b368;",this.snackBar.M_message="Réponses enregistré",setTimeout((function(t){e.snackBar.M_showSnackbar=!1}),1e3),this.$router.push({path:"resultats",query:{id_questionnaire:n}})},nbuserSurveyQuestion:function(){return this.questionnaire.questions.length},curQuestionPosition:function(){return this.questionnaire.currentQuestion+1},nextQuestion:function(){this.$store.commit("updateCurrQuestion",1)},precQuestion:function(){this.isFirstQuestion()||this.$store.commit("updateCurrQuestion",-1)},isFirstQuestion:function(){return this.curQuestionPosition()-1===0},isLastQuestion:function(){var e=this.nbuserSurveyQuestion(),t=this.curQuestionPosition();return e===t}},created:function(){},components:{CheckboxQuestion:D}},N=I,R=(n("38d5"),Object(l["a"])(N,A,O,!1,null,null,null)),F=R.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("md-card",{staticClass:"card__login"},[n("md-card-header",[n("div",{staticClass:"md-title"},[e._v("Administration")])]),e.admin.connected?n("md-card-content",[n("div",[n("md-list",[n("md-subheader",[e._v("Liste des réponses")]),e._l(e.answers,(function(t){return n("md-list-item",{key:t._id},[n("span",{staticClass:"md-list-item-text"},[e._v(e._s(t.nom)+" "+e._s(t.prenom))]),n("span",{staticClass:"md-list-item-text"},[e._v(e._s(e.nbGoodQuestions(t))+" / "+e._s(t.questions.length))]),n("md-button",{staticClass:"md-icon-button md-dense md-primary md-raised",attrs:{to:{path:"resultats",query:{id_questionnaire:t._id}}}},[n("md-icon",[e._v("remove_red_eye")])],1),n("md-button",{staticClass:"md-icon-button md-dense md-primary md-raised",staticStyle:{"background-color":"#e00e0e"},on:{click:function(n){return e.deleteItem(t)}}},[n("md-icon",[e._v("delete_forever")])],1)],1)}))],2)],1)]):e._e(),e.admin.connected?e._e():n("md-card-content",[n("md-field",[n("label",[e._v("Identifiant")]),n("md-input",{model:{value:e.inputID,callback:function(t){e.inputID=t},expression:"inputID"}})],1),n("md-field",[n("label",[e._v("Mot de passe")]),n("md-input",{attrs:{type:"password"},model:{value:e.inputPassword,callback:function(t){e.inputPassword=t},expression:"inputPassword"}})],1),n("md-button",{staticClass:"md-raised md-accent",on:{click:e.TryConnection}},[e._v("Connexion")])],1),n("md-card-actions")],1)],1)},G=[],J=(n("4de4"),n("4160"),n("45fc"),n("159b"),{name:"admin",created:function(){var e=this,t=new L["a"]("app-questionnaire");t.allDocs({include_docs:!0,attachments:!0}).then((function(t){t.rows.forEach((function(t){e.answers.push(t.doc)}))}))},methods:{deleteItem:function(e){var t=new L["a"]("app-questionnaire");t.remove(e),this.answers=this.answers.filter((function(t){return e._id!=t._id}))},TryConnection:function(){var e=this;if(this.inputID===this.admin.id){var t=n("279c");t.compareSync(this.inputPassword,this.admin.password)?(this.$store.commit("updateSnackBar",{M_showSnackbar:!0,M_style:"background-color: #58b368;",M_message:"Connecté"}),setTimeout((function(t){e.snackBar.M_showSnackbar=!1}),1e3),this.admin.connected=!0):(this.$store.commit("updateSnackBar",{M_showSnackbar:!0,M_style:"background-color: #bd4747;",M_message:"Mot de passe non valide"}),setTimeout((function(t){e.snackBar.M_showSnackbar=!1}),1e3))}else this.$store.commit("updateSnackBar",{M_showSnackbar:!0,M_style:"background-color: #bd4747;",M_message:"Identifiant non valide"}),setTimeout((function(t){e.snackBar.M_showSnackbar=!1}),1e3)},nbGoodQuestions:function(e){var t=this,n=0;return e.questions.forEach((function(e){t.isQuestionRight(e)&&n++})),n},isQuestionRight:function(e){for(var t=0,n=function(n){var i=e.trueAnswer.some((function(t){return e.choices[n].idChoice==t.idChoice&&e.choices[n].value==t.value}));i&&t++},i=0;i!=e.choices.length;i++)n(i);if(t==e.choices.length)return!0}},computed:{admin:{get:function(){return this.$store.getters.getAdmin},set:function(e){this.$store.commit("updateAdmin",e)}},snackBar:{get:function(){return this.$store.getters.getSnackBar},set:function(e){this.$store.commit("updateUser",e)}}},components:{},data:function(){return{answers:[],inputID:"svpdonnez",inputPassword:"moiun20"}}}),z=J,K=Object(l["a"])(z,V,G,!1,null,null,null),W=K.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"resultats"},[n("div",{staticClass:"center__elem"},[n("h1",[e._v("Vos résultats")]),n("div",{staticClass:"md-subhead"},[e._v("Total questions:"+e._s(e.nbGoodQuestions)+" / "+e._s(e.questionnaire.questions.length))]),e._l(e.questionnaire.questions,(function(t){return n("md-card",{key:t.idQuestion},[n("md-card-actions",[e.isQuestionRight(t)?n("md-icon",{staticClass:"trueValue"},[e._v("check_circle")]):n("md-icon",{staticClass:"falseValue"},[e._v("clear")])],1),n("checkboxquestion",{attrs:{disable:!0,question:t}})],1)}))],2),n("AdminButton")],1)},X=[],Y={name:"resultats",mounted:function(){var e=this,t=new L["a"]("app-questionnaire");t.get(this.$router.app.$route.query.id_questionnaire).then((function(t){console.log("doc",t),e.questionnaire=t})).catch((function(e){console.log(e)}))},computed:{nbGoodQuestions:function(){var e=this,t=0;return this.questionnaire.questions.forEach((function(n){e.isQuestionRight(n)&&t++})),t},user:{get:function(){return this.$store.getters.getUser}}},data:function(){return{questionnaire:{idQuestionnaire:0,label:"",currentQuestion:0,questions:[],prenom:"",nom:"",entreprise:""}}},components:{checkboxquestion:D,AdminButton:g},methods:{isQuestionRight:function(e){for(var t=0,n=function(n){var i=e.trueAnswer.some((function(t){return e.choices[n].idChoice==t.idChoice&&e.choices[n].value==t.value}));i&&t++},i=0;i!=e.choices.length;i++)n(i);if(t==e.choices.length)return!0}}},Z=Y,ee=(n("dc41"),Object(l["a"])(Z,H,X,!1,null,"6497ffeb",null)),te=ee.exports;i["default"].use(q["a"]);var ne=[{path:"/",name:"login",component:x},{path:"/resultats",name:"resultats",component:te},{path:"/admin",name:"admin",component:W},{path:"/questionnaire",name:"questionnaire",component:F}],ie=new q["a"]({mode:"history",base:"/",routes:ne}),se=ie,oe=n("9483");Object(oe["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var re=n("2f62"),ae=n("0e44");i["default"].use(re["a"]);var ce=new re["a"].Store({plugins:[Object(ae["a"])()],state:{admin:{id:"svpdonnez",password:"$2a$10$CTXYEAB16CSKKB43yVlno.K5qAUBUyiHm6/vAf2DCUFq2MLqznwVO",connected:!1},user:{prenom:"",nom:"",entreprise:""},globalMessage:{M_showSnackbar:!1,M_mdDuration:1500,M_style:"background-color: #bd4747;",M_message:""},questionnaire:{idQuestionnaire:0,label:"",currentQuestion:0,questions:[{idQuestion:0,type:"",label:"",choices:[],trueAnswer:[]}]}},mutations:{updateAdmin:function(e,t){e.admin=t},updateSnackBar:function(e,t){e.globalMessage=t},updateUser:function(e,t){e.user=t},updateQuestionnaire:function(e,t){e.questionnaire=t},updateCurrQuestion:function(e,t){e.questionnaire.currentQuestion+=t}},getters:{getQuestionnaire:function(e){return function(){return e.questionnaire}},getUser:function(e){return e.user},getAdmin:function(e){return e.admin},getSnackBar:function(e){return e.globalMessage}},actions:{isConnected:function(e){var t=e.getters.getUser;return console.log("hello user",t),""!=t.prenom&&""!=t.nom&&""!=t.entreprise&&(console.log("true"),!0)}}}),ue=n("43f9"),le=n.n(ue);n("51de");i["default"].use(le.a),i["default"].config.productionTip=!1,new i["default"]({store:ce,router:se,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),s=n.n(i);s.a},"74ae":function(e,t,n){"use strict";var i=n("b4ad"),s=n.n(i);s.a},"9c0c":function(e,t,n){},b4ad:function(e,t,n){},cfbf:function(e,t,n){},dc41:function(e,t,n){"use strict";var i=n("cfbf"),s=n.n(i);s.a}});
//# sourceMappingURL=app.593d55fe.js.map