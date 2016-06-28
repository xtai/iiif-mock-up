var manifests = "http://iiif-sandbox.lib.umd.edu/manifests/sn83045081/1902-01-15/issue.json";
jQuery(function() {
  if (typeof manifests === undefined || manifests === null || manifests === "") {
    var manifests = "http://iiif-sandbox.lib.umd.edu/manifests/sn83045081/1902-01-15/issue.json";
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
    "windowObjects": [{
      "loadedManifest": manifests,
      "viewType": "ImageView",
      "displayLayout": false,
      "bottomPanel": true,
      "sidePanel": false,
      "annotationLayer": false
    }]
  });
});
