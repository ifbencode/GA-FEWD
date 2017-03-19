console.log("WRITE YOUR SOLUTION IN HERE!");

var coords = 0;

var horBox = 1;

while (g.at(horBox,0) === (0)) {
  d.move();
  coords = coords + 1;
  horBox = horBox + 1;
} if (g.at(horBox, 0) === "color grey") {
  d.orient("down");
}

var coords = 0;

var verBox = 1;

while (g.at(0,verBox) === (0)) {
  d.move();
  coords = coords + 1;
  verBox = verBox + 1;
} if (g.at(0, verBox) === "color grey") {
  d.orient("right");
}
