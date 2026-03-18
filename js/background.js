const canvas=document.getElementById("background")
const ctx=canvas.getContext("2d")

let width,height,particles=[]

class Particle{
  constructor(){
    this.reset()
  }

  reset(){
    this.x=Math.random()*width
    this.y=Math.random()*height
    this.vx=(Math.random()-.5)*.4
    this.vy=(Math.random()-.5)*.4
    this.size=Math.random()*2+1
  }

  update(){
    this.x+=this.vx
    this.y+=this.vy

    if(this.x<0||this.x>width||this.y<0||this.y>height) this.reset()
  }

  draw(){
    ctx.beginPath()
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
    ctx.fillStyle="#00ff9c"
    ctx.fill()
  }
}

function connect(){
  for(let a=0;a<particles.length;a++){
    for(let b=a+1;b<particles.length;b++){

      const dx=particles[a].x-particles[b].x
      const dy=particles[a].y-particles[b].y
      const dist=Math.sqrt(dx*dx+dy*dy)

      if(dist<120){

        ctx.beginPath()
        ctx.strokeStyle="rgba(0,255,156,0.08)"
        ctx.moveTo(particles[a].x,particles[a].y)
        ctx.lineTo(particles[b].x,particles[b].y)
        ctx.stroke()

      }

    }
  }
}

function init(){

  width=canvas.width=window.innerWidth
  height=canvas.height=window.innerHeight

  particles=Array.from({length:80},()=>new Particle())

}

function animate(){

  ctx.clearRect(0,0,width,height)

  particles.forEach(p=>{
    p.update()
    p.draw()
  })

  connect()

  requestAnimationFrame(animate)

}

window.addEventListener("resize",init)

init()
animate()