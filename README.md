Technologies used include: JavaScript, JQuery HTML, SCSS, AJAX requests, 

Neon Styling credit goes to Thomas Trinca
https://codemyui.com/glowing-flicker-neon-text-effect/

Planning included user stories, wireframing, and diagraming the game logic with pen and paper. I started by mapping the game logic to JavaScript arrays and figured out how to emulate a 3X3 grid. I used my user stories to determine how I needed the board to function, ie what constitutes a win, what isn’t allowed, and when the game is tied.
I used a series of arrays to represent each possible win condition and upon each click of the grid, that would fill the box  with an alternating X or O, from a  9 length bank array that would shorten after each placement. This would also insert that character into the corresponding array of win conditions. After each placement I used a win checking function to see if any of the win condition arrays were filled with the same character. I also used a tie checking function to see if the bank array had reached zero without the win condition having been met. My problem solving strategy during this phase was largely about how to manipulate data into data types that made sense for the problems at hand. I needed to be very careful about the ordering of functions in my game, because it was very easy to break my game since I was running so many processes at once. I needed to do a lot of research on methods I didn’t know about, but because I knew specifically how I wanted to manipulate certain bits of data, I was able to search these out and apply them to my game. 
I also found the API section very difficult, and my pace dropped significantly once I got to it. I realized that I had some fundamental misunderstandings about how AJAX calls worked, and once I figured out what I was missing, I was able to implement all of the requirements except for retrieving game history. I also ran into trouble with the structuring of my files. I began by building everything into my index, and then used separate files for the AJAX calls, this became difficult to work with because I was trying to pass data in both directions at a point, and I had trouble accessing data.  

Unsolved Problems:
Include a game retrieval button
Find a way to clear the forms after entry (I had a method but it was clearing before the AJAX req)  
