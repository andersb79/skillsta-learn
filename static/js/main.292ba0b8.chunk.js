(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,a){e.exports=a(309)},169:function(e,t,a){},170:function(e,t,a){},309:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),l=(a(169),a(17)),s=(a(170),a(353)),c=a(359),u=a(360),m=a(361),d=a(362),p=a(305),g=a(39),f=a(358),v=a(80),h=a.n(v),E=a(142),b=a.n(E),y=a(57),w=a.n(y),N=a(355),I=a(152),k=a(357),O=a(141),x=a.n(O),j=a(18),C=a(30);var S=Object(j.a)(function(e){e.store;var t=e.settings;function a(e){document.getElementById(e.id).webkitEnterFullscreen()}return t.hasSharedPath?r.a.createElement("video",{onClick:function(){return a(t)},id:t.id,loop:!0,playsInline:!0,preload:"none",muted:!0,width:"100%",height:"100%"},r.a.createElement("source",{src:t.dropboxLink,type:"video/mp4"})):r.a.createElement(C.Video,{onClick:function(){return a(t)},id:t.id,cloudName:"deolievif",publicId:t.publicId,width:"100%",height:"100%",loop:!0,muted:!0,playsInline:!0,preload:"none",poster:t.poster})}),T=a(376),D=a(16),L=48,F=Object(s.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{}}});var P=Object(D.c)(function(e){var t=e.store,a=F(),i=r.a.useState(!0),o=Object(l.a)(i,2),s=o[0];function v(e,t){e.setVisibility(t);var a=document.getElementById(e.id);a?t?a.play():a.pause():console.log("not found")}o[1],Object(n.useEffect)(function(){setTimeout(function(){t.levels.filter(function(e){return e.isVisible}).map(function(e){v(e,!0)})},1)});var E=r.a.useState(null),y=Object(l.a)(E,2),O=y[0],j=y[1],C=r.a.useState(null),D=Object(l.a)(C,2),P=D[0],R=D[1],A=Boolean(O);function M(e){t.setLevelFilter(e),j(null)}function U(e){t.switchSeason(e),R(null)}function V(e){return"MEDIUM"===e.category?{backgroundColor:"orange"}:"HARD"===e.category?{backgroundColor:"red"}:{backgroundColor:"green"}}return r.a.createElement("div",{className:"game"},r.a.createElement(N.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)}},r.a.createElement(x.a,null),t.levelFilter.text),r.a.createElement(I.a,{id:"long-menu",anchorEl:O,keepMounted:!0,open:A,onClose:M,PaperProps:{style:{maxHeight:4.5*L,width:200}}},t.levelFilters.map(function(e){return r.a.createElement(k.a,{key:e.id,selected:e.id===t.levelFilter,onClick:function(){return M(e)}},e.text)})),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(T.a,{variant:"outlined",label:t.viewSeasonObject.seasonInfoText,clickable:!0,className:a.chip,color:"primary",onDelete:function(){},deleteIcon:r.a.createElement("div",null,r.a.createElement(f.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e,t){R(e.currentTarget)}},r.a.createElement(b.a,null)),r.a.createElement(I.a,{id:"simple-menu",anchorEl:P,keepMounted:!0,open:Boolean(P),onClose:U},t.seasonsWithoutView.map(function(e){return r.a.createElement(k.a,{key:e.season,onClick:function(){return U(e)}},e.friendlyName)})))})),t.filteredLevels.map(function(e,n){return r.a.createElement(w.a,{key:e.id,onChange:function(t){return v(e,t)}},r.a.createElement(c.a,{key:e.level,className:a.card},r.a.createElement(u.a,{avatar:r.a.createElement(p.a,{"aria-label":"Recipe",style:V(e),className:a.avatar},e.level),title:e.name,subheader:e.displayText}),r.a.createElement(m.a,null,r.a.createElement(S,{store:t,settings:e}),r.a.createElement("div",{className:"card-content"},r.a.createElement(g.a,{variant:"body2",color:"textSecondary",component:"p"},e.details))),r.a.createElement(d.a,{in:s,timeout:"auto",unmountOnExit:!0},e.isActiveSeason&&r.a.createElement(m.a,null,r.a.createElement("div",{className:"card-content2"},r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(a){return function(e,a){var n=e.target.files[0];t.processFile(n,a,function(e){alert("Uppladdning klar")})}(a,e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(f.a,{variant:"outlined"},"Ladda upp ",r.a.createElement(h.a,null)))))))))}))}),R=a(87),A=a(38),M=a.n(A),U=a(81),V=a.n(U),H=a(82),B=a.n(H),z=a(143),G=a.n(z),W=a(374),J=a(363),K=a(364),_=a(366),Y=a(365),q=Object(s.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"}}});var X=Object(j.a)(function(e){e.store;var t=e.user,a=q();return r.a.createElement(J.a,{cellHeight:180,className:a.gridList},r.a.createElement(K.a,{key:"Subheader",cols:2,style:{height:"auto"}},r.a.createElement(Y.a,{component:"div"},t.videoList.length," uppladdade")),t.videoList.map(function(e){return r.a.createElement(K.a,{key:e.id,onClick:function(){}},r.a.createElement("img",{src:e.img,alt:e.title}),r.a.createElement(_.a,{title:e.title,subtitle:r.a.createElement("span",null,e.challange)}))}))}),Q=Object(s.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var $=Object(j.a)(function(e){var t=e.store,a=Q(),n=r.a.useState({id:t.selectedProfile.id,name:t.selectedProfile.name,userName:t.selectedProfile.userName,password:t.selectedProfile.password,profileImage:t.selectedProfile.profileImage,favoriteTeam:t.selectedProfile.favoriteTeam,playerTeam:t.selectedProfile.playerTeam,position:t.selectedProfile.position,shirtNumber:t.selectedProfile.shirtNumber}),i=Object(l.a)(n,2),o=i[0];return i[1],r.a.createElement("div",{className:"profileReadOnly"},r.a.createElement("div",null,r.a.createElement("div",{className:"left"},r.a.createElement(G.a,{onClick:function(){return t.selectProfile()}})),r.a.createElement("div",{className:"right"},t.selectedProfile.name)),r.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},r.a.createElement(C.Image,{cloudName:"deolievif",publicId:t.selectedProfile.profileImage,width:"100%",height:"100%"}),r.a.createElement(W.a,{disabled:!0,id:"standard-name",label:"Namn",className:a.textField,value:o.name,margin:"normal"}),r.a.createElement(W.a,{id:"standard-name",label:"Favoritlag",className:a.textField,value:o.favoriteTeam,disabled:!0,margin:"normal"}),r.a.createElement(W.a,{id:"standard-name",label:"Lag",className:a.textField,value:o.playerTeam,disabled:!0,margin:"normal"}),r.a.createElement(W.a,{id:"standard-name",label:"Position",className:a.textField,value:o.position,disabled:!0,margin:"normal"}),r.a.createElement(W.a,{id:"standard-name",label:"Tr\xf6jnummer",className:a.textField,value:o.shirtNumber,disabled:!0,margin:"normal"}),r.a.createElement(X,{store:t,user:t.selectedProfile})))}),Z=a(367),ee=Object(s.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:R.a[500]}}});function te(e,t){e.setVisibility(t);var a=document.getElementById(e.id);a?t?a.play():a.pause():console.log("not found")}function ae(e){var t=e.store,a=ee();function n(e){var t=e.item;if(t.isDone){var a={color:"green"};return"MEDIUM"===t.game.category&&(a.color="orange"),"HARD"===t.game.category&&(a.color="red"),r.a.createElement(M.a,{style:a})}return t.isRejected?r.a.createElement(V.a,null):r.a.createElement(B.a,null)}return 0===t.filteredItems.length?r.a.createElement("div",{className:"banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("span",null,"Inga uppladdningar finns. "))):t.filteredItems.map(function(e,i){return r.a.createElement(w.a,{key:e.publicId,onChange:function(t){return te(e,t)}},r.a.createElement(c.a,{key:e.publicId,className:a.card},r.a.createElement(u.a,{avatar:r.a.createElement(p.a,{"aria-label":"Recipe",className:a.avatar},r.a.createElement(C.Image,{cloudName:"deolievif",publicId:e.user.profileImage,width:"100%",height:"100%"})),action:r.a.createElement(n,{item:e}),title:r.a.createElement("div",{onClick:function(){return t.selectProfile(e.user)}},e.user.name),subheader:e.game.name}),r.a.createElement(m.a,null,r.a.createElement(S,{store:t,settings:e}),e.hasComment&&r.a.createElement("div",{className:"comments"},r.a.createElement(g.a,{variant:"overline",style:{color:"gray",fontSize:"10px"}},"Fr\xe5n tr\xe4naren:"),r.a.createElement(g.a,{variant:"subtitle2"},e.comment))),r.a.createElement(Z.a,null,r.a.createElement(g.a,{variant:"overline",style:{color:"gray"}},e.displayText))))})}var ne=Object(j.a)(function(e){var t=e.store;return Object(n.useEffect)(function(){setTimeout(function(){t.items.filter(function(e){return e.isVisible}).map(function(e){te(e,!0)})},1)}),r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"item-list"},r.a.createElement(w.a,{offset:{top:80},onChange:function(e){return function(e,t){t&&e.refresh()}(t,e)}},r.a.createElement("div",{className:"refresh-div"},"dra f\xf6r att ladda")),!t.selectedProfile&&r.a.createElement(ae,{store:t}),t.selectedProfile&&r.a.createElement($,{store:t})))}),re=a(372),ie=a(375),oe=a(373),le=a(150),se=a.n(le),ce=a(84),ue=a.n(ce),me=a(85),de=a.n(me),pe=a(151),ge=a.n(pe),fe=a(83),ve=a(144),he=a(145),Ee=a.n(he),be=Object(s.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var ye=Object(j.a)(function(e){var t=e.store,a=e.onLogout,n=be(),i=r.a.useState({id:t.loggedIn.id,name:t.loggedIn.name,userName:t.loggedIn.userName,password:t.loggedIn.password,profileImage:t.loggedIn.profileImage,favoriteTeam:t.loggedIn.favoriteTeam,playerTeam:t.loggedIn.playerTeam,position:t.loggedIn.position,shirtNumber:t.loggedIn.shirtNumber}),o=Object(l.a)(i,2),s=o[0],c=o[1],u=function(e){return function(t){c(Object(ve.a)({},s,Object(fe.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(e){return function(e,a){var n=e.target.files[0];t.uploadImage(n,function(e){})}(e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(f.a,{variant:"outlined"},r.a.createElement(Ee.a,null)))),r.a.createElement("form",{className:n.container,noValidate:!0,autoComplete:"off"},r.a.createElement(C.Image,{cloudName:"deolievif",publicId:t.loggedIn.profileImage,width:"100%",height:"100%"}),r.a.createElement(W.a,{id:"name",label:"Namn",className:n.textField,value:s.name,onChange:u("name"),margin:"normal"}),r.a.createElement(W.a,{id:"password",type:"password",label:"L\xf6senord",className:n.textField,value:s.password,onChange:u("password"),margin:"normal"}),r.a.createElement(W.a,{id:"favoriteTeam",label:"Favoritlag",className:n.textField,value:s.favoriteTeam,onChange:u("favoriteTeam"),margin:"normal"}),r.a.createElement(W.a,{id:"playerTeam",label:"Lag",className:n.textField,value:s.playerTeam,onChange:u("playerTeam"),margin:"normal"}),r.a.createElement(W.a,{id:"position",label:"Position",className:n.textField,value:s.position,onChange:u("position"),margin:"normal"}),r.a.createElement(W.a,{id:"shirtNumber",label:"Tr\xf6jnummer",className:n.textField,value:s.shirtNumber,onChange:u("shirtNumber"),margin:"normal"})),r.a.createElement(f.a,{variant:"outlined",onClick:function(){t.updateUser(s)}},"Spara"),r.a.createElement(f.a,{variant:"outlined",onClick:function(){window.localStorage.removeItem("loggedIn"),a()}},"Logga ut"))}),we=a(356),Ne=a(310),Ie=a(369),ke=a(368),Oe=a(370),xe=Object(s.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});var je=Object(j.a)(function(e){var t=e.store,a=xe();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"60px",textAlign:"center"}},r.a.createElement(g.a,{variant:"h6",gutterBottom:!0},"TOPPLISTA ",t.viewSeasonObject.friendlyName),r.a.createElement(g.a,{variant:"overline",style:{color:"gray"},gutterBottom:!0},"max 200 po\xe4ng")),r.a.createElement("div",{className:"highscore"},r.a.createElement(we.a,{className:a.root},t.highScoreList.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(Ne.a,{key:e.id},r.a.createElement(ke.a,null,r.a.createElement(p.a,null,r.a.createElement(C.Image,{cloudName:"deolievif",publicId:e.profileImage,width:"100%",height:"100%"}))),r.a.createElement(Ie.a,{primary:e.name,secondary:"Po\xe4ng: ".concat(e.highscore)})),r.a.createElement(Oe.a,{variant:"inset",component:"li"}))}))))}),Ce=a(146),Se=a.n(Ce),Te=a(155),De=a(371);var Le=Object(j.a)(function(e){var t=e.store;function a(e){t.setColorCount(e),t.setRunningApp("COLOR")}return r.a.createElement(Te.a,{className:"help"},r.a.createElement(g.a,{paragraph:!0},"H\xe4r hittar du hj\xe4lp med hur appen fungerar."),r.a.createElement(g.a,{paragraph:!0},"Du kollar just nu p\xe5"," ",r.a.createElement("span",{style:{color:"red"}},t.viewSeasonObject.friendlyName)),r.a.createElement(g.a,{paragraph:!0},"Visa annan s\xe4song:"),r.a.createElement(De.a,{color:"primary","aria-label":"Outlined primary button group"},t.seasonsWithoutView.map(function(e){return r.a.createElement(f.a,{key:e.season,onClick:function(){return t.switchSeason(e)}},e.friendlyName)})),r.a.createElement(g.a,{paragraph:!0}),r.a.createElement(g.a,{paragraph:!0},"Varje s\xe4song har 20 utmaningar. Man v\xe4ljer en utmaning som man sen filmar i horisontellt l\xe4ge med kameran. N\xe4r man \xe4r n\xf6jd s\xe5 klickar man p\xe5 ladda upp p\xe5 den utmaningen man gjort. Filmen hamnar d\xe5 f\xf6r utv\xe4rdering, den \xe4r d\xe5 bara synlig f\xf6r dig. Om den blir godk\xe4nd s\xe5 kommer den synas f\xf6r \xf6vriga deltagare."),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(ue.a,null)," Hem"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(g.a,{paragraph:!0},"H\xe4r visas fl\xf6det med alla s\xe4songens anv\xe4ndaruppladde filmer."),r.a.createElement(g.a,{paragraph:!0},r.a.createElement(B.a,null),"Under utv\xe4rdering f\xf6r att se om man klarat det."),r.a.createElement(g.a,{paragraph:!0},r.a.createElement(M.a,null),"Klarad utmaning"),r.a.createElement(g.a,{paragraph:!0},r.a.createElement(V.a,null),"Utmaning misslyckad. Bara att f\xf6rs\xf6ka igen. Kanske hade du inte flytet i utmaningen, eller missf\xf6rt\xe5tt n\xe5got. Kontrollera videon och instruktionerna och f\xf6rs\xf6k igen."),r.a.createElement(g.a,{paragraph:!0},"Om du klickar p\xe5 personens namn s\xe5 kan du se profilen."),r.a.createElement(g.a,{paragraph:!0},"Klicka p\xe5 videon f\xf6r att se den i helsk\xe4rm.")),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(M.a,null)," Utmaningar"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(g.a,{paragraph:!0},"H\xe4r visas fl\xf6det med alla s\xe4songens utmaningar. Det finns 3 olika niv\xe5er. L\xe4tt, medium, sv\xe5r."),r.a.createElement(g.a,{paragraph:!0},"10 l\xe4tta \xf6vningar, 5 po\xe4ng var"),r.a.createElement(g.a,{paragraph:!0},"5 medium \xf6vningar, 10 po\xe4ng var"),r.a.createElement(g.a,{paragraph:!0},"5 sv\xe5ra \xf6vningar, 20 po\xe4ng var"),r.a.createElement(g.a,{paragraph:!0},r.a.createElement(h.a,null),"Klicka p\xe5 denna f\xf6r att ladda upp en film. Filma alltid i horisontellt l\xe4ge.")),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(M.a,null)," Topplistan"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(g.a,{paragraph:!0},"Varje s\xe4song best\xe5r av maximalt 200 po\xe4ng. H\xe4r visas vem som f\xe5tt flest po\xe4ng.")),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(de.a,null)," Profil"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(g.a,{paragraph:!0},"H\xe4r kan du ladda upp din profilbild och andra anv\xe4ndarinst\xe4llningar.")),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(Se.a,null)," Verktyg"),r.a.createElement(f.a,{variant:"outlined",onClick:function(){return t.setRunningApp("NUMBER")}},"Nummer"),r.a.createElement(f.a,{variant:"outlined",onClick:function(){return a(2)}},"Color 2 f\xe4rger"),r.a.createElement(f.a,{variant:"outlined",onClick:function(){return a(4)}},"Color 4 f\xe4rger"),r.a.createElement(g.a,{paragraph:!0},"Om det finns nya uppdateringar kan du uppdatera h\xe4r."),r.a.createElement(f.a,{variant:"outlined",onClick:function(){document.location.reload()}},"Uppdatera appen"))}),Fe=a(147),Pe=a(148),Re=a(153),Ae=a(149),Me=a(154),Ue=function(e){function t(){var e,a;Object(Fe.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(Re.a)(this,(e=Object(Ae.a)(t)).call.apply(e,[this].concat(r)))).generateRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},a.generateColor=function(){var e=10*a.props.colorCount,t=Math.floor(Math.random()*(e-1+1))+1;return t<10?"yellow":t<20?"red":t<30?"blue":t<40?"white":void 0},a.state={number:a.generateRandomNumber(0,9),color:a.generateColor(),delay:3e3},a.tick=function(){a.setState({number:a.generateRandomNumber(0,9),color:a.generateColor()})},a}return Object(Me.a)(t,e),Object(Pe.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.tick,this.state.delay)}},{key:"componentDidUpdate",value:function(e,t){t.delay!==this.state.delay&&(clearInterval(this.interval),this.interval=setInterval(this.tick,this.state.delay))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.props.colorCount?{color:"black"}:{color:"yellow"};return r.a.createElement("div",{style:{backgroundColor:this.state.color},className:"number",onClick:function(){return e.props.store.setRunningApp("MAIN")}},r.a.createElement("div",{className:"inner-number",style:t},this.state.number))}}]),t}(n.Component),Ve=Object(j.a)(Ue);function He(e){return r.a.createElement(g.a,{component:"div",style:{padding:24}},e.children)}var Be=Object(s.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});var ze=Object(D.c)(function(e){var t=e.store,a=e.onLogout,i=Be(),o=Object(n.useState)(0),s=Object(l.a)(o,2),c=s[0],u=s[1];return"NUMBER"===t.appRunning?r.a.createElement(Ve,{store:t}):"COLOR"===t.appRunning?r.a.createElement(Ve,{store:t,colorCount:t.colorCount}):r.a.createElement("div",{className:i.root},r.a.createElement(re.a,{position:"fixed",color:"default"},r.a.createElement(ie.a,{value:c,onChange:function(e,t){u(t)},variant:"scrollable",scrollButtons:"off",indicatorColor:"primary",textColor:"primary"},r.a.createElement(oe.a,{icon:r.a.createElement(ue.a,null)}),r.a.createElement(oe.a,{icon:r.a.createElement(M.a,null)}),r.a.createElement(oe.a,{icon:r.a.createElement(se.a,null)}),r.a.createElement(oe.a,{icon:r.a.createElement(de.a,null)}),r.a.createElement(oe.a,{icon:r.a.createElement(ge.a,null)}))),0===c&&r.a.createElement(He,null,r.a.createElement(ne,{store:t})),1===c&&r.a.createElement(He,null,r.a.createElement(P,{store:t})),2===c&&r.a.createElement(He,null,r.a.createElement(je,{store:t})),3===c&&r.a.createElement(He,null,r.a.createElement(ye,{store:t,onLogout:a})),4===c&&r.a.createElement(He,null,r.a.createElement(Le,{store:t})))});function Ge(e){var t=e.store,a=e.onLogin,i=Object(n.useState)(""),o=Object(l.a)(i,2),s=o[0],c=o[1],u=Object(n.useState)(""),m=Object(l.a)(u,2),d=m[0],p=m[1],v=function(e,t){var a=Object(n.useState)(function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}}),r=Object(l.a)(a,2),i=r[0],o=r[1];return[i,function(t){try{var a=t instanceof Function?t(i):t;o(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("loggedIn",{userName:void 0}),h=Object(l.a)(v,2),E=(h[0],h[1]);return r.a.createElement("div",{className:"login"},r.a.createElement("img",{className:"login-img",src:"skillsta.jpg",alt:"skillsta"}),r.a.createElement("div",{className:"login-img-wrapper"},r.a.createElement(g.a,{paragraph:!0,variant:"h3"},"skillsta"),r.a.createElement("div",{className:"login-user-name"},r.a.createElement("input",{placeholder:"Anv\xe4ndarnamn",className:"login-input",value:s,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"login-password"},r.a.createElement("input",{placeholder:"L\xf6senord",className:"login-input",type:"password",value:d,onChange:function(e){return p(e.target.value)}})),r.a.createElement(f.a,{variant:"contained",onClick:function(e){return function(e){e.preventDefault(),t.login(s.toLowerCase(),d)?(E(t.loggedIn.id),a()):alert("fel anv\xe4ndarnamn/l\xf6senord")}(e)}},"LOGIN")))}var We=a(15),Je=a.n(We),Ke=a(32),_e=a(7),Ye={EASY:"L\xe4tt",MEDIUM:"Medium",HARD:"Sv\xe5r"},qe=_e.d.model("Level",{id:_e.d.string,level:_e.d.integer,details:_e.d.string,name:_e.d.string,category:_e.d.string,publicId:_e.d.string,season:_e.d.integer,sharedPath:_e.d.maybeNull(_e.d.string)}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setPublicId:function(t){e.publicId=t},setName:function(t){e.name=t},setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get hasSharedPath(){return!!e.sharedPath},get dropboxLink(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/").concat(e.publicId,".mov?raw=1")},get categoryName(){return Ye[e.category]},get isActiveSeason(){return Object(_e.c)(e).currentSeason===e.season},get isDone(){var t=Object(_e.c)(e);return t.items.some(function(a){return a.user.id===t.loggedIn.id&&a.isDone&&a.level===e.level})},get points(){return"EASY"===e.category?5:"MEDIUM"===e.category?10:"HARD"===e.category?20:0},get displayText(){return"".concat(e.categoryName," - ").concat(e.points," PO\xc4NG")},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}});function Xe(e){return e<=9?"0"+e:e}var Qe=_e.d.model("Item",{id:_e.d.string,createdTime:_e.d.Date,userName:_e.d.string,publicId:_e.d.string,level:_e.d.integer,status:_e.d.string,sharedPath:_e.d.maybeNull(_e.d.string),comment:_e.d.maybeNull(_e.d.string),season:_e.d.integer}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get hasComment(){return!!e.comment},get hasSharedPath(){return!!e.sharedPath},get dropboxLink(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/").concat(e.publicId,".mov?raw=1")},get isDone(){return"DONE"===e.status},get isRejected(){return"REJECTED"===e.status},get isWaitingForApproval(){return"WAITINGFORAPPROVAL"===e.status},get date(){return e.createdTime.getFullYear()+"-"+Xe(e.createdTime.getMonth()+1)+"-"+Xe(e.createdTime.getDate())},get user(){return Object(_e.c)(e).users.find(function(t){return t.userName===e.userName})},get game(){return Object(_e.c)(e).levels.find(function(t){return t.level===e.level})},get points(){return e.isDone?"EASY"===e.game.category?5:"MEDIUM"===e.game.category?10:"HARD"===e.game.category?20:0:0},get displayText(){return e.isDone?"".concat(e.date," - ").concat(e.game.categoryName," - ").concat(e.points," PO\xc4NG"):"".concat(e.date)},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}}),$e=_e.d.model("User",{id:_e.d.string,userName:_e.d.string,name:_e.d.string,password:_e.d.string,profileImage:_e.d.string,favoriteTeam:_e.d.optional(_e.d.string,""),playerTeam:_e.d.optional(_e.d.string,""),position:_e.d.optional(_e.d.string,""),shirtNumber:_e.d.optional(_e.d.string,"")}).views(function(e){return{get levelStore(){return Object(_e.c)(e)},get items(){return e.levelStore.items.filter(function(t){return t.userName===e.userName})},get videoList(){return e.items.filter(function(t){return t.isDone&&t.userName===e.userName}).map(function(e){return{id:e.id,img:"http://res.cloudinary.com/deolievif/video/upload/".concat(e.publicId,".jpg"),title:e.name,challange:e.game.name}})},get highscore(){return 0===e.items.length?0:5*e.items.filter(function(e){return e.isDone&&"EASY"===e.game.category}).length+10*e.items.filter(function(e){return e.isDone&&"MEDIUM"===e.game.category}).length+20*e.items.filter(function(e){return e.isDone&&"HARD"===e.game.category}).length},get nextChallange(){return e.levelStore.levels[e.items.length]}}}).actions(function(e){return{setProfileImage:function(t){e.profileImage=t},updateUser:function(t){var a=t.name,n=t.password,r=t.profileImage,i=t.favoriteTeam,o=t.playerTeam,l=t.position,s=t.shirtNumber;e.name=a,e.password=n,e.profileImage=r,e.favoriteTeam=i,e.playerTeam=o,e.position=l,e.shirtNumber=s}}});function Ze(e){return e<=9?"0"+e:e}var et=_e.d.model("Season",{id:_e.d.string,season:_e.d.integer,startDate:_e.d.Date,endDate:_e.d.Date,friendlyName:_e.d.string}).views(function(e){return{get countDown(){return Math.round(Math.abs(((new Date).getTime()-e.endDate.getTime())/864e5))},get seasonInfoText(){return e.isCurrentSeason?"".concat(e.friendlyName," - ").concat(e.countDown," dagar kvar"):"".concat(e.friendlyName," - Ej aktiv")},get isCurrentSeason(){var t=Object(_e.c)(e);return e.season===t.currentSeason},get isViewedNow(){var t=Object(_e.c)(e);return e.season===t.viewSeason},get startDateFriendly(){return e.startDate.getFullYear()+"-"+Ze(e.startDate.getMonth()+1)+"-"+Ze(e.startDate.getDate())},get endDateFriendly(){return e.endDate.getFullYear()+"-"+Ze(e.endDate.getMonth()+1)+"-"+Ze(e.endDate.getDate())}}}),tt=[{id:0,text:"Alla utmaningar"},{id:1,text:"Ej klarade utmaningar"},{id:2,text:"Klarade utmaningar"}],at="MAIN",nt=_e.d.model("LevelStore",{levels:_e.d.array(qe),items:_e.d.array(Qe),users:_e.d.array($e),seasons:_e.d.array(et)}).views(function(e){return{get viewSeasonObject(){return e.seasons.find(function(t){return t.season===e.viewSeason})},get seasonsWithoutView(){return e.seasons.filter(function(t){return t.season!==e.viewSeason})},get currentSeasonObject(){return e.seasons.find(function(t){return t.season===e.currentSeason})},get filteredItems(){return e.items.filter(function(t){return t.isDone||t.userName===e.loggedIn.userName})},get highScoreList(){var t=e.users.slice(0);return t.sort(function(e,t){var a=e.highscore,n=t.highscore;return a<n?-1:a>n?1:0}),t.reverse()},get filteredLevels(){return 0===e.levelFilter.id?e.levels.filter(function(t){return t.season===e.viewSeason}):1===e.levelFilter.id?e.levels.filter(function(t){return!t.isDone&&t.season===e.viewSeason}):2===e.levelFilter.id?e.levels.filter(function(t){return t.isDone&&t.season===e.viewSeason}):[]},get levelFilters(){return tt}}}).volatile(function(e){return{loggedIn:null,initzialize:!1,height:null,selectedProfile:null,levelFilter:e.levelFilters[0],api:null,appRunning:at,colorCount:2,currentSeason:1,viewSeason:1}}).actions(function(e){return{switchSeason:function(){var t=Object(Ke.a)(Je.a.mark(function t(a){return Je.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.viewSeason=a.season,t.next=3,e.refresh();case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),setColorCount:function(t){e.colorCount=t},setRunningApp:function(t){e.appRunning=t},selectProfile:function(t){e.selectedProfile=t},setLevelFilter:function(t){e.levelFilter=t},fetchAll:function(){var t=Object(Ke.a)(Je.a.mark(function t(){var a,n,r,i,o;return Je.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getUsers();case 2:return a=t.sent,t.next=5,e.api.fetchSeasons();case 5:return n=t.sent,t.next=8,e.api.fetchLevels(e.viewSeason);case 8:return r=t.sent,t.next=11,e.api.fetchItems(e.viewSeason);case 11:return i=t.sent,o={users:[],items:[],levels:[],seasons:[]},n.forEach(function(e){e.fields.id=e.id,e.fields.startDate=new Date(e.fields.startDate),e.fields.endDate=new Date(e.fields.endDate),o.seasons.push(e.fields)}),r.forEach(function(e){e.fields.id=e.id,o.levels.push(e.fields)}),a.forEach(function(e){e.fields.id=e.id,o.users.push(e.fields)}),i.reverse(),i.forEach(function(e){e.fields.id=e.id,e.fields.createdTime=new Date(e.createdTime),o.items.push(e.fields)}),t.abrupt("return",o);case 19:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),refresh:function(){var t=Object(Ke.a)(Je.a.mark(function t(){var a;return Je.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAll();case 2:return a=t.sent,Object(_e.a)(e,a),t.abrupt("return",!0);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),setHeight:function(t){e.height=t},logout:function(){e.loggedIn=null},login:function(t,a){return e.loggedIn=e.users.find(function(e){return e.userName===t&&e.password===a}),!!e.loggedIn},login2:function(t){return e.loggedIn=e.users.find(function(e){return e.id===JSON.parse(t)}),!!e.loggedIn},add:function(t){e.levels.push(t)},addItem:function(t){e.items.push(t)},updateUser:function(t){e.api.updateUser(t)},init:Object(_e.b)(Je.a.mark(function t(a,n){var r;return Je.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.api=a,t.next=3,e.fetchAll();case 3:r=t.sent,Object(_e.a)(e,r),n&&e.login2(n),e.initzialize=!0;case 7:case"end":return t.stop()}},t)})),uploadImage:function(t,a){var n=new FormData;n.append("file",t),n.append("cloud_name","deolievif"),n.append("upload_preset","kv0do7lj"),n.append("title",e.loggedIn.userName),n.append("tags",e.loggedIn.userName);var r=new XMLHttpRequest;r.open("POST","https://api.cloudinary.com/v1_1/deolievif/image/upload",!0),r.onload=function(){var t=JSON.parse(this.responseText);e.loggedIn.setProfileImage(t.public_id),e.updateUser(e.loggedIn),a(this.responseText)},r.send(n)},processFile:function(t,a,n){var r=new FormData;r.append("file",t),r.append("cloud_name","deolievif"),r.append("upload_preset","kv0do7lj"),r.append("resource_type","raw"),r.append("title",e.loggedIn.userName),r.append("tags",e.loggedIn.userName);var i=new XMLHttpRequest;i.open("POST","https://api.cloudinary.com/v1_1/deolievif/video/upload/",!0),i.onload=function(){var t=JSON.parse(this.responseText);console.log(t),console.log(this.responseText);var r={userName:e.loggedIn.userName,publicId:t.public_id,level:a.level,status:"WAITINGFORAPPROVAL",season:e.currentSeason};e.api.insertItem(r),e.refresh(),console.log(e.items),n(this.responseText)},i.send(r)}}}),rt={base:"appC7N77wl4iVEXGD",table:"Levels",view:"Grid%20view",apiKey:"keyHQ5GM7ktar7YtG",maxRecords:100,url:"https://api.airtable.com/v0/appC7N77wl4iVEXGD"},it={generalRequest:function(e){var t=e.maxRecords,a=e.table,n=e.view,r=e.filterByFromula,i=Object.assign({},rt);t&&(i.maxRecords=t),n&&(i.view=n),a&&(i.table=a),r||(r="");var o="".concat(rt.url,"/").concat(i.table,"?maxRecords=").concat(i.maxRecords,"&view=").concat(i.view).concat(r);return new Request(o,{method:"get",headers:new Headers({Authorization:"Bearer ".concat(i.apiKey)})})},response:function(){var e=Object(Ke.a)(Je.a.mark(function e(t){var a,n;return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.generalRequest(t)).catch(function(e){console.log(e)});case 2:if(!((a=e.sent).status>=200&&a.status<300)){e.next=8;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.records);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getUsers:function(){var e=Object(Ke.a)(Je.a.mark(function e(){return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Users"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),updateUser:function(e){var t="".concat(rt.url,"/Users/").concat(e.id);fetch(new Request(t,{method:"put",body:JSON.stringify({fields:{name:e.name,userName:e.userName,password:e.password,profileImage:e.profileImage,favoriteTeam:e.favoriteTeam,playerTeam:e.playerTeam,position:e.position,shirtNumber:e.shirtNumber}}),headers:new Headers({Authorization:"Bearer ".concat(rt.apiKey),"Content-Type":"application/json"})})).catch(function(e){alert(e)})},fetchSeasons:function(){var e=Object(Ke.a)(Je.a.mark(function e(){return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Seasons"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchLevels:function(){var e=Object(Ke.a)(Je.a.mark(function e(){var t,a=arguments;return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.abrupt("return",this.response({table:"Levels",filterByFromula:"&filterByFormula=season%3D".concat(t)}));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchItems:function(){var e=Object(Ke.a)(Je.a.mark(function e(){var t,a=arguments;return Je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.abrupt("return",this.response({table:"Items",filterByFromula:"&filterByFormula=season%3D".concat(t)}));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),insertItem:function(e){fetch(new Request("".concat(rt.url,"/Items"),{method:"post",body:JSON.stringify({fields:e}),headers:new Headers({Authorization:"Bearer ".concat(rt.apiKey),"Content-Type":"application/json"})})).catch(function(e){console.log(e)})}},ot=nt.create();ot.init(it,window.localStorage.getItem("loggedIn"));var lt=Object(D.c)(function(){var e=Object(n.useState)("Login"),t=Object(l.a)(e,2),a=t[0],i=t[1];if(Object(n.useEffect)(function(){ot.setHeight(window.innerHeight)},[]),!ot.initzialize)return r.a.createElement("div",{style:{marginTop:"100px",textAlign:"center"}},"LADDAR...");if(ot.initzialize&&ot.loggedIn)return r.a.createElement(ze,{store:ot,onLogout:function(){ot.logout(),i("Login")}});var o="Login"===a?r.a.createElement(Ge,{store:ot,onLogin:i}):r.a.createElement(ze,{store:ot});return r.a.createElement("div",{id:"outer-container"},r.a.createElement("main",{id:"page-wrap"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},o))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(lt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[164,1,2]]]);
//# sourceMappingURL=main.292ba0b8.chunk.js.map