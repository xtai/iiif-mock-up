var manifests = "./manifest.json";
var annotation = "./annotation.json";
jQuery(function() {
  if (typeof manifests === undefined || manifests === null || manifests === "") {
    var manifests = "./manifest.json";
  }
  window.console.log(encodeURIComponent(manifests));
});

$(function() {
  Mirador({
    "id": "viewer",
    "mainMenuSettings": {
      'show': false
    },
    "data": [
      { "manifestUri": manifests, "location": "University of Maryland" }
    ],
    "windowObjects": [
      {
        "loadedManifest": manifests,
        "viewType": "ImageView",
        "displayLayout": false,
        "sidePanel": false,
        "annotationState": "annoOnCreateOff"
      }
    ]
  });
});
