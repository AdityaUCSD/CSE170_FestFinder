$('#menu').mouseenter(hid);
function hid(){
	$('#orText').hide();
	$('#findName').hide();
	$('#name').hide();
}
$('#menu').mouseleave(get);
function get(){
	$('#orText').show();
	$('#name').show();
}
$('#name').click(hid2);
function hid2(){
	$('#findName').show();
}
