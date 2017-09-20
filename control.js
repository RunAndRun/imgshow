function turn(obj){
	
	var cln=obj.className;
	var p_cln=$(obj).parent().get(0).className;
	if(/photo-center/.test(p_cln)){
		
		if(/photo-front/.test(cln)){
	        var back = cln.replace("photo-front","photo-back");
	         obj.className=back;
		}
		else{
			var front = cln.replace("photo-back","photo-front");
			obj.className=front;
		}
	}
	else{
		var imgs=$(".box").children();
		for(var i=0;i<imgs.length;i++){
			var name=imgs[i].className;
			if(/photo-center/.test(name)){
				imgs[i].style.left=$(obj).parent().css("left");
				imgs[i].style.top=$(obj).parent().css("top");
				imgs[i].style.transform=$(obj).parent().css("transform");
				var _name=imgs[i].className.replace(/\s*photo-center\s*/,"");
				imgs[i].className=_name;
			}
		}
		$(obj).parent().get(0).className+=" photo-center";
		$(obj).parent().css({transform:"rotate(0deg)",left:"700px",top:"300px",
								transform:"scale(1.3,1.3)"})
	}
}
$(function(){
	var _html=$(".box").html();
	var nhtml=[];
	var nav=[];
	for(var i=0;i<data.length;i++){
		var html=_html.replace("{{img}}",data[i].src)
		     .replace('{{caption}}',data[i].caption)
		     .replace('{{description}}',data[i].desc);
		nhtml.push(html);
		nav.push("<span class='nav_"+i+"' onclick='turn($(\".photo\").eq("+i+").children().eq(0).get(0))'>"+i+"</span>")
	}
	nhtml.push("<div class='nav'>"+nav.join("")+"</div>")
	$(".box").html(nhtml.join(""));
	var random=Math.floor(Math.random()*nhtml.length);
	var photos=$(".photo").eq(random).get(0);
	photos.className+=" photo-center";
	var leftNum=10;
	var left_l=-$(".photo")[0].clientWidth*0.4;
    var left_r=$(".box")[0].clientWidth/2-$(".photo")[0].clientWidth*0.5;
    var top=-$(".photo")[0].clientHeight*0.4;
    var bott=$(".box")[0].clientHeight-$(".photo")[0].clientHeight/2;
    var right_l=$(".box")[0].clientWidth/2+$(".photo")[0].clientWidth*0.5;
    var right_r=$(".box")[0].clientWidth-$(".photo")[0].clientWidth*0.6;
    var arrNum=getArr(leftNum);
    var L=arrNum.l;
    var R=arrNum.r;
   
    for(var i=0;i<L.length;i++){
    	var w=left_l+Math.floor(Math.random()*(left_r-left_l));
    	var h=top   +Math.floor(Math.random()*(bott-top));
    	var rot=Math.round(Math.random()*540);
    	$(".photo").eq(L[i]).css({left:w,
    		                           top:h,
    		                     transform:'rotate('+rot+'deg)'});
    	
    }
    for(var i=0;i<R.length;i++){
    	var w=right_l+Math.floor(Math.random()*(right_r-right_l));
    	var h=top   +Math.floor(Math.random()*(bott-top));
    	var rot=Math.round(Math.random()*540);
    	$(".photo").eq(R[i]).css({left:w,
							    	   top:h,
							     transform:'rotate('+rot+'deg)'});
    }
    function getArr(number){
		var arr = [];

		for (var i = 0; i <20; i++) {
		   if(i!=random){
		   	 arr.push(i);
		   }
		}

		arr.sort(
		    function () {
		        return 0.5 - Math.random();
		    }
		);

	    var aa=arr.splice(0,number);
	   
	    return {l:aa,r:arr}
    }
})

