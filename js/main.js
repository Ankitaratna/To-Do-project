function tolist()
{
	var item= document.getElementById("doinput").value
	var text= document.createTextNode(item)
	var intem= document.createElement("LI")
	
	

	intem.appendChild(text)
	intem.appendChild(button)
	document.getElementById("listem").appendChild(intem)
}