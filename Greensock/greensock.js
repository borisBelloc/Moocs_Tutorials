// https://greensock.com/docs/TweenMax

// #1: define the id inside a JS variable
// var circel1 = document.getElementById("circel1");

// #id, duration
// TweenMax.to(circel1, 2, {width:"200px", height:"200px"});

// -------------------------------------------------------

// #2 : or just make the id/class a string
// TweenMax.to("#circel1", 2, { width: "200px", height: "200px" });


//tween the element with ID of "myID"
// TweenMax.to("#circel1", 2, { backgroundColor: "#ff0000", width: "200px", top: "200px"});

//or you can do more advanced selecting like all the elements with the class "myClass" like this: 
// TweenMax.to(".circel", 2, { boxShadow: "0px 20px 20px 25px yellow", color: "#FC0" });
TweenMax.from(".circel", 2, { boxShadow: "0px 20px 20px 25px yellow", color: "#FC0" });