//模板幻燈卡片微調自動撥放
var cot = 0;//0
    function nex(){
        if(cot <= 8){
           $('.list1 .pho1').eq(cot).animate({'margin-left':'-999px'},999);
            cot ++;
        }
        
    }
setInterval('nex();', 3000);