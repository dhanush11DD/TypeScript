enum Directions {
    NORTH ,
    SOUTH,
    EAST,
    WEST
}

const move = (direction) =>{
    console.log(`Moving towards ${Directions[direction].toLowerCase()}`)
}

move(Directions.NORTH)