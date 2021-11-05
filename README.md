Features

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

AWS s3
-videos are uploaded directly via the browser to s3 bucket using a pre-signed url because of there size and server memory requirements
-photos are uploaded via the laravel server for the purpose of manipulating the size before storing them in the s3 bucket

Real-time updates using pusher
-real-time updates occur when a post,video,photo,category,country thumbnail or comment is updated
