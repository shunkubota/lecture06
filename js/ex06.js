function drawRandomLine(){
  var red, blue, green, alpha;
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  alpha = Math.floor(Math.random() * 256);
  stroke(red, green, blue, alpha);
}
