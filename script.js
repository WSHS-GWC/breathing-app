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
var dog1= new Image();
var dog2= new Image();
var dog3= new Image();
var dog4= new Image();
var dog5= new Image();
var dog6= new Image();
var dog7= new Image();
var dog8= new Image();
var dog9= new Image();
var dog10= new Image();
var crab1= new Image();
var crab2= new Image();
var crab3= new Image();
var crab4= new Image();
var crab5= new Image();
var crab6= new Image();
var crab7= new Image();
var crab8= new Image();
var crab9= new Image();
var crab10= new Image();
var crab11= new Image();
var crab12= new Image();
var crab13= new Image();
var crab14= new Image();
var crab15= new Image();
var frog1= new Image();
var frog2= new Image();
var frog3= new Image();
var frog4= new Image();
var frog5= new Image();
var frog6= new Image();
var frog7= new Image();
var frog8= new Image();
var frog9= new Image();
var frog10= new Image();
var frog11= new Image();
var frog12= new Image();
var frog13= new Image();
var frog14= new Image();
var frog15= new Image();
var frog16= new Image();
var frog17= new Image();
var frog18= new Image();
var frog19= new Image();
var frog20= new Image();

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
dog1.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2FDog1.0.png?1524357509806";
dog2.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2FDog2.png?1524357512656";
dog3.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2FDog3.png?1524357515219";
dog4.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2FDog4.png?1524357517741";
dog5.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2FDog5.png?1524357520044";
dog6.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2FDog6.0.png?1524357523212";
dog7.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2FDog7.0.png?1524357525587";
dog8.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2FDog8.png?1524357527712";
dog9.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2FDog9.png?1524357543410";
dog10.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2FDog10.png?1524357545374";
crab1.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcrab1.png?1525392261493";
crab2.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcrab2.png?1525393361833";
crab3.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcrab3.png?1525393364168";
crab4.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcrab4.png?1525393367516";
crab5.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcrab5.png?1525393369449";
crab6.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcrab6.png?1525393371619";
crab7.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcrab7.png?1525393373304";
crab8.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Fcrab8.png?1525393375105";
frog1.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff1.png?1525396086525";
frog2.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff2.png?1525396209952";
frog3.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff3.png?1525396212980";
frog4.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff4.png?1525396214635";
frog5.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff5.png?1525396216499";
frog6.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff6.png?1525396218379";
frog7.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff7.png?1525396219909";
frog8.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff8.png?1525396221907";
frog9.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff9.png?1525396223583";
frog10.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff10.png?1525396225340";
frog11.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff11.png?1525396227391";
frog12.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff12.png?1525396228837";
frog13.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff13.png?1525396230451";
frog14.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff14.png?1525396232135";
frog15.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff15.png?1525396233808";
frog16.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff16.png?1525396235608";
frog17.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff17.png?1525396239956";
frog18.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff18.png?1525396241931";
frog19.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff19.png?1525396243737";
frog20.src="https://cdn.glitch.com/eb06f58b-caba-43d0-b6ce-18dd6a29c210%2Ff20.png?1525396245326";


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
var dogs=[dog1,
          dog2,
          dog3,
          dog4,
          dog5,
          dog6,
          dog7,
          dog8,
          dog9,
          dog10];
var crabs=[crab1,
          crab2,
          crab3,
          crab4,
          crab5,
          crab6,
          crab7,
          crab8];
var frogs=[frog1,
          frog2,
          frog3,
          frog4,
          frog5,
          frog6,
          frog7,
          frog8,
          frog9,
          frog10,
          frog11,
          frog12,
          frog13,
          frog14,
          frog15,
          frog16,
          frog17,
          frog18,
          frog19,
          frog20];

//the "animation"

var timing;

var counter=0; 
var innerCounter=0;
var x=0;
var breatheIn= 0;//0= breathe in, 1= hold, 2= breathe out, 3= hold
var newAnimal=false;

function draw(array) {
  
  counter++;
  
  setTimeout(function(){
    
    newAnimal=false;
  
    ctx.drawImage(array[x],0,0,400,400);
      if(breatheIn==0){
        x++;
        if (x>= (array.length-1))
          breatheIn=1;
      }
      else if(breatheIn==1){
        innerCounter++;
        if (innerCounter>= 10){//change this value to change length of pause
          innerCounter=0;
          breatheIn=2;
        }
      }
      else if(breatheIn==2){
        x--;
        if (x<=0)
          breatheIn=3;
      }
      else if(breatheIn==3){
        innerCounter++;
        if (innerCounter>= 10){//change this value to change length of pause
          innerCounter=0;
          breatheIn=0;
        }
      }
  if (counter<= array.length*8+20*8 && !newAnimal)
    window.requestAnimationFrame(draw(array));
  else{
    counter=0;
    window.location.reload();
  }
  },timing);
}


