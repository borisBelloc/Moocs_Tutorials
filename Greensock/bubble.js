// TweenMax.to(".bubble", 1, {opacity:0.5, rotation:45});
// TweenMax.to("#ball3", 1, {opacity:0.5, rotation:45});


// TweenMax.to("#ball3", 5, {padding:"50px", rotation: 180});
// TweenMax.to("#ball3", 2, {left:1000});

// TweenMax.to("#toto", 2, {x:300});
// TweenMax.from( "#toto", 2,{css:{scale:.05, opacity:0, rotation: 180}, ease:Quad.easeInOut}, 400,-400);

// TweenMax.from( "#ball3", 2,{css:{rotation: 180}, ease:Quad.easeInOut}, 400,-400);


// TweenMax.to("#ballTest", 2, {x:300});

// TODO: NEED TO REMOVE BUBBLEMOVE TO MAKE THE BUBLE DO AN OTHER MOVE

// Remove bubblemove
// TweenMax.to("#ballDjango", 0.5, {className:"-=bubble", overwrite:"none"})
// TweenMax.to(".green", 0.5, {className:"-=ball::before", overwrite:"none"})
// TweenLite.to(".green", 0.5, {className:"-=bubble:after", overwrite:"none"})


// Todo: comment remetre le bubble move sans retourner en position initial ?
TweenMax.to("#ballDjango", 0, {className:"-=bubbleMove", overwrite:"none"})
TweenMax.to("#ballDjango", 1, {x:500, rotation:360});
// TweenMax.to("#ballDjango", 1, {className:"+=bubbleMove", overwrite:"none", delay:2})
