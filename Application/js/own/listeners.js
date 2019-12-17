var sliderMoveCounter = 0;

function controlsChange(){
  needsUpdate = true;
}

function onMouseWheel(event) {
  console.log("wheel!");
  event.preventDefault();
  

  camera.position.x -= 1;
  needsUpdate = true;
}

function onMouseDown(event) {

  prevSliderValue = $('#slider').val();
  sliderMoveCounter = 0;
  MOUSEDOWN = true;
  //console.log(controls);

  //So reagieren normale HTML-Elemente auf die Clicks.
  if(!MODE == "SCALE") {
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
  var intersects = raycaster.intersectObjects(objects, true);
  var draggableIntersects = raycaster.intersectObjects(draggableObjects, true);
  // console.log("on mouse down");
  if (draggableIntersects.length > 0 && MODE == "DRAG") {
    //prevent that one object can be clicked multiple times (and the tooltip changes its position)
    if(selectedObject == undefined || draggableIntersects[0].object.parent != selectedObject){
      latestMouseIntersection = intersects[0].point;
    }
    // console.log("SELECTED A OBJECT");
    selectObject(draggableIntersects[0].object.parent);
    console.log(selectedObject);
    console.log(objects);

    controls.enableRotate = false;
    dragging = true;
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
    event.preventDefault();
    document.getElementById("content").style.cursor = "move";

    var oldY = selectedObject.position.y;
    collisionAndMove(selectedObject, floorIntersects[0]);
    selectedObject.position.y = oldY;
  
    needsUpdate = true;
  }


  if (floorIntersects.length > 0 && MODE == "OBJECT") {
    var intersect = floorIntersects[0];
    
    if (newObject != undefined) {
      intersect.point.y = newObject.position.y;
    }

    collisionAndMove(newObject, intersect);
    //newObject.material.opacity = 0.5;
    //newObject.material.transparent = true;
    needsUpdate = true;
  }
  needsUpdate = true;
}

function onMouseUp(event) {
  newSliderValue = $('#slider').val();
  if(prevSliderValue != newSliderValue){
    console.log("mouse up -> method aufruf")
    sliderInput(newSliderValue, true);
  }
  document.getElementById("content").style.cursor = "auto";
  MOUSEDOWN = false;
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

function onSliderChange(){
  console.log("moved slider");
  sliderMoveCounter++;
  if(sliderMoveCounter == 1){
    console.log("letzte ANIMATION löschen");
    sliderClicked();
  }
  sliderInput($('#slider').val(), false);
}