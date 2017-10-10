(function (global) {

    global.rasterize = function (element) {

    }

    function getOuterHTML(el) {
        let outer = document.createElement('div');
        outer.appendChild(el.cloneNode(true));
        return outer.innerHTML;
    }
})(window);
