function abrir()
{
	document.getElementById('light').style.display='block';
	document.getElementById('fade').style.display='block';

	/*var arr1 = potions.json.parse(id);
	var out = "<ul>";
	out += "<li>" arr1[0]['name'];
	out +="</ul>";
	document.getElementById(1).innerHTML = out;*/
}

function fechar()
{
	document.getElementById('light').style.display='none';
	document.getElementById('fade').style.display='none';
}