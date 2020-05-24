"use strict";
/* JS functions */

function myCheck(){
    var total = 0; // 選択されているか否かを判定する変数
	var checkedNum = 0;
	var percentage;

    for(var i=0; i<document.form1.comp.length-1;i++){
		 if(document.form1.comp[i].checked){
			 checkedNum++;
		 }
        total++;
    }
	percentage = 100 * (checkedNum / total);
	percentage = percentage.toFixed(2); 
	document.form1.textMsg.value = percentage + "%";
}