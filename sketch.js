var fixedrect,movingrect;






function setup() {
  createCanvas(1200,800);
 fixedrect = createSprite(400, 100, 50, 80);
fixedrect.shapeColor="green"
fixedrect.velocityY=5;
 movingrect = createSprite(400,800,80,30);
movingrect.shapeColor="green";
movingrect.velocityY=-5;
}

function draw() {
  background(255,255,255);  



if (movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2&&
fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2)
{
movingrect.velocityX=movingrect.velocityX*(-1);
fixedrect.velocityX=fixedrect.velocityX*(-1);

}
if(movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2&&
fixedrect.y-movingrect.y < movingrect.height/2+fixedrect.height/2 )  {

movingrect.velocityY=movingrect.velocityY*(-1);
fixedrect.velocityY=fixedrect.velocityY*(-1);



}







  drawSprites();
}