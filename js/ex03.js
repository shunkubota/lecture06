function pickFortuneShip(){
  var a;
  a = Math.random;
if(a < 0.5){
  return "大吉";
}else{
 if(a < 0.6){
   return "中吉";
 }else{
  if(a < 0.7){
    return "吉";
  }else{
  if(a < 0.8){
    return "凶";
   }else{
     return "大凶"
　　　}
　　}
　}
}
}
