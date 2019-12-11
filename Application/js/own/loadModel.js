var box;
var vector;
var material;
var nextObject;
var intervalCounter = 1;
var interval;
var progressPerModel = 0;
var currentProgress = 0;

function Sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function showObjects() {
    nextObject = objects.find(function(element) {
      return element.number == intervalCounter;
    });
    if(nextObject == undefined){
      ANIMATING = false;
      return 0;
    }

    ANIMATING = true;
    if(nextObject.text != null){
      appendText(nextObject.text);
    }

    if(nextObject.animation_mode == 'SIDE'){
      nextObject.position.z += 70;

      var position = { z: nextObject.position.z};
      var target = { z: nextObject.position.z - 70};
      var tween = new TWEEN.Tween(position).to(target, 2000);

      tween.onUpdate(function(){
        nextObject.position.z = position.z;
      });
      nextObject.visible = true;
      tween.start();
    
      await Sleep(2000);
      nextObject.position.z = 700;

      ANIMATING = false;

      intervalCounter++;
    } else if(nextObject.animation_mode == 'TOP'){
      nextObject.position.y += 50;

      var position = { y: nextObject.position.y};
      var target = { y: nextObject.position.y - 50};
      var tween = new TWEEN.Tween(position).to(target, 2000);

      tween.onUpdate(function(){
        nextObject.position.y = position.y;
      });
      nextObject.visible = true;
      tween.start();
    
      await Sleep(2000);
      nextObject.position.y = -22;

      ANIMATING = false;

      intervalCounter++;
    }


    // if(nextObject.useChildren){
    //   console.log("use Children");
    //   nextObject.visible = true;
    //   for(var i = 0; i < nextObject.children.length; i++){
    //     nextObject.children[i].visible = false;
    //   }
    //   for(var i = 0; i < nextObject.children.length; i++){
    //     console.log("mesh " + i);
    //     await Sleep(1000);  
    //     nextObject.children[i].visible = true;
    //     needsUpdate = true;
    //   }
    //   intervalCounter++;
    // }
    // else {
    // }
}

var itemsDiv = $("#items-wrapper");

function appendText(text){
  //console.log(text);
  var html =
      '<li>' + '<a class="presentation">' + text + '</a>' + '</li>';
      $("#items-wrapper").append(html);
}

function loadModel(object_name, isTransparent, number, normalLoad, texture, ANIMATION_MODE, TEXT) {
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

    newObject.position.x = -4995 - 400;
    newObject.position.y -= 22;
    newObject.position.z = 300 + 400;

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
      
      if(objects.length == numberOfModels + 1){
        startedPresentation();
        // console.log(objects);
        for(var i = 1; i < numberOfModels + 1; i++){
          $('#progress-block').css("display","none");
          await showObjects();
        }
        console.log(objects);
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
      // object.children[0].material.transparent = isTransparent;
      // object.children[1].material.transparent = isTransparent;
      for (var i = 0; i < object.children.length; i++) {
        object.children[i].material.transparent = isTransparent; //transparents zulassen
        object.children[i].castShadow = true;
      };
    });
  });
}