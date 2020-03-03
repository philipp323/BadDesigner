var box;
var vector;
var material;
var nextObject;
var interval;
var progressPerModel = 0;
var currentProgress = 0;
var ANIMATION_SPEED = 4000;
var RELOADED = false;

function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function showObjects(animationObj) {
    if(!animationObj.CANCELLED) {
    nextObject = objects.find(obj => {
      return obj.number == animationObj.currentObjectNumber;
    });
    if(nextObject == undefined){
      console.log("object undefined");
      return 0;
    }

    if(animationObj.CANCELLED == true){
      console.log(animationObj.currentObjectNumber + " got cancelled!");
      changeView(currentlySelectedView);
      //$("#items-wrapper").html("");
      if(RELOADED){
        console.log("BACK TO 1");
        RELOADED = false;
      }
      //nextObject.visible = true;
      return 0;
    }

    if(nextObject.isDetailBefore){
      console.log("DISPLAY DETAIL");
      displayDetailViewReturnVal = await displayDetailView(nextObject.DETAIL_VIEW_ID, animationObj);
      if(displayDetailViewReturnVal == 0){
        console.log("In der DetailView abgebrochen!");
        return 0;
      }
    }

    if(nextObject.header != null){
      appendText(nextObject.header, nextObject.number + 100);
      await Sleep(2000);
    }

    console.log(+ nextObject.number + " Animating: " + nextObject.name);

    $('#slider').val(nextObject.number);

    calculateObjectsBeforeAndAfter(nextObject, true, nextObject.number);

    var returnValue;
    if(nextObject.animation_mode == 'FRONT'){
      //nextObject.position.z = nextObject.positionFixZ;
      nextObject.position.z += 70;

      var previousClockValue = clock.inputMinutes;
      var position = { z: nextObject.position.z};
      var target = { z: nextObject.position.z - 70};
      var tween = new TWEEN.Tween(position).to(target, nextObject.time * MULTIPLIER);
      tween.easing(TWEEN.Easing.Cubic.InOut);
      tween.onUpdate(returnValue = function(){
        nextObject.visible = true;
        nextObject.position.z = position.z;
        //console.log(((nextObject.clockMinutes * 60) / nextObject.time));
        clock.inputMinutes += ((nextObject.clockMinutes * 60) / nextObject.time) / MULTIPLIER;
        if(animationObj.CANCELLED == true){
          tween.stop();
          tween = undefined;
          console.log(animationObj.currentObjectNumber + " got cancelled while FRONT!");
          moveEveryObjectToRealPosition();
          //nextObject.visible = false;
          return 0;
        }else{
          return 1;
        }
      });
      if(returnValue == 0){
        return 0;
      }

      tween.start();
      
      if(!PAUSED){
        for(i = 0; i < (nextObject.time / 100) * MULTIPLIER; i++){
          await Sleep(100);
          if(animationObj.CANCELLED == true){
            moveEveryObjectToRealPosition();
            return 0;
          }
        }
        //await Sleep(nextObject.time * MULTIPLIER);
      }
      while(PAUSED){
        await Sleep(100);
      }
      clock.inputMinutes = previousClockValue + nextObject.clockMinutes;
      nextObject.position.z = 701;
      console.log(nextObject.number + " Finished: " + nextObject.name);
    } else if(nextObject.animation_mode == 'TOP'){
      //nextObject.position.y = nextObject.positionFixY;
      nextObject.position.y += 50;
      var previousClockValue = clock.inputMinutes;
      var position = { y: nextObject.position.y};
      var target = { y: nextObject.position.y - 50};
      var tween = new TWEEN.Tween(position).to(target, nextObject.time * MULTIPLIER);
      tween.easing(TWEEN.Easing.Cubic.InOut);

      tween.onUpdate(returnValue = function(){
        nextObject.visible = true;
        nextObject.position.y = position.y;
        //console.log(((nextObject.clockMinutes * 60) / nextObject.time));
        clock.inputMinutes += ((nextObject.clockMinutes * 60) / nextObject.time) / MULTIPLIER;
        if(animationObj.CANCELLED == true){
          tween.stop();
          tween = undefined;
          console.log(animationObj.currentObjectNumber + " got cancelled while TOP!");
          moveEveryObjectToRealPosition();
          return 0;
        }else{
          return 1;
        }
      });
      if(returnValue == 0){
        return 0;
      }

      tween.start();

      if(!PAUSED){
        for(i = 0; i < (nextObject.time / 100) * MULTIPLIER; i++){
          await Sleep(100);
          if(animationObj.CANCELLED == true){
            moveEveryObjectToRealPosition();
            return 0;
          }
        }
        //await Sleep(nextObject.time * MULTIPLIER);
      }
      while(PAUSED){
        await Sleep(100);
      }
      nextObject.position.y = -22;
      clock.inputMinutes = previousClockValue + nextObject.clockMinutes;
      console.log(nextObject.number + " Finished: " + nextObject.name);
    } else if(nextObject.animation_mode == 'BOTTOM'){
      //nextObject.position.y = nextObject.positionFixY;
      nextObject.position.y -= 50;
      var previousClockValue = clock.inputMinutes;
      var position = { y: nextObject.position.y};
      var target = { y: nextObject.position.y + 50};
      var tween = new TWEEN.Tween(position).to(target, nextObject.time * MULTIPLIER);
      tween.easing(TWEEN.Easing.Cubic.InOut);

      tween.onUpdate(returnValue = function(){
        nextObject.visible = true;
        nextObject.position.y = position.y;
        //console.log(((nextObject.clockMinutes * 60) / nextObject.time));
        clock.inputMinutes += ((nextObject.clockMinutes * 60) / nextObject.time) / MULTIPLIER;
        if(animationObj.CANCELLED == true){
          tween.stop();
          tween = undefined;
          console.log(animationObj.currentObjectNumber + " got cancelled while BOTTOM!");
          moveEveryObjectToRealPosition();
          return 0;
        }else{
          return 1;
        }
      });
      if(returnValue == 0){
        return 0;
      }

      tween.start();

      if(!PAUSED){
        for(i = 0; i < (nextObject.time / 100) * MULTIPLIER; i++){
          await Sleep(100);
          if(animationObj.CANCELLED == true){
            moveEveryObjectToRealPosition();
            return 0;
          }
        }
        //await Sleep(nextObject.time * MULTIPLIER);
      }
      while(PAUSED){
        await Sleep(100);
      }
      nextObject.position.y = -22;
      clock.inputMinutes = previousClockValue + nextObject.clockMinutes;
      console.log(nextObject.number + " Finished: " + nextObject.name);
    } else if(nextObject.animation_mode == 'RIGHT'){
      //nextObject.position.x = nextObject.positionFixX;
      nextObject.position.x -= 50;

      var previousClockValue = clock.inputMinutes
      var position = { x: nextObject.position.x};
      var target = { x: nextObject.position.x + 50};
      var tween = new TWEEN.Tween(position).to(target, nextObject.time * MULTIPLIER);
      tween.easing(TWEEN.Easing.Cubic.InOut);
      tween.onUpdate(returnValue = function(){
        nextObject.visible = true;
        nextObject.position.x = position.x;
        // console.log(((nextObject.clockMinutes * 60) / nextObject.time));
        clock.inputMinutes += ((nextObject.clockMinutes * 60) / nextObject.time) / MULTIPLIER;
        if(animationObj.CANCELLED == true){
          tween.stop();
          tween = undefined;
          console.log(animationObj.currentObjectNumber + " got cancelled while RIGHT!");
          moveEveryObjectToRealPosition();
          //nextObject.visible = false;
          return 0;
        }else{
          return 1;
        }
      });
      if(returnValue == 0){
        return 0;
      }

      tween.start();
      if(!PAUSED){
        for(i = 0; i < (nextObject.time / 100) * MULTIPLIER; i++){
          await Sleep(100);
          if(animationObj.CANCELLED == true){
            moveEveryObjectToRealPosition();
            return 0;
          }
        }
        //await Sleep(nextObject.time * MULTIPLIER);
      }
      while(PAUSED){
        await Sleep(100);
      }
      nextObject.position.x = -5395;
      clock.inputMinutes = previousClockValue + nextObject.clockMinutes;
      console.log(nextObject.number + " Finished: " + nextObject.name);
    } else if(nextObject.animation_mode == 'LEFT'){
      //nextObject.position.x = nextObject.positionFixX;
      nextObject.position.x += 50;

      var previousClockValue = clock.inputMinutes
      var position = { x: nextObject.position.x};
      var target = { x: nextObject.position.x - 50};
      var tween = new TWEEN.Tween(position).to(target, nextObject.time * MULTIPLIER);
      tween.easing(TWEEN.Easing.Cubic.InOut);
      tween.onUpdate(returnValue = function(){
        nextObject.visible = true;
        nextObject.position.x = position.x;
        // console.log(((nextObject.clockMinutes * 60) / nextObject.time));
        clock.inputMinutes += ((nextObject.clockMinutes * 60) / nextObject.time) / MULTIPLIER;
        if(animationObj.CANCELLED == true){
          tween.stop();
          tween = undefined;
          console.log(animationObj.currentObjectNumber + " got cancelled while LEFT!");
          moveEveryObjectToRealPosition();
          //nextObject.visible = false;
          return 0;
        }else{
          return 1;
        }
      });
      if(returnValue == 0){
        return 0;
      }

      tween.start();
      if(!PAUSED){
        for(i = 0; i < (nextObject.time / 100) * MULTIPLIER; i++){
          await Sleep(100);
          if(animationObj.CANCELLED == true){
            moveEveryObjectToRealPosition();
            return 0;
          }
        }
        //await Sleep(nextObject.time * MULTIPLIER);
      }
      while(PAUSED){
        await Sleep(100);
      }
      nextObject.position.x = -5395;
      clock.inputMinutes = previousClockValue + nextObject.clockMinutes;
      console.log(nextObject.number + " Finished: " + nextObject.name);
    }
  }
}

