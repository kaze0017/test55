import{_ as a}from"./nuxt-link.b07e3c07.js";import{_ as o,c as s,a as e,d as t,b as i,w as r,n as c,o as p}from"./entry.c2bf657e.js";const h=""+globalThis.__publicAssetsURL("images/three/threejs.png"),l={},d={class:"wrapper"},u=c('<div class="two-cols-threejs"><div class="col col-text"><h2>What is Three.js?</h2><p> Three.js is a JavaScript library that allows you to create and display animated 3D computer graphics on a web browser. It is similar to the drawing API of Flash. It is widely supported by modern browsers. It is widely supported by modern browsers. </p><h3> So, it is just a library of codes that helps you draw more complicated objects </h3></div><div class="col col-img"><img src="'+h+`" alt=""></div></div><section><h1>1. Step One</h1><p>First, let add Three.js to our project</p><p>You have two options:</p><ul><li>Install Three.js Library using npm</li><pre>              <code class="language-javascript">
              npm install three
              </code>
            </pre><li>Add the CDN of the library to your project</li><pre>              <code class="language-javascript">
              &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js&quot; &gt; &lt;/script&gt;
              </code>
            </pre></ul></section><section><h1>2. Step Two</h1><p>Importing THREE (if you have installed three.js using npm)</p><pre>        <code class="language-javascript">
          import * as THREE from &#39;https://threejs.org/build/three.module.js&#39;;
        </code>
      </pre></section><section><h1>3. Step Three</h1><p>Add a canvas to your html</p><pre>                <code class="language-html">
                  &lt;body&gt;
                    &lt;canvas id=&quot;canvas&quot;&gt;&lt;/canvas&gt;
                  &lt;body&gt;
                </code>
              </pre></section><section><h1>4. Step Four</h1><p>And a little bit of styling</p><pre>            <code class="language-css">
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              position: absolute;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              margin: 0;
              overflow: hidden;
              padding: 10px;
              background-color: &quot;#F5F2F0&quot;;
            }
            canvas {
              width: 100%;
              height: 100%;
              border: 1px solid blue;
            }
            </code>
          </pre></section><section><h1>5. Step Five</h1><p> Select the canvas and calculate it hight and width (bounds) using js </p><pre>            <code class="language-javascript">
              const canvas = document.querySelector(&#39;#canvas&#39;);
              const bounds = canvas.getBoundingClientRect();
            </code>
          </pre></section><section><h1>6. Step Six</h1><p>Now create a scene</p><pre>            <code class="language-javascript">
              const scene = new THREE.Scene(); // create a scene
            </code>
          </pre></section><section><h1>7. Step Seven</h1><p>And a camera and position it</p><pre>            <code class="language-javascript">
              const camera = new THREE.PerspectiveCamera(75, bounds.width / bounds.height, 0.1, 1000); // create a camera
              camera.position.set(0, 0, 5); // position the camera
            </code>
          </pre><p> 75 is the field of view, 0.1 is the near clipping plane, and 1000 is the far clipping plane. </p><p> Note: The camera is positioned at (0, 0, 5) and the cube is positioned at (0, 0, 0). So, the camera is looking at the cube from a distance of 5 units. </p></section><section><h1>8. Step Eight</h1><p>Create a renderer</p><pre>            <code class="language-javascript">
              const renderer = new THREE.WebGLRenderer({ canvas }); // pass the canvas to the renderer
              renderer.setSize(bounds.width, bounds.height);  // set the size of the renderer
            </code>
          </pre><p> If you are not familiar with renderer, it is like a painter. Which paints the scene on the canvas. </p></section><section><h1>9. Step Nine</h1><p>Create a geometry</p><pre>            <code class="language-javascript">
              const geometry = new THREE.BoxGeometry(2, 2, 2); // width, height, depth
            </code>
          </pre><p> Geometry is the shape of the object. it has properties like width, height, depth, etc. </p></section><section><h1>10. Step Ten</h1><p>Create a material</p><pre>            <code class="language-javascript">
              const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // pass the color to the material
            </code>
          </pre><p> Material is the color and the texture of the object. it has properties like color, opacity, etc. </p></section><section><h1>11. Step Eleven</h1><p>Create a mesh using the geometry and materilal you created</p><pre>            <code class="language-javascript">
              const cube = new THREE.Mesh(geometry, material); // pass the geometry and material to the mesh
            </code>
          </pre><p> Mesh is the combination of the geometry and the material. it has properties like position, rotation, etc. </p></section><section><h1>12. Step Twelve</h1><p>Add the mesh to the scene</p><pre>            <code class="language-javascript">
              scene.add(cube); // add the mesh to the scene
            </code>
          </pre></section><section><h1>13. Step Thirteen</h1><p>And animate the cube</p><pre>            <code class="language-javascript">
              function animate() {
                requestAnimationFrame(animate); // call the animate function recursively
                cube.rotation.x += 0.01; // rotate the cube
                cube.rotation.y += 0.01; // rotate the cube
                renderer.render(scene, camera); // render the scene
              }
              animate(); // call the animate function
            </code>
          </pre><p> requestAnimationFrame is a function that calls the animate function recursively. It is similar to setInterval but it is more efficient. </p></section>`,14),m=e("section",null,[e("h1",null,"And you are done"),e("p",null,"Your result should look like this:"),e("div",null,[e("h2",null,"Three.js Cube"),e("iframe",{src:"/threejsBox.html",width:"100%",height:"500px",frameborder:"0"})])],-1),g=e("h1",null,"Whats Next?",-1),b=e("p",null," You can try to draw a sphere, a pyramid, or any other shape you want. Also additonal features like lighting, shadows, etc. ",-1);function v(f,w,y,j,_,S){const n=a;return p(),s("div",d,[u,m,e("section",null,[g,b,e("h2",null,[t(" But now Let's go to the "),i(n,{to:"/page2"},{default:r(()=>[t("Blender Page")]),_:1}),t(", create the same box, and import it in our Canvas ")])])])}const E=o(l,[["render",v]]);export{E as default};
