(this.webpackJsonpcodeflix=this.webpackJsonpcodeflix||[]).push([[0],{13:function(t,n,e){t.exports=e(22)},18:function(t,n,e){},21:function(t,n,e){},22:function(t,n,e){"use strict";e.r(n);var a=e(0),o=e.n(a),r=e(8),i=e.n(r),u=(e(18),e(9)),l=e.n(u),c=e(1),s=e(2);function d(){var t=Object(c.a)(["\n  color: var(--white);\n  border: 1px solid var(--white);\n  box-sizing: border-box;\n  cursor: pointer;\n  padding: 16px 24px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n  border-radius: 5px;\n  text-decoration: none;\n  display: inline-block;\n  transition: opacity 0.3s;\n\n  &:hover,\n  &:focus {\n    opacity: 0.5;\n  }\n"]);return d=function(){return t},t}var m=s.a.button(d()),p=(e(21),function(){return o.a.createElement("nav",{className:"menu"},o.a.createElement("a",{href:"/"},o.a.createElement("img",{src:l.a,alt:"codeflix",className:"logo"})),o.a.createElement(m,{as:"a",className:"button-link",href:"/"},"New Video"))});function w(){var t=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n"]);return w=function(){return t},t}function h(){var t=Object(c.a)(["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n  @media (max-width: 800px) {\n    display: none;\n  }\n"]);return h=function(){return t},t}var b=s.a.div(h()),g=s.a.iframe(w());var f=function(t){var n=t.youtubeID;return o.a.createElement(b,null,o.a.createElement(g,{title:"Titulo do Iframe",src:"https://www.youtube.com/embed/".concat(n,"?autoplay=0&mute=1"),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))};function v(){var t=Object(c.a)(['\n  font-family: "Roboto", sans-serif;\n  box-sizing: border-box;\n  cursor: pointer;\n  padding: 16px 24px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n  border-radius: 5px;\n  text-decoration: none;\n  display: inline-block;\n  border: 1px solid transparent;\n  color: var(--black);\n  background: var(--white);\n  border-color: var(--black);\n  transition: opacity 0.3s;\n  display: none;\n  margin: 0 auto;\n  @media (max-width: 800px) {\n    display: block;\n  }\n']);return v=function(){return t},t}function x(){var t=Object(c.a)(["\n  height: 80vh;\n  position: relative;\n  color: #fff;\n  background-image: ",';\n  background-size: cover;\n  background-position: center;\n  @media (max-width: 800px) {\n    height: auto;\n    min-height: 50vh;\n  }\n\n  &:after,\n  &:before {\n    content: "";\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 20%;\n  }\n\n  &:before {\n    top: 0;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  &:after {\n    bottom: 0;\n    background: linear-gradient(0deg, #141414 0%, transparent 100%);\n  }\n']);return x=function(){return t},t}function y(){var t=Object(c.a)(["\n  font-style: normal;\n  font-weight: 300;\n  font-size: 40px;\n  line-height: 1;\n  margin-top: 0;\n  margin-bottom: 32px;\n\n  @media (max-width: 800px) {\n    font-size: 32px;\n    text-align: center;\n  }\n"]);return y=function(){return t},t}function E(){var t=Object(c.a)(["\n  @media (max-width: 800px) {\n    display: none;\n  }\n"]);return E=function(){return t},t}function k(){var t=Object(c.a)(["\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 60px;\n  line-height: 70px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  display: inline-block;\n  padding: 25px;\n  line-height: 1;\n  border-radius: 4px;\n\n  @media (max-width: 800px) {\n    display: none;\n    font-size: 18px;\n    padding: 10px;\n  }\n"]);return k=function(){return t},t}function O(){var t=Object(c.a)(["\n  width: 50%;\n  display: inline-block;\n  margin-bottom: 50px;\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"]);return O=function(){return t},t}function I(){var t=Object(c.a)(["\n  margin-left: 5%;\n  margin-right: 5%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 10;\n  @media (max-width: 800px) {\n    padding-top: 100px;\n    flex-direction: column;\n  }\n"]);return I=function(){return t},t}var j=s.a.section(I());j.Item=s.a.div(O()),j.Category=s.a.h1(k()),j.Description=s.a.p(E()),j.Title=s.a.h2(y());var z=s.a.section(x(),(function(t){var n=t.backgroundImage;return"url(".concat(n,")")})),F=s.a.button(v());function A(t){var n=t.videoTitle,e=t.videoDescription,a=t.url,r=a.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,"$7"),i="https://img.youtube.com/vi/".concat(r,"/maxresdefault.jpg");return o.a.createElement(z,{backgroundImage:i},o.a.createElement(j,null,o.a.createElement(j.Item,null,o.a.createElement(j.Title,null,n),o.a.createElement(j.Description,null,e)),o.a.createElement(j.Item,null,o.a.createElement(f,{youtubeID:r}),o.a.createElement(F,null,"Assistir"))))}function C(){var t=Object(c.a)(["\n  color: white;\n  min-height: 197px;\n  margin-left: 5%;\n  margin-bottom: 16px;\n"]);return C=function(){return t},t}function D(){var t=Object(c.a)(["\n  margin: 0;\n  padding-left: 0;\n  padding-bottom: 32px;\n  list-style: none;\n  display: flex;\n  overflow-x: auto;\n  flex-direction: row;\n\n  li {\n    margin-right: 16px;\n  }\n"]);return D=function(){return t},t}function S(){var t=Object(c.a)(["\n  margin-left: 16px;\n  text-decoration: none;\n  transition: opacity 0.3s;\n  &:hover,\n  &:focus {\n    opacity: 0.5;\n  }\n  @media (max-width: 800px) {\n    display: block;\n    margin-bottom: 16px;\n    margin-left: 0;\n  }\n"]);return S=function(){return t},t}function T(){var t=Object(c.a)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 35px;\n  line-height: 1;\n  margin-bottom: 16px;\n  display: inline-block;\n  padding: 20px;\n  background: red;\n  line-height: 1;\n  border-radius: 4px;\n\n  @media (max-width: 800px) {\n    font-size: 18px;\n    padding: 10px;\n  }\n"]);return T=function(){return t},t}var G=s.a.h3(T()),P=s.a.a(S()),R=s.a.ul(D()),N=s.a.section(C());function B(){var t=Object(c.a)(["\n  border: 2px solid;\n  border-radius: 4px;\n  text-decoration: none;\n  overflow: hidden;\n  cursor: pointer;\n  color: white;\n  flex: 0 0 298px;\n  width: 298px;\n  height: 197px;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  padding: 16px;\n\n  transition: opacity 0.3s;\n  &:hover,\n  &:focus {\n    opacity: 0.5;\n  }\n\n  &:not(:first-child) {\n    margin-left: 20px;\n  }\n"]);return B=function(){return t},t}var _=s.a.a(B(),(function(t){var n=t.url;return"url(".concat(n,")")}));var L=function(t){var n=t.videoTitle,e=t.videoURL,a=t.categoryColor,r="https://img.youtube.com/vi/".concat(e.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,"$7"),"/hqdefault.jpg");return o.a.createElement(_,{url:r,href:e,target:"_blank",style:{borderColor:a||"red"},title:n})};var V=function(t){var n=t.ignoreFirstVideo,e=t.category,a=e.titulo,r=e.cor,i=e.link_extra,u=e.videos;return o.a.createElement(N,null,a&&o.a.createElement(o.a.Fragment,null,o.a.createElement(G,{style:{backgroundColor:r||"red"}},a),i&&o.a.createElement(P,{href:i.url,target:"_blank"},i.text)),o.a.createElement(R,null,u.map((function(t,e){return n&&0===e?null:o.a.createElement("li",{key:t.titulo},o.a.createElement(L,{videoTitle:t.titulo,videoURL:t.url,categoryColor:r}))}))))};function q(){var t=Object(c.a)(["\n  background: var(--black);\n  border-top: 2px solid var(--primary);\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 32px;\n  padding-bottom: 32px;\n  color: var(--white);\n  text-align: center;\n  @media (max-width: 800px) {\n    margin-bottom: 50px;\n  }\n"]);return q=function(){return t},t}var U=s.a.footer(q());var M=function(){return o.a.createElement(U,null,o.a.createElement("a",{href:"https://www.alura.com.br/"},o.a.createElement("img",{src:"https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg",alt:"Logo Alura"})),o.a.createElement("p",null,"Orgulhosamente criado durante a"," ",o.a.createElement("a",{href:"https://www.alura.com.br/"},"Imers\xe3o React da Alura")))},Y=e(3),J=function(){return o.a.createElement("div",{style:{background:"#414141"}},o.a.createElement(p,null),o.a.createElement(A,{videoTitle:Y.categorias[0].videos[0].titulo,url:Y.categorias[0].videos[0].url,videoDescription:"O que \xe9 Front-end? Trabalhando na \xe1rea os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}),o.a.createElement(V,{ignoreFirstVideo:!0,category:Y.categorias[0]}),o.a.createElement(V,{category:Y.categorias[1]}),o.a.createElement(V,{category:Y.categorias[2]}),o.a.createElement(V,{category:Y.categorias[3]}),o.a.createElement(V,{category:Y.categorias[4]}),o.a.createElement(V,{category:Y.categorias[5]}),o.a.createElement(M,null))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(J,null)),document.getElementById("root"))},3:function(t){t.exports=JSON.parse('{"categorias":[{"titulo":"Front End","link":"https://www.alura.com.br/formacao-front-end","cor":"#6BD1FF","link_extra":{"text":"Forma\xe7\xe3o de Front End na Alura","url":"https://www.alura.com.br/cursos-online-front-end"},"videos":[{"titulo":"O que faz uma desenvolvedora front-end? #HipstersPontoTube","url":"https://www.youtube.com/watch?v=ZY3-MFxVdEw"},{"titulo":"SEO com React","url":"https://www.youtube.com/watch?v=c8mVlakBESE"},{"titulo":"Componentiza\xe7\xe3o com VanillaJS #AluraMais","url":"https://www.youtube.com/watch?v=LatCKpcOMak"},{"titulo":"Pare de chutar e aprenda a display: inline #01","url":"https://www.youtube.com/watch?v=5PS6ku8NzIE"},{"titulo":"Template String: Interpolando strings com JavaScript #AluraMais","url":"https://www.youtube.com/watch?v=ORI_HTXaIw0"},{"titulo":"Qual \xe9 a melhor linguagem de programa\xe7\xe3o? #HipstersPontoTube","url":"https://www.youtube.com/watch?v=Uh-GNH-t89w"},{"titulo":"Novidades do Angular v9","url":"https://www.youtube.com/watch?v=34uHo7hFmG0"},{"titulo":"Base para aprender os frameworks","url":"https://www.youtube.com/watch?v=QzDjdlF1BQI"}]},{"titulo":"Back End","cor":"#00C86F","link_extra":{"text":"Cursos de Back End na Alura","url":"https://www.alura.com.br/cursos-online-programacao"},"videos":[{"titulo":"PERCURSO em N\xcdVEL em \xc1RVORE BIN\xc1RIA | Estruturas de Dados #14","url":"https://www.youtube.com/watch?v=UOK7nS2E9xM"},{"titulo":"Coders4Tips - S01E04: GitHub CLI - Uma Nova Experi\xeancia no Github!","url":"https://www.youtube.com/watch?v=6o6-bKOZOEY"},{"titulo":"Programei 4 rob\xf4s que criam v\xeddeos para mim no YouTube","url":"https://www.youtube.com/watch?v=kjhu1LEmRpY"},{"titulo":"API: Dicion\xe1rio do Programador","url":"https://www.youtube.com/watch?v=vGuqKIRWosk"},{"titulo":"Usando Git Direito","url":"https://www.youtube.com/watch?v=6OokP-NE49k"}]},{"titulo":"Data Science e Intelig\xeancia Artificial","cor":"#9cd33b","link_extra":{"text":"Cursos de Data Science na Alura","url":"https://www.alura.com.br/formacao-data-science"},"videos":[{"titulo":"Teste de Turing","url":"https://www.youtube.com/watch?v=BaPGU4JWa34"},{"titulo":"O que \xe9 Data Science?","url":"https://www.youtube.com/watch?v=5b9Z8toVaAU&t=9s"},{"titulo":"Melhor forma de aprender Python","url":"https://www.youtube.com/watch?v=Gojqw9BQ5qY"},{"titulo":"Como ingressar no mercado de Data Science?","url":"https://www.youtube.com/watch?v=gxyjGmOV540"}]},{"titulo":"Filmes","cor":"orange","videos":[{"titulo":"Interestellar","url":"https://www.youtube.com/watch?v=frD_IiY_A3E"},{"titulo":"Gattaca","url":"https://www.youtube.com/watch?v=Dl0tYLbrhhs"},{"titulo":"A Chegada","url":"https://www.youtube.com/watch?v=rNciXGzYZms"},{"titulo":"Feiti\xe7o do Tempo","url":"https://www.youtube.com/watch?v=zi8d69P9NvI"}]},{"titulo":"Games","cor":"red","link_extra":{"text":"Forma\xe7\xe3o de Jogos na Alura","url":"https://www.alura.com.br/formacao-jogos-unity"},"videos":[{"titulo":"Final Fantasy 7","url":"https://www.youtube.com/watch?v=I_ATSCTnUD8"},{"titulo":"Assassins Creed Valhalla","url":"https://www.youtube.com/watch?v=KDfdjB9uL0U"},{"titulo":"God of War 4","url":"https://www.youtube.com/watch?v=FyIwEFXOcaE"},{"titulo":"Resident Evil 8","url":"https://www.youtube.com/watch?v=JSapXD9vxYA"},{"titulo":"Pok\xe9mon Let\'s Go Pikachu/Eevee","url":"https://www.youtube.com/watch?v=L56q_k2ydrs"}]},{"titulo":"Aprendendo a aprender tecnologia","cor":"#6b5be2","link_extra":{"text":"Curso sobre aprendizado na Alura","url":"https://alura.com.br/curso-online-aprender-a-aprender-tecnicas-para-seu-autodesenvolvimento"},"videos":[{"titulo":"Como estudar melhor?","url":"https://www.youtube.com/watch?v=Is6c9KSGCbk&feature=youtu.be"},{"titulo":"Faculdade","url":"https://www.youtube.com/watch?v=jw06H8esyzQ&feature=youtu.be"},{"titulo":"Frameworks","url":"https://www.youtube.com/watch?v=QzDjdlF1BQI"},{"titulo":"A m\xe1gica do Aprendizado","url":"https://www.youtube.com/watch?v=oTEXzpfEpPY"},{"titulo":"Como aprender a programar?","url":"https://www.youtube.com/watch?v=MwCx2qKdbDw&feature=youtu.be"}]}]}')},9:function(t,n,e){t.exports=e.p+"static/media/logo.32f979a1.png"}},[[13,1,2]]]);
//# sourceMappingURL=main.044563e3.chunk.js.map