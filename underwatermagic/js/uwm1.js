
<!-- Begin

function z(){

  var l = document.form1.wit.value;
  var k = document.form1.len.value;

  ups=(k*l/2)
  upsq=(k*l/3)
  sqm=(k*l)
  upsq= Math.round(upsq*1)/1;
  ups= Math.round(ups*1)/1;
  sqm= Math.round(sqm*100)/100;
 


  document.form1.results.value="approximately between "+upsq+" and "+ups+" tube(s) of Underwater Magic for an area of "+sqm+" m2";
}

  
function x(){
  var c = document.form2.lenn.value;
  var d = document.form2.witn.value;
  var e = document.form2.depn.value;
  
  uupm = (((c*d)*1.1)*e)
  upm =  uupm / 290 
 

  upm= Math.round(upm*100)/100;
  uupm= Math.round(uupm*100)/100;
  
 if (upm <= 1) {up = 1} 
 else if (upm > 1) {up = upm}; 

  document.form2.resultss.value="approximately "+up+" tube(s) of Underwater Magic, you will use approximately "+uupm+" ml of Underwater Magic.";
}


function d(){
  var x = document.form3.len.value;
  var y = document.form3.wit.value;
  var z = document.form3.dep.value;
  var costb = document.form3.chem.value;
  var cost = document.form3.cost.value;
  mpg=(x*y*z*cost)-(-costb);
  mpg= Math.round(mpg*100)/100;
 
  

  document.form3.results.value="You spent "+mpg+" Euros to refill your pool.";
}
// End -->
