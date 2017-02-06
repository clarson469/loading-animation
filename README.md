# loading-animation
A simple loading animation using JS and CSS3
The animation is technically pure CSS, it just uses JS to initialise and remove the animation as required
  
You can watch it happen here[https://codepen.io/clarson469/pen/QdBpwJ]
 - though it should be noted the code in the Pen is a bit different, but that's just to make it a better pen
  
Contains two versions of the `main()` function:
 - the first is for demonstration purposes, it uses `setTimeout()` to mimc some asynchronous loading operation
 - the second, which is commented-out, is the one you would use in production, where you need to provide a logic statement to determine whether to end the loading animation or not.
   - so for example in a React project (or any other project that bundles a bunch of JS _and_ that creates HTML elements) I check that one of those elements existed to verify that the bundke had loaded and it was time to end the loading animation
  
Also - the "css" folder doesn't do anything functionally, but it has all the styling used for the animation in a more readable format. There is no need to include this file in a production build - it isn't linked to at all in "loading.html"
