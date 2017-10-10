(function (global) {

    global.rasterize = function (element) {
        setHeaders(element);
        let str = getOuterHTML(element);
        let xml = prependXML(str);
        let image = saveImage(xml);
        image.onload = function () {
            let canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            let context = canvas.getContext('2d');
            context.drawImage(image, 0, 0);

            let a = document.createElement('a');
            a.download = 'image.png';
            a.href = canvas.toDataURL('image/png');
            document.body.appendChild(a);
            a.click();
        };
    }

    function setHeaders(el) {
        el.setAttribute('version', '1.1');
        el.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        el.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
    }

    function getOuterHTML(el) {
        let outer = document.createElement('div');
        outer.appendChild(el.cloneNode(true));
        return outer.innerHTML;
    }

    function getStyles(dom) {
        //I inline all styles, but this method should be written
        //eventually
    }

    function prependXML(string) {
        return "<?xml version=\"1.0\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">;\n" + string;
    }

    function saveImage(xml) {
        let image = new Image();
        image.src = 'data:image/svg+xml;base64,' + global.btoa(unescape(encodeURIComponent(xml)));
        return image;
    }
})(window);
