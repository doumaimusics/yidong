


window.onload=function(){
	//获取元素
	var win=$(".banner_middle")[0];
	var as=$("a",win);
	var lis=$("li",$(".point")[0]);
	var btnR=$(".btnR",win)[0];
	var btnL=$(".btnL",win)[0];
   var widths=parseInt(getStyle(as[0],"width"));
	//声明双下标
	var num=0;
	var next=0;
	//初始状态
	for(var i=0;i<as.length;i++){
        if(i==0){
        	continue;
        }
    as[i].style.left=widths+"px";
    }
    //时间间隔函数
    var t=setInterval(moveL,2000);
    win.onmouseover=function(){
    	clearInterval(t);
    }
    win.onmouseout=function(){
    	t=setInterval(moveL,2000);
    }
    //选项卡
    for(var i=0;i<lis.length;i++){
    	lis[i].index=i;
    	lis[i].onclick=function(){
            if(num==this.index){
                return;
            }     
    	
    		as[this.index].style.left=widths+"px";
    	 lis[num].className="";
         lis[this.index].className="point_hot";
    	animate(as[num],{left:-widths});
    	animate(as[this.index],{left:0});
    		
    		next=this.index;
    		num=this.index;

    	}

    }
 
  var flag=true;
  btnL.onclick=function(){
  	if(flag){
       flag=false;
  	   lunboR();
  	}
  }
  btnR.onclick=function(){
  	if(flag){
  		flag=false;
  		moveL();
  	}
  	    
  }



    function moveL(){
    	next++;
    	
    	if(next==as.length){
    		next=0;
    	}
   
    as[next].style.left=widths+"px";
    
    lis[num].className="";
    lis[next].className="point_hot";
    
    animate(as[num],{left:-widths});
   
    animate(as[next],{left:0},function(){
    	flag=true;
    })
   
    num=next;
    }

     function lunboR(){
    	next--;
    
    	if(next<0){
    		next=as.length-1;
    	}
 
    as[next].style.left=-widths+"px";
   
    lis[num].className="";
    lis[next].className="point_hot";
   
    animate(as[num],{left:widths});
   
    animate(as[next],{left:0},function(){
    	flag=true;
    })
    
    num=next;
    }
 
    
    var DH2=$(".DH2")
    var yincang=$(".yincang")
    for (var i = 0; i < DH2.length; i++) {
        DH2[i].index=i;
        DH2[i].onmouseover=function(){
            yincang[this.index].style.display="block";
        }
        DH2[i].onmouseout=function(){
            yincang[this.index].style.display="none";
    }
}

  var imges=$(".yewutu3");
for (var i = 0; i < imges.length; i++) {
    imges[i].aa=i;
    imges[i].onmouseover=function(){
         animate(imges[this.aa],{"marginLeft":"10px"},50)
     }
     imges[i].onmouseout=function(){
         animate(imges[this.aa],{"marginLeft":"30px"},50)
     }
}
     
   
var win=$(".win")[0];
    nodeLunbo(win,2)
    function nodeLunbo(obj,num){
    var imgBox=$(".imgBox")[0];
    var as=$("a",imgBox);
    var widths=parseInt(getStyle(as[0],"width"))+10;
    var btnL=$(".btnL",obj)[0];
    var btnR=$(".btnR",obj)[0];
    var flag=true;
    

    imgBox.style.width=widths*as.length+"px";
    var t=setInterval(movel,1000);
    obj.onmouseover=function(){
        clearInterval(t);
    }
    obj.onmouseout=function(){
        t=setInterval(movel,1000);
    }
    btnL.onclick=function(){
      if(flag){
        flag=false;
        movel();
      } 
    }
    btnR.onclick=function(){
      if(flag){
        flag=false;
        moveR();
      }
    }
  
    function movel(){
        animate(imgBox,{left:-num*widths},function(){
            for(var i=0;i<num;i++){
            var first=firstChild(imgBox);
            imgBox.appendChild(first)
            imgBox.style.left=0;
        }
            flag=true;
             
        })

    }


function moveR(){
    for(var i=0;i<num;i++){
        var last=lastChild(imgBox);
        beforeChild(imgBox,last);
       imgBox.style.left=-num*widths+"px";
    }
     animate(imgBox,{left:0},function(){
        flag=true;
    })

   }
  
   }

  var yyt=$(".yyt")[0];
  var ewm=$(".ewmk")[0];
  yyt.onmouseover=function(){
    ewm.style.display="block"
  }
  yyt.onmouseout=function(){
    ewm.style.display="none"
  }

 var dl=$(".dl")[0];
  var dlyincang=$(".dlyincang")[0];
  dl.onmouseover=function(){
    dlyincang.style.display="block"
  }
  dl.onmouseout=function(){
    dlyincang.style.display="none"
  }



}