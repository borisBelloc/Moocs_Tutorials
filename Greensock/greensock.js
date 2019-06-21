// https://greensock.com/docs/TweenMax

// #1: define the id inside a JS variable ; recommended if you use this element more than once
// var circel1 = document.getElementById("circel1");

// TweenMax.to(target, duration, {vars});
// TweenMax.to(circel1, 2, {width:"200px", height:"200px"});

// -------------------------------------------------------

// #2 : or just make the id/class a string
// TweenMax.to("#circel1", 2, { width: "200px", height: "200px" });


//tween the element with ID of "myID"
// TweenMax.to("#circel1", 2, { backgroundColor: "#ff0000", width: "200px", top: "200px"});

//or you can do more advanced selecting like all the elements with the class "myClass" like this: 
// TweenMax.to(".circel", 2, { boxShadow: "0px 20px 20px 25px yellow", color: "#FC0" });

// Note
// -------
// * For CSS multiple world example:'background-color', it become camelCase 'backgroundColor'
// * repeat:-1 : infinite repeat
// * left: move from 0 ; x: move from current position
// * ease: Linear.easeNone : make the movement smooth
// -------


// Yoyo
var circel2_yoyo = new TimelineLite();
circel2_yoyo
  .to("#circel2", 1, {
    left: 600,
    backgroundColor: "#FC0",
    height: 100,
    width: 100,
    borderRadius: 100,
    ease: Linear.easeNone
  })
.to("#circel2", 1, {
    left: 300, // initial position
    backgroundColor: "rgb(116, 135, 245)",
    height: 50,
    width: 50,
    yoyo: true,
    repeat:-1,
    borderRadius:0,
    ease: Linear.easeNone
  });
// circel2_yoyo
//   .to("#circel2", 0.5, { x: 10, ease: Linear.easeNone })
//   .to("#circel2", 1, { x: -10, ease: Linear.easeNone, repeat: -1, yoyo: true });