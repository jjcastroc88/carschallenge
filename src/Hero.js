function Hero() {
    
    var state = false; result = 0;
    
    this.move = function () {
        this.state = true;
    };
    
    this.calculate = function () {
        this.result = Math.floor(Math.random());
    };  
}