onload = function(){
    var c = document.getElementById('canvas');
    c.width = 500;
    c.height = 300;
    var gl = c.getContext('webgl') || c.getContext('experimental-webgl');
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // RGBなので黒。1.0は透明度
    gl.clear(gl.COLOR_BUFFER_BIT); // COLOR_BUFFER_BIT はcanvas 内を指定された色でクリアするための定数
}

