let readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

// rl.question("first tower", (first) =>{
//      rl.question("second tower", (second))
//      console.log(first, second)
// })



class Game {
    constructor(){
        this.towers = [["x", "xx", "xxx"], [], []]
        console.log(this.towers)
        
    
    }
   async promptMove(){
       await rl.question("What is your move?(x, xx or xxx?)", async (start)=>{
           if(this.isValidInput(start)){
            let startTowerIdx = start - 1
            await rl.question("Where are you moving the piece?(1, 2, 3)", (end)=>{
            let endTowerIdx = end
            let move = [startTowerIdx, endTowerIdx]
            console.log(move) 
            })
           }
       })
     }
    isValidInput(input){
        return input <= 3 && input > 0 ? true:false
     }
    isValidMove(move){
        // if(move[0])
    }
}
let game = new Game
console.log(game.isValidInput(2))


