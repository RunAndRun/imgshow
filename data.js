var data=[];
var str="caption:1red velvet<br/>src:./img/img1.jpg<br/>desc:1red velvet<br/><br>\
         caption:2red velvet<br/>src:./img/img2.jpg<br/>desc:2red velvet<br/><br>\
         caption:3red velvet<br/>src:./img/img3.jpg<br/>desc:3red velvet<br/><br>\
         caption:3red velvet<br/>src:./img/img4.jpg<br/>desc:4red velvet<br/><br>\
         caption:4red velvet<br/>src:./img/img5.jpg<br/>desc:5red velvet<br/><br>\
         caption:5red velvet<br/>src:./img/img6.jpg<br/>desc:6red velvet<br/><br>\
         caption:6red velvet<br/>src:./img/img7.jpg<br/>desc:7red velvet<br/><br>\
         caption:7red velvet<br/>src:./img/img8.jpg<br/>desc:8red velvet<br/><br>\
         caption:8red velvet<br/>src:./img/img9.jpg<br/>desc:9red velvet<br/><br>\
         caption:9red velvet<br/>src:./img/img10.jpg<br/>desc:10red velvet<br/><br>\
         caption:10red velvet<br/>src:./img/img11.jpg<br/>desc:11red velvet<br/><br>\
         caption:11red velvet<br/>src:./img/img12.jpg<br/>desc:12red velvet<br/><br>\
         caption:12red velvet<br/>src:./img/img13.jpg<br/>desc:13red velvet<br/><br>\
         caption:13red velvet<br/>src:./img/img14.jpg<br/>desc:14red velvet<br/><br>\
         caption:14red velvet<br/>src:./img/img15.jpg<br/>desc:15red velvet<br/><br>\
         caption:15red velvet<br/>src:./img/img16.jpg<br/>desc:16red velvet<br/><br>\
         caption:16red velvet<br/>src:./img/img17.jpg<br/>desc:17red velvet<br/><br>\
         caption:17red velvet<br/>src:./img/img18.jpg<br/>desc:18red velvet<br/><br>\
         caption:18red velvet<br/>src:./img/img19.jpg<br/>desc:19red velvet<br/><br>\
         caption:19red velvet<br/>src:./img/img20.jpg<br/>desc:20red velvet"

var _data=str.split("<br/><br>")
for(var i=0;i<_data.length;i++){
	var string=_data[i].split("<br/>");
	data.push({
		caption:string[0].split("caption:")[1],
		src:string[1].split("src:")[1],
		desc:string[2].split("desc:")[1]
	})
}
