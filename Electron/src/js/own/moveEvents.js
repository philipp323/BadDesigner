function swapXZ(object){
    var temp;
    temp = object.size.z;
    object.size.z = object.size.x;
    object.size.x = temp;
}

function moveLeft(){
    latestMouseIntersection.x -= 10;
    selectedObject.position.x -= 10;
    needsUpdate = true;
}

function moveRight(){
    latestMouseIntersection.x += 10;
    selectedObject.position.x += 10;
    needsUpdate = true;
}

function moveDown(){
    latestMouseIntersection.z += 10;
    selectedObject.position.z += 10;
    needsUpdate = true;
}

function moveUp(){
    latestMouseIntersection.z -= 10;
    selectedObject.position.z -= 10;
    needsUpdate = true;
}

function moveSpinZ(){
    selectedObject.rotateZ(THREE.Math.degToRad(90));
    needsUpdate = true;
}

function moveSpinX(){
    selectedObject.rotateX(THREE.Math.degToRad(1));
}

function moveSpinY() {
  selectedObject.rotateY(THREE.Math.degToRad(90));
  swapXZ(selectedObject);
}