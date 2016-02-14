module.exports = (function (){
    function Layer(description, scale, container) {
        this.canvas = $("<canvas></canvas>");
        this.canvas.attr({
            'width': description.width,
            'height': description.height,
            'style': /* this process is required to prevent jquery from overwriting image-rendering */
                'image-rendering: optimizeSpeed;' +
                'image-rendering: -moz-crisp-edges;' +
                'image-rendering: -webkit-optimize-contrast;' +
                'image-rendering: optimize-contrast;' +
                'image-rendering: pixelated;' +
                '-ms-interpolation-mode: nearest-neighbor;'
        });
        this.canvas.css({
            'position':'absolute',
            'width': description.width * scale + "px",
            'height': description.height * scale + "px",
        });

        container.append(this.canvas);
    }

    return Layer;
})();
