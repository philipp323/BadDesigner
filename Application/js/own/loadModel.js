var box;
var vector;
var material;
var nextObject;
var intervalCounter = 1;
var interval;
var progressPerModel = 0;
var currentProgress = 0;
var ANIMATION_SPEED = 4000;
var RELOADED = false;

function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function showObjects(animationObj) {
    nextObject = objects.find(element => {
      return element.number == intervalCounter;
    });
    if(nextObject == undefined){
      console.log("object undefined");
      return 0;
    }

    if(animationObj.CANCELLED == true){
      console.log(intervalCounter + " got cancelled!");
      //$("#items-wrapper").html("");
      if(RELOADED){
        console.log("BACK TO 1");
        intervalCounter = 1;
        RELOADED = false;
      }
      nextObject.visible = true;
      return 0;
    }

    console.log(+ nextObject.number + " Animating: " + nextObject.name);

    $('#slider').val(nextObject.number);
    prevSliderValue = $('#slider').val();

    if(animationObj.CANCELLED != true){
      if(nextObject.header != null){
        appendText(nextObject.header, nextObject.number + 100, false);
        await Sleep(2500 * MULTIPLIER);
      }
      if(nextObject.text != null){
        appendText(nextObject.text, nextObject.number, nextObject.isSubpoint);
      }
    }

    //jedes vorherige Objekt sichtbar machen und auf die vorherige Position bewegen
    var objectsBefore = objects.filter(o => o.number < nextObject.number);
    objectsBefore.forEach(o => {
      o.visible = true;
      o.position.x = o.positionFixX;
      o.position.y = o.positionFixY;
      o.position.z = o.positionFixZ;
    });

    $("#items-wrapper").html("");
    //außerdem in der Liste alle Punkte anzeigen einschließlich des derzeitig animierten objekts.
    var objectsBeforeWithCurrent = objects.filter(o => o.number <= nextObject.number);
    objectsBeforeWithCurrent.sort((a,b) => a.number > b.number);
    objectsBeforeWithCurrent.forEach(o => {
      if(o.header != null){
        appendText(o.header, o.number + 100, false);
      }
      if(o.text != null){
        appendText(o.text, o.number, o.isSubpoint);
      }
    });

    //jedes volgende Objekt unsichtbar machen
    var objectsAfter = objects.filter(o => o.number > nextObject.number);
    objectsAfter.forEach(o => o.visible = false);


    if(nextObject.animation_mode == 'FRONT'){
      nextObject.position.z = nextObject.positionFixZ;
      nextObject.position.z += 70;

      var position = { z: nextObject.position.z};
      var target = { z: nextObject.position.z - 70};
      var tween = new TWEEN.Tween(position).to(target, nextObject.time * MULTIPLIER);
      tween.easing(TWEEN.Easing.Cubic.InOut);

      tween.onUpdate(function(){
        nextObject.position.z = position.z;
        clock.inputMinutes += 0.7;
        if(animationObj.CANCELLED == true){
          tween.stop();
          return 0;
        }
      });
      nextObject.visible = true;

      tween.start();
      
      if(!PAUSED){
        await Sleep(nextObject.time * MULTIPLIER);
      }
      while(PAUSED){
        await Sleep(100);
      }
      nextObject.position.z = 700;
      intervalCounter++;
      console.log(nextObject.number + " Finished: " + nextObject.name);
      nextObject.visible = true;

    } else if(nextObject.animation_mode == 'TOP'){
      nextObject.position.y = nextObject.positionFixY;
      nextObject.position.y += 50;

      var position = { y: nextObject.position.y};
      var target = { y: nextObject.position.y - 50};
      var tween = new TWEEN.Tween(position).to(target, nextObject.time * MULTIPLIER);
      tween.easing(TWEEN.Easing.Cubic.InOut);

      tween.onUpdate(function(){
        nextObject.position.y = position.y;
        clock.inputMinutes += 0.7;
        if(animationObj.CANCELLED == true){
          tween.stop();
          return 0;
        }
      });
      nextObject.visible = true;
      tween.start();

      if(!PAUSED){
        await Sleep(nextObject.time * MULTIPLIER);
      }
      while(PAUSED){
        await Sleep(100);
      }

      nextObject.position.y = -22;
      intervalCounter++;
      console.log(nextObject.number + " Finished: " + nextObject.name);
      nextObject.visible = true;
      
    } else if(nextObject.animation_mode == 'RIGHT'){
      nextObject.position.x = nextObject.positionFixX;
      nextObject.position.x -= 50;

      var position = { x: nextObject.position.x};
      var target = { x: nextObject.position.x + 50};
      var tween = new TWEEN.Tween(position).to(target, nextObject.time * MULTIPLIER);
      tween.easing(TWEEN.Easing.Cubic.InOut);

      tween.onUpdate(function(){
        nextObject.position.x = position.x;
        clock.inputMinutes += 0.7;
        if(animationObj.CANCELLED == true){
          tween.stop();
          return 0;
        }
      });
      nextObject.visible = true;
      tween.start();
      if(!PAUSED){
        await Sleep(nextObject.time * MULTIPLIER);
      }
      while(PAUSED){
        await Sleep(100);
      }
      nextObject.position.x = -5395;
      intervalCounter++;
      console.log(nextObject.number + " Finished: " + nextObject.name);
      nextObject.visible = true;
    }
}

