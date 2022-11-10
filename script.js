document.getElementById("myBtn1").onclick = function mydisplay() {
    const textvalue = document.getElementById("inputtext1").value;
    document.getElementById("text1").innerHTML = "I know what you thought...."  + "<br></br>" + textvalue;
}