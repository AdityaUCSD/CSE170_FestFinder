$(document).ready(function(){
	$('#findName').hide();
	$('#message').hide();
	$('#menu').mouseenter(function(){
		$('#bottom').hide();
	});
	$('#menu').mouseleave(function(){
		$('#bottom').show();
	});
	$('#name').click(function(){
		$('#findName').show();
	});
	$('#findName').click(function(){
		$('#message').fadeIn();
	});
	$('#name2').click(function(){
		$('#message').fadeOut();
	});
	

	//display favorite1
	var str;
	var string = sessionStorage.getItem('name1');
	if (string){
		str = string;
		var favorite1 = str.link(sessionStorage.getItem('url1'));
		if(favorite1){
			$('#link1').html(favorite1);
		}
	}
	
	//display favorite2
	var str2;
	var string2 = sessionStorage.getItem('name2');
	if (string2){
		str2 = string2;
		var favorite2 = str2.link(sessionStorage.getItem('url2'));
		if(favorite2){
			$('#link2').html(favorite2);
		}
	}
	//display favorite3
	var str3;
	var string3 = sessionStorage.getItem('name3');
	if (string3){
		str3 = string3;
		var favorite3 = str3.link(sessionStorage.getItem('url3'));
		if(favorite3){
			$('#link3').html(favorite3);
		}
	}
	//display favorite4
	var str4;
	var string4 = sessionStorage.getItem('name4');
	if (string4){
		str4 = string4;
		var favorite4 = str4.link(sessionStorage.getItem('url4'));
		if(favorite4){
			$('#link4').html(favorite4);
		}
	}
	//display favorite5
	var str5;
	var string5 = sessionStorage.getItem('name5');
	if (string5){
		str5 = string5;
		var favorite5 = str5.link(sessionStorage.getItem('url5'));
		if(favorite5){
			$('#link5').html(favorite5);
		}
	}
	//display favorite6
	var str6;
	var string6 = sessionStorage.getItem('name6');
	if (string6){
		str6 = string6;
		var favorite6 = str6.link(sessionStorage.getItem('url6'));
		if(favorite6){
			$('#link6').html(favorite6);
		}
	}
	//display favorite7
	var str7;
	var string7 = sessionStorage.getItem('name7');
	if (string7){
		str7 = string7;
		var favorite7 = str7.link(sessionStorage.getItem('url7'));
		if(favorite7){
			$('#link7').html(favorite7);
		}
	}
	//display favorite8
	var str8;
	var string8 = sessionStorage.getItem('name8');
	if (string8){
		str8= string8;
		var favorite8 = str8.link(sessionStorage.getItem('url8'));
		if(favorite8){
			$('#link8').html(favorite8);
		}
	}
	//display favorite9
	var str9;
	var string9 = sessionStorage.getItem('name9');
	if (string9){
		str9= string9;
		var favorite9 = str9.link(sessionStorage.getItem('url9'));
		if(favorite9){
			$('#link9').html(favorite9);
		}
	}
	
	
	//click favorite on comedian 1
	$('#favComedian1').click(function(){
		var comedianName = "Joe Coffee";
		var page = "artists/artistsData/comedian1.html";
		sessionStorage.setItem('url1',page);
		sessionStorage.setItem('name1',comedianName);
	});
	
	//click favorite on comedian 2
	$('#favComedian2').click(function(){
		var comedianName2 = "Joe King";
		var page2 = "artists/artistsData/comedian2.html";
		sessionStorage.setItem('url2',page2);
		sessionStorage.setItem('name2',comedianName2);
	});
	//click favorite on music 1
	$('#rapFav').click(function(){
		var comedianName3 = "J Wheezy";
		var page3 = "artists/artistsData/rapArtist1.html";
		sessionStorage.setItem('url3',page3);
		sessionStorage.setItem('name3',comedianName3);
	});
	//click favorite on music 2
	$('#popFav').click(function(){
		var comedianName4 = "Popstar French";
		var page4 = "artists/artistsData/popArtist1.html";
		sessionStorage.setItem('url4',page4);
		sessionStorage.setItem('name4',comedianName4);
	});
	//click favorite on music 3
	$('#countryFav').click(function(){
		var comedianName5 = "Roy Tucker";
		var page5 = "artists/artistsData/countryArtist1.html";
		sessionStorage.setItem('url5',page5);
		sessionStorage.setItem('name5',comedianName5);
	});
	//click favorite on music 3
	$('#dancer1Fav').click(function(){
		var comedianName6 = "Kun Fusion";
		var page6 = "artists/artistsData/dancer1.html";
		sessionStorage.setItem('url6',page6);
		sessionStorage.setItem('name6',comedianName6);
	});
	//click favorite on music 3
	$('#comedian3').click(function(){
		var comedianName7 = "Nomojo";
		var page7 = "artists/artistsData/comedian3.html";
		sessionStorage.setItem('url7',page7);
		sessionStorage.setItem('name7',comedianName7);
	});
	//click favorite on dancer2
	$('#dancer2').click(function(){
		var comedianName8 = "Los Bailadores del Barrio";
		var page8 = "artists/artistsData/dancer2.html";
		sessionStorage.setItem('url8',page8);
		sessionStorage.setItem('name8',comedianName8);
	});
	//click favorite on dancer3
	$('#dancer3').click(function(){
		var comedianName9 = "USD Torero Dance Team ";
		var page9 = "artists/artistsData/dancer3.html";
		sessionStorage.setItem('url9',page9);
		sessionStorage.setItem('name9',comedianName9);
	});
	








	//clear favorites
	$('#clearFav').click(function(){
		sessionStorage.clear();
		counter = 0;
	});
	

	
	
});
