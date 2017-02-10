http://stackoverflow.com/questions/27056984/detect-all-xmlhttprequest-calls-are-completed
var Petitioner = function() {};


Petitioner.prototype.ajax = function(url, method, object) {
      /*  this._setXMLHttpRequest();
        this._openRequest(url,method);
        this._send();*/
     
    
    var promise = new Promise(function(resolve, reject){
        
        var xas = Object.create(this.Petitioner).prototype; 
        console.log(Object.create(this.Petitioner));
        console.log(xas);
        xas._setXMLHttpRequest();
        xas._openRequest(url,method);
        xas._send();
        console.log(xas.xhr);
        if(xas.xhr.status == 200){
            resolve(xhr.responseText);
        }else{
            reject(Error("Error papu"));
        }
    });
    promise.then(function (result) {
        return result;
    },function(error){
        console.log(error);
    });
}

Petitioner.prototype._setXMLHttpRequest = function() {
  this.xhr = new XMLHttpRequest();    
}

Petitioner.prototype._openRequest = function (url, method) {
    this.xhr.open(method,url);
}

Petitioner.prototype._send = function () {
    this.xhr.send();
}