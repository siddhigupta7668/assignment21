alert("20 Years Is Roughly 7305 Days")

var length = prompt("Please enter length of rectangle", "0");

if (length == null || length == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + length + "! How are you today?";
}

var width = prompt("Please enter breadth Of rectangle", "0")
if (width == null || width == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + width + "! How are you today?";
}
alert("Area Of Rectangle Is " + length*width)

var base = prompt("Please enter Base Of Triangle", "0");

if (base == null || base == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + base + "! How are you today?";
}


var height = prompt("Please enter height of triangle", "0");

if (height == null || height == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + height + "! How are you today?";
}

alert("Area Of Triangle is " + base*height)