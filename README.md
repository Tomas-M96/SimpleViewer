# SimpleViewer
A basic JavaScript image viewer using modals

This is a basic image viewer that simply opens the image the user clicks on into a modal and displays it in its full size.

How to Use:
Create the Viewer:
-Create the DIV for your viewer and add the .viewer class and #viewer ID.
-Create the button element and add data-close-button to it.
-Add the IMG element and assign the #viewerImage ID to it.

Create the Overlay:
-Create another DIV and assign the #viewerOverlay ID to it.

Make Objects "Viewable":
-Add the .viewable class to any objects you want to be viewable.
-Add a data-modal-target tag to the object and have it point to the #viewer id.


Look at the index.html provided for an example.
