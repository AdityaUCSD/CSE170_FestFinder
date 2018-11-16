$(document).ready(function(){
	counter = 0;
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
	var string = localStorage.getItem('name1');
	if (string){
		str = string;
		var favorite1 = str.link(localStorage.getItem('url1'));
		if(favorite1){
			$('#link1').html(favorite1);
		}
	}
	
	//display favorite2
	var str2;
	var string2 = localStorage.getItem('name2');
	if (string2){
		str2 = string2;
		var favorite2 = str2.link(localStorage.getItem('url2'));
		if(favorite2){
			$('#link2').html(favorite2);
		}
	}
	//display favorite3
	var str3;
	var string3 = localStorage.getItem('name3');
	if (string3){
		str3 = string3;
		var favorite3 = str3.link(localStorage.getItem('url3'));
		if(favorite3){
			$('#link3').html(favorite3);
		}
	}
	//display favorite4
	var str4;
	var string4 = localStorage.getItem('name4');
	if (string4){
		str4 = string4;
		var favorite4 = str4.link(localStorage.getItem('url4'));
		if(favorite4){
			$('#link4').html(favorite4);
		}
	}
	//display favorite5
	var str5;
	var string5 = localStorage.getItem('name5');
	if (string5){
		str5 = string5;
		var favorite5 = str5.link(localStorage.getItem('url5'));
		if(favorite5){
			$('#link5').html(favorite5);
		}
	}
	//display favorite6
	var str6;
	var string6 = localStorage.getItem('name6');
	if (string6){
		str6 = string6;
		var favorite6 = str6.link(localStorage.getItem('url6'));
		if(favorite6){
			$('#link6').html(favorite6);
		}
	}
	
	
	//click favorite on comedian 1
	$('#favComedian1').click(function(){
		var comedianName = "Joe Coffee";
		var page = "artists/artistsData/comedian1.html";
		localStorage.setItem('url1',page);
		localStorage.setItem('name1',comedianName);
	});
	
	//click favorite on comedian 2
	$('#favComedian2').click(function(){
		var comedianName2 = "Joe King";
		var page2 = "artists/artistsData/comedian2.html";
		localStorage.setItem('url2',page2);
		localStorage.setItem('name2',comedianName2);
	});
	//click favorite on music 1
	$('#rapFav').click(function(){
		var comedianName3 = "J Wheezy";
		var page3 = "artists/artistsData/rapArtist1.html";
		localStorage.setItem('url3',page3);
		localStorage.setItem('name3',comedianName3);
	});
	//click favorite on music 2
	$('#popFav').click(function(){
		var comedianName4 = "Popstar French";
		var page4 = "artists/artistsData/popArtist1.html";
		localStorage.setItem('url4',page4);
		localStorage.setItem('name4',comedianName4);
	});
	//click favorite on music 3
	$('#countryFav').click(function(){
		var comedianName5 = "Roy Tucker";
		var page5 = "artists/artistsData/countryArtist1.html";
		localStorage.setItem('url5',page5);
		localStorage.setItem('name5',comedianName5);
	});
	//click favorite on music 3
	$('#dancer1Fav').click(function(){
		var comedianName6 = "Kun Fusion";
		var page6 = "artists/artistsData/dancer1.html";
		localStorage.setItem('url6',page6);
		localStorage.setItem('name6',comedianName6);
	});
	








	//clear favorites
	$('#clearFav').click(function(){
		localStorage.clear();
		counter = 0;
	});
	
	
});
