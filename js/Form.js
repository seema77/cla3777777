class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","Enter your name");
    this.playButton=createButton("play");
    this.titleImg=createImg("assets/title.png");
    this.greeting=createElement("h2") // heading

  }

setElementsPosition(){
this.titleImg.position(120,80);
this.input.position(width/2-110,height/2-80);
this.playButton.position(width/2-90,height/2-20);
this.greeting.position(width/2-300,height/2-100);
}

setElementsStyle(){
this.titleImg.class("gameTitle");
this.input.class("customInput");
this.playButton.class("customButton ");
this.greeting.class("greeting")
}

display(){
  this.setElementsPosition();
  this.setElementsStyle();
}

}