var itemsDiv = $("#items-wrapper");

function appendText(text, id){
  //console.log(text);
  var html;
  html = '<li id="' + id + '">' + '<a class="presentation">' + text + '</a>' + '</li>';
  
  document.getElementById("items-wrapper").innerHTML += html;
  scrollTo(id);
}

function scrollTo(id){
  var element = document.getElementById(id);
  element.scrollIntoView();
}

async function displayDetailView(detailViewId, animationObj){
  controls.enabled = true;
  var currentDetailView = detailViews.find(dv => dv.id == detailViewId);
  var from = {
    camera_x : camera.position.x,
    camera_y : camera.position.y,
    camera_z : camera.position.z,
    target_x : controls.target.x,
    target_y : controls.target.y,
    target_z : controls.target.z
  };
  var to = {
    camera_x : currentDetailView.camera.x,
    camera_y : currentDetailView.camera.y,
    camera_z : currentDetailView.camera.z,
    target_x : currentDetailView.target.x,
    target_y : currentDetailView.target.y,
    target_z : currentDetailView.target.z
  };
  var tween = new TWEEN.Tween(from)
  .to(to,2000 * MULTIPLIER)
  .easing(TWEEN.Easing.Linear.None)
  .onUpdate(function () {
    camera.position.set(from.camera_x, from.camera_y, from.camera_z);
    controls.target.x = from.target_x;
    controls.target.y = from.target_y;
    controls.target.z = from.target_z;
    controls.update();
  })
  .onComplete(function () {
  })
  .start();
  //Animations timer
  for(i = 0; i < 20 * MULTIPLIER; i++){
    await Sleep(100);
    if(animationObj.CANCELLED == true){
      hideTooltip();
      tween.stop();
      changeView(currentlySelectedView);
      return 0;
    }
  }
  //hide Objekte die im Weg sind
  currentDetailView.objectsToHide.forEach(n => objects.find(o => o.number == n).visible = false);

  // erste instanz lichter
  currentDetailView.array.forEach(tooltipInformation => {
    if(tooltipInformation.second == false && tooltipInformation.third == false){
      updateTooltip(currentDetailView.id, tooltipInformation.id, tooltipInformation.text);
    }
    //latestMouseIntersection = tooltipInformation.tooltipPosition;
    if(tooltipInformation.objectsToDisplay != []){
      tooltipInformation.objectsToDisplay.forEach(oD => oD.visible = true);
    }
  });
  for(i = 0; i < 40; i++){
    await Sleep(100);
    if(animationObj.CANCELLED == true){
      hideTooltip();
      changeView(currentlySelectedView);
      return 0;
    }
  }
  hideTooltip();

  //gibts überhaupt mehrere Instanzen?
  if(currentDetailView.array.length > 1) {
    
    // zweite instanz, pfeile und absaugung
    var arrowsToHide;
    currentDetailView.array.forEach(tooltipInformation => {
      //"second" tooltip anzeigen
      if(tooltipInformation.second == true){
        updateTooltip(currentDetailView.id, tooltipInformation.id, tooltipInformation.text);
      }
      if(tooltipInformation.arrows != undefined && tooltipInformation.arrowData.length == 2){
        arrowsToHide = tooltipInformation.arrows;
        tooltipInformation.arrows.forEach(a => a.visible = true);
      }
    });
    for(i = 0; i < 20 * MULTIPLIER; i++){
      await Sleep(100);
      if(animationObj.CANCELLED == true){
        hideTooltip();
        if(arrowsToHide != undefined){
          arrowsToHide.forEach(a => a.visible = false);
        }
        tween.stop();
        changeView(currentlySelectedView);
        return 0;
      }
    }
    for(i = 0; i < 40; i++){
      await Sleep(100);
      if(animationObj.CANCELLED == true){
        hideTooltip();
        if(arrowsToHide != undefined){
          arrowsToHide.forEach(a => a.visible = false);
        }
        changeView(currentlySelectedView);
        return 0;
      }
    }
    hideTooltip();

    // dritte instanz, revisionsklappe
      //pfeile hiden
    if(arrowsToHide != undefined){
      arrowsToHide.forEach(a => a.visible = false);
    }
    var loadedObjectToDisplay = undefined;
    var objectToHide = undefined;
    if(currentDetailView.array[0].loadedObjectToDisplay != undefined){
      //"third" tooltip anzeigen
      currentDetailView.array.forEach(tooltipInformation => {
        if(tooltipInformation.third == true){
          updateTooltip(currentDetailView.id, tooltipInformation.id, tooltipInformation.text);
        }
        if(tooltipInformation.arrowData.length == 1){
          arrowsToHide = tooltipInformation.arrows;
          tooltipInformation.arrows.forEach(a => a.visible = true);
        }
      });
      loadedObjectToDisplay = currentDetailView.array[0].loadedObjectToDisplay;
      loadedObjectToDisplay.visible = true;
      objectToHide = objects.find(o => o.number == currentDetailView.array[0].objectToHide);
      objectToHide.visible = false;
      for(i = 0; i < 20 * MULTIPLIER; i++){
        await Sleep(100);
        if(animationObj.CANCELLED == true){
          hideTooltip();
          hideArrowsAndObjects(objectToHide, loadedObjectToDisplay, arrowsToHide)
          tween.stop();
          changeView(currentlySelectedView);
          return 0;
        }
      }
      for(i = 0; i < 40; i++){
        await Sleep(100);
        if(animationObj.CANCELLED == true){
          hideTooltip();
          hideArrowsAndObjects(objectToHide, loadedObjectToDisplay, arrowsToHide)
          changeView(currentlySelectedView);
          return 0;
        }
      }
    }
    if(!animationObj.CANCELLED) {
      while(PAUSED){
        await Sleep(100);
      }
    }
    //wieder hiden
    if(objectToHide != undefined && loadedObjectToDisplay != undefined){
      hideArrowsAndObjects(objectToHide, loadedObjectToDisplay, arrowsToHide)
    }
  }
  currentDetailView.objectsToHide.forEach(n => objects.find(o => o.number == n).visible = true);
  hideTooltip();
  var currentCameraInformation = cameraViews.find(cV => cV.name == currentlySelectedView);
  var from = {
    camera_x : currentDetailView.camera.x,
    camera_y : currentDetailView.camera.y,
    camera_z : currentDetailView.camera.z,
    target_x : currentDetailView.target.x,
    target_y : currentDetailView.target.y,
    target_z : currentDetailView.target.z
  };
  var to = {
    camera_x : currentCameraInformation.camera.x,
    camera_y : currentCameraInformation.camera.y,
    camera_z : currentCameraInformation.camera.z,
    target_x : currentCameraInformation.target.x,
    target_y : currentCameraInformation.target.y,
    target_z : currentCameraInformation.target.z
  };

  //camera
  var tween = new TWEEN.Tween(from)
  .to(to,2000 * MULTIPLIER)
  .easing(TWEEN.Easing.Linear.None)
  .onUpdate(function () {
    camera.position.set(from.camera_x, from.camera_y, from.camera_z);
    controls.target.x = from.target_x;
    controls.target.y = from.target_y;
    controls.target.z = from.target_z;
    controls.update();
  })
  .onComplete(function () {
  })
  .start();
  for(i = 0; i < 20 * MULTIPLIER; i++){
    await Sleep(100);
    if(animationObj.CANCELLED == true){
      hideTooltip();
      tween.stop();
      changeView(currentlySelectedView);
      return 0;
    }
  }
  //changeView(currentlySelectedView);
  return 1;
}

