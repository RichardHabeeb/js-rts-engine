var FrontEngine = require('./FrontEngine.js');

/* Entry point */
window.onload = function() {


    var engine = new FrontEngine();
    engine.loop();
};
