
const canvas = document.getElementById('canvas');

// Set canvas to fullscreen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const width = canvas.width;
const height = canvas.height;

// Colors
const black = new THREE.Color('black');
const white = new THREE.Color('white');
const bgcolor = new THREE.Color(0x1a1a2e);  // Dark blue instead of black

function loadFile(filename) {
  return new Promise((resolve, reject) => {
    const loader = new THREE.FileLoader();

    loader.load(filename, (data) => {
      resolve(data);
    });
  });
}

// Shader chunks
loadFile('shaders/utils.glsl').then((utils) => {
  THREE.ShaderChunk['utils'] = utils;

  // Create Renderer
  const camera = new THREE.PerspectiveCamera(60, width / height, 0.01, 100);
  // Camera positioned higher to center pool better and see from above
  camera.position.set(2.2, 2.5, 2.2);
  camera.lookAt(0, 0.2, 0);

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.autoClear = false;

  // Light direction
  const light = [0.7559289460184544, 0.7559289460184544, -0.3779644730092272];

  // Create mouse Controls
  const controls = new THREE.TrackballControls(
    camera,
    canvas
  );

  controls.screen.width = width;
  controls.screen.height = height;

  controls.rotateSpeed = 2.5;  // Camera rotation enabled
  controls.zoomSpeed = 5.0;  // Zoom enabled
  controls.panSpeed = 0.9;  // Camera panning enabled
  controls.dynamicDampingFactor = 0.9;

  // Ray caster
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const targetgeometry = new THREE.PlaneGeometry(2, 2);
  for (let vertex of targetgeometry.vertices) {
    vertex.z = - vertex.y;
    vertex.y = 0.;
  }
  const targetmesh = new THREE.Mesh(targetgeometry);

  // Textures
  const cubetextureloader = new THREE.CubeTextureLoader();

  const textureCube = cubetextureloader.load([
    'xpos.jpg', 'xneg.jpg',
    'ypos.jpg', 'ypos.jpg',
    'zpos.jpg', 'zneg.jpg',
  ]);

  const textureloader = new THREE.TextureLoader();

  const tiles = textureloader.load('tiles.jpg');

  class WaterSimulation {

    constructor() {
      this._camera = new THREE.OrthographicCamera(0, 1, 1, 0, 0, 2000);

      this._geometry = new THREE.PlaneBufferGeometry(2, 2);

      this._textureA = new THREE.WebGLRenderTarget(128, 128, { type: THREE.FloatType });
      this._textureB = new THREE.WebGLRenderTarget(128, 128, { type: THREE.FloatType });
      this.texture = this._textureA;

      const shadersPromises = [
        loadFile('shaders/simulation/vertex.glsl'),
        loadFile('shaders/simulation/drop_fragment.glsl'),
        loadFile('shaders/simulation/normal_fragment.glsl'),
        loadFile('shaders/simulation/update_fragment.glsl'),
      ];

      this.loaded = Promise.all(shadersPromises)
        .then(([vertexShader, dropFragmentShader, normalFragmentShader, updateFragmentShader]) => {
          const dropMaterial = new THREE.RawShaderMaterial({
            uniforms: {
              center: { value: [0, 0] },
              radius: { value: 0 },
              strength: { value: 0 },
              texture: { value: null },
            },
            vertexShader: vertexShader,
            fragmentShader: dropFragmentShader,
          });

          const normalMaterial = new THREE.RawShaderMaterial({
            uniforms: {
              delta: { value: [1 / 128, 1 / 128] },  // TODO: Remove this useless uniform and hardcode it in shaders?
              texture: { value: null },
            },
            vertexShader: vertexShader,
            fragmentShader: normalFragmentShader,
          });

          const updateMaterial = new THREE.RawShaderMaterial({
            uniforms: {
              delta: { value: [1 / 128, 1 / 128] },  // TODO: Remove this useless uniform and hardcode it in shaders?
              texture: { value: null },
            },
            vertexShader: vertexShader,
            fragmentShader: updateFragmentShader,
          });

          this._dropMesh = new THREE.Mesh(this._geometry, dropMaterial);
          this._normalMesh = new THREE.Mesh(this._geometry, normalMaterial);
          this._updateMesh = new THREE.Mesh(this._geometry, updateMaterial);
        });
    }

    // Add a drop of water at the (x, y) coordinate (in the range [-1, 1])
    addDrop(renderer, x, y, radius, strength) {
      this._dropMesh.material.uniforms['center'].value = [x, y];
      this._dropMesh.material.uniforms['radius'].value = radius;
      this._dropMesh.material.uniforms['strength'].value = strength;

      this._render(renderer, this._dropMesh);
    }

    stepSimulation(renderer) {
      this._render(renderer, this._updateMesh);
    }

    updateNormals(renderer) {
      this._render(renderer, this._normalMesh);
    }

    _render(renderer, mesh) {
      // Swap textures
      const oldTexture = this.texture;
      const newTexture = this.texture === this._textureA ? this._textureB : this._textureA;

      mesh.material.uniforms['texture'].value = oldTexture.texture;

      renderer.setRenderTarget(newTexture);

      // TODO Camera is useless here, what should be done?
      renderer.render(mesh, this._camera);

      this.texture = newTexture;
    }

  }


  class Caustics {

    constructor(lightFrontGeometry) {
      this._camera = new THREE.OrthographicCamera(0, 1, 1, 0, 0, 2000);

      this._geometry = lightFrontGeometry;

      this.texture = new THREE.WebGLRenderTarget(512, 512, { type: THREE.UNSIGNED_BYTE });

      const shadersPromises = [
        loadFile('shaders/caustics/vertex.glsl'),
        loadFile('shaders/caustics/fragment.glsl')
      ];

      this.loaded = Promise.all(shadersPromises)
        .then(([vertexShader, fragmentShader]) => {
          const material = new THREE.RawShaderMaterial({
            uniforms: {
              light: { value: light },
              water: { value: null },
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          });

          this._causticMesh = new THREE.Mesh(this._geometry, material);
        });
    }

    update(renderer, waterTexture) {
      this._causticMesh.material.uniforms['water'].value = waterTexture;

      renderer.setRenderTarget(this.texture);
      renderer.setClearColor(black, 0);
      renderer.clear();

      // TODO Camera is useless here, what should be done?
      renderer.render(this._causticMesh, this._camera);
    }

  }


  class Water {

    constructor() {
      this.geometry = new THREE.PlaneBufferGeometry(2, 2, 100, 100);  // Reduced from 200x200

      const shadersPromises = [
        loadFile('shaders/water/vertex.glsl'),
        loadFile('shaders/water/fragment.glsl')
      ];

      this.loaded = Promise.all(shadersPromises)
        .then(([vertexShader, fragmentShader]) => {
          this.material = new THREE.RawShaderMaterial({
            uniforms: {
              light: { value: light },
              tiles: { value: tiles },
              sky: { value: textureCube },
              water: { value: null },
              causticTex: { value: null },
              underwater: { value: false },
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          });

          this.mesh = new THREE.Mesh(this.geometry, this.material);
        });
    }

    draw(renderer, waterTexture, causticsTexture) {
      this.material.uniforms['water'].value = waterTexture;
      this.material.uniforms['causticTex'].value = causticsTexture;

      this.material.side = THREE.FrontSide;
      this.material.uniforms['underwater'].value = true;
      renderer.render(this.mesh, camera);

      this.material.side = THREE.BackSide;
      this.material.uniforms['underwater'].value = false;
      renderer.render(this.mesh, camera);
    }

  }


  class Pool {

    constructor() {
      this._geometry = new THREE.BufferGeometry();
      const vertices = new Float32Array([
        -1, -1, -1,
        -1, -1, 1,
        -1, 1, -1,
        -1, 1, 1,
        1, -1, -1,
        1, 1, -1,
        1, -1, 1,
        1, 1, 1,
        -1, -1, -1,
        1, -1, -1,
        -1, -1, 1,
        1, -1, 1,
        -1, 1, -1,
        -1, 1, 1,
        1, 1, -1,
        1, 1, 1,
        -1, -1, -1,
        -1, 1, -1,
        1, -1, -1,
        1, 1, -1,
        -1, -1, 1,
        1, -1, 1,
        -1, 1, 1,
        1, 1, 1
      ]);
      const indices = new Uint32Array([
        0, 1, 2,
        2, 1, 3,
        4, 5, 6,
        6, 5, 7,
        12, 13, 14,
        14, 13, 15,
        16, 17, 18,
        18, 17, 19,
        20, 21, 22,
        22, 21, 23
      ]);

      this._geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      this._geometry.setIndex(new THREE.BufferAttribute(indices, 1));

      const shadersPromises = [
        loadFile('shaders/pool/vertex.glsl'),
        loadFile('shaders/pool/fragment.glsl')
      ];

      this.loaded = Promise.all(shadersPromises)
        .then(([vertexShader, fragmentShader]) => {
          this._material = new THREE.RawShaderMaterial({
            uniforms: {
              light: { value: light },
              tiles: { value: tiles },
              water: { value: null },
              causticTex: { value: null },
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          });
          this._material.side = THREE.FrontSide;

          this._mesh = new THREE.Mesh(this._geometry, this._material);
        });
    }

    draw(renderer, waterTexture, causticsTexture) {
      this._material.uniforms['water'].value = waterTexture;
      this._material.uniforms['causticTex'].value = causticsTexture;

      renderer.render(this._mesh, camera);
    }

  }


  class Debug {

    constructor() {
      this._camera = new THREE.OrthographicCamera(0, 1, 1, 0, 0, 1);
      this._geometry = new THREE.PlaneBufferGeometry();

      const shadersPromises = [
        loadFile('shaders/debug/vertex.glsl'),
        loadFile('shaders/debug/fragment.glsl')
      ];

      this.loaded = Promise.all(shadersPromises)
        .then(([vertexShader, fragmentShader]) => {
          this._material = new THREE.RawShaderMaterial({
            uniforms: {
              texture: { value: null },
            },
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
          });

          this._mesh = new THREE.Mesh(this._geometry, this._material);
        });
    }

    draw(renderer, texture) {
      this._material.uniforms['texture'].value = texture;

      renderer.setRenderTarget(null);
      renderer.render(this._mesh, this._camera);
    }

  }

  const waterSimulation = new WaterSimulation();
  const water = new Water();
  const caustics = new Caustics(water.geometry);
  const pool = new Pool();

  const debug = new Debug();

  // Keyboard controls for bot movement
  const keys = {};
  const moveSpeed = 0.02;

  // Determine which model to load from URL param
  const urlParams = new URLSearchParams(window.location.search);
  const requestedModel = (urlParams.get('model') || 'nebula').toLowerCase();
  let modelName = 'nebula';
  let modelFile = 'nebula.glb';

  if (requestedModel === 'moses') {
    modelName = 'moses';
    modelFile = 'moses.glb';
  } else if (requestedModel === 'marco') {
    modelName = 'marco';
    modelFile = 'Marco.glb';
  }

  document.title = (modelName === 'marco' ? 'AUV Marco' : modelName.charAt(0).toUpperCase() + modelName.slice(1)) + ' - AUV 3D Viewer';
  const badge = document.getElementById('modelBadge');
  if (badge) {
    badge.textContent = (modelName === 'marco' ? 'AUV Marco' : (modelName === 'moses' ? 'AUV Moses' : 'AUV Nebula')) + ' (3D)';
  }

  let botCenter = new THREE.Vector3(0, -0.5, 0);

  window.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;
  });

  window.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
  });

  function updateBotMovement() {
    if (!botModel) return;

    let moved = false;
    const botRadius = 0.35;

    if (keys['arrowup'] || keys['w']) {
      botCenter.z -= moveSpeed;
      moved = true;
    }
    if (keys['arrowdown'] || keys['s']) {
      botCenter.z += moveSpeed;
      moved = true;
    }
    if (keys['q']) {
      botCenter.y += moveSpeed;
      moved = true;
    }
    if (keys['e']) {
      botCenter.y -= moveSpeed;
      moved = true;
    }

    botCenter.x = Math.max(-1.0 + botRadius, Math.min(1.0 - botRadius, botCenter.x));
    botCenter.z = Math.max(-1.0 + botRadius, Math.min(1.0 - botRadius, botCenter.z));
    botCenter.y = Math.max(-1.0 + botRadius, Math.min(0.5 - botRadius, botCenter.y));

    if (moved) {
      botModel.position.copy(botCenter);

      const waterSurfaceY = 0;
      const prevY = botModel.position.y - (keys['q'] ? moveSpeed : 0) + (keys['e'] ? moveSpeed : 0);
      const isBreachingSurface = (prevY < waterSurfaceY && botCenter.y >= waterSurfaceY) ||
        (prevY > waterSurfaceY && botCenter.y <= waterSurfaceY);

      if (isBreachingSurface) {
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const splashDist = 0.2;
          const splashX = botCenter.x + Math.cos(angle) * splashDist;
          const splashZ = botCenter.z + Math.sin(angle) * splashDist;
          waterSimulation.addDrop(renderer, splashX, splashZ, 0.05, 0.08);
        }
      } else if (Math.abs(botCenter.y - waterSurfaceY) < 0.1) {
        waterSimulation.addDrop(renderer, botCenter.x, botCenter.z, 0.03, 0.03);
      } else {
        waterSimulation.addDrop(renderer, botCenter.x, botCenter.z, 0.02, 0.01);
      }
    }
  }


  // Main rendering loop
  function animate() {
    updateBotMovement();  // Handle keyboard controls
    waterSimulation.stepSimulation(renderer);
    waterSimulation.updateNormals(renderer);

    const waterTexture = waterSimulation.texture.texture;

    caustics.update(renderer, waterTexture);

    const causticsTexture = caustics.texture.texture;

    // debug.draw(renderer, causticsTexture);

    renderer.setRenderTarget(null);
    renderer.setClearColor(bgcolor, 1);
    renderer.clear();

    // Render pool first
    pool.draw(renderer, waterTexture, causticsTexture);

    // Disable depth write for water so bot shows through from above
    renderer.getContext().depthMask(false);
    water.draw(renderer, waterTexture, causticsTexture);
    renderer.getContext().depthMask(true);

    // Render bot model last with caustics
    if (botModel && botScene) {
      botModel.traverse((child) => {
        if (child.isMesh && child.material.uniforms && child.material.uniforms.causticTex) {
          child.material.uniforms.causticTex.value = causticsTexture;
        }
      });
      renderer.render(botScene, camera);
    }


    controls.update();

    window.requestAnimationFrame(animate);
  }

  function onMouseMove(event) {
    const rect = canvas.getBoundingClientRect();

    mouse.x = (event.clientX - rect.left) * 2 / width - 1;
    mouse.y = - (event.clientY - rect.top) * 2 / height + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObject(targetmesh);

    for (let intersect of intersects) {
      waterSimulation.addDrop(renderer, intersect.point.x, intersect.point.z, 0.03, 0.04);
    }
  }

  const loaded = [waterSimulation.loaded, caustics.loaded, water.loaded, pool.loaded, debug.loaded];

  Promise.all(loaded).then(() => {
    canvas.addEventListener('mousemove', { handleEvent: onMouseMove });

    for (var i = 0; i < 20; i++) {
      waterSimulation.addDrop(
        renderer,
        Math.random() * 2 - 1, Math.random() * 2 - 1,
        0.03, (i & 1) ? 0.02 : -0.02
      );
    }

    animate();
  });


  // Create a scene for the bot model with proper lighting
  const botScene = new THREE.Scene();
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  botScene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(light[0] * 5, light[1] * 5, light[2] * 5);
  botScene.add(directionalLight);

  // Load and render the bot model (nebula or moses based on URL param)
  const gltfLoader = new THREE.GLTFLoader();
  let botModel = null;

  gltfLoader.load(modelFile, (gltf) => {
    console.log('✓ ' + modelName + ' model loaded from ' + modelFile);
    botModel = gltf.scene;

    // Remove any embedded camera nodes from GLTF so they don't break bounds or scene camera
    const camerasToRemove = [];
    botModel.traverse((child) => {
      if (child.isCamera) {
        camerasToRemove.push(child);
      }
    });
    camerasToRemove.forEach((cam) => {
      if (cam.parent) cam.parent.remove(cam);
    });

    botModel.traverse((child) => {
      if (child.isMesh) {
        // Ensure geometry has uv attribute so custom shader compiles cleanly
        if (child.geometry && !child.geometry.attributes.uv) {
          const count = child.geometry.attributes.position ? child.geometry.attributes.position.count : 0;
          child.geometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(count * 2), 2));
        }

        // Store original material properties
        const originalMaterial = child.material;

        // Check which textures are available
        const hasMap = !!(originalMaterial && originalMaterial.map);
        const hasNormalMap = !!(originalMaterial && originalMaterial.normalMap);
        const hasRoughnessMap = !!(originalMaterial && originalMaterial.roughnessMap);
        const hasMetalnessMap = !!(originalMaterial && originalMaterial.metalnessMap);

        // Create custom shader material that receives caustics AND preserves textures
        child.material = new THREE.ShaderMaterial({
          uniforms: {
            causticTex: { value: null },
            light: { value: new THREE.Vector3(light[0], light[1], light[2]) },
            // Use original textures if available
            map: { value: (originalMaterial && originalMaterial.map) || null },
            normalMap: { value: (originalMaterial && originalMaterial.normalMap) || null },
            roughnessMap: { value: (originalMaterial && originalMaterial.roughnessMap) || null },
            metalnessMap: { value: (originalMaterial && originalMaterial.metalnessMap) || null },
            // Boolean flags for texture availability
            hasMap: { value: hasMap },
            hasNormalMap: { value: hasNormalMap },
            hasRoughnessMap: { value: hasRoughnessMap },
            hasMetalnessMap: { value: hasMetalnessMap },
            // Fallback color values
            baseColor: { value: (originalMaterial && originalMaterial.color) ? originalMaterial.color : new THREE.Color(0.8, 0.8, 0.8) },
            metalness: { value: (originalMaterial && originalMaterial.metalness !== undefined) ? originalMaterial.metalness : 0.7 },
            roughness: { value: (originalMaterial && originalMaterial.roughness !== undefined) ? originalMaterial.roughness : 0.3 },
          },
          vertexShader: `
            varying vec3 vNormal;
            varying vec3 vPosition;
            varying vec3 vWorldPosition;
            varying vec2 vUv;
            
            void main() {
              vNormal = normalize(normalMatrix * normal);
              vPosition = position;
              vUv = uv;
              vec4 worldPosition = modelMatrix * vec4(position, 1.0);
              vWorldPosition = worldPosition.xyz;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform sampler2D causticTex;
            uniform sampler2D map;
            uniform sampler2D normalMap;
            uniform sampler2D roughnessMap;
            uniform sampler2D metalnessMap;
            uniform bool hasMap;
            uniform bool hasNormalMap;
            uniform bool hasRoughnessMap;
            uniform bool hasMetalnessMap;
            uniform vec3 light;
            uniform vec3 baseColor;
            uniform float metalness;
            uniform float roughness;
            
            varying vec3 vNormal;
            varying vec3 vPosition;
            varying vec3 vWorldPosition;
            varying vec2 vUv;
            
            void main() {
              // Get base color from texture or fallback
              vec3 albedo = baseColor;
              if (hasMap) {
                albedo = texture2D(map, vUv).rgb;
              }
              
              // Get material properties from maps or fallbacks
              float metallic = metalness;
              if (hasMetalnessMap) {
                metallic = texture2D(metalnessMap, vUv).r;
              }
              
              float rough = roughness;
              if (hasRoughnessMap) {
                rough = texture2D(roughnessMap, vUv).r;
              }
              
              // Basic lighting
              vec3 normal = normalize(vNormal);
              if (hasNormalMap) {
                vec3 normalTex = texture2D(normalMap, vUv).rgb * 2.0 - 1.0;
                normal = normalize(vNormal + normalTex * 0.3);
              }
              
              vec3 lightDir = normalize(light);
              float diffuse = max(dot(normal, lightDir), 0.0);
              
              // Apply lighting to albedo
              vec3 color = albedo;
              color = mix(color * 0.5, color * 1.5, diffuse);
              
              // Add some metallic sheen
              vec3 viewDir = normalize(cameraPosition - vWorldPosition);
              vec3 reflectDir = reflect(-lightDir, normal);
              float spec = pow(max(dot(viewDir, reflectDir), 0.0), mix(8.0, 64.0, 1.0 - rough));
              color += vec3(spec) * metallic * 0.5;
              
              gl_FragColor = vec4(color, 1.0);
            }
          `,
        });

        child.material.needsUpdate = true;
      }
    });

    // Fix orientation if the GLB is exported upside-down
    if (modelName === 'moses') {
      botModel.rotation.x = Math.PI;  // flip 180° around X-axis for Moses
    }

    // Scale and center the model precisely inside the pool
    const box = new THREE.Box3().setFromObject(botModel);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 0.75 / Math.max(maxDim, 0.001);

    botModel.scale.set(scale, scale, scale);
    box.setFromObject(botModel);
    const center = box.getCenter(new THREE.Vector3());

    // Center geometry at origin and position in water
    botModel.position.x -= center.x;
    botModel.position.y -= center.y + 0.5;
    botModel.position.z -= center.z;
    botCenter.copy(botModel.position);

    botScene.add(botModel);

    console.log('✓ ' + modelName + ' positioned cleanly in 3D pool');
  }, (progress) => {
    const percent = progress.total > 0 ? (progress.loaded / progress.total * 100).toFixed(1) : '...';
    console.log('Loading ' + modelName + ':', percent + '%');
  }, (error) => {
    console.error('Error loading ' + modelName + ':', error);
  });

  // Make nebula draggable with mouse
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  canvas.addEventListener('mousedown', (event) => {
    if (!botModel) return;
    const rect = canvas.getBoundingClientRect();
    mouse.x = (event.clientX - rect.left) * 2 / width - 1;
    mouse.y = - (event.clientY - rect.top) * 2 / height + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(botModel, true);
    if (intersects.length > 0) {
      isDragging = true;
      controls.enabled = false;
      previousMousePosition = { x: event.clientX, y: event.clientY };
      canvas.style.cursor = 'grabbing';
    }
  });

  canvas.addEventListener('mousemove', (event) => {
    if (isDragging && botModel) {
      const deltaX = event.clientX - previousMousePosition.x;
      const deltaY = event.clientY - previousMousePosition.y;
      const moveFactor = 0.003;
      botCenter.z -= deltaY * moveFactor;
      const botRadius = 0.35;
      botCenter.z = Math.max(-1.0 + botRadius, Math.min(1.0 - botRadius, botCenter.z));
      botModel.position.copy(botCenter);
      waterSimulation.addDrop(renderer, botCenter.x, botCenter.z, 0.03, 0.02);
      previousMousePosition = { x: event.clientX, y: event.clientY };
    }
  });

  canvas.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      controls.enabled = true;
      canvas.style.cursor = 'default';
    }

  });

});