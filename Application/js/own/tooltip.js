var divElement;
function showTooltip() {
  var elementList = document.getElementById("tooltips").children;
  for(let divElement of elementList){
    //element found and mouse hovers some object?
    if (divElement) {
      //hide until tooltip is ready (prevents some visual artifacts)
      divElement.style.display = "block";

      //!!! === IMPORTANT ===
      // DIV element is positioned here
      var canvasHalfWidth = renderer.domElement.offsetWidth / 2;
      var canvasHalfHeight = renderer.domElement.offsetHeight / 2;

      var detailViewId = divElement.id[0];
      var tooltipDataId = divElement.id[1];

      latestMouseIntersection = detailViews.find(dV => dV.id == detailViewId).array.find(tD => tD.id == tooltipDataId).tooltipPosition;
      var tooltipPosition = latestMouseIntersection.clone().project(camera);

      var positionInfo = divElement.getBoundingClientRect();
      var height = positionInfo.height;
      var width = positionInfo.width;

      tooltipPosition.x =
        tooltipPosition.x * canvasHalfWidth +
        canvasHalfWidth + ((width + 20) / 2);
      tooltipPosition.y =
        -(tooltipPosition.y * canvasHalfHeight) +
        canvasHalfHeight + (height / 1.9);

      var tootipWidth = divElement.offsetWidth;
      var tootipHeight = divElement.offsetHeight;

      divElement.style.left = `${tooltipPosition.x - tootipWidth / 2}px`;
      divElement.style.top = `${tooltipPosition.y - tootipHeight - 5}px`;

      divElement.style.opacity = 1.00;
    }
  }
}

function updateTooltip(detailViewId, tooltipDataId, text) {
  TOOLTIP_VISIBLE = false;
  document.getElementById('tooltips').innerHTML += 
  '<div id="' + detailViewId + tooltipDataId + 'tooltip" class="tooltip noPaddingMargin"><p id="'+ tooltipDataId +'text">test test test test</p><div id="tail1"></div><div id="tail2"></div></div>'
  $('#'+ tooltipDataId +'text').html(text);
  TOOLTIP_VISIBLE = true;
}

function hideTooltip(){
    $("#tooltips").html("");
    TOOLTIP_VISIBLE = false;
    /*if (selectedObject != undefined) {
      selectedObject.material.color = white;
    }*/
    latestMouseIntersection = undefined;
}
