# loading-animation
A simple loading animation using JS and CSS3
The animation is technically pure CSS, it just uses JS to initialise and remove the animation as required
  
Contains two versions of the `main()` function:
 - the first is for demonstration purposes, it uses `setTimeout()` to mimc some asynchronous loading operation
 - the second, which is commented-out, is the one you would use in production, where you need to provide a logic statement to determine whether to end the loading animation or not.
   - so for example in a React project (or any other project that bundles a bunch of JS _and_ that creates HTML elements) I check that one of those elements existed to verify that the bundke had loaded and it was time to end the loading animation
