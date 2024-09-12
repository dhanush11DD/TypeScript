var Directions;
(function (Directions) {
    Directions[Directions["NORTH"] = 0] = "NORTH";
    Directions[Directions["SOUTH"] = 1] = "SOUTH";
    Directions[Directions["EAST"] = 2] = "EAST";
    Directions[Directions["WEST"] = 3] = "WEST";
})(Directions || (Directions = {}));
var move = function (direction) {
    console.log("Moving towards ".concat(Directions[direction].toLowerCase()));
};
move(Directions.NORTH);