function hideArrowsAndObjects(objectToHide, loadedObjectToDisplay, arrowsToHide){
  if(objectToHide != undefined && loadedObjectToDisplay != undefined){
    loadedObjectToDisplay.visible = false;
    objectToHide.visible = true;
    arrowsToHide.forEach(a => a.visible = false);
    hideTooltip();
  }
}

function generateObjects(){
  var generatedObjects = [];
  console.log(newObject);
  if(newObject != undefined){
    for (let index of newObject.indexesOfGeometrysToGenerate) {
      var o = newObject.children[0].children[index];
      o.geometry.computeBoundingSphere();
      var size = {
        x: o.size.x - 3,
        y: o.size.y,
        z: o.size.z
      };
      var position = {
        x: o.geometry.boundingSphere.center.x,
        y: o.geometry.boundingSphere.center.y + 1,
        z: o.geometry.boundingSphere.center.z - 1
      };
      var geometry = new THREE.BoxBufferGeometry(size.x, size.y, size.z);
      var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial());
      object.position.x = position.x - 5395;
      object.position.y = position.y - 22;
      object.position.z = position.z + 701;
      object.visible = false;
      scene.add(object);
      generatedObjects.push(object);
  
      var detailView = detailViews.find(dV => dV.id == newObject.generatedDetailViewId);
      detailView.array[0].objectsToDisplay.push(object);
    }
  }
  return generatedObjects;
}

