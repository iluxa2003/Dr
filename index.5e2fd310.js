!function(){function o(){var o=document.createElement("canvas");o.id="canvas",o.width=1e3,o.height=600,o.style.margin="auto",o.style.display="flex",document.body.appendChild(o);var e=o.getContext("2d");canvasX=o.width,canvasY=o.height,o.strokeStyle="green",e.beginPath(),e.moveTo(0,20),e.lineTo(0,100),e.lineTo(70,100),e.lineTo(70,80),e.lineTo(20,80),e.lineTo(20,40),e.lineTo(70,40),e.lineTo(70,20),e.lineTo(0,20),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(120,100),e.lineTo(140,100),e.lineTo(140,85),e.lineTo(180,85),e.lineTo(180,100),e.lineTo(200,100),e.lineTo(200,70),e.lineTo(185,70),e.lineTo(160,20),e.lineTo(135,70),e.lineTo(120,70),e.lineTo(120,100),e.lineTo(120,70),e.lineTo(145,70),e.lineTo(160,40),e.lineTo(175,70),e.lineTo(183,70),e.lineTo(120,70),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(220,20),e.lineTo(220,100),e.lineTo(240,100),e.lineTo(240,65),e.lineTo(270,65),e.lineTo(270,100),e.lineTo(290,100),e.lineTo(290,20),e.lineTo(270,20),e.lineTo(270,45),e.lineTo(240,45),e.lineTo(240,20),e.lineTo(220,20),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(310,20),e.lineTo(380,20),e.lineTo(380,35),e.lineTo(330,35),e.lineTo(330,50),e.lineTo(380,50),e.lineTo(380,65),e.lineTo(330,65),e.lineTo(330,80),e.lineTo(380,80),e.lineTo(380,100),e.lineTo(310,100),e.lineTo(310,20),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(400,20),e.lineTo(400,100),e.lineTo(420,100),e.lineTo(420,40),e.lineTo(435,100),e.lineTo(450,40),e.lineTo(450,100),e.lineTo(470,100),e.lineTo(470,20),e.lineTo(445,20),e.lineTo(435,65),e.lineTo(425,20),e.lineTo(400,20),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(20,120),e.lineTo(20,200),e.lineTo(40,200),e.lineTo(40,160),e.lineTo(70,160),e.lineTo(70,120),e.lineTo(20,120),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(40,130),e.lineTo(60,130),e.lineTo(60,150),e.lineTo(40,150),e.lineTo(40,130),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(90,120),e.lineTo(90,200),e.lineTo(160,200),e.lineTo(160,120),e.lineTo(90,120),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(105,135),e.lineTo(105,185),e.lineTo(145,185),e.lineTo(145,135),e.lineTo(105,135),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(180,120),e.lineTo(210,170),e.lineTo(180,200),e.lineTo(190,200),e.lineTo(220,175),e.lineTo(220,200),e.lineTo(230,200),e.lineTo(230,175),e.lineTo(260,200),e.lineTo(270,200),e.lineTo(240,170),e.lineTo(270,120),e.lineTo(260,120),e.lineTo(230,165),e.lineTo(230,120),e.lineTo(220,120),e.lineTo(220,165),e.lineTo(190,120),e.lineTo(180,120),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(280,200),e.lineTo(300,200),e.lineTo(300,185),e.lineTo(340,185),e.lineTo(340,200),e.lineTo(360,200),e.lineTo(360,170),e.lineTo(345,170),e.lineTo(320,120),e.lineTo(295,170),e.lineTo(280,170),e.lineTo(280,200),e.lineTo(280,170),e.lineTo(305,170),e.lineTo(320,140),e.lineTo(335,170),e.lineTo(343,170),e.lineTo(280,170),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(380,120),e.lineTo(450,120),e.lineTo(450,135),e.lineTo(400,135),e.lineTo(400,150),e.lineTo(450,150),e.lineTo(450,165),e.lineTo(400,165),e.lineTo(400,180),e.lineTo(450,180),e.lineTo(450,200),e.lineTo(380,200),e.lineTo(380,120),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(470,120),e.lineTo(470,200),e.lineTo(490,200),e.lineTo(490,165),e.lineTo(520,165),e.lineTo(520,200),e.lineTo(540,200),e.lineTo(540,120),e.lineTo(520,120),e.lineTo(520,145),e.lineTo(490,145),e.lineTo(490,120),e.lineTo(470,120),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(560,120),e.lineTo(580,120),e.lineTo(580,180),e.lineTo(610,120),e.lineTo(630,120),e.lineTo(630,200),e.lineTo(610,200),e.lineTo(610,140),e.lineTo(580,200),e.lineTo(560,200),e.lineTo(560,120),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(720,120),e.lineTo(665,120),e.lineTo(665,160),e.lineTo(700,160),e.lineTo(650,200),e.lineTo(670,200),e.lineTo(700,180),e.lineTo(700,200),e.lineTo(720,200),e.lineTo(720,120),e.stroke(),e.closePath(),e.beginPath(),e.moveTo(700,130),e.lineTo(675,130),e.lineTo(675,150),e.lineTo(700,150),e.lineTo(700,130),e.stroke(),e.closePath()}function e(o){return Math.floor(Math.random()*(o+1))}var n=document.querySelector("body"),i=document.querySelector(".start_button");function l(){var o=document.querySelectorAll(".round"),n=!0,i=!1,l=void 0;try{for(var T,t=o[Symbol.iterator]();!(n=(T=t.next()).done);n=!0){var a=T.value;a.style.top="".concat(e(100),"%"),a.style.left="".concat(e(100),"%"),a.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random())))}}catch(o){i=!0,l=o}finally{try{n||null==t.return||t.return()}finally{if(i)throw l}}}i.addEventListener("click",(function(){o(),n.style.backgroundColor="",i.remove(),n.insertAdjacentHTML("afterbegin",'\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    '),setInterval(l,500)}))}();
//# sourceMappingURL=index.5e2fd310.js.map
