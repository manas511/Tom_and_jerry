var jerry,tom;
var catImg1, catImg2 , catImg3 , catImg4 , catImg5;
var jerryImag1 , jerryImag2 , jerryImag3 , jerryImag4;





function preload() {
    //load the images here
   catImg1 = loadImage("cat1.png");
   catImg2 = loadImage("cat2.png");
   catImg3 = loadImage("cat3.png");
   catImg4 = loadImage("cat4.png");
   catImg5 = loadAnimation("cat2.png","cat3.png");
  
    jerryImag1 = loadImage("1.png"); 
    jerryImag2 = loadImage("2.png");
    jerryImag3 = loadImage("3.png");
    jerryImag4 = loadImage("4.png");
    jerryImag5 = loadAnimation("2.png","3.png");
    bgImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(850,600,10,10);
    tom.addImage(catImg1);
    tom.scale=0.15;


    jerry = createSprite(250,600,10,10);
    jerry.addImage(jerryImag1);
    jerry.scale=0.11


}

function draw() {

    background(bgImg);
   
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){

        tom.addAnimation("tomS",catImg4);
        tom.changeAnimation("tomS")
        tom.velocityX=0;
        tom.x = 320;

        jerry.addAnimation("jerryS",jerryImag4);
        jerry.changeAnimation("jerryS");


    }

    text("Press left arrow key to move tom",500,750);
    keyPressed(); 
  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyDown(LEFT_ARROW) ){
    
    tom.addAnimation("tomup",catImg5);
    tom.changeAnimation("tomup");
    tom.velocityX = -5;

    jerry.addAnimation("jerryTease",jerryImag5);
    jerry.changeAnimation("jerryTease");
  }
}

/*function tom_touches_jerry(){
    if(tom.x - jerry.x < jerry.width/2 + tom.width/2
        && jerry.x - tom.x < jerry.width/2 + tom.width/2
        && tom.y - jerry.y < jerry.height/2 + tom.height/2
        && jerry.y - tom.y < jerry.height/2 + tom.height/2){
            tom.addImage(catImg4);
            //tom.("tomStop");
        }


  
    

}*/