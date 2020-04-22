

var boxes = [];
var cord = [];
const Engine=Matter.Engine
const World=Matter.World;
const Bodies=Matter.Bodies;
var gamestate="Draw";
 var engine,world;
 var g;
 
 
function setup() {
    createCanvas(1200, 800);

   
    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);
  
    
   
   

   
    
   
   
   
}

    function mouseDragged (){
       
          boxes.push(new Box(mouseX,mouseY))
          boxes.push(new Box(mouseX+2,mouseY))
          boxes.push(new Box(mouseX+4,mouseY))  
          boxes.push(new Box(mouseX+6,mouseY))
          boxes.push(new Box(mouseX+8,mouseY))
          boxes.push(new Box(mouseX+10,mouseY))  
          boxes.push(new Box(mouseX+12,mouseY))
          boxes.push(new Box(mouseX+14,mouseY))
          boxes.push(new Box(mouseX+16,mouseY))  
    }
     
        
function cchange(color){
    for ( var i=0; i<boxes.length;i++){
        fill(color)
       
       }
}
    


 
function draw() {
    

    background(255);
   
    Engine.update(engine);
   
    


    
   for ( var i=0; i<boxes.length;i++){
    boxes[i].display();
   }
   textSize(15);
   text("Press c to clear",600,50);
   
  }


  function keyPressed(){
      if(keyCode===67){
          boxes=[];
      }
      if(keyCode===66){
      cchange("blue")
    }
  }



