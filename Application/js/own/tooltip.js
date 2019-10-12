var divElement;
function showTooltip() {
  divElement = document.querySelector(".tooltip");

  //element found and mouse hovers some object?
  if (selectedObject != undefined && divElement && latestMouseIntersection) {
    //hide until tooltip is ready (prevents some visual artifacts)
    divElement.style.display = "block";

    //!!! === IMPORTANT ===
    // DIV element is positioned here
    var canvasHalfWidth = renderer.domElement.offsetWidth / 2;
    var canvasHalfHeight = renderer.domElement.offsetHeight / 2;

    var tooltipPosition = latestMouseIntersection.clone().project(camera);
    tooltipPosition.x =
      tooltipPosition.x * canvasHalfWidth +
      canvasHalfWidth +
      renderer.domElement.offsetLeft;
    tooltipPosition.y =
      -(tooltipPosition.y * canvasHalfHeight) +
      canvasHalfHeight +
      renderer.domElement.offsetTop;

    var tootipWidth = divElement.offsetWidth;
    var tootipHeight = divElement.offsetHeight;

    divElement.style.left = `${tooltipPosition.x - tootipWidth / 2}px`;
    divElement.style.top = `${tooltipPosition.y - tootipHeight - 5}px`;

    divElement.style.opacity = 1.0;
  }
}

function updateTooltip(room, temp, co , win) {
  //divElement.innerHTML;
}

function hideTooltip(){
    $("#tooltip").hide();
    /*if (selectedObject != undefined) {
      selectedObject.material.color = white;
    }*/
    selectedObject = undefined;
    newObject = undefined;
}
