var STOP_SCROLLING = false;

async function tutorial_step1(){
    grundrisse.forEach(go => {
        $('#grundrisse').append(
            '<a id=' + go.id + 'grundrissDiv class="container cursor col-sm-6" onclick="displayGrundriss(' + go.id + ');"><img id=' + go.id + 'GImage class="image" src="models/thumbnails/'
            + go.name + '.jpg" alt="' + go.name + '">' +
            '</a>');
    });
    $('#' + 3 + 'GImage').toggleClass('higherTextureImageOpacity');
    ANIMATING = false;
    $("#tutorial").fadeOut(500);
    $("#textures").fadeOut(500);
    await Sleep(500);
    $("#tutorial_box").css("width", "520px");
    $("#tutorial_box").html('<div id="countdownBarG" class="countdownBar"><div></div></div><i class="fas fa-hand-point-left"' + 
    'style="margin-right:15px"></i> Wählen Sie Ihren Grundriss' +
    '<i class="fas fa-arrow-alt-circle-right forwardButton" onclick="tutorial_step2()" style="margin-left:15px"></i>');
    await Sleep(100);
    $('#tutorial').fadeIn(1000);
    $("#grundrisse").fadeIn(1000);
    progress2(20, 20, $('#countdownBarG'));
}

async function tutorial_step2(){
    //hide all textured-objects
    chosenTexture.generatedTextureObjects.forEach(o => {
        o.visible = false;
        needsUpdate = true;
    });
    $("#tutorial").fadeOut(500);
    $("#grundrisse").fadeOut(500);
    $("#controls").fadeIn(500);
    $("#items-wrapper").fadeIn(500);
    $("#tutorial_box").hide();
    $("#tutorial_box").html("");
    //showAllNormalObjects
    objects.forEach(o => {
        o.children[0].children.forEach(child => child.visible = true);
    });
    audioElement.play();
    await startAnimation(1);
    tutorial_step3();
    console.log("ANIMATION BEENDET");
    audioElement.pause();
}

async function tutorial_step3(){
    if($('#slider').val() >= numberOfModels){
        console.log("step 3 called");
        $('#slider').val(numberOfModels + 1);
        $('#drawer').show();
        $('#drawer_left').show();
        $('#drawer_right').show();
        displayGrundriss(chosenGrundriss);
        // STOP_SCROLLING = false;
        // autoScroll(3000);
    }
}

function displayGrundriss(id){
    chosenGrundriss = id;
    //disable all html
    grundrisse.forEach(g => $('#' + g.id + 'GImage').toggleClass('higherTextureImageOpacity', false));
    //enable chosen html
    $('#' + id + 'GImage').toggleClass('higherTextureImageOpacity');
    ANIMATING = true;
    //hide all objects
    objects.forEach(o => {
        o.visible = false;
        needsUpdate = true;
    });
    //hide all textured-objects
    if(chosenTexture != undefined){
        chosenTexture.generatedTextureObjects.forEach(o => {
            o.visible = false;
            needsUpdate = true;
        });
    }
    //hide all generated objects
    objects.forEach(o => {
        if(o.otherObjectsToDisplay != undefined){
            o.otherObjectsToDisplay.forEach(oo => oo.visible = false);
        }
    });
    //hide floor
    floor.visible = false;
    //set new chosenTexture
    chosenTexture = objectsAll[id].textures[chosenDesign];
    var toShow = objectsAll[id];
    objects = toShow.objects;
    textures = toShow.textures;
    detailViews = toShow.detailViews;  
    floor = toShow.floor;
    numberOfModels = toShow.numberOfModels;
    $('#slider').prop('max', numberOfModels + 1);
    objects.forEach(o => {
        o.visible = true;
        needsUpdate = true;
    });
    //show all textured-objects
    showTexture(chosenDesign, id);
    //show all generated objects
    objects.forEach(o => {
        if(o.otherObjectsToDisplay != undefined){
            o.otherObjectsToDisplay.forEach(oo => oo.visible = true);
        }
    });
    ANIMATING = true;
    //floor anzeigen
    floor.visible = true;
}

function progress1(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500);
    if(timeleft >= 0) {
        setTimeout(function() {
            progress1(timeleft - 1, timetotal, $element);
        }, 1000);
    } else {
        if($('#countdownBar')[0] != undefined) {
            tutorial_step1();  
        }
    }
};

function progress2(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500);
    if(timeleft >= 0) {
        setTimeout(function() {
            progress2(timeleft - 1, timetotal, $element);
        }, 1000);
    } else {
        if($('#countdownBarG')[0] != undefined) {
            tutorial_step2();  
        }
    }
};

function autoScroll(time) {
    if($('#drawer_left')[0] != undefined && !STOP_SCROLLING) {
        setTimeout(function() {
            chosenDesign++;
            if(chosenDesign > objectsAll[chosenGrundriss].textures.length){
                chosenDesign = 1;
            }
            //show all textured-objects
            showTexture(chosenDesign, chosenGrundriss);
            autoScroll(time);
        }, time);
    }
};

function sliderLeftClicked(){
    STOP_SCROLLING = true;
    chosenDesign--;
    if(chosenDesign < 1){
        chosenDesign = objectsAll[chosenGrundriss].textures.length;
    }
    //show all textured-objects
    showTexture(chosenDesign, chosenGrundriss);
}

function sliderRightClicked(){
    STOP_SCROLLING = true;
    chosenDesign++;
    if(chosenDesign > objectsAll[chosenGrundriss].textures.length){
        chosenDesign = 1;
    }
    //show all textured-objects
    showTexture(chosenDesign, chosenGrundriss);
}