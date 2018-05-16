class Car {
    private x:number = Math.random()*window.innerWidth 
    private y:number = Math.random()*window.innerHeight 
    private xspeed:number = 1
    private yspeed:number = 1
    private element:HTMLElement
    // private color:string
    
    constructor() {
        console.log("car created")
        this.element = document.createElement("car")
        document.body.appendChild(this.element)
        


        this.xspeed = 3 + Math.random()
        this.yspeed = 3 + Math.random()
    }
    public update(){
        this.x += this.xspeed
        this.y += this.yspeed
        // console.log("car x " + this.x)
        if(this.x > window.innerWidth || this.x < 0) {
            this.xspeed = this.xspeed * -1
        }
        if(this.y > window.innerHeight || this.y < 0) {
            this.yspeed = this.yspeed * -1
        }

        this.element.style.transform = `translate(${this.x}px,${this.y}px)`
    }

    // let color = Math.random()* 360
    // this.element.style.webkitfilter
}
