(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,a){e.exports=a(312)},170:function(e,t,a){},171:function(e,t,a){},307:function(e,t,a){},312:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),l=a.n(i),o=(a(170),a(18)),s=(a(171),a(356)),c=a(362),u=a(363),m=a(364),d=a(365),p=a(306),g=a(39),f=a(361),v=a(81),h=a.n(v),E=a(142),b=a.n(E),y=a(51),w=a.n(y),N=a(358),I=a(153),k=a(360),j=a(141),O=a.n(j),x=a(14),S=a(30);var D=Object(x.a)(function(e){e.store;var t=e.settings;function a(e){document.getElementById(e.id).webkitEnterFullscreen()}return t.hasSharedPath?r.a.createElement("video",{onClick:function(){return a(t)},id:t.id,loop:!0,playsInline:!0,preload:"none",muted:!0,width:"100%",height:"100%",poster:t.dropboxPoster},r.a.createElement("source",{src:t.dropboxLink,type:"video/mp4"})):r.a.createElement(S.Video,{onClick:function(){return a(t)},id:t.id,cloudName:"deolievif",publicId:t.publicId,width:"100%",height:"100%",loop:!0,muted:!0,playsInline:!0,preload:"none",poster:t.poster})}),T=a(379),C=a(17),L=48,R=Object(s.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{}}});var P=Object(C.c)(function(e){var t=e.store,a=R(),i=r.a.useState(!0),l=Object(o.a)(i,2),s=l[0];function v(e,t){e.setVisibility(t);var a=document.getElementById(e.id);a?t?a.play():a.pause():console.log("not found")}l[1],Object(n.useEffect)(function(){setTimeout(function(){t.levels.filter(function(e){return e.isVisible}).map(function(e){v(e,!0)})},1)});var E=r.a.useState(null),y=Object(o.a)(E,2),j=y[0],x=y[1],S=r.a.useState(null),C=Object(o.a)(S,2),P=C[0],F=C[1],A=Boolean(j);function M(e){(e.id||0===e.id)&&t.setLevelFilter(e),x(null)}function H(e){(e.season||0===e.season)&&t.switchSeason(e),F(null)}function V(e){return"MEDIUM"===e.category?{backgroundColor:"orange"}:"HARD"===e.category?{backgroundColor:"red"}:{backgroundColor:"green"}}return r.a.createElement("div",{className:"game"},r.a.createElement(N.a,{"aria-label":"More","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){x(e.currentTarget)}},r.a.createElement(O.a,null),t.levelFilter.text),r.a.createElement(I.a,{id:"long-menu",anchorEl:j,keepMounted:!0,open:A,onClose:M,PaperProps:{style:{maxHeight:4.5*L,width:200}}},t.levelFilters.map(function(e){return r.a.createElement(k.a,{key:e.id,selected:e.id===t.levelFilter,onClick:function(){return M(e)}},e.text)})),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(T.a,{variant:"outlined",label:t.viewSeasonObject.seasonInfoText,clickable:!0,className:a.chip,color:"primary",onDelete:function(){},deleteIcon:r.a.createElement("div",null,r.a.createElement(f.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e,t){F(e.currentTarget)}},r.a.createElement(b.a,{style:{color:"#3f51b5"}})),r.a.createElement(I.a,{id:"simple-menu",anchorEl:P,keepMounted:!0,open:Boolean(P),onClose:H},t.seasonsWithoutView.map(function(e){return r.a.createElement(k.a,{key:e.season,onClick:function(){return H(e)}},e.friendlyName)})))})),t.filteredLevels.map(function(e,n){return r.a.createElement(w.a,{key:e.id,onChange:function(t){return v(e,t)}},r.a.createElement(c.a,{key:e.level,className:a.card},r.a.createElement(u.a,{avatar:r.a.createElement(p.a,{"aria-label":"Recipe",style:V(e),className:a.avatar},r.a.createElement("span",{style:{fontSize:"16px"}},e.attribute)),title:e.name,subheader:e.displayText}),r.a.createElement(m.a,null,r.a.createElement(D,{store:t,settings:e}),r.a.createElement("div",{className:"card-content"},r.a.createElement(g.a,{variant:"body2",color:"textSecondary",component:"p"},e.details))),r.a.createElement(d.a,{in:s,timeout:"auto",unmountOnExit:!0},e.isActiveSeason&&r.a.createElement(m.a,null,r.a.createElement("div",{className:"card-content2"},r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(a){return function(e,a){var n=e.target.files[0];t.processFile(n,a,function(e){alert("Uppladdning klar")})}(a,e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(f.a,{variant:"outlined"},"Ladda upp ",r.a.createElement(h.a,null)))))))))}))}),F=a(143),A=a.n(F),M=a(377),H=a(366),V=a(367),U=a(369),B=a(368),K=Object(s.a)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"}}});Object(x.a)(function(e){e.store;var t=e.user,a=K();return r.a.createElement(H.a,{cellHeight:180,className:a.gridList},r.a.createElement(V.a,{key:"Subheader",cols:2,style:{height:"auto"}},r.a.createElement(B.a,{component:"div"},t.videoList.length," uppladdade")),t.videoList.map(function(e){return r.a.createElement(V.a,{key:e.id,onClick:function(){}},r.a.createElement("img",{src:e.img,alt:e.title}),r.a.createElement(U.a,{title:e.title,subtitle:r.a.createElement("span",null,e.challange)}))}))}),a(307),a(308);var z=Object(x.a)(function(e){e.store;var t=e.user;return r.a.createElement("div",null,r.a.createElement("div",{id:"card",className:"active"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 267.3 427.3"},r.a.createElement("clipPath",{id:"svgPath"},r.a.createElement("path",{fill:"#000",d:"M265.3 53.9a33.3 33.3 0 0 1-17.8-5.5 32 32 0 0 1-13.7-22.9c-.2-1.1-.4-2.3-.4-3.4 0-1.3-1-1.5-1.8-1.9a163 163 0 0 0-31-11.6A257.3 257.3 0 0 0 133.7 0a254.9 254.9 0 0 0-67.1 8.7 170 170 0 0 0-31 11.6c-.8.4-1.8.6-1.8 1.9 0 1.1-.2 2.3-.4 3.4a32.4 32.4 0 0 1-13.7 22.9A33.8 33.8 0 0 1 2 53.9c-1.5.1-2.1.4-2 2v293.9c0 3.3 0 6.6.4 9.9a22 22 0 0 0 7.9 14.4c3.8 3.2 8.3 5.3 13 6.8 12.4 3.9 24.8 7.5 37.2 11.5a388.7 388.7 0 0 1 50 19.4 88.7 88.7 0 0 1 25 15.5v.1-.1c7.2-7 16.1-11.3 25-15.5a427 427 0 0 1 50-19.4l37.2-11.5c4.7-1.5 9.1-3.5 13-6.8 4.5-3.8 7.2-8.5 7.9-14.4.4-3.3.4-6.6.4-9.9V231.6 60.5v-4.6c.4-1.6-.3-1.9-1.7-2z"}))),r.a.createElement("div",{id:"card-inner"},r.a.createElement("div",{id:"card-top"},r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"value"},t.totalRating),r.a.createElement("div",{className:"position"},t.position),r.a.createElement("div",{className:"country"},r.a.createElement("div",null)),r.a.createElement("div",{className:"club"},r.a.createElement("div",null))),r.a.createElement("div",{className:"image"}),r.a.createElement("div",{className:"backfont"},"SKILLSTA")),r.a.createElement("div",{id:"card-bottom"},r.a.createElement("div",{className:"name"},t.firstName),r.a.createElement("div",{className:"stats"},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,t.THERating),r.a.createElement("span",null,"THE")),r.a.createElement("li",null,r.a.createElement("span",null,t.DRIRating),r.a.createElement("span",null,"DRI")))),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,t.PHYRating),r.a.createElement("span",null,"PHY")),r.a.createElement("li",null,r.a.createElement("span",null,t.BALRating),r.a.createElement("span",null,"BAL")))))))))}),G=Object(s.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var W=Object(x.a)(function(e){var t=e.store,a=G(),n=r.a.useState({id:t.selectedProfile.id,name:t.selectedProfile.name,userName:t.selectedProfile.userName,password:t.selectedProfile.password,profileImage:t.selectedProfile.profileImage,favoriteTeam:t.selectedProfile.favoriteTeam,playerTeam:t.selectedProfile.playerTeam,position:t.selectedProfile.position,shirtNumber:t.selectedProfile.shirtNumber}),i=Object(o.a)(n,2),l=i[0];return i[1],r.a.createElement("div",{className:"profileReadOnly"},r.a.createElement("div",null,r.a.createElement("div",{className:"left"},r.a.createElement(A.a,{onClick:function(){return t.selectProfile()}})),r.a.createElement("div",{className:"right"},t.selectedProfile.name)),r.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},r.a.createElement(z,{user:t.selectedProfile}),r.a.createElement(S.Image,{cloudName:"deolievif",publicId:t.selectedProfile.profileImage,width:"100%",height:"100%"}),r.a.createElement(M.a,{disabled:!0,id:"standard-name",label:"Namn",className:a.textField,value:l.name,margin:"normal"}),r.a.createElement(M.a,{id:"standard-name",label:"Favoritlag",className:a.textField,value:l.favoriteTeam,disabled:!0,margin:"normal"}),r.a.createElement(M.a,{id:"standard-name",label:"Lag",className:a.textField,value:l.playerTeam,disabled:!0,margin:"normal"}),r.a.createElement(M.a,{id:"standard-name",label:"Position",className:a.textField,value:l.position,disabled:!0,margin:"normal"}),r.a.createElement(M.a,{id:"standard-name",label:"Tr\xf6jnummer",className:a.textField,value:l.shirtNumber,disabled:!0,margin:"normal"})))}),Y=a(88),J=a(38),_=a.n(J),q=a(82),X=a.n(q),Q=a(83),$=a.n(Q),Z=a(370),ee=Object(s.a)(function(e){return{card:{marginTop:"10px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Y.a[500]}}});var te=Object(x.a)(function(e){var t=e.store,a=ee();function n(e){var t=e.item;if(t.isDone){var a={color:"green"};return"MEDIUM"===t.game.category&&(a.color="orange"),"HARD"===t.game.category&&(a.color="red"),r.a.createElement(_.a,{style:a})}return t.isRejected?r.a.createElement(X.a,null):r.a.createElement($.a,null)}return 0===t.filteredItems.length?r.a.createElement("div",{className:"banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("span",null,"Du kan fortfarande bli f\xf6rst. V\xe4lj en utmaning"))):t.filteredItems.map(function(e,i){return r.a.createElement(w.a,{key:e.publicId,onChange:function(t){return function(e,t){e.setVisibility(t);var a=document.getElementById(e.id);a?t?a.play():a.pause():console.log("not found")}(e,t)}},r.a.createElement(c.a,{key:e.publicId,className:a.card},r.a.createElement(u.a,{avatar:r.a.createElement(p.a,{"aria-label":"Recipe",className:a.avatar},r.a.createElement(S.Image,{cloudName:"deolievif",publicId:e.user.profileImage,width:"100%",height:"100%"})),action:r.a.createElement(n,{item:e}),title:r.a.createElement("div",{onClick:function(){return t.selectProfile(e.user)}},e.user.name),subheader:e.game.name}),r.a.createElement(m.a,null,r.a.createElement(D,{store:t,settings:e}),e.hasComment&&r.a.createElement("div",{className:"comments"},r.a.createElement(g.a,{variant:"overline",style:{color:"gray",fontSize:"10px"}},"Fr\xe5n tr\xe4naren:"),r.a.createElement(g.a,{variant:"subtitle2"},e.comment))),r.a.createElement(Z.a,null,r.a.createElement(g.a,{onClick:function(){return t.refresh()},variant:"overline",style:{color:"gray"}},e.displayText))))})});var ae=Object(x.a)(function(e){var t=e.store;return Object(n.useEffect)(function(){setTimeout(function(){t.items.filter(function(e){return e.isVisible}).map(function(e){!function(e,t){e.setVisibility(t);var a=document.getElementById(e.id);a?t?a.play():a.pause():console.log("not found")}(e,!0)})},1)}),r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"item-list"},r.a.createElement(w.a,{offset:{top:80},onChange:function(e){return function(e,t){if(t){e.refresh();var a=e.items.length;console.log(a)}}(t,e)}},r.a.createElement("div",{className:"refresh-div"},"dra f\xf6r att ladda")),!t.selectedProfile&&r.a.createElement(te,{store:t}),t.selectedProfile&&r.a.createElement(W,{store:t})))}),ne=a(375),re=a(378),ie=a(376),le=a(151),oe=a.n(le),se=a(85),ce=a.n(se),ue=a(86),me=a.n(ue),de=a(152),pe=a.n(de),ge=a(84),fe=a(144),ve=a(145),he=a.n(ve),Ee=Object(s.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});var be=Object(x.a)(function(e){var t=e.store,a=e.onLogout,n=Ee(),i=r.a.useState({id:t.loggedIn.id,name:t.loggedIn.name,userName:t.loggedIn.userName,password:t.loggedIn.password,profileImage:t.loggedIn.profileImage,favoriteTeam:t.loggedIn.favoriteTeam,playerTeam:t.loggedIn.playerTeam,position:t.loggedIn.position,shirtNumber:t.loggedIn.shirtNumber}),l=Object(o.a)(i,2),s=l[0],c=l[1],u=function(e){return function(t){c(Object(fe.a)({},s,Object(ge.a)({},e,t.target.value)))}};return r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"fileinputs"},r.a.createElement("input",{type:"file",className:"file",onChange:function(e){return function(e,a){var n=e.target.files[0];t.uploadImage(n,function(e){})}(e)}}),r.a.createElement("div",{className:"fakefile"},r.a.createElement(f.a,{variant:"outlined"},r.a.createElement(he.a,null)))),r.a.createElement("br",null),r.a.createElement("form",{className:n.container,noValidate:!0,autoComplete:"off"},r.a.createElement(S.Image,{cloudName:"deolievif",publicId:t.loggedIn.profileImage,width:"100%",height:"100%"}),r.a.createElement("div",null,r.a.createElement(z,{user:t.loggedIn})),r.a.createElement(M.a,{id:"name",label:"Namn",className:n.textField,value:s.name,onChange:u("name"),margin:"normal"}),r.a.createElement(M.a,{id:"password",type:"password",label:"L\xf6senord",className:n.textField,value:s.password,onChange:u("password"),margin:"normal"}),r.a.createElement(M.a,{id:"favoriteTeam",label:"Favoritlag",className:n.textField,value:s.favoriteTeam,onChange:u("favoriteTeam"),margin:"normal"}),r.a.createElement(M.a,{id:"playerTeam",label:"Lag",className:n.textField,value:s.playerTeam,onChange:u("playerTeam"),margin:"normal"}),r.a.createElement(M.a,{id:"position",label:"Position",className:n.textField,value:s.position,onChange:u("position"),margin:"normal"}),r.a.createElement(M.a,{id:"shirtNumber",label:"Tr\xf6jnummer",className:n.textField,value:s.shirtNumber,onChange:u("shirtNumber"),margin:"normal"})),r.a.createElement(f.a,{variant:"outlined",onClick:function(){t.updateUser(s)}},"Spara"),r.a.createElement(f.a,{variant:"outlined",onClick:function(){window.localStorage.removeItem("loggedIn"),a()}},"Logga ut"))}),ye=a(359),we=a(313),Ne=a(372),Ie=a(371),ke=a(373),je=a(146),Oe=a.n(je);Object(x.a)(function(e){e.store;var t=e.user;return r.a.createElement("div",null,t.badges.map(function(e){return r.a.createElement("div",null,e.title,e.prices.map(function(e){return r.a.createElement("div",null,r.a.createElement(Oe.a,{style:{color:e.color}}),e.count," ",e.title)}))}))});var xe=Object(s.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});var Se=Object(x.a)(function(e){var t=e.store,a=xe();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"60px",textAlign:"center"}},r.a.createElement(g.a,{variant:"h6",gutterBottom:!0},"TOPPLISTA ",t.viewSeasonObject.friendlyName),r.a.createElement(g.a,{variant:"overline",style:{color:"gray"},gutterBottom:!0},"max 200 po\xe4ng")),r.a.createElement("div",{className:"highscore"},r.a.createElement(ye.a,{className:a.root},t.highScoreList.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(we.a,{key:e.id},r.a.createElement(Ie.a,null,r.a.createElement(p.a,null,r.a.createElement(S.Image,{cloudName:"deolievif",publicId:e.profileImage,width:"100%",height:"100%"}))),r.a.createElement(Ne.a,{primary:e.name,secondary:"Po\xe4ng: ".concat(e.highscore)})),r.a.createElement(ke.a,{variant:"inset",component:"li"}))}))))}),De=a(147),Te=a.n(De),Ce=a(156),Le=a(374);var Re=Object(x.a)(function(e){var t=e.store;return r.a.createElement(Ce.a,{className:"help"},r.a.createElement(g.a,{paragraph:!0},"H\xe4r hittar du hj\xe4lp med hur appen fungerar."),r.a.createElement(g.a,{paragraph:!0},"Du kollar just nu p\xe5"," ",r.a.createElement("span",{style:{color:"red"}},t.viewSeasonObject.friendlyName)),r.a.createElement(g.a,{paragraph:!0},"Visa annan s\xe4song:"),r.a.createElement(Le.a,{color:"primary","aria-label":"Outlined primary button group"},t.seasonsWithoutView.map(function(e){return r.a.createElement(f.a,{key:e.season,onClick:function(){return t.switchSeason(e)}},e.friendlyName)})),r.a.createElement(g.a,{paragraph:!0}),r.a.createElement(g.a,{paragraph:!0},"Varje s\xe4song har 20 utmaningar. Man v\xe4ljer vilken utmaning som helst, man beh\xf6ver inte g\xf6ra dem i ordning. Utmaning filmar man sen i horisontellt l\xe4ge med kameran. N\xe4r man \xe4r n\xf6jd s\xe5 klickar man p\xe5 ladda upp p\xe5 den utmaningen man gjort. Filmen hamnar d\xe5 f\xf6r utv\xe4rdering, den \xe4r d\xe5 bara synlig f\xf6r dig. Om den blir godk\xe4nd s\xe5 kommer den synas f\xf6r \xf6vriga deltagare."),r.a.createElement(g.a,{paragraph:!0},"T\xe4nk p\xe5 att ni kan filma er sj\xe4lva genom att s\xe4tta upp kameran n\xe5gonstanns , sen s\xe4tter ni ig\xe5ng med utmaningen. N\xe4r ni \xe4r klara st\xe4nger ni av videon och klipper b\xf6rjan och slutet som ni inte vill ha med. Det kan ni enkelt g\xf6ra i bilderappen. Sen g\xe5r ni in och laddar upp den p\xe5 r\xe4tt utmaning. P\xe5 s\xe5 s\xe4tt beh\xf6ver ni inte hj\xe4lp med att n\xe5gon filmar er."),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(ce.a,null)," Hem"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(g.a,{paragraph:!0},"H\xe4r visas fl\xf6det med alla s\xe4songens anv\xe4ndaruppladde filmer."),r.a.createElement(g.a,{paragraph:!0},r.a.createElement($.a,null),"Under utv\xe4rdering f\xf6r att se om man klarat det."),r.a.createElement(g.a,{paragraph:!0},r.a.createElement(_.a,null),"Klarad utmaning"),r.a.createElement(g.a,{paragraph:!0},r.a.createElement(X.a,null),"Utmaning misslyckad. Bara att f\xf6rs\xf6ka igen. Kanske hade du inte flytet i utmaningen, eller missf\xf6rt\xe5tt n\xe5got. Kontrollera videon och instruktionerna och f\xf6rs\xf6k igen."),r.a.createElement(g.a,{paragraph:!0},"Om du klickar p\xe5 personens namn s\xe5 kan du se profilen."),r.a.createElement(g.a,{paragraph:!0},"Klicka p\xe5 videon f\xf6r att se den i helsk\xe4rm.")),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(_.a,null)," Utmaningar"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(g.a,{paragraph:!0},"H\xe4r visas fl\xf6det med alla s\xe4songens utmaningar. Det finns 3 olika niv\xe5er. L\xe4tt, medium, sv\xe5r."),r.a.createElement(g.a,{paragraph:!0},"10 l\xe4tta \xf6vningar, 5 po\xe4ng var"),r.a.createElement(g.a,{paragraph:!0},"5 medium \xf6vningar, 10 po\xe4ng var"),r.a.createElement(g.a,{paragraph:!0},"5 sv\xe5ra \xf6vningar, 20 po\xe4ng var"),r.a.createElement(g.a,{paragraph:!0},r.a.createElement(h.a,null),"Klicka p\xe5 denna f\xf6r att ladda upp en film. Filma alltid i horisontellt l\xe4ge.")),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(_.a,null)," Topplistan"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(g.a,{paragraph:!0},"Varje s\xe4song best\xe5r av maximalt 200 po\xe4ng. H\xe4r visas vem som f\xe5tt flest po\xe4ng.")),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(me.a,null)," Profil"),r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement(g.a,{paragraph:!0},"H\xe4r kan du ladda upp din profilbild och andra anv\xe4ndarinst\xe4llningar.")),r.a.createElement(g.a,{variant:"h6",paragraph:!0},r.a.createElement(Te.a,null)," Verktyg"),r.a.createElement(g.a,{paragraph:!0},"Om det finns nya uppdateringar kan du uppdatera h\xe4r."),r.a.createElement(f.a,{variant:"outlined",onClick:function(){document.location.reload()}},"Uppdatera appen"))}),Pe=a(148),Fe=a(149),Ae=a(154),Me=a(150),He=a(155),Ve=function(e){function t(){var e,a;Object(Pe.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(Ae.a)(this,(e=Object(Me.a)(t)).call.apply(e,[this].concat(r)))).generateRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},a.generateColor=function(){var e=10*a.props.colorCount,t=Math.floor(Math.random()*(e-1+1))+1;return t<10?"yellow":t<20?"red":t<30?"blue":t<40?"white":void 0},a.state={number:a.generateRandomNumber(0,9),color:a.generateColor(),delay:3e3},a.tick=function(){a.setState({number:a.generateRandomNumber(0,9),color:a.generateColor()})},a}return Object(He.a)(t,e),Object(Fe.a)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.tick,this.state.delay)}},{key:"componentDidUpdate",value:function(e,t){t.delay!==this.state.delay&&(clearInterval(this.interval),this.interval=setInterval(this.tick,this.state.delay))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.props.colorCount?{color:"black"}:{color:"yellow"};return r.a.createElement("div",{style:{backgroundColor:this.state.color},className:"number",onClick:function(){return e.props.store.setRunningApp("MAIN")}},r.a.createElement("div",{className:"inner-number",style:t},this.state.number))}}]),t}(n.Component),Ue=Object(x.a)(Ve);function Be(e){return r.a.createElement(g.a,{component:"div",style:{padding:24}},e.children)}var Ke=Object(s.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:"#f5f5f5"}}});var ze=Object(C.c)(function(e){var t=e.store,a=e.onLogout,i=Ke(),l=Object(n.useState)(0===t.items.length?1:0),s=Object(o.a)(l,2),c=s[0],u=s[1];return"NUMBER"===t.appRunning?r.a.createElement(Ue,{store:t}):"COLOR"===t.appRunning?r.a.createElement(Ue,{store:t,colorCount:t.colorCount}):r.a.createElement("div",{className:i.root},r.a.createElement(ne.a,{position:"fixed",color:"default"},r.a.createElement(re.a,{value:c,onChange:function(e,t){u(t)},variant:"scrollable",scrollButtons:"off",indicatorColor:"primary",textColor:"primary"},r.a.createElement(ie.a,{icon:r.a.createElement(ce.a,null)}),r.a.createElement(ie.a,{icon:r.a.createElement(_.a,null)}),r.a.createElement(ie.a,{icon:r.a.createElement(oe.a,null)}),r.a.createElement(ie.a,{icon:r.a.createElement(me.a,null)}),r.a.createElement(ie.a,{icon:r.a.createElement(pe.a,null)}))),0===c&&r.a.createElement(Be,null,r.a.createElement(ae,{store:t})),1===c&&r.a.createElement(Be,null,r.a.createElement(P,{store:t})),2===c&&r.a.createElement(Be,null,r.a.createElement(Se,{store:t})),3===c&&r.a.createElement(Be,null,r.a.createElement(be,{store:t,onLogout:a})),4===c&&r.a.createElement(Be,null,r.a.createElement(Re,{store:t})))});function Ge(e){var t=e.store,a=e.onLogin,i=Object(n.useState)(""),l=Object(o.a)(i,2),s=l[0],c=l[1],u=Object(n.useState)(""),m=Object(o.a)(u,2),d=m[0],p=m[1],v=function(e,t){var a=Object(n.useState)(function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}}),r=Object(o.a)(a,2),i=r[0],l=r[1];return[i,function(t){try{var a=t instanceof Function?t(i):t;l(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}("loggedIn",{userName:void 0}),h=Object(o.a)(v,2),E=(h[0],h[1]);return r.a.createElement("div",{className:"login"},r.a.createElement("img",{className:"login-img",src:"skillsta.jpg",alt:"skillsta"}),r.a.createElement("div",{className:"login-img-wrapper"},r.a.createElement(g.a,{paragraph:!0,variant:"h3"},"skillsta"),r.a.createElement("div",{className:"login-user-name"},r.a.createElement("input",{placeholder:"Anv\xe4ndarnamn",className:"login-input",value:s,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"login-password"},r.a.createElement("input",{placeholder:"L\xf6senord",className:"login-input",type:"password",value:d,onChange:function(e){return p(e.target.value)}})),r.a.createElement(f.a,{variant:"contained",onClick:function(e){return function(e){e.preventDefault(),t.login(s.toLowerCase(),d)?(E(t.loggedIn.id),a()):alert("fel anv\xe4ndarnamn/l\xf6senord")}(e)}},"LOGIN")))}var We=a(16),Ye=a.n(We),Je=a(32),_e=a(6),qe={EASY:"L\xe4tt",MEDIUM:"Medium",HARD:"Sv\xe5r"},Xe=_e.d.model("Level",{id:_e.d.string,level:_e.d.integer,details:_e.d.string,name:_e.d.string,category:_e.d.string,publicId:_e.d.string,season:_e.d.integer,sharedPath:_e.d.maybeNull(_e.d.string),fileType:_e.d.maybeNull(_e.d.string),posterPath:_e.d.maybeNull(_e.d.string),attribute:_e.d.maybeNull(_e.d.string)}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setPublicId:function(t){e.publicId=t},setName:function(t){e.name=t},setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get hasSharedPath(){return!!e.sharedPath},get dropboxLink(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/").concat(e.publicId,".").concat(e.fileType,"?raw=1")},get dropboxPoster(){return"https://www.dropbox.com/s/".concat(e.posterPath,"/ConeDrill1.jpg?raw=1")},get categoryName(){return qe[e.category]},get isActiveSeason(){return Object(_e.c)(e).currentSeason===e.season},get isDone(){var t=Object(_e.c)(e);return t.items.some(function(a){return a.user.id===t.loggedIn.id&&a.isDone&&a.level===e.level})},get points(){return"EASY"===e.category?5:"MEDIUM"===e.category?10:"HARD"===e.category?20:0},get displayText(){return"".concat(e.categoryName," - ").concat(e.points," PO\xc4NG")},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}});function Qe(e){return e<=9?"0"+e:e}var $e=_e.d.model("Item",{id:_e.d.string,createdTime:_e.d.Date,userName:_e.d.string,publicId:_e.d.string,level:_e.d.integer,status:_e.d.string,sharedPath:_e.d.maybeNull(_e.d.string),comment:_e.d.maybeNull(_e.d.string),season:_e.d.integer}).volatile(function(e){return{isVisible:!1}}).actions(function(e){return{setVisibility:function(t){e.isVisible=t}}}).views(function(e){return{get hasComment(){return!!e.comment},get hasSharedPath(){return!!e.sharedPath},get dropboxLink(){return"https://www.dropbox.com/s/".concat(e.sharedPath,"/").concat(e.publicId,".mov?raw=1")},get isDone(){return"DONE"===e.status},get isRejected(){return"REJECTED"===e.status},get isWaitingForApproval(){return"WAITINGFORAPPROVAL"===e.status},get date(){return e.createdTime.getFullYear()+"-"+Qe(e.createdTime.getMonth()+1)+"-"+Qe(e.createdTime.getDate())},get user(){return Object(_e.c)(e).users.find(function(t){return t.userName===e.userName})},get game(){return Object(_e.c)(e).levels.find(function(t){return t.level===e.level})},get points(){return e.isDone?"EASY"===e.game.category?5:"MEDIUM"===e.game.category?10:"HARD"===e.game.category?20:0:0},get displayText(){return e.isDone?"".concat(e.date," - ").concat(e.game.categoryName," - ").concat(e.points," PO\xc4NG"):"".concat(e.date)},get poster(){return{publicId:e.publicId+".jpg",resourceType:"video"}}}}),Ze=_e.d.model("User",{id:_e.d.string,userName:_e.d.string,name:_e.d.string,password:_e.d.string,profileImage:_e.d.string,favoriteTeam:_e.d.optional(_e.d.string,""),playerTeam:_e.d.optional(_e.d.string,""),position:_e.d.optional(_e.d.string,""),shirtNumber:_e.d.optional(_e.d.string,"")}).views(function(e){return{get firstName(){return e.name.split(" ")[0]},get totalRating(){return Math.round((e.THERating+e.DRIRating+e.PHYRating+e.BALRating)/4)},get THERating(){return 50},get DRIRating(){return 60},get PHYRating(){return 50},get BALRating(){return 50},get levelStore(){return Object(_e.c)(e)},get items(){return e.levelStore.items.filter(function(t){return t.userName===e.userName})},get badgeData(){return e.levelStore.badges.filter(function(t){return t.userName===e.userName})},get badges(){var e=[];return e.push({title:"S\xe4songspriser",prices:[{id:0,title:"F\xf6rsta pris",color:"red",count:2},{id:1,title:"Klarat alla niv\xe5 L\xe4tt",color:"green",count:1},{id:2,title:"Klarat alla niv\xe5 Medel",color:"orange",count:2},{id:3,title:"Klarat alla niv\xe5 Sv\xe5r",color:"red",count:2}]}),e.push({title:"Tr\xe4ningspriser",prices:[{id:0,title:"F\xf6rsta pris s\xe4song 1",color:"red"},{id:1,title:"Klarat alla niv\xe5 L\xe4tt",color:"green"},{id:2,title:"Klarat alla niv\xe5 Medel",color:"orange"},{id:3,title:"Klarat alla niv\xe5 Sv\xe5r",color:"red"}]}),e},get videoList(){return e.items.filter(function(t){return t.isDone&&t.userName===e.userName}).map(function(e){return{id:e.id,img:"http://res.cloudinary.com/deolievif/video/upload/".concat(e.publicId,".jpg"),title:e.name,challange:e.game.name}})},get highscore(){return 0===e.items.length?0:5*e.items.filter(function(e){return e.isDone&&"EASY"===e.game.category}).length+10*e.items.filter(function(e){return e.isDone&&"MEDIUM"===e.game.category}).length+20*e.items.filter(function(e){return e.isDone&&"HARD"===e.game.category}).length},get nextChallange(){return e.levelStore.levels[e.items.length]}}}).actions(function(e){return{setProfileImage:function(t){e.profileImage=t},updateUser:function(t){var a=t.name,n=t.password,r=t.profileImage,i=t.favoriteTeam,l=t.playerTeam,o=t.position,s=t.shirtNumber;e.name=a,e.password=n,e.profileImage=r,e.favoriteTeam=i,e.playerTeam=l,e.position=o,e.shirtNumber=s}}});function et(e){return e<=9?"0"+e:e}var tt=_e.d.model("Season",{id:_e.d.string,season:_e.d.integer,startDate:_e.d.Date,endDate:_e.d.Date,friendlyName:_e.d.string}).views(function(e){return{get countDown(){return Math.round(Math.abs(((new Date).getTime()-e.endDate.getTime())/864e5))},get seasonInfoText(){return e.isCurrentSeason?"".concat(e.friendlyName," - ").concat(e.countDown," dagar kvar"):"".concat(e.friendlyName," - Ej aktiv")},get isCurrentSeason(){var t=Object(_e.c)(e);return e.season===t.currentSeason},get isViewedNow(){var t=Object(_e.c)(e);return e.season===t.viewSeason},get startDateFriendly(){return e.startDate.getFullYear()+"-"+et(e.startDate.getMonth()+1)+"-"+et(e.startDate.getDate())},get endDateFriendly(){return e.endDate.getFullYear()+"-"+et(e.endDate.getMonth()+1)+"-"+et(e.endDate.getDate())}}}),at=[{id:0,text:"Alla utmaningar"},{id:1,text:"Ej klarade utmaningar"},{id:2,text:"Klarade utmaningar"}],nt="MAIN",rt=_e.d.model("LevelStore",{levels:_e.d.array(Xe),items:_e.d.array($e),users:_e.d.array(Ze),seasons:_e.d.array(tt),badges:_e.d.array($e)}).views(function(e){return{get viewSeasonObject(){return e.seasons.find(function(t){return t.season===e.viewSeason})},get seasonsWithoutView(){return e.seasons.filter(function(t){return t.season!==e.viewSeason})},get currentSeasonObject(){return e.seasons.find(function(t){return t.season===e.currentSeason})},get filteredItems(){return e.items.filter(function(t){return t.isDone||t.userName===e.loggedIn.userName})},get highScoreList(){var t=e.users.slice(0);return t.sort(function(e,t){var a=e.highscore,n=t.highscore;return a<n?-1:a>n?1:0}),t.reverse()},get filteredLevels(){return 0===e.levelFilter.id?e.levels.filter(function(t){return t.season===e.viewSeason}):1===e.levelFilter.id?e.levels.filter(function(t){return!t.isDone&&t.season===e.viewSeason}):2===e.levelFilter.id?e.levels.filter(function(t){return t.isDone&&t.season===e.viewSeason}):[]},get levelFilters(){return at}}}).volatile(function(e){return{loggedIn:null,initzialize:!1,height:null,selectedProfile:null,levelFilter:e.levelFilters[0],api:null,appRunning:nt,colorCount:2,currentSeason:null,viewSeason:null}}).actions(function(e){return{setStartSeason:function(t){e.viewSeason=t,e.currentSeason=t},switchSeason:function(){var t=Object(Je.a)(Ye.a.mark(function t(a){return Ye.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.viewSeason=a.season,t.next=3,e.refresh();case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),setColorCount:function(t){e.colorCount=t},setRunningApp:function(t){e.appRunning=t},selectProfile:function(t){e.selectedProfile=t},setLevelFilter:function(t){e.levelFilter=t},fetchAll:function(){var t=Object(Je.a)(Ye.a.mark(function t(){var a,n,r,i,l;return Ye.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getUsers();case 2:return a=t.sent,t.next=5,e.api.fetchSeasons();case 5:return n=t.sent,null===e.currentSeason&&n.forEach(function(t){var a=new Date(t.fields.startDate),n=new Date(t.fields.endDate),r=new Date;r>a&&r<n&&e.setStartSeason(t.fields.season)}),t.next=9,e.api.fetchLevels(e.viewSeason);case 9:return r=t.sent,t.next=12,e.api.fetchItems(e.viewSeason);case 12:return i=t.sent,l={users:[],items:[],levels:[],seasons:[],badges:[]},n.forEach(function(e){e.fields.id=e.id,e.fields.startDate=new Date(e.fields.startDate),e.fields.endDate=new Date(e.fields.endDate),l.seasons.push(e.fields)}),r.forEach(function(e){e.fields.id=e.id,l.levels.push(e.fields)}),a.forEach(function(e){e.fields.id=e.id,l.users.push(e.fields)}),i.forEach(function(e){e.fields.id=e.id,e.fields.createdTime=new Date(e.createdTime),l.badges.push(e.fields)}),i.reverse(),i.filter(function(t){return t.fields.season===e.viewSeason}).forEach(function(e){e.fields.id=e.id,e.fields.createdTime=new Date(e.createdTime),l.items.push(e.fields)}),t.abrupt("return",l);case 21:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),refresh:function(){var t=Object(Je.a)(Ye.a.mark(function t(){var a;return Ye.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAll();case 2:return a=t.sent,Object(_e.a)(e,a),t.abrupt("return",!0);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),setHeight:function(t){e.height=t},logout:function(){e.loggedIn=null},login:function(t,a){return e.loggedIn=e.users.find(function(e){return e.userName===t&&e.password===a}),!!e.loggedIn},login2:function(t){return e.loggedIn=e.users.find(function(e){return e.id===JSON.parse(t)}),!!e.loggedIn},add:function(t){e.levels.push(t)},addItem:function(t){e.items.push(t)},updateUser:function(t){e.api.updateUser(t)},init:Object(_e.b)(Ye.a.mark(function t(a,n){var r;return Ye.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.api=a,t.next=3,e.fetchAll();case 3:r=t.sent,Object(_e.a)(e,r),n&&e.login2(n),e.loggedIn&&e.updateUser(e.loggedIn),e.initzialize=!0;case 8:case"end":return t.stop()}},t)})),uploadImage:function(t,a){var n=new FormData;n.append("file",t),n.append("cloud_name","deolievif"),n.append("upload_preset","kv0do7lj"),n.append("title",e.loggedIn.userName),n.append("tags",e.loggedIn.userName);var r=new XMLHttpRequest;r.open("POST","https://api.cloudinary.com/v1_1/deolievif/image/upload",!0),r.onload=function(){var t=JSON.parse(this.responseText);e.loggedIn.setProfileImage(t.public_id),e.updateUser(e.loggedIn),a(this.responseText)},r.send(n)},processFile:function(t,a,n){var r=new FormData;r.append("file",t),r.append("cloud_name","deolievif"),r.append("upload_preset","kv0do7lj"),r.append("resource_type","raw"),r.append("title",e.loggedIn.userName),r.append("tags",e.loggedIn.userName);var i=new XMLHttpRequest;i.open("POST","https://api.cloudinary.com/v1_1/deolievif/video/upload/",!0),i.onload=function(){var t=JSON.parse(this.responseText);console.log(t),console.log(this.responseText);var r={userName:e.loggedIn.userName,publicId:t.public_id,level:a.level,status:"WAITINGFORAPPROVAL",season:e.currentSeason};e.api.insertItem(r),e.refresh(),console.log(e.items),n(this.responseText)},i.send(r)}}}),it={base:"appC7N77wl4iVEXGD",table:"Levels",view:"Grid%20view",apiKey:"keyHQ5GM7ktar7YtG",maxRecords:1e3,url:"https://api.airtable.com/v0/appC7N77wl4iVEXGD"},lt={generalRequest:function(e){var t=e.maxRecords,a=e.table,n=e.view,r=e.filterByFromula,i=e.fields,l=Object.assign({},it);t&&(l.maxRecords=t),n&&(l.view=n),a&&(l.table=a);var o="";i&&(o="".concat(i,"&")),r||(r="");var s="".concat(it.url,"/").concat(l.table,"?").concat(o,"maxRecords=").concat(l.maxRecords,"&view=").concat(l.view).concat(r);return new Request(s,{method:"get",headers:new Headers({Authorization:"Bearer ".concat(l.apiKey)})})},response:function(){var e=Object(Je.a)(Ye.a.mark(function e(t){var a,n;return Ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.generalRequest(t)).catch(function(e){console.log(e)});case 2:if(!((a=e.sent).status>=200&&a.status<300)){e.next=8;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.records);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getUsers:function(){var e=Object(Je.a)(Ye.a.mark(function e(){return Ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Users"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),updateUser:function(e){var t="".concat(it.url,"/Users/").concat(e.id);fetch(new Request(t,{method:"put",body:JSON.stringify({fields:{name:e.name,userName:e.userName,password:e.password,profileImage:e.profileImage,favoriteTeam:e.favoriteTeam,playerTeam:e.playerTeam,position:e.position,shirtNumber:e.shirtNumber,lastFetch:"".concat((new Date).toLocaleDateString()," ").concat((new Date).toLocaleTimeString())}}),headers:new Headers({Authorization:"Bearer ".concat(it.apiKey),"Content-Type":"application/json"})})).catch(function(e){alert(e)})},fetchSeasons:function(){var e=Object(Je.a)(Ye.a.mark(function e(){return Ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.response({table:"Seasons"}));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchLevels:function(){var e=Object(Je.a)(Ye.a.mark(function e(){var t,a=arguments;return Ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.abrupt("return",this.response({table:"Levels",filterByFromula:"&filterByFormula=season%3D".concat(t)}));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),fetchItems:function(){var e=Object(Je.a)(Ye.a.mark(function e(){var t,a=arguments;return Ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:0,e.abrupt("return",this.response({table:"Items",filterByFromula:"&filterByFormula=season%3D".concat(t)}));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),insertItem:function(e){fetch(new Request("".concat(it.url,"/Items"),{method:"post",body:JSON.stringify({fields:e}),headers:new Headers({Authorization:"Bearer ".concat(it.apiKey),"Content-Type":"application/json"})})).catch(function(e){console.log(e)})}},ot=rt.create();ot.init(lt,window.localStorage.getItem("loggedIn"));var st=Object(C.c)(function(){var e=Object(n.useState)("Login"),t=Object(o.a)(e,2),a=t[0],i=t[1];if(Object(n.useEffect)(function(){ot.setHeight(window.innerHeight)},[]),!ot.initzialize)return r.a.createElement("div",{style:{marginTop:"100px",textAlign:"center"}},"LADDAR...");if(ot.initzialize&&ot.loggedIn)return r.a.createElement(ze,{store:ot,onLogout:function(){ot.logout(),i("Login")}});var l="Login"===a?r.a.createElement(Ge,{store:ot,onLogin:i}):r.a.createElement(ze,{store:ot});return r.a.createElement("div",{id:"outer-container"},r.a.createElement("main",{id:"page-wrap"},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},l))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(st,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[165,1,2]]]);
//# sourceMappingURL=main.ff3eac03.chunk.js.map