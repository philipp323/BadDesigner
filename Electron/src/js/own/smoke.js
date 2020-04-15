var camera, scene, renderer,
    geometry, material, mesh;

function smokeInit() {
 
    threeClock = new THREE.Clock();
  
    smokeTexture = THREE.ImageUtils.loadTexture('textures/smoke.png');
    smokeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc, map: smokeTexture, transparent: true ,opacity : 0.5});
    smokeGeo = new THREE.PlaneGeometry(100,100);
    smokeParticles = [];


    var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
    particle.position.x = 50;
    particle.position.y = 200;
    particle.position.z = 100;
    // particle.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1000-100);
    particle.rotation.z = Math.random() * 360;
    particle.rotation.x = 50;
        //r scaleSetting =  Math.random(); // ticle.scale.set(scaleSetting,scaleSetting,scaleSetting);
    scene.add(particle);
    smokeParticles.push(particle);
}
 
function animate() {
 
    // note: three.js includes requestAnimationFrame shim
    delta = clock.getDelta();
    evolveSmoke();
    render();
}
 
function evolveSmoke() {
    var sp = smokeParticles.length;
    while(sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.2);
    //     smokeParticles[sp].position.x +=(delta * 0.2);
    //   smokeParticles[sp].position.y +=(delta * 0.2);smokeParticles[sp].position.z +=(delta * 0.2);
    }
}