document.getElementById("whobutton").onclick = function who() {
    document.getElementById("whotext").innerHTML =
      "It is your King...." + "<br></br>" + "Tamilarasan Meganathan";
  };

  document.getElementById("youbutton").onclick = function you() {
    document.getElementById("whoyou").innerHTML =
      "It is my Queen...." + "<br></br>" + "Yurekha Viswanathan";
  };

  document.getElementById("webutton").onclick = function we() {
    document.getElementById("whowe").innerHTML =
      "It is our princess...." + "<br></br>" + "Samhita Tamilarasan";
  };

  document.getElementById("myBtn1").onclick = function mydisplay() {
    const textvalue = document.getElementById("inputtext1").value;
    document.getElementById("text1").innerHTML =
      "I know what you thought...." + "<br></br>" + textvalue;
  };