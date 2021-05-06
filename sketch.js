//Create variables here
var dog,happyDog,foodS,foodStock,database,dogImg,happyDogImg;

function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png");
  happyDogImg=loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150);
  dog.scale=0.15;
  dog.addImage(dogImg);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);
  stroke("black");
  text("Food remaining :"+foodS,170,200);
  textSize(13);
    fill("white");
  text("Press UP_ARROW key to feed Drago milk",200,20);
  
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  drawSprites();
  //add styles here

}
 function readStock(data){
   foodS=data.val();
 }

 function writeStock(x){
   if(x<=0){
     x=0;
    }else{
       x=x-1;
   }
   database.ref('/').update({
     Food:x
   })
 }


