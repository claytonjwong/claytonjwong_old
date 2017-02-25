function append_year( element_id )
{
	document.getElementById(element_id).appendChild(document.createTextNode(new Date().getFullYear()))
}