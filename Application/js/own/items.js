// add items to the "Add Items" tab

$(document).ready(function() {
  var items = [
    {
      name: "Toilette",
      thumbnail:
        "models/thumbnails/toilet_300x225.png",
      model: "toiletExport", //models/<model>
      type: "swap"
    },
    {
      name: "Register",
      thumbnail:
        "models/thumbnails/bathtub_300x225.png",
      model: "Register_Waschtisch_scale",
      type: "1"
    },
    {
      name: "Duschwand_Glasklar",
      thumbnail:
        "models/thumbnails/bathtub_300x225.png",
      model: "Duschwand_glasklar_scale",
      type: "1"
    },
    /*     
   {
      "name" : "",
      "image" : "",
      "model" : "",
      "type" : "1"
    }, 
    */
  ];

  var itemsDiv = $("#items-wrapper");
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var html =
      '<li class="col-sm-6">' +
      '<a onclick="loadModel(\'' +
      item.model +
      '\', \'' + item.type +'\')"' +
      'model-type="' +
      item.type +
      '"><img src="' +
      item.thumbnail +
      '" alt="Add Item"> ' +
      item.name +
      "</a></li>";
    itemsDiv.append(html);
  }
});
