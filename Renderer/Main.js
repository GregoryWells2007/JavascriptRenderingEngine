function DrawImage(name) {
   window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    drawing = new Image();
    drawing.src = name;
    ctx.drawImage(drawing, 10, 10);
  };
}