var itemsDiv = $("#items-wrapper");

function appendText(text, id, isSubpoint){
  //console.log(text);
  var html;
  if(isSubpoint){
    html = '<li id="' + id + '">' + '<a class="presentation subpoint">' + text + '</a>' + '</li>';
  } else {
    html = '<li id="' + id + '">' + '<a class="presentation">' + text + '</a>' + '</li>';
  }
  $("#items-wrapper").append(html);
  scrollTo(id);
}

function scrollTo(id){
  var element = document.getElementById(id);
  element.scrollIntoView();
}

function loadModel(object_name, isTransparent, number, normalLoad, texture, ANIMATION_MODE, HEADER, TEXT, isSUBPOINT, TIME) {
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

  manager.onLoad = async function() {
    setSize(newObject);
    needsUpdate = true;
    
    currentProgress += progressPerModel;
    currentProgress = Math.floor(currentProgress);

    $('#progress-bar')
      .css("width", currentProgress  + "%")
      .attr("aria-valuenow", currentProgress)
      .text(currentProgress + "% der Modelle geladen.");


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
    newObject.position.z = 300 + 400;
    newObject.positionFixX = newObject.position.x;
    newObject.positionFixY = newObject.position.y;
    newObject.positionFixZ = newObject.position.z;

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
      objects.push(newObject);
      draggableObjects.push(newObject);
      newObject.visible = false;
      startedPresentation();
      if(objects.length == numberOfModels){
        await startAnimation(1);
      }
      if(intervalCounter == objects.length){
        ANIMATING = false;
      }
    }
  }
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
    });
  });
}

async function startAnimation(startPoint){
  var animationObj = createNewAnimation(startPoint);
  ANIMATING = true;
  intervalCounter = animationObj.startPoint;
  //console.log(objects);
  $('#progress-block').css("display","none");
  for(var i = animationObj.startPoint; i < numberOfModels + 1; i++){
    await showObjects(animationObj);
  }
  //console.log(objects);
}

async function hideAll(){
  animations.find(x => x.id == currentAnimation).CANCELLED = true;
  RELOADED = true;
  $("#items-wrapper").html("");
  nextObject = undefined;
  clock.inputMinutes = 0;
  objects.forEach(obj => obj.visible = false);
  await startAnimation(1);
}

async function sliderInput(id, ANIMATE){
  //jetzige Animation beenden
  $("#items-wrapper").html("");
  //nextObject = undefined;
  clock.inputMinutes = 0;

  var objectsToShow = objects.filter(obj => obj.number < id);
  objectsToShow.sort((a, b) => a.number - b.number);
  //console.log(objectsToShow);
  //alle zu richtiger Position
  moveEveryObjectToRealPosition();
  //alle invisible
  objects.forEach(obj => obj.visible = false);
  //die die schon gezeigt sind visible
  objectsToShow.forEach(obj => obj.visible = true);
  //alle sichtbaren infos in der Liste anzeigen
  objectsToShow.forEach(obj => {
    if(obj.header != null){
      appendText(obj.header, obj.number + 100, false);
    }
    if(obj.text != null){
      appendText(obj.text, obj.number, obj.isSubpoint);
    }
  });

  if(ANIMATE){
    await startAnimation(id);
  }
}

function sliderClicked(){
  animations.find(x => x.id == currentAnimation).CANCELLED = true;
}


function createNewAnimation(startPoint){
  animations.forEach(x => x.CANCELLED == true);
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
    $("#pause").html('<i class="fas fa-pause"></i>');
    $("#pause").blur();
  } else {
    PAUSED = true;
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
}