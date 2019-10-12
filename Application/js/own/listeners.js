function onMouseDown(event) {

  //So reagieren normale HTML-Elemente auf die Clicks.
  if(!MODE == "SCALE"){
    event.preventDefault();
  }

  mouse.set(
    ((event.clientX - renderer.domElement.offsetLeft) / window.innerWidth) * 2 -
      1,
    -((event.clientY - renderer.domElement.offsetTop) / window.innerHeight) *
      2 +
      1,
    0.5
  );

  raycaster.setFromCamera(mouse, camera);

  var floorIntersects = raycaster.intersectObjects(floorObjects);
  var intersects = raycaster.intersectObjects(objects);
  var draggableIntersects = raycaster.intersectObjects(draggableObjects);

  if (draggableIntersects.length > 0 && MODE == "DRAG") {
    //prevent that one object can be clicked multiple times (and the tooltip changes its position)
    if(selectedObject == undefined || draggableIntersects[0].object != selectedObject){
      latestMouseIntersection = intersects[0].point;
    }
    selectObject(draggableIntersects[0].object);
    console.log(selectedObject);

    controls.enableRotate = false;
    dragging = true;
  }

  if (intersects.length > 0 && MODE == "PLACEMENT") {
    var intersect = intersects[0];

      // create cube
      var cube = new THREE.Mesh(cubeGeo, cubeMaterial);
      cube.position.copy(intersect.point).add(intersect.face.normal);
      cube.position.y = 25;
      scene.add(cube);
      cube.name = "Würfel";

      setSize(cube);

      //for the default size (scaling is not possible with the real size)
      var box = new THREE.Box3().setFromObject(cube);
      const vector = new THREE.Vector3();
      box.getSize(vector);
      cube.defaultSize = vector;

      //to show the raycaster on the object
      //collisionAndMove(cube, undefined, undefined);
      draggableObjects.push(cube);
      objects.push(cube);

    needsUpdate = true;
  }

  if (intersects.length > 0 && MODE == "OBJECT") {
    //newObject.material.opacity = 1;

    var intersect = floorIntersects[0];

    if (newObject != undefined) {
      intersect.point.y = newObject.position.y;
    }

    newObject.position.copy(intersect.point).add(intersect.face.normal);
    //collisionAndMove(newObject, undefined, undefined);
    MODE = "PRESENTATION";
    newObject = undefined;
    needsUpdate = true;
  }
}

var normalMatrix = new THREE.Matrix3();
var worldNormal = new THREE.Vector3();
var lookAtVector = new THREE.Vector3();

function onMouseMove(event) {
  event.preventDefault();

  mouse.set(
    ((event.clientX - renderer.domElement.offsetLeft) / window.innerWidth) * 2 -
      1,
    -((event.clientY - renderer.domElement.offsetTop) / window.innerHeight) *
      2 +
      1,
    0.5
  );

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(objects);
  var floorIntersects = raycaster.intersectObjects(floorObjects);

  if (/*floorIntersects.length > 0 &&*/ MODE == "DRAG" && dragging) {
    //var intersect = intersects[0].object;
    document.getElementById("content").style.cursor = "move";

    var oldY = selectedObject.position.y;
    collisionAndMove(selectedObject, floorIntersects[0]);
    selectedObject.position.y = oldY;
  
    needsUpdate = true;
  }

  //set the GhostCube
  if (intersects.length > 0 && MODE == "PLACEMENT") {
    ghostCube.visible = true;
    var intersect = floorIntersects[0];

    if(selectedObject != undefined){
      intersect.point.y = selectedObject.position.y;
    }
    collisionAndMove(ghostCube, intersect);
    ghostCube.material.opacity = 0.5;
    ghostCube.material.transparent = true;
    ghostCube.position.y = 25;
    needsUpdate = true;
  }

  if (floorIntersects.length > 0 && MODE == "OBJECT") {
    var intersect = floorIntersects[0];
    
    if (newObject != undefined) {
      intersect.point.y = newObject.position.y;
    }

    collisionAndMove(newObject, intersect);
    //newObject.material.opacity = 0.5;
    newObject.material.transparent = true;
    needsUpdate = true;
  }
  needsUpdate = true;
}

function onMouseUp(event) {
  document.getElementById("content").style.cursor = "auto";
  controls.enableRotate = true;
  dragging = false;
  needsUpdate = true;
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  needsUpdate = true;
}

function setSize(object){
  var box = new THREE.Box3().setFromObject(object);
  const vector = new THREE.Vector3();
  box.getSize(vector);
  object.size = vector;
}