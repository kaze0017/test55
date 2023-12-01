import{_ as t,c as s,o as n,n as o,a as e}from"./entry.b1594a16.js";const i=""+globalThis.__publicAssetsURL("images/blender/blender.png"),a=""+globalThis.__publicAssetsURL("images/blender/step01.png"),r=""+globalThis.__publicAssetsURL("images/blender/step03.png"),c=""+globalThis.__publicAssetsURL("images/blender/step04.png"),l=""+globalThis.__publicAssetsURL("images/blender/step05.png"),d=""+globalThis.__publicAssetsURL("images/blender/step06.png"),h=""+globalThis.__publicAssetsURL("images/blender/step07.png"),p=""+globalThis.__publicAssetsURL("images/blender/step08.png"),u={},g={class:"wrapper"},m=o('<div class="two-cols-threejs"><div class="col col-text"><h2>What is Blender?</h2><p> Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D printed models, motion graphics, interactive 3D applications, virtual reality and computer games. Blender&#39;s features include 3D modeling, UV unwrapping, texturing, raster graphics editing, rigging and skinning, fluid and smoke simulation, particle simulation, soft body simulation, sculpting, animating, match moving, rendering, motion graphics, video editing and compositing. It also features an integrated game engine. </p></div><div class="col col-img"><img src="'+i+'" alt=""></div></div><section><h1>A. Phase One</h1><p>First let&#39;s create a cube in Blender</p><h3>A.1 Step One</h3><p>Open Blender and on first screen select General and then click on</p><img class="steps-img" src="'+a+'" alt=""></section><section><h3>A.2 Step Two</h3><p> Delete the cube by selecting it and pressing the delete key on your keyboard </p><h3>A.3 Step Three</h3><p>Add a cube by pressing Shift + A and then select Mesh and then Cube</p><img class="steps-img" src="'+r+'" alt=""></section><section><h3>A.4 Step Four</h3><p>Select viewport shading to Material Preview</p><img class="steps-img" src="'+c+'" alt=""></section><section><h3>A.5 Step Five</h3><p> Select the cube and go to the right side of the screen and select the Material tab and then click on New </p><img class="steps-img" src="'+l+'" alt=""></section><section><h3>A.6 Step Six</h3><p>you change the color of the cube by changing the Base Color</p><img class="steps-img" src="'+d+'" alt=""></section><section><h3>A.7 Step Seven</h3><p> Now we need to export the cube. So go to File and then Export and then glTF 2.0 </p><img class="steps-img" src="'+h+'" alt=""></section><section><h3>A.8 Step Eight</h3><p> Make sure in Include tab you have selected the &quot;Selected Objects&quot; option, and in Materials tab you have selected the &quot;Export&quot; option. Then, click on Export glTF 2.0 </p><img class="steps-img" src="'+p+`" alt=""></section><section><h1>B. Phase Two</h1><p>Now let&#39;s add the cube to our project</p><h3>B.1 Step One</h3><p> Create a new folder in your project and name it models and add the cube to it </p><h3>B.2 Step Two</h3><p> GLTFLoader is a library that allows you to load 3D models in the glTF format. So we need to add it to our project. You can install it using npm or add the CDN to your project. </p><pre>        <code class="language-javascript">
          &lt; script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/three.js/r126/three.min.js&quot; &gt; &lt;/script&gt;
          &lt; src=&quot;https://unpkg.com/three@0.126.0/examples/js/loaders/GLTFLoader.js&quot; &gt; &lt;/script&gt;
        </code>
      </pre></section><section><h3>B.3 Step Three</h3><p>This section is the same as we did in three.js tab</p><pre>        <code class="language-javascript">
          const canvas = document.querySelector(&quot;#canvas&quot;);
          const bounds = canvas.getBoundingClientRect();
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, bounds.width / bounds.height, 0.1, 1000);
          camera.position.set(0, 0, 10);
          const renderer = new THREE.WebGLRenderer({ canvas });
          renderer.setSize(bounds.width, bounds.height);
        </code>
      </pre></section><section><h3>B.4 Step Four</h3><p> Now we need to load the cube. So we will use the GLTFLoader to load the cube </p><pre>        <code class="language-javascript">
          let cube;
          const loader = new THREE.GLTFLoader();
          loader.load(
            &quot;./models/cube.glb&quot;, // path to the glTF file
            function (gltf) {  // called when the resource is loaded
              cube = gltf.scene.children[0]; // get the first child of the scene
              const light = new THREE.AmbientLight(0xffffff); // soft white light
              scene.add(light); // add the light to the scene
              scene.add(cube); // add the cube to the scene
            },
            undefined,
            function (error) {
              console.error(error);
            }
            );
          </code>
        </pre><p> Note: The light is added to the scene to make the cube visible. This is because the material from blender has some different properties than the material from three.js library. in previus example, we used MeshBasicMaterial which is the most basic material in three.js library and it has no lighting effect. But the material from blender has some lighting effect. So we need to add a light to the scene to make the cube visible. </p></section><section><h3>B.5 Step Five</h3><p> Now we need to render the scene. So we will use the requestAnimationFrame function to render the scene recursively. </p><pre>        <code class="language-javascript">
          function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            
            if (cube) {
              cube.rotation.x += 0.01;
              cube.rotation.y += 0.01;
            }
          }
          animate();
        </code>
      </pre></section>`,12),b=e("section",null,[e("h2",null,"And you are done"),e("p",null,"Your result should look like this:"),e("div",null,[e("iframe",{src:"/blenderBox.html",width:"100%",height:"500px",frameborder:"0"})])],-1),f=e("section",null,[e("h1",null,"Whats Next?"),e("p",null," You can try to draw a sphere, a pyramid, or any other shape you want. Also additonal features like lighting, shadows, etc. ")],-1),_=[m,b,f];function w(v,T,S,y,A,j){return n(),s("div",g,_)}const x=t(u,[["render",w]]);export{x as default};
