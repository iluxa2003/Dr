function a(a){return Math.floor(Math.random()*(a+1))}const n=document.querySelector("body"),s=document.querySelector(".start_button");function v(){const n=document.querySelectorAll(".round");for(const s of n)s.style.top=`${a(100)}%`,s.style.left=`${a(100)}%`,s.style.backgroundColor=`#${Math.floor(16777215*Math.random())}`}s.addEventListener("click",(function(){var a;(a=document.createElement("canvas")).id="canvas",a.width=1e3,a.height=600,a.style.margin="auto",a.style.display="flex",document.body.appendChild(a),canvas=a.getContext("2d"),canvasX=a.width,canvasY=a.height,a.strokeStyle="green",canvas.beginPath(),canvas.moveTo(0,20),canvas.lineTo(0,100),canvas.lineTo(70,100),canvas.lineTo(70,80),canvas.lineTo(20,80),canvas.lineTo(20,40),canvas.lineTo(70,40),canvas.lineTo(70,20),canvas.lineTo(0,20),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(120,100),canvas.lineTo(140,100),canvas.lineTo(140,85),canvas.lineTo(180,85),canvas.lineTo(180,100),canvas.lineTo(200,100),canvas.lineTo(200,70),canvas.lineTo(185,70),canvas.lineTo(160,20),canvas.lineTo(135,70),canvas.lineTo(120,70),canvas.lineTo(120,100),canvas.lineTo(120,70),canvas.lineTo(145,70),canvas.lineTo(160,40),canvas.lineTo(175,70),canvas.lineTo(183,70),canvas.lineTo(120,70),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(220,20),canvas.lineTo(220,100),canvas.lineTo(240,100),canvas.lineTo(240,65),canvas.lineTo(270,65),canvas.lineTo(270,100),canvas.lineTo(290,100),canvas.lineTo(290,20),canvas.lineTo(270,20),canvas.lineTo(270,45),canvas.lineTo(240,45),canvas.lineTo(240,20),canvas.lineTo(220,20),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(310,20),canvas.lineTo(380,20),canvas.lineTo(380,35),canvas.lineTo(330,35),canvas.lineTo(330,50),canvas.lineTo(380,50),canvas.lineTo(380,65),canvas.lineTo(330,65),canvas.lineTo(330,80),canvas.lineTo(380,80),canvas.lineTo(380,100),canvas.lineTo(310,100),canvas.lineTo(310,20),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(400,20),canvas.lineTo(400,100),canvas.lineTo(420,100),canvas.lineTo(420,40),canvas.lineTo(435,100),canvas.lineTo(450,40),canvas.lineTo(450,100),canvas.lineTo(470,100),canvas.lineTo(470,20),canvas.lineTo(445,20),canvas.lineTo(435,65),canvas.lineTo(425,20),canvas.lineTo(400,20),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(20,120),canvas.lineTo(20,200),canvas.lineTo(40,200),canvas.lineTo(40,160),canvas.lineTo(70,160),canvas.lineTo(70,120),canvas.lineTo(20,120),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(40,130),canvas.lineTo(60,130),canvas.lineTo(60,150),canvas.lineTo(40,150),canvas.lineTo(40,130),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(90,120),canvas.lineTo(90,200),canvas.lineTo(160,200),canvas.lineTo(160,120),canvas.lineTo(90,120),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(105,135),canvas.lineTo(105,185),canvas.lineTo(145,185),canvas.lineTo(145,135),canvas.lineTo(105,135),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(180,120),canvas.lineTo(210,170),canvas.lineTo(180,200),canvas.lineTo(190,200),canvas.lineTo(220,175),canvas.lineTo(220,200),canvas.lineTo(230,200),canvas.lineTo(230,175),canvas.lineTo(260,200),canvas.lineTo(270,200),canvas.lineTo(240,170),canvas.lineTo(270,120),canvas.lineTo(260,120),canvas.lineTo(230,165),canvas.lineTo(230,120),canvas.lineTo(220,120),canvas.lineTo(220,165),canvas.lineTo(190,120),canvas.lineTo(180,120),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(280,200),canvas.lineTo(300,200),canvas.lineTo(300,185),canvas.lineTo(340,185),canvas.lineTo(340,200),canvas.lineTo(360,200),canvas.lineTo(360,170),canvas.lineTo(345,170),canvas.lineTo(320,120),canvas.lineTo(295,170),canvas.lineTo(280,170),canvas.lineTo(280,200),canvas.lineTo(280,170),canvas.lineTo(305,170),canvas.lineTo(320,140),canvas.lineTo(335,170),canvas.lineTo(343,170),canvas.lineTo(280,170),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(380,120),canvas.lineTo(450,120),canvas.lineTo(450,135),canvas.lineTo(400,135),canvas.lineTo(400,150),canvas.lineTo(450,150),canvas.lineTo(450,165),canvas.lineTo(400,165),canvas.lineTo(400,180),canvas.lineTo(450,180),canvas.lineTo(450,200),canvas.lineTo(380,200),canvas.lineTo(380,120),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(470,120),canvas.lineTo(470,200),canvas.lineTo(490,200),canvas.lineTo(490,165),canvas.lineTo(520,165),canvas.lineTo(520,200),canvas.lineTo(540,200),canvas.lineTo(540,120),canvas.lineTo(520,120),canvas.lineTo(520,145),canvas.lineTo(490,145),canvas.lineTo(490,120),canvas.lineTo(470,120),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(560,120),canvas.lineTo(580,120),canvas.lineTo(580,180),canvas.lineTo(610,120),canvas.lineTo(630,120),canvas.lineTo(630,200),canvas.lineTo(610,200),canvas.lineTo(610,140),canvas.lineTo(580,200),canvas.lineTo(560,200),canvas.lineTo(560,120),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(720,120),canvas.lineTo(665,120),canvas.lineTo(665,160),canvas.lineTo(700,160),canvas.lineTo(650,200),canvas.lineTo(670,200),canvas.lineTo(700,180),canvas.lineTo(700,200),canvas.lineTo(720,200),canvas.lineTo(720,120),canvas.stroke(),canvas.closePath(),canvas.beginPath(),canvas.moveTo(700,130),canvas.lineTo(675,130),canvas.lineTo(675,150),canvas.lineTo(700,150),canvas.lineTo(700,130),canvas.stroke(),canvas.closePath(),n.style.backgroundColor="",s.remove(),n.insertAdjacentHTML("afterbegin",'\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    <div class ="round"></div>\n    '),setInterval(v,500)}));
//# sourceMappingURL=index.7b47f027.js.map
