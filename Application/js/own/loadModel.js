var box;
var vector;
var material;


function loadedObject(newObject, type) {
  console.log("Loaded Object: " + newObject.name);
  if(type == "swap"){
    //swapXZ(newObject);
  }
}

function loadFbxModel(){
  var fbxloader = new THREE.FBXLoader();
  fbxloader.load( 'models/fbx/Duschwand_Motiv_transparent_png', function ( object ) {

    scene.add( object );

  }, undefined, function ( e ) {

    console.error("FEHLERMELDUNG: " +  e.message );

  });
}

function loadModel(object_name, type) {
  var manager = new THREE.LoadingManager();
  manager.onStart = function(url, itemsLoaded, itemsTotal) {
    console.log(
      "Started loading file: " +
        url +
        ".\nLoaded " +
        itemsLoaded +
        " of " +
        itemsTotal +
        " files."
    );
  };

  manager.onLoad = function() {
    console.log("Loading complete!");
    console.log(objects);

    newObject = (objects.slice(-1)[0]); //last added object

    newObject.defaultSize = vector;
    newObject.size = vector;
    newObject.name = object_name;

    loadedObject(newObject, type);
    newObject.visible = false;

    draggableObjects.push(newObject);
};
var textureLoader = new THREE.TextureLoader();
textureLoader.load("models/texture/dusche_neu_small.png", function(texture){
  material = new THREE.MeshPhongMaterial({map: texture});



  MODE = "OBJECT";
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath("models/");
  var url = object_name + ".mtl"; //modelName
  mtlLoader.load(url, function(materials) {
    materials.preload();

    var objLoader = new THREE.OBJLoader(manager);
    objLoader.setMaterials(materials);
    objLoader.setPath("models/");
    /*objLoader.load(object_name + ".obj", function(object) {
      scene.add(object);
      for (var i = 0; i < object.children.length; i++) {
        objectArr.push(object.children[i]);
      }*/

    objLoader.load(object_name + ".obj", function(object) {
      //object.traverse( function ( node ) {

        //if ( node.isMesh ) node.material = material;
      //   if ( node.material instanceof THREE.MeshPhongMaterial ) {

      //     // this code is unattainable, but anyway without if (..) it does not work

      //     node.material.alphaTest = 0.5;
      //     node.material.depthWrite = false;
      //     node.material.depthTest = false;
      //     node.material.side = THREE.BackSide;
      //     node.material.transparent = true;
      // }
      scene.add(object);
      needsUpdate = true;
      for (var i = 0; i < object.children.length; i++) {
        object.children[i].position.y += 2.5;   //am Boden
        object.children[i].material.transparent = true; //transparents zulassen
        //object.children[i].material.alphaTest = 0.1;
        objects.push(object.children[i]);
        object.children[i].castShadow = true;
      }
      scene.traverse(function(children) {
        box = new THREE.Box3().setFromObject(children);
        vector = new THREE.Vector3();
        box.getSize(vector);
        //objects.push(children);
        //draggableObjects.push(children);
      });
    });
  });
})
}