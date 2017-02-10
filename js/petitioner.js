var Petitioner = function() {};

Petitioner.prototype.ajax = function(url, method, object) {
  this._setXMLHttpRequest();
  this.xhr.open(method, url);

  // xhr.onload = function() {
  //     if (xhr.status === 200) {
  //       jsonResponse = xhr.responseText;
  //         response();
  //     }
  //     else {
  //         alert('Request failed.  Returned status of ' + xhr.status);
  //     }
  // };
  // xhr.send();
}

Petitioner.prototype._setXMLHttpRequest = function() {
  this.xhr = new XMLHttpRequest();
}


// return petitioner;
