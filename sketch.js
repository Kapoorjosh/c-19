var waveBackround,swimmer;
var shark,polythene,can,bottle;
var waveBackgroundImg,swimmerImg;
var sharkImg,polytheneImg,canImg,bottleImg;

var PLAY=1; 
var END=0;
var gamestate=1;

var polytheneG,sharkG,canG,BottleG

var bubble;
var bubbleimg;
var bubbleG;
var score;


function preload(){
    waveBackgroundImg = loadImage("WaveBackground.gif");
    swimmerImg = loadImage("Swimmer.gif");
    sharkImg = loadImage("Shark.png");
    polytheneImg = loadImage("polythene.png");
    canImg = loadImage ("Can.png");
    bottleImg = loadImage ("Bottle.png");
    bubbleimg = loadImage ("bubble.png");
}

function setup() { 
    createCanvas(1200,600);


    waveBackround=createSprite(500,100);
    waveBackround.addImage(waveBackgroundImg);
    waveBackround.scale = 2.5;
    //waveBackround.x = waveBackround.width/2;

    swimmer = createSprite(300,200,20,20);
    swimmer.addImage(swimmerImg);
    swimmer.scale=.2;
    
    canG=new Group();
    polytheneG=new Group();
    sharkG=new Group();
    BottleG=new Group();

    bubbleG=new Group();
    score = 0;

    
}

function draw() {
    background("skyblue");
    text("score:" + score,1100,50)

    //if(gamestate===PLAY){

        waveBackround.velocityX = -5;
        swimmer.y = World.mouseY;
        if(waveBackround.x<450){
            waveBackround.x = waveBackround.width/2+400;
        }

        edges= createEdgeSprites();
         swimmer.collide(edges);
        
         if(waveBackround.y > height ){
            waveBackround.y = height/2;}

            createShark();
            createPolythene();
            createCan();
            createBottle();    
            if(BottleG.isTouching(swimmer)){
                score = score+2;
                BottleG.destroyEach();
            }
           
            
            
//}
drawSprites();
}
function createBottle() {
    if (frameCount % 100 === 0) {
    var bottle = createSprite(1200,600);
    bottle.y = Math.round(random(50,500))
    bottle.velocityX = -5;
    bottle.addImage(bottleImg);
    bottle.scale=0.2;    
    bottle.lifetime = 300;
    BottleG.add(bottle);
    }
  }

  function createCan(){
    if (World.frameCount % 150 === 0) {
        var can = createSprite(1200,600);
        can.addImage(canImg);
        can.scale=0.2;
        can.y = Math.round(random(50,500))
        can.velocityX = -5;
        can.lifetime = 300;
        canG.add(can);
        }
    }

        function createPolythene(){
            if (World.frameCount % 210 === 0) {
                var polythene = createSprite(1200,600)
                polythene.addImage(polytheneImg);
                polythene.scale=0.2;
                polythene.y = Math.round(random(50,500))
                polythene.velocityX = -5;
                polythene.lifetime = 300;
                polytheneG.add(polythene);
                }
            }

            function createShark(){
                if (World.frameCount % 260 === 0) {
                    var shark = createSprite(1200,600);
                    shark.addImage(sharkImg);
                    shark.scale=0.5;
                    shark.y = Math.round(random(50,500))
                    shark.velocityX = -5;
                    shark.lifetime = 300;
                    sharkG.add(shark);
                    }}

