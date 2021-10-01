function DrawImage(name) {
   window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    drawing = new Image();
    drawing.src = "draw.png";
    ctx.drawImage(drawing, 10, 10);
  };
}
