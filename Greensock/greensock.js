// https://greensock.com/docs/TweenMax

// #1: define the id inside a JS variable ; recommended if you use this element more than once
// var circel1 = document.getElementById("circel1");

// TweenMax.to(target, duration, {vars});
TweenMax.to(circel1, 2, {width:"20px", height:"20px"});

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
//    * default ease out ease on -> ralentis a la fin de l'animation
// ease:Back.easeOut -> overshout end property and move back to it
// ease:Elastic.easeOut 
// ease:Bounce.easeOut 
// https://greensock.com/ease-visualizer
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


TweenMax.to("#circel3", 2, {x:300, rotation:360, scale:2});

// Logo
TweenMax.from("#logo", 0.5, {opacity:0, scale:0, ease:AudioBufferSourceNode.easeOut});
TweenMax.to("#logo2", 2, {left:200, backgroundColor:"#f00", padding:20, border:"6px solid #fff", borderRadius:"20%", ease:Elastic.easeOut});
TweenMax.to("#logo3", 0.5, {x:300, rotation:360, scale:1.5});

// ---------------------
// Logo anim serie1
TweenMax.from("#logo4", 0.5, {opacity:0, scale:0, ease:Bounce.easeOut})
// .box appear after the logo
// TweenMax.from(".box", 0.5, {opacity:0, y:200, delay:0.5})

// .box appear one after one (staggered) after the logo // 0.2 : ammount of time between the animation on each box
// TweenMax.staggerFrom(".box", 0.5, {opacity:0, y:200, delay:0.5}, 0.2)
TweenMax.staggerFrom(".box", 0.5, {opacity:0, y:200, delay:0.5, rotation:360, scale:2}, 0.2)

// Fade everything after anim + launch a function when completed
TweenMax.to("#logo4, .box", 0.5, {opacity:0, delay:2, onComplete:complete})

function complete() {
  // alert("all done")
  console.log("anim done");
}
// ---------------------
