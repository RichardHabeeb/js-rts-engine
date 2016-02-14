var Layer = require("./Layer.js");

module.exports = (function (){
    function FrontEngine(container) {
        this.canvasScale = 2;
        this.gameWindowRectPx = {x: 50, y: 50, width: 600, height: 400}; //TODO rect class
        this.numberOfLayers = 2; //TODO make a constant here
        this.canvasLayers = [];
        for(var i = 0; i < this.numberOfLayers; i++) {
            this.canvasLayers.push(new Layer(this.gameWindowRectPx, this.canvasScale, container));
        }
    }

    FrontEngine.prototype.Update = function(elapsedTime) {

    };

    FrontEngine.prototype.Render = function(elapsedTime) {

    };

    FrontEngine.prototype.loop = function(timeStamp) {
        if(typeof(timeStamp) !== "undefined") {
            var elapsedTime = (timeStamp - this.prevTimeStamp) / 1000.0;
            this.Update(elapsedTime);
            this.Render(elapsedTime);
        }
        this.prevTimeStamp = timeStamp;
        window.requestAnimationFrame(this.loop.bind(this));
    };




    return FrontEngine;
})();
