


//如果使用者調整視窗大小後太小
window.addEventListener("resize", sclshrot);
  function sclshrot(){
  if(window.innerWidth <= 880){
    const tb = document.getElementById("topbo");
    const bn1 = document.getElementById("butn1");
    const ab1 = document.getElementById("abc");
    const ts1 = document.getElementById("tos1");
    const ts2 = document.getElementById("tos2");
    const rb1 = document.getElementById("rightmenuhide");

    tb.style.visibility= "hidden";
    ab1.style.visibility= "visible";
    ts1.style.float="none";ts1.style.width="70%";
    ts2.style.position="static";ts2.style.width="70%";ts2.style.marginLeft="10%";
    bn1.style.height='30px';
    bn1.style.weight='100px';
    bn1.style.fontSize='10px';
    rb1.style.visibility= "visible";
    
  }
  if(window.innerWidth > 880){
    const tb = document.getElementById("topbo");
    const bn1 = document.getElementById("butn1");
    const ab1 = document.getElementById("abc");
    const rb1 = document.getElementById("rightmenuhide");
      
    tb.style.visibility= "visible";
    ab1.style.visibility= "visible";
    bn1.style.height='2.5em';
    bn1.style.weight='100px';
    bn1.style.fontSize='18px';
    rb1.style.visibility= "hidden";
    
  }}
  