function generateRedArrows(arrowData){
  var arrows = [];
  arrowData.forEach(d => {
    var red_arrow_texture = new THREE.TextureLoader().load('textures/red_arrow.png');
    var red_arrow_material = new THREE.MeshPhongMaterial({ map: red_arrow_texture });
    red_arrow_material.side = THREE.DoubleSide;

    var materials = [0, 0, 0, 0, 0, red_arrow_material]

    var red_arrow_geometry = new THREE.BoxGeometry(10, 10, 2.5, 1, 1, 1, materials);
    var red_arrow = new THREE.Mesh(red_arrow_geometry, materials);
    
    red_arrow.material.forEach(m => m.transparent = true);

    setArrowProperties(
      red_arrow, 
      d.positionx, 
      d.positiony,
      d.positionz, 
      d.rotationx,
      d.rotationy,
      d.rotationz,
    );

    red_arrow.visible = false;
    scene.add(red_arrow);
    arrows.push(red_arrow);
  });

  return arrows;
}

function setArrowProperties(red_arrow, positionx, positiony, positionz, rotationx, rotationy, rotationz){
  red_arrow.position.x = positionx;
  red_arrow.position.y = positiony;
  red_arrow.position.z = positionz;

  red_arrow.rotation.x = THREE.Math.degToRad(rotationx);
  red_arrow.rotation.y = THREE.Math.degToRad(rotationy);
  red_arrow.rotation.z = THREE.Math.degToRad(rotationz);
}

