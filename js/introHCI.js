$(document).ready(function(){
	$('#p1').hide();
	$('#p2').hide();
	$('#p3').hide();
	$('#p4').hide();
	$('#p5').hide();
	$('#p6').hide();
	$('#p7').hide();
	$('#p8').hide();
	$('#p9').hide();
	$('#p10').hide();
	$('#tr1').mouseenter(function(){
		$('#p1').show();
	});
	$('#tr1').mouseleave(function(){
		$('#p1').hide();
	});
	$('#tr2').mouseenter(function(){
		$('#p2').show();
	});
	$('#tr2').mouseleave(function(){
		$('#p2').hide();
	});
	$('#tr3').mouseenter(function(){
		$('#p3').show();
	});
	$('#tr3').mouseleave(function(){
		$('#p3').hide();
	});
	$('#tr4').mouseenter(function(){
		$('#p4').show();
	});
	$('#tr4').mouseleave(function(){
		$('#p4').hide();
	});
	$('#tr5').mouseenter(function(){
		$('#p5').show();
	});
	$('#tr5').mouseleave(function(){
		$('#p5').hide();
	});
	$('#tr6').mouseenter(function(){
		$('#p6').show();
	});
	$('#tr6').mouseleave(function(){
		$('#p6').hide();
	});
	$('#tr7').mouseenter(function(){
		$('#p7').show();
	});
	$('#tr7').mouseleave(function(){
		$('#p7').hide();
	});
	$('#tr8').mouseenter(function(){
		$('#p8').show();
	});
	$('#tr8').mouseleave(function(){
		$('#p8').hide();
	});
	$('#tr9').mouseenter(function(){
		$('#p9').show();
	});
	$('#tr9').mouseleave(function(){
		$('#p9').hide();
	});
	$('#tr10').mouseenter(function(){
		$('#p10').show();
	});
	$('#tr10').mouseleave(function(){
		$('#p10').hide();
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
	//display favorite10
	var str10;
	var string10 = sessionStorage.getItem('name10');
	if (string10){
		str10= string10;
		var favorite10 = str10.link(sessionStorage.getItem('url10'));
		if(favorite10){
			$('#link10').html(favorite10);
		}
	}

	//display favorite11
	var str11;
	var string11 = sessionStorage.getItem('name11');
	if (string11){
		str11= string11;
		var favorite11 = str11.link(sessionStorage.getItem('url11'));
		if(favorite11){
			$('#link11').html(favorite11);
		}
	}

	//display favorite12
	var str12;
	var string12 = sessionStorage.getItem('name12');
	if (string12){
		str12= string12;
		var favorite12 = str12.link(sessionStorage.getItem('url12'));
		if(favorite12){
			$('#link12').html(favorite12);
		}
	}
	//display favorite13
	var str13;
	var string13 = sessionStorage.getItem('name13');
	if (string13){
		str13= string13;
		var favorite13 = str13.link(sessionStorage.getItem('url13'));
		if(favorite13){
			$('#link13').html(favorite13);
		}
	}
	//display favorite14
	var str14;
	var string14 = sessionStorage.getItem('name14');
	if (string14){
		str14= string14;
		var favorite14 = str14.link(sessionStorage.getItem('url14'));
		if(favorite14){
			$('#link14').html(favorite14);
		}
	}
	//display favorite15
	var str15;
	var string15 = sessionStorage.getItem('name15');
	if (string15){
		str15= string15;
		var favorite15 = str15.link(sessionStorage.getItem('url15'));
		if(favorite15){
			$('#link15').html(favorite15);
		}
	}
	//display favorite16
	var str16;
	var string16 = sessionStorage.getItem('name16');
	if (string16){
		str16= string16;
		var favorite16 = str16.link(sessionStorage.getItem('url16'));
		if(favorite16){
			$('#link16').html(favorite16);
		}
	}
	//display favorite17
	var str17;
	var string17 = sessionStorage.getItem('name17');
	if (string17){
		str17= string17;
		var favorite17 = str17.link(sessionStorage.getItem('url17'));
		if(favorite17){
			$('#link17').html(favorite17);
		}
	}
	//display favorite18
	var str18;
	var string18 = sessionStorage.getItem('name18');
	if (string18){
		str18= string18;
		var favorite18 = str18.link(sessionStorage.getItem('url18'));
		if(favorite18){
			$('#link18').html(favorite18);
		}
	}
	//click favorite on comedian 1
	$('#favComedian1').click(function(){
		var comedianName = "Joe Coffee";
		var page = "artists/artistsData/comedian1.html";
		sessionStorage.setItem('url1',page);
		sessionStorage.setItem('name1',comedianName);
		var x = document.getElementById("favComedian1");
    		if (x.innerHTML === "Favorite this artist!") {
        		x.innerHTML = "Favorited!";
    		}
	});

	//click favorite on comedian 2
	$('#favComedian2').click(function(){
		var comedianName2 = "Joe King";
		var page2 = "artists/artistsData/comedian2.html";
		sessionStorage.setItem('url2',page2);
		sessionStorage.setItem('name2',comedianName2);
		var x = document.getElementById("favComedian2");
    		if (x.innerHTML === "Favorite this artist!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on music 1
	$('#rapFav').click(function(){
		var comedianName3 = "J Wheezy";
		var page3 = "artists/artistsData/rapArtist1.html";
		sessionStorage.setItem('url3',page3);
		sessionStorage.setItem('name3',comedianName3);
		var x = document.getElementById("rapFav");
    		if (x.innerHTML === "Favorite this artist!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on music 2
	$('#popFav').click(function(){
		var comedianName4 = "Popstar French";
		var page4 = "artists/artistsData/popArtist1.html";
		sessionStorage.setItem('url4',page4);
		sessionStorage.setItem('name4',comedianName4);
		var x = document.getElementById("popFav");
    		if (x.innerHTML === "Favorite this artist!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on music 3
	$('#countryFav').click(function(){
		var comedianName5 = "Roy Tucker";
		var page5 = "artists/artistsData/countryArtist1.html";
		sessionStorage.setItem('url5',page5);
		sessionStorage.setItem('name5',comedianName5);
		var x = document.getElementById("countryFav");
    		if (x.innerHTML === "Favorite this artist!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on music 3
	$('#dancer1Fav').click(function(){
		var comedianName6 = "Kun Fusion";
		var page6 = "artists/artistsData/dancer1.html";
		sessionStorage.setItem('url6',page6);
		sessionStorage.setItem('name6',comedianName6);
		var x = document.getElementById("dancer1Fav");
    		if (x.innerHTML === "Favorite this artist!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on music 3
	$('#comedian3').click(function(){
		var comedianName7 = "Nomojo";
		var page7 = "artists/artistsData/comedian3.html";
		sessionStorage.setItem('url7',page7);
		sessionStorage.setItem('name7',comedianName7);
		var x = document.getElementById("comedian3");
    		if (x.innerHTML === "Favorite this artist!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on dancer2
	$('#dancer2').click(function(){
		var comedianName8 = "Los Bailadores del Barrio";
		var page8 = "artists/artistsData/dancer2.html";
		sessionStorage.setItem('url8',page8);
		sessionStorage.setItem('name8',comedianName8);
		var x = document.getElementById("dancer2");
    		if (x.innerHTML === "Favorite this artist!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on dancer3
	$('#dancer3').click(function(){
		var comedianName9 = "USD Torero Dance Team ";
		var page9 = "artists/artistsData/dancer3.html";
		sessionStorage.setItem('url9',page9);
		sessionStorage.setItem('name9',comedianName9);
		var x = document.getElementById("dancer3");
    		if (x.innerHTML === "Favorite this artist!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on dancer3
	$('#event2').click(function(){
		var comedianName10 = "SD Asian Film Festival";
		var page10 = "events/eventsData/filmEvent1.html";
		sessionStorage.setItem('url10',page10);
		sessionStorage.setItem('name10',comedianName10);
		var x = document.getElementById("event2");
    		if (x.innerHTML === "Favorite this event!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on dancer3
	$('#event3').click(function(){
		var comedianName11 = "45th Annual Mexican-American Film Festival";
		var page11 = "events/eventsData/filmEvent2.html";
		sessionStorage.setItem('url11',page11);
		sessionStorage.setItem('name11',comedianName11);
		var x = document.getElementById("event3");
    		if (x.innerHTML === "Favorite this event!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on dancer3
	$('#event4').click(function(){
		var comedianName12 = "Children's Film Fest";
		var page12 = "events/eventsData/filmEvent3.html";
		sessionStorage.setItem('url12',page12);
		sessionStorage.setItem('name12',comedianName12);
		var x = document.getElementById("event4");
    		if (x.innerHTML === "Favorite this event!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on dancer3
	$('#event5').click(function(){
		var comedianName13 = "SD Mac and Cheese Festival";
		var page13 = "events/eventsData/foodDrinkEvent1.html";
		sessionStorage.setItem('url13',page13);
		sessionStorage.setItem('name13',comedianName13);
		var x = document.getElementById("event5");
    		if (x.innerHTML === "Favorite this event!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on dancer3
	$('#event6').click(function(){
		var comedianName14 = "The Quintessential Festival";
		var page14 = "events/eventsData/foodDrinkEvent2.html";
		sessionStorage.setItem('url14',page14);
		sessionStorage.setItem('name14',comedianName14);
		var x = document.getElementById("event6");
    		if (x.innerHTML === "Favorite this event!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on dancer3
	$('#event7').click(function(){
		var comedianName15 = "SD Bay Wine and Food Festival";
		var page15 = "events/eventsData/foodDrinkEvent3.html";
		sessionStorage.setItem('url15',page15);
		sessionStorage.setItem('name15',comedianName15);
		var x = document.getElementById("event7");
    		if (x.innerHTML === "Favorite this event!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on dancer3
	$('#event8').click(function(){
		var comedianName16 = "Kaboo Del Mar";
		var page16 = "events/eventsData/musicEvent1.html";
		sessionStorage.setItem('url16',page16);
		sessionStorage.setItem('name16',comedianName16);
		var x = document.getElementById("event8");
    		if (x.innerHTML === "Favorite this event!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on dancer3
	$('#event9').click(function(){
		var comedianName17 = "91 X Fest";
		var page17 = "events/eventsData/musicEvent2.html";
		sessionStorage.setItem('url17',page17);
		sessionStorage.setItem('name17',comedianName17);
		var x = document.getElementById("event9");
    		if (x.innerHTML === "Favorite this event!") {
        		x.innerHTML = "Favorited!";
    		}
	});
	//click favorite on dancer3
	$('#event10').click(function(){
		var comedianName18 = "Star Wars In Concert";
		var page18 = "events/eventsData/musicEvent3.html";
		sessionStorage.setItem('url18',page18);
		sessionStorage.setItem('name18',comedianName18);
		var x = document.getElementById("event10");
    		if (x.innerHTML === "Favorite this event!") {
        		x.innerHTML = "Favorited!";
    		}
	});









	//clear favorites
	$('#clearFav').click(function(){
		sessionStorage.clear();
		counter = 0;
	});

	$('#logInButton').click(function(){
		sessionStorage.clear();
		counter = 0;
	});




});
