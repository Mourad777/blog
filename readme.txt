Features

Design using the Greensock library
-animating the stroke-dash-offset css property on a path element based on scroll to create an effect where a dashed line gets drawn as the user scrolls down, the path coordinates are
generated using a custom drawn line in adobe illustrator
-snapping the main page sections on scroll

Comments
-recursive function to infinitly nest comments so that users can reply to others comments any number of times that they want

File Storage
-AWS is used for all file Storage
-Images are resized before storing them in AWS using Image Intervention
    ->GD library must be activated to use Image Intervention (xampp control panel-> Apache -> config -> php.ini -> remove semicolon on ;gd=extension)

Database
-mysql is used to store data
-pivot tables are used to link posts, videos, and photos to different categories
-one to many relationships are used to link comments with videos and comments with posts

Admin photo/video gallery
-drag and drop
-the order of the photos and videos is stored in the configuration table
-the meta data of a photo taken from a camera (make, model, lens, settings, date) is stored in the database automatically upon uploading
