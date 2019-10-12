//test
function collisionAndMove(selectedObject, floorObject){
    //direction
    var f_vector = new THREE.Vector3(0, 0, -1);
    var b_vector = new THREE.Vector3(0, 0, 1);
    var l_vector = new THREE.Vector3(-1, 0, 0);
    var r_vector = new THREE.Vector3(1, 0, 0);
  
    var halfSizeX = selectedObject.size.x / 2;
    var halfSizeZ = selectedObject.size.z / 2;
  
    //origin
    var left = new THREE.Vector3( selectedObject.position.x + halfSizeX - 1, selectedObject.size.y / 2, selectedObject.position.z );
    var right = new THREE.Vector3( selectedObject.position.x - halfSizeX + 1, selectedObject.size.y / 2, selectedObject.position.z );
    var front = new THREE.Vector3( selectedObject.position.x, selectedObject.size.y / 2, selectedObject.position.z + halfSizeZ - 1);
    var back = new THREE.Vector3( selectedObject.position.x, selectedObject.size.y / 2, selectedObject.position.z - halfSizeZ + 1);
    
    var left_raycaster = new THREE.Raycaster(left, f_vector);
    var right_raycaster = new THREE.Raycaster(right, f_vector);
    var left1_raycaster = new THREE.Raycaster(left, b_vector);
    var right1_raycaster = new THREE.Raycaster(right, b_vector);
    var back_raycaster = new THREE.Raycaster(back, r_vector);
    var front_raycaster = new THREE.Raycaster(front, r_vector);
    var back1_raycaster = new THREE.Raycaster(back, l_vector);
    var front1_raycaster = new THREE.Raycaster(front, l_vector);
  
    // scene.add(
    //   new THREE.ArrowHelper(
    //     back_raycaster.ray.direction,
    //     back_raycaster.ray.origin,
    //     300,
    //     0xff0000
    //   )
    // );
    // scene.add(
    //   new THREE.ArrowHelper(
    //     front_raycaster.ray.direction,
    //     front_raycaster.ray.origin,
    //     300,
    //     0xff0000
    //   )
    // );
    // scene.add(
    //   new THREE.ArrowHelper(
    //     right_raycaster.ray.direction,
    //     right_raycaster.ray.origin,
    //     300,
    //     0xff0000
    //   )
    // );
    // scene.add(
    //   new THREE.ArrowHelper(
    //     left_raycaster.ray.direction,
    //     left_raycaster.ray.origin,
    //     300,
    //     0xff0000
    //   )
    // );
    // scene.add(
    //   new THREE.ArrowHelper(
    //     back1_raycaster.ray.direction,
    //     back_raycaster.ray.origin,
    //     300,
    //     0xff0000
    //   )
    // );
    // scene.add(
    //   new THREE.ArrowHelper(
    //     front1_raycaster.ray.direction,
    //     front_raycaster.ray.origin,
    //     300,
    //     0xff0000
    //   )
    // );
    // scene.add(
    //   new THREE.ArrowHelper(
    //     right1_raycaster.ray.direction,
    //     right_raycaster.ray.origin,
    //     300,
    //     0xff0000
    //   )
    // );
    // scene.add(
    //   new THREE.ArrowHelper(
    //     left1_raycaster.ray.direction,
    //     left_raycaster.ray.origin,
    //     300,
    //     0xff0000
    //   )
    // );
    
    objectsWithoutSelectedObject = objects.filter(function(object){return object != selectedObject});

    var intersectsLeft = left_raycaster.intersectObjects(objectsWithoutSelectedObject);
    var intersectsRight = right_raycaster.intersectObjects(objectsWithoutSelectedObject);
    var intersectsLeft1 = left1_raycaster.intersectObjects(objectsWithoutSelectedObject);
    var intersectsRight1 = right1_raycaster.intersectObjects(objectsWithoutSelectedObject);
    var intersectsFront = front_raycaster.intersectObjects(objectsWithoutSelectedObject);
    var intersectsBack = back_raycaster.intersectObjects(objectsWithoutSelectedObject);
    var intersectsFront1 = front1_raycaster.intersectObjects(objectsWithoutSelectedObject);
    var intersectsBack1 = back1_raycaster.intersectObjects(objectsWithoutSelectedObject);
  
    // console.log("======================");
    // console.log(selectedObject.position);
    // console.log(floorObject.point);
  
    var colX;
    var colZ;
    var colX1;
    var colZ1;

    var outsideX;
    var outsideX1;
    var outsideZ;
    var outsideZ1;
  
    if ((intersectsLeft.length > 0 && intersectsLeft[0].distance < intersectsLeft[0].object.size.z / 2+ 1) || 
        (intersectsRight.length > 0 && intersectsRight[0].distance < intersectsRight[0].object.size.z / 2+ 1) || lastCollisionDistanceX < 10){
          if(intersectsLeft.length > 0){
            lastCollisionDistanceX = intersectsLeft[0].distance;
            // console.log("===== collision left x =======");
            // console.log(intersectsLeft[0].distance);
            // console.log(intersectsLeft[0].object.size.x / 2);
            // console.log(intersectsLeft[0].object.size.z / 2 - selectedObject.size.z / 2);
            lastCollisionDistanceX1 = 100;
            lastCollisionDistanceZ = 100;
            lastCollisionDistanceZ1 = 100;
          }
          if(intersectsRight.length > 0){
            lastCollisionDistanceX = intersectsRight[0].distance;
            lastCollisionDistanceX1 = 100;
            lastCollisionDistanceZ = 100;
            lastCollisionDistanceZ1 = 100;
          }
          colX = true;
    }else{
      colX = false;
    }
    if ((intersectsFront.length > 0 && intersectsFront[0].distance < intersectsFront[0].object.size.x / 2+ 1) || 
        (intersectsBack.length > 0 && intersectsBack[0].distance < intersectsBack[0].object.size.x / 2+ 1) || lastCollisionDistanceZ < 10) {
          if(intersectsFront.length > 0){
            lastCollisionDistanceZ = intersectsFront[0].distance;
            lastCollisionDistanceZ1 = 100;
            lastCollisionDistanceX = 100;
            lastCollisionDistanceX1 = 100;
          }
          if(intersectsBack.length > 0){
            lastCollisionDistanceZ = intersectsBack[0].distance;
            lastCollisionDistanceZ1 = 100;
            lastCollisionDistanceX = 100;
            lastCollisionDistanceX1 = 100;
          }
          colZ = true;
    }else{
      colZ = false;
    }
    if ((intersectsLeft1.length > 0 && intersectsLeft1[0].distance < intersectsLeft1[0].object.size.z / 2 + 1) ||
        (intersectsRight1.length > 0 && intersectsRight1[0].distance < intersectsRight1[0].object.size.z / 2 + 1) || lastCollisionDistanceX1 < 10){
          if(intersectsLeft1.length > 0){
            lastCollisionDistanceX1 = intersectsLeft1[0].distance;
            lastCollisionDistanceX = 100;
            lastCollisionDistanceZ = 100;
            lastCollisionDistanceZ1 = 100;
          }
          if(intersectsRight1.length > 0){
            lastCollisionDistanceX1 = intersectsRight1[0].distance;
            lastCollisionDistanceX = 100;
            lastCollisionDistanceZ = 100;
            lastCollisionDistanceZ1 = 100;
          }
          colX1 = true;
    }else{
      colX1 = false;
    }
    if ((intersectsFront1.length > 0 && intersectsFront1[0].distance < intersectsFront1[0].object.size.x / 2+ 1) || 
        (intersectsBack1.length > 0 && intersectsBack1[0].distance < intersectsBack1[0].object.size.x / 2+ 1) || lastCollisionDistanceZ1 < 10) {
          if(intersectsFront1.length > 0){
            lastCollisionDistanceZ1 = intersectsFront1[0].distance;
            lastCollisionDistanceZ = 100;
            lastCollisionDistanceX = 100;
            lastCollisionDistanceX1 = 100;
          }
          if(intersectsBack1.length > 0){
            lastCollisionDistanceZ1 = intersectsBack1[0].distance;
            lastCollisionDistanceZ = 100;
            lastCollisionDistanceX = 100;
            lastCollisionDistanceX1 = 100;
          }
          colZ1 = true;
    }else{
      colz1 = false;
    }
    

    //object outside of room?
    //positive coordinates
    if(floorObject.point.x + selectedObject.size.x / 2 > floorObject.object.geometry.parameters.width / 2){
        console.log("colx");
        outsideX = true;
    }else{
        outsideX = false;
    }
    if(floorObject.point.z + selectedObject.size.z / 2 > floorObject.object.geometry.parameters.height / 2){
        console.log("colZ");
        outsideZ = true;
    }else{
        outsideZ = false;
    }
    //negative coordinates
    if(floorObject.point.x < 0 || floorObject.point.z < 0){
        if(floorObject.point.z - selectedObject.size.z / 2 < (floorObject.object.geometry.parameters.width / 2) * -1){
            console.log("colx1");
            outsideX1 = true;
        }else{
            outsideX1 = false;
        }
        if(floorObject.point.x - selectedObject.size.x / 2 < (floorObject.object.geometry.parameters.height / 2) * -1){
            console.log("colxz1");
            outsideZ1 = true;
        }else{
            outsideZ1 = false;
        }
    }

    if(outsideX || outsideZ || outsideX1 || outsideZ1){
        floorObject.point = selectedObject.position;
    }
    
    //moveable in the right direction if collision with other object
    if(colX || colX1 || colZ || colZ1){
        //selectedObject.material.opacity = 0.5;
        //selectedObject.material.transparent = true;
        if(colX){
            if(floorObject.point.z > selectedObject.position.z){
                selectedObject.position.z = floorObject.point.z;
                selectedObject.position.x = floorObject.point.x;
            }
        }
        if(colX1){
            if(floorObject.point.z < selectedObject.position.z){
                selectedObject.position.z = floorObject.point.z;
                selectedObject.position.x = floorObject.point.x;
            }
        }
        if(colZ){
            if(floorObject.point.x < selectedObject.position.x){
                selectedObject.position.z = floorObject.point.z;
                selectedObject.position.x = floorObject.point.x;
            }
        }
        if(colZ1){
            if(floorObject.point.x > selectedObject.position.x){
                selectedObject.position.z = floorObject.point.z;
                selectedObject.position.x = floorObject.point.x;
            }
        }
    }else{
        selectedObject.visible = true;
        //selectedObject.material.opacity = 1;
        //selectedObject.material.transparent = false;

        latestMouseIntersection = floorObject.point;
        selectedObject.position.copy(floorObject.point);
    }
  }