function loadModel(object_name, detailLoad, detailViewId, objectToHideNumber, isTransparent, number, normalLoad, textureJSON, ANIMATION_MODE, HEADER, TEXT, isSUBPOINT, TIME, clockMinutes, isDetailBefore,
   DETAIL_VIEW_ID, otherObjectsToDisplay, otherObjectsToGenerate, indexesOfGeometrysToGenerate, generatedDetailViewId, generateArrows) {
  if(numberOfModels != 0){
    progressPerModel = 100 / numberOfModels;
  }
  var manager = new THREE.LoadingManager();
  manager.onStart = function(url, itemsLoaded, itemsTotal) {
    // console.log(
    //   "Started loading file: " +
    //     url +
    //     ".\nLoaded " +
    //     itemsLoaded +
    //     " of " +
    //     itemsTotal +
    //     " files."
    // );
    ANIMATING = true;
  };

  async function onLoadComplete(){
    newObject.children[0].children.forEach(o => setSize(o));
    needsUpdate = true;
    
    currentProgress += progressPerModel;
    currentProgress = Math.floor(currentProgress);

    $('#progress')
      .css("width", currentProgress  + "%");

    newObject.position.x = -4995 - 400;
    newObject.position.y -= 22;
    newObject.position.z = 701;
    newObject.positionFixX = newObject.position.x;
    newObject.positionFixY = newObject.position.y;
    newObject.positionFixZ = newObject.position.z;

    if(detailLoad){
      newObject.visible = false;

      newObject.children[0].children.forEach(e => e.material.metalness = 0);

      var detailView = detailViews.find(dV => dV.id == detailViewId);
      detailView.array[0].loadedObjectToDisplay = newObject;
      detailView.array[0].objectToHide = objectToHideNumber;
      return 0;
    }

    newObject.name = object_name;
    newObject.number = number;
    newObject.normalLoad = normalLoad;
    newObject.animation_mode = ANIMATION_MODE;
    newObject.text = TEXT;
    newObject.header = HEADER;
    newObject.isSubpoint = isSUBPOINT;
    newObject.time = TIME;
    newObject.textureJSON = textureJSON;

    newObject.isDetailBefore = isDetailBefore;
    newObject.DETAIL_VIEW_ID = DETAIL_VIEW_ID;
    newObject.otherObjectsToGenerate = otherObjectsToGenerate;
    newObject.indexesOfGeometrysToGenerate = indexesOfGeometrysToGenerate;
    newObject.clockMinutes = clockMinutes;
    newObject.generatedDetailViewId = generatedDetailViewId;

    if(isTransparent){
      newObject.children[0].children[0].material.transparent = true;
      // newObject.children[0].children[0].material.opacity = 0.2;
    }

    if(otherObjectsToGenerate){
      generateObjects();
    }
    if(generateArrows){
      detailViews.find(dV => dV.id == newObject.DETAIL_VIEW_ID).array.forEach(item => {
        if(item.arrowData.length != 0){
          item.arrows = generateRedArrows(item.arrowData);
        }
      });
    }

    if(otherObjectsToDisplay){
      newObject.otherObjectsToDisplay = detailViews.find(dV => dV.id == newObject.DETAIL_VIEW_ID).array[0].objectsToDisplay;
    }

    //setMetallness to 0
    newObject.children[0].children.forEach(e => e.material.metalness = 0);

    if(newObject.normalLoad){
      //console.log(newObject);
      newObject.children[0].material.shininess = 0;
      // newObject.materialLibraries = null;
      // newObject.children[0].material = new THREE.MeshBasicMaterial({ map: texture });
      // newObject.children[1].material = new THREE.MeshBasicMaterial({ map: texture });
      needsUpdate = true;
      ANIMATING = false;
    }

    if(!newObject.normalLoad){
      $('#slider').val(1);
      $('#progress').show();
      $('#progress-wrapper').show();
      objects.push(newObject);
      draggableObjects.push(newObject);
      newObject.visible = false;
      if(objects.length == numberOfModels){
        console.log(objects);
        currentProgress = 0;
        $('#progress').hide();
        $('#progress-wrapper').hide();
        $('#slider').show();
        loadTextures();
        showChooseModeModal();
      }
    }
  }

  manager.onLoad = async function() {
      setSize(newObject);
      needsUpdate = true;
      newObject.visible = false;

      newObject.name = object_name;
      newObject.number = number;
      newObject.normalLoad = normalLoad;
      newObject.animation_mode = ANIMATION_MODE;
      newObject.text = TEXT;
      newObject.header = HEADER;
      newObject.isSubpoint = isSUBPOINT;
      newObject.time = TIME;
  
      newObject.position.x = -4995 - 400;
      newObject.position.y -= 22;
      newObject.position.z = 701;
      newObject.positionFixX = newObject.position.x;
      newObject.positionFixY = newObject.position.y;
      newObject.positionFixZ = newObject.position.z;

      if(detailLoad){
        newObject.visible = false;
      }
  
      newObject.isDetailBefore = isDetailBefore;
      newObject.DETAIL_VIEW_ID = DETAIL_VIEW_ID;
      newObject.otherObjectsToGenerate = otherObjectsToGenerate;
      if(otherObjectsToGenerate){
        newObject.otherObjectsToDisplay = generateObjects(objects.find(o => o.number == newObject.number - 1));
      }else{
        newObject.otherObjectsToDisplay = undefined;
      }

    if(newObject.normalLoad){
      //console.log(newObject);
      newObject.children[0].material.shininess = 0;
      newObject.visible = true;
      // newObject.materialLibraries = null;
      // newObject.children[0].material = new THREE.MeshBasicMaterial({ map: texture });
      // newObject.children[1].material = new THREE.MeshBasicMaterial({ map: texture });
      needsUpdate = true;
      // console.log("loaded Textures");
      if(betonboden == undefined){
        $('#content').show();
        $('#chooseDesignModal').modal({  //prevent from closing when clicking outside
            backdrop: 'static',
            keyboard: false
        });
        $('#chooseDesignModal').modal('show');
        needsUpdate = true;
        // room.visible = false;
        needsUpdate = true;
        setTimeout(clearLoader, 300);
        LOADING = false;
      } else{
        betonboden.visible = false;
      }
      betonboden = newObject;
    }
    if(!newObject.normalLoad){
      objects.push(newObject);
      draggableObjects.push(newObject);
      newObject.visible = false;
      
      if(objects.length == numberOfModels){
        await startAnimation(1);
        console.log("ANIMATION ENDING");
        //ANIMATING = false; 
      }
    }
  }

  if(object_name.includes('glb')){
    var loader = new THREE.GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    var dracoLoader = new THREE.DRACOLoader();
    glbPath = 'models/' + object_name + '.glb';
    dracoLoader.setDecoderPath( 'js/libs/draco/' );
    dracoLoader.setDecoderConfig( { type: 'js' } );
    loader.setDRACOLoader( dracoLoader );
    //console.log(glbPath);
    // Load a glTF resource
    loader.load(
      // resource URL
      glbPath,
      // called when the resource is loaded
      function ( gltf ) {
        scene.add( gltf.scene );
        needsUpdate = true;
        newObject = gltf.scene;

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Scene
        gltf.scenes; // Array<THREE.Scene>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

        onLoadComplete();
      },
      // called while loading is progressing
      function ( xhr ) {
      },
      // called when loading has errors
      function ( error ) {

        console.log( 'An error happened with ' + object_name);

      }
    );
  }

  if(object_name.includes('obj')){
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath("models/");
    var url = object_name + ".mtl"; //modelName
    mtlLoader.load(url, function(materials) {
      materials.preload();

      var objLoader = new THREE.OBJLoader(manager);
      objLoader.setMaterials(materials);
      objLoader.setPath("models/");

      objLoader.load(object_name + ".obj", function(object) {
        object.position.x = 0;
        object.position.z = 0;
        scene.add(object);
        newObject = object;
        needsUpdate = true;
        if(isTransparent){
          object.children[0].material.transparent = true;
          //object.children[1].material.transparent = true;
          object.children[0].material.opacity = 0.3;
          //object.children[1].material.opacity = 0.3;
        }
        // for (var i = 0; i < object.children.length; i++) {
        //   object.children[i].material.transparent = isTransparent; //transparents zulassen
        //   object.children[i].castShadow = true;
        // };
        LOADING = false;
      });
    });
  }
}

