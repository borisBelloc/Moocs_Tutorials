// * DOC
// Remove multiple class : https://greensock.com/forums/topic/17412-correct-syntax-to-remove-multiple-classes/
// ***********

// TweenMax.to(".bubble", 1, {opacity:0.5, rotation:45});
// TweenMax.to("#ball3", 1, {opacity:0.5, rotation:45});


// TweenMax.to("#ball3", 5, {padding:"50px", rotation: 180});
// TweenMax.to("#ball3", 2, {left:1000});


// TweenMax.from( "#ball3", 2,{css:{rotation: 180}, ease:Quad.easeInOut}, 400,-400);


// TweenMax.to("#ballTest", 2, {x:300});

// TODO: NEED TO REMOVE BUBBLEMOVE TO MAKE THE BUBLE DO AN OTHER MOVE

// Remove bubblemove
// TweenMax.to("#ballDjango", 0.5, {className:"-=bubble", overwrite:"none"})
// TweenMax.to(".green", 0.5, {className:"-=ball::before", overwrite:"none"})
// TweenLite.to(".green", 0.5, {className:"-=bubble:after", overwrite:"none"})


// Todo: comment remetre le bubble move sans retourner en position initial ?
TweenMax.to(".bgRed", 0, {className:"-=bubbleMove", overwrite:"none"})
TweenMax.to(".bgRed", 1, {x:500, rotation:360});
// TweenMax.to("#ballDjango", 1, {className:"+=bubbleMove", overwrite:"none", delay:2})
// TweenMax.to(".bgRed", 1, {className:"+=bubbleMoveAndMove", delay:2})

TweenMax.to("#ballMove", 1, {className:"+=bubbleMoveAndMove"})

// dans le cas ou une animation remet l'objet a la position initiale... 
// essayer de supprimer la position initiale du CSS (-> objet invisible)
// ensuite mettre une position initiale dans l'animation ?


TweenMax.to("#blackCube", 2, {x:300});
TweenMax.from( "#blackCube", 2,{css:{scale:.05, opacity:0, rotation: 180}, ease:Quad.easeInOut}, 400,-400);


// * on complete : https://greensock.com/forums/topic/8521-add-class-after-animation/
TweenMax.to("#morph", 2, {height:"80px", width:"80px", borderRadius:"50%", onComplete: function() {
  $("#morph").addClass("morph-background");
}});