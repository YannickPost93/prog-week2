class Game {
    private cars:Car[]
    constructor(){
        console.log("new game created!")
        this.cars = []

        for(let i = 0; i < 200; i++){
            let c = new Car()            
            this.cars.push(c)

            c.update()
        }

        this.gameLoop()
           
    }

    gameLoop(){
        // loop door alle cars in de array - roep update aan
        for(let c of this.cars) {
            c.update()
        }
        requestAnimationFrame(()=>this.gameLoop())        
    }
}

window.addEventListener("load", () => new Game())
