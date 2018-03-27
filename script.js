//instance variables and methods

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//the animals

var whaleOG= new Image();
var whale1= new Image();
var whale2= new Image();
var whale3= new Image();
var whale4= new Image();
var whale5= new Image();
var whale6= new Image();
var whale7= new Image();
var whale8= new Image();
var whale9= new Image();
var whale10= new Image();
var whale11= new Image();
var whale12= new Image();
var whale13= new Image();
var whale14= new Image();
var whale15= new Image();
var whale16= new Image();
var whale17= new Image();
var whale18= new Image();
var whale19= new Image();
var whale20= new Image();
var whale21= new Image();
var whale22= new Image();
var whale23= new Image();
var whale24= new Image();
var whale25= new Image();
var catOG= new Image();
var cat1= new Image();
var cat2= new Image();
var cat3= new Image();
var cat4= new Image();
var cat5= new Image();
var cat6= new Image();
var cat7= new Image();
var cat8= new Image();
var cat9= new Image();
whaleOG.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20OG.png?1520968631916";
whale1.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f1.png?1520968452324";
whale2.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f2.png?1520968478414";
whale3.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f3.png?1520968741587";
whale4.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f4.png?1520968739546";
whale5.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f5.png?1520968737695";
whale6.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f6.png?1520968690655";
whale7.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f7.png?1520968688602";
whale8.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f8.png?1520968687143";
whale9.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f9.png?1520968674305";
whale10.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f10.png?1520968671645";
whale11.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f11.png?1520968668705";
whale12.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f12.png?1520968666707";
whale13.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f13.png?1520968664789";
whale14.rc="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f14.png?1520968660301";
whale15.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f15.png?1520968658513";
whale16.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f16.png?1520968656257";
whale17.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f17.png?1520968651100";
whale18.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f18.png?1520968649174";
whale19.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f19.png?1520968646234";
whale20.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f20.png?1520968644201";
whale21.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f21.png?1520968641951";
whale22.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f22.png?1520968640592";
whale23.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f23.png?1520968637245";
whale24.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f24.png?1520968635043";
whale25.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fwhale%20cuuuute%20f25.png?1520968633292";
catOG.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2FCat1.jpg?1521646375522";
cat1.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2FCat2.jpg?1521646395686";
cat2.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcat3.jpg?1521646402402";
cat3.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcat4.jpg?1521646408851";
cat4.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcat5.jpg?1521646413971";
cat5.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcat6.jpg?1521646419277";
cat6.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcat7.jpg?1521646427002";
cat7.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcat8.jpg?1521646433479";
cat8.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcat9.jpg?1521646447953";
cat9.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcat10.jpg?1521646454532";
whaleOG.height="400";
whaleOG.width="400";
var whales=[
  whaleOG,
  whale1,
  whale2,
  whale3,
  whale4,
  whale5,
  whale6,
  whale7,
  whale8,
  whale9,
  whale10,
  whale11,
  whale12,
  whale13,
  whale14,
  whale15,
  whale16,
  whale17,
  whale18,
  whale19,
  whale20,
  whale21,
  whale22,
  whale23,
  whale24,
  whale25];
var cats=[catOG,
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat6,
  cat7,
  cat8,
  cat9];

//the "animation"

var requestID;

var counter=0; 
var innerCounter=0;
var x=0;
var breatheIn= 0;//0= breathe in, 1= hold, 2= breathe out

function draw(array) {
  
  counter++;
  console.log(counter);
  
  setTimeout(function(){
  
    ctx.drawImage(array[x],0,0,400,400);
      if(breatheIn==0){
        x++;
        if (x>= (array.length-1))
          breatheIn=1;
      }
      else if(breatheIn==1){
        innerCounter++;
        if (innerCounter>= 5){//change this value to change length of pause
          innerCounter=0;
          breatheIn=2;
        }
      }
      else if(breatheIn==2){
        x--;
        if (x<=0)
          breatheIn=0;
      }
  
  requestID=window.requestAnimationFrame(draw(array));
  },timing);
}

//Things that need to be changed -- like a runner class


var timing= 1000/10;//change this value to change overall rate, second value is frames per second
draw(whales,10);