function clearLoader(){
  $('#loader').removeAttr("style").hide();
  $('.modal-backdrop.fade.show').css("opacity", ".5");
}

async function startInstallationMode(){
  audioElement.pause();
  audioElement.currentTime = 0;
  startedPresentation();
  $('#sidebar').show();
  if(objects.length == numberOfModels){
    audioElement.play();
    await startAnimation(1);
    console.log("ANIMATION ENDING");
    
    //ANIMATING = false; 
  }
}

async function startAnimation(startPoint){
  var animationObj = createNewAnimation(startPoint);
  ANIMATING = true;
  $('#progress-block').css("display","none");
  for(var i = animationObj.startPoint; i <= numberOfModels; i++){
    animationObj.currentObjectNumber = i;
    await showObjects(animationObj);
  }
  //console.log(objects);
}

async function restart(){
  RELOADED = true;
  $("#items-wrapper").html("");
  audioElement.pause();
  audioElement.currentTime = 0;
  // clock.inputMinutes = 0;
  //objects.forEach(obj => obj.visible = false);
  endTextureMode();
  audioElement.play();
  startInstallationMode();
}

async function sliderInput(id, ANIMATE){
  $("#items-wrapper").html("");
  audioElement.pause();
  audioElement.currentTime = 0;
  //nextObject = undefined;
  // clock.inputMinutes = 0;
  $('#slider').val(id);
  endTextureMode();

  //alle zu richtiger Position
  moveEveryObjectToRealPosition();
  calculateObjectsBeforeAndAfter(objects.find(obj => obj.number == (id - 1)), true, id);
  if(ANIMATE){
    await startAnimation(id);
  }
}

