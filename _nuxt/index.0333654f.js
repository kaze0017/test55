import{_ as n}from"./nuxt-link.61ef8179.js";import{_ as i,c,a,d as e,b as r,w as l,n as d,o as h}from"./entry.b0fd52f7.js";const u=""+globalThis.__publicAssetsURL("images/canvas.png"),_=""+globalThis.__publicAssetsURL("images/home-canvas/script.png");const v={mounted(){this.drawSquare()},methods:{drawSquare(){const s=document.getElementById("myCanvas").getContext("2d");s.fillStyle="#FF0000",s.fillRect(50,50,200,200)}}},p={class:"wrapper"},m=d('<section><div class="hero"><h1>Welcome to my Coding Advanture webpage</h1><h2> Here I am going to share with you some cool techniques I have learned to make cool stuff </h2></div></section><section><div class="two-cols"><div class="col col-text"><div><h2>What is Canvas?</h2><p> Canvas is an HTML element that allows you to draw graphics on a web page. It is similar to the drawing API of Flash. It is widely supported by modern browsers. It is an HTML element that allows you to draw graphics on a web page. It is similar to the drawing API of Flash. It is widely supported by modern browsers. </p></div><div><h2>What should you know first?</h2><p> You should have a basic understanding of HTML, CSS, and JavaScript. You should also know how to use a text editor and terminal. </p></div></div><div class="col"><img src="'+u+'" alt=""></div></div></section><section><h2>Let&#39;s draw a square in canvas</h2><div class="two-cols-canvas"><div class="col-canvas"><canvas id="myCanvas" width="300" height="300"></canvas></div><div class="col-img"><img src="'+_+'" alt=""></div></div></section>',3),w=a("h1",null,"Not that hard! Was it?",-1),g=a("p",null," Now you can draw a square in canvas. You can also draw a circle, triangle, or any other shape you want. You can also draw images and text. You can also draw a circle, triangle, or any other shape you want. You can also draw images and text. ",-1),y=a("h2",null," Lets make it more interesting by drawing a Cube in Canvas using Three.js Library. ",-1);function b(t,s,f,x,C,I){const o=n;return h(),c("div",p,[m,a("section",null,[w,g,y,a("h1",null,[e("Follow on "),r(o,{to:"/page1"},{default:l(()=>[e("Three.js Page")]),_:1})])])])}const k=i(v,[["render",b]]);export{k as default};
