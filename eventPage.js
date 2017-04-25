var menuItem = {
  "id": "calorizeIt",
  "title": "CalorizeIt",
  "contexts": ["selection"]

};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI (str) {
    return encodeURI(str)//.replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "calorizeIt" && clickData.selectionText){
        var wikiUrl = "https://www.google.com/#q=" + fixedEncodeURI(clickData.selectionText)+"%20calories";
        var createData = {
            "url": wikiUrl,
            "type": "normal",
            "top": 5,
            "left": 5,
            "height": 550,
            "width":800
        };
        chrome.windows.create(createData, function(){});
    }
});
