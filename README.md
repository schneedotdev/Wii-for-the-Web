<div align="center">
  <h1>Wii for the Web</h1>
  <p>Nintendo Wii for the web with a wiimote that tracks to cursor movements.</p>
  <p><b>Live Website:</b> https://wiifortheweb.netlify.app/</p>
</div>

<div align="center">
  <img src="https://user-images.githubusercontent.com/77141303/169122829-3ea6f856-c4e6-450b-ab83-6687b4523683.gif">
</div>


## How It's Made:

**Tech used:** HTML, CSS, JavaScript

The idea stemmed from the curiosity of tracking cursor movements in my browser window. As I started to build the concept of a wiimote tracking to the position of my cursor, I figured out I would need to utilize CSS transformations to give the perspective of a real hand moving a controller. In my JavaScript, I first determine the size of the browser window 
I am dealing with (this will come in use later when I set specific movements relative to the window width and height). If the window is ever resized, the values stored will be reassigned. I then add an event listener for mouse movements which will track the coordinates of my cursor. There are three more steps required in order to move the image of the wiiremote 
relative to cursor movements. I must move the image based on where my cursor moves, tilt the image forward and backwards when the cursor moves vertically and rotate the image when the cursor moves horizontally. This gives the perspective of a human controlling the movements. Within the codeblock where I rotate the image, I additionally translate 
the center point in which the image is rotated from. This is necessary because as I rotate the image, the top of the wiimote will no longer point to the cursor. The translation allows it so that the new line pointing from the top of the controller can point to the cursor. 

## Future Optimizations:

<ul>
  <li>Create loading screen for Wii Sports in HTML/CSS.</li>
  <li>Add the option to customize the wiimote.</li>
  <li>Make the date/time on the wii menu page, represent real time.</li>
</ul>

## Lessons Learned:

<ul>
  <li>Cursor locations can be coordinates can be tracked.</li>
  <li>While adding event listeners for mouseover, make sure the event listener exists at the bottom of your JavaScript file.</li>
  <li>In order to achieve the feeling that the wiimote is tracked as if it were being held by an actual hand, multiple CSS transformations are required.</li>
  <li>The elements rotation varies depending on how far the cursor is from the center of the screen horizontally</li>
  <li>As the wiimote element is rotated, the elements center point should be translated so that the direction that the top of the wiimote points to, can properly be directred toward the cursor.</li>
  <li>As the cursor is moved vertically, the elements height should changed in order to simmulate a tilting perspective.</li>
</ul>