function sliderClicked(){
  //cancel current Animations
  console.log("SLIDER CLICKED");
  if(currentAnimation != 0){
    animations.find(x => x.id == currentAnimation).CANCELLED = true;
  }
}


function createNewAnimation(startPoint){
  animations.forEach(x => x.CANCELLED = true);
  currentAnimation++;
  var animation = {};
  animation.id = currentAnimation;
  animation.CANCELLED = false;
  animation.startPoint = startPoint;
  animations.push(animation);
  return animation;
}

function pauseAnimation(){
  if(PAUSED){
    PAUSED = false;
    audioElement.play();
    $("#pause").html('<i class="fas fa-pause"></i>');
    $("#pause").blur();
  } else {
    PAUSED = true;
    audioElement.pause();
    $("#pause").html('<i class="fas fa-play"></i>');
    $("#pause").blur();
  }
}

function moveEveryObjectToRealPosition(){
  objects.forEach(obj => {
    obj.position.x = obj.positionFixX;
    obj.position.y = obj.positionFixY;
    obj.position.z = obj.positionFixZ;
  });
  needsUpdate = true;
}

function calculateObjectsBeforeAndAfter(nextObject, withCurrent, number){
  clock.inputMinutes = 0;
  if(nextObject == undefined){
    objects.forEach(o => {
      o.visible = false;
      if(o.otherObjectsToDisplay != undefined){
        o.otherObjectsToDisplay.forEach(oD => oD.visible = false);
      }
    });
    nextObject = objects.find(o => o.number == 1);
    appendText(nextObject.text, nextObject.number);
    return 0;
  }
  if(number == numberOfModels + 1){
    objects.forEach(o => {
      o.visible = true;
      if(o.otherObjectsToDisplay != undefined){
        o.otherObjectsToDisplay.forEach(oD => oD.visible = true);
      }
    });
    appendArrayOfObjectsToList(objects.sort((a, b) => (a.number > b.number) ? 1 : -1));
    clock.inputMinutes += 12.5 * 60; //auf 18:30 stellen
    return 0;
  }

  //jedes vorherige Objekt sichtbar machen und auf die vorherige Position bewegen
  var objectsBefore = objects.filter(o => o.number < nextObject.number);
  objectsBefore.sort((a, b) => (a.number > b.number) ? 1 : -1);

  //außerdem in der Liste alle Punkte anzeigen einschließlich des derzeitig animierten objekts.
  var objectsBeforeWithCurrent = objects.filter(o => o.number <= nextObject.number);
  objectsBeforeWithCurrent.sort((a, b) => (a.number > b.number) ? 1 : -1);

  //time, but always without current because this one gets animated
  objectsBefore.forEach(o => {
    clock.inputMinutes += o.clockMinutes;
  });
  

  $("#items-wrapper").html("");
  if(withCurrent){
    appendArrayOfObjectsToList(objectsBeforeWithCurrent)
    makeArrayVisible(objectsBeforeWithCurrent);
  }else{
    appendArrayOfObjectsToList(objectsBefore);
    makeArrayVisible(objectsBefore);
  }

  //jedes volgende Objekt unsichtbar machen
  var objectsAfter = objects.filter(o => o.number > nextObject.number);
  objectsAfter.forEach(o => {
    o.visible = false;
    if(o.otherObjectsToDisplay != undefined){
      o.otherObjectsToDisplay.forEach(oD => oD.visible = false);
    }
  });
}

function appendArrayOfObjectsToList(array){
  array.forEach(o => {
    if(o.header != null){
      appendText(o.header, o.number + 100, false);
    }
    if(o.text != null){
      appendText(o.text, o.number);
    }
  });
}

function makeArrayVisible(array){
  array.forEach(o => {
    o.visible = true;
    if(o.otherObjectsToDisplay != undefined){
      o.otherObjectsToDisplay.forEach(oD => oD.visible = true);
    } 
  });
}