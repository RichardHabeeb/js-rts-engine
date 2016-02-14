var FrontEngine = require('./FrontEngine.js');

/* Entry point */
window.onload = function() {
    var container = $('#gameContainer');
    var engine = new FrontEngine(container);
    engine.loop();
};
