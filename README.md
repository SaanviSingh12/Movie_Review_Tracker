# Movie_Review_Tracker
This is a Full-stack Project which include front-end that takes review of a movie by user and in Back-end it stores the data in MongoDB database .

Functionalities :
Main front-end page consist of a form which ask for movie details from user and display 'All Movies List ' button, Which when clicked it takes user to 
other page that shows all the movies entered by user by extracting data from MongoDb database . 
All the movies in list contains two options i.e DELETE and UPDATE . "DELETE" option will delete the movie from database using its unique id."UPDATE" option will ask user 
the updated info and changes it in database as well using unique id of movie.

Technologies Used:
1. Front-End : HTML , CSS , Javascript , EJS(Embedded Javascript Templating )
2. Back-End : Nodejs , Express JS, MongoDB , Mongoose.

About Folders:
1. assets : This folder contains CSS folder which further contains files of css required by html files in frontend , JS folder which contains .js files for frontend

2.config : This folder contains mongoose.js file that sets up connection of mongoDB database and mongoose ODM(object data modeling).

3.models : This folder contains Movies.js file which defines schema of movie details we require to store in database .
 
4.views : This folder contains all the .ejs files used for frontend.

5. index.js File : This is the main file from which server is started on port 3000 . Express Server is made in this file and controllers are build in it .

