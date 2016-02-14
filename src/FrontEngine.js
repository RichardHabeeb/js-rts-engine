module.exports = (function (){
    function FrontEngine() {

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
