//jQuery(document).ready(function() {
	$(document).ready(function() {
	$("#animation").show("slow");
	$("#animation").queue(function () {
$(this).animate({width:'+= 30'},400);
$(this).dequeue();
});
	alert($("img").attr("alt"));
	alert($("img").attr("height"));
	//alert(jQuery("img").attr("alt"));
	alert("your fada well well");
	alert($("#someTxt").text());
	$("#image").attr("src")="backgroundc.jpg";
	var thisMoment= new Date();
	//$("img").attr({src: "gamecentre.jpg", alt: "newimage"});
	//$("img").removeAttr("height").removeAttr("width");

	var strongContent= $("strong").text();
	var emContent= $("em").text();

	$("strong").html(emContent);
	$("em").html(strongContent);

	//document.write(thisMoment);
	//document.write("<br/>" + thisMoment.getFullYear());


	

//	where();
	
//	document.write("<br/>" + v2 + "<br/>");
	//document.write(v1 + "<br/>");
	alert($.type(null));

	var species = {
		"mammals" : {
			"biped" : {
				"monkey" : "George",
				"dog" : "bingo"
			}
		}
	}

	//document.write(species.mammals.biped.dog);


var obj1 = {"1" : "property1"};
var obj2 = {"2" : "property2"};
var obj3 = {"3" : "property3"};
//document.write( "<br/>");
//document.write(obj1["1"]);
//document.write( "<br/>");
$.extend(obj1, obj2, obj3);
//document.write(obj1["2"]);
//document.write( "<br/>");

var numArray = [1,2,3,4];
$.each(numArray, function(index, value){
value = value * 2;
//document.write("index is:" + index + " new value is:" + value );
//document.write( "<br/>");

});










































});