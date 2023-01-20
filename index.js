
const express=require('express');
// Assigning the port
const port=3000;
const app=express();
const db=require('./config/mongoose');                  /*setting up mongodb and Scehma in mongoose.js file*/ 
const Movies=require('./models/Movies');

const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded());
app.use(express.static('assets'));

app.set('view engine','ejs');                                   /*Setting up ejs engine*/
const path=require('path');
app.set('views',path.join(__dirname,'views'));                       /*Joining current path and views folder path*/


app.get('/',function(req,res){
    return res.render('home',{                                    /* controller to render home page at local host*/
    });
});

app.post('/movie-details',function(req,res){ 
    console.log(req.body);                       // controller to add movie details
    Movies.create({
        name:req.body.name,
        type:req.body.movieType,
        dateOfRelease:req.body.dateOfRelease,
        favCharacter:req.body.favCharacter,
        movieRating:req.body.rating
    },function(err,newMovie){
        console.log("Movie is created",newMovie);
        if(err){
            console.log('Error in creating Movie-Details ');
            return;
        }
      
        res.redirect('back');
        // res.json(newMovie);
    })
});

app.get('/movie-list',function(req,res){
    Movies.find({},function(err,movie){
        console.log("Details is here in ",movie);
        if(err){
            console.log('Error in fetching Movie Details');                     /*fetching movie details list from Mongodb database*/
            return;
        }
        return res.render('movieList',{
            List:movie
        }); 
        // res.json(movie);
    });
});

app.get('/update-Movie',function(req,res){
   Movies.findById(req.query.id,function(err,movie){                        /*Redirecting user to update form page*/ 
             if(err){
                console.log(err);
                return;
             }
             res.render('update',{
                movies:movie
             })
   });
});
app.post('/update-Movie',function(req,res){
    console.log(req.body);
    const changeMovieData={
            name:req.body.name,
            type:req.body.movieType,                          /*Updating changes, saving it in database and redirecting user to Movie List Page */
            dateOfRelease:req.body.dateOfRelease,
            favCharacter:req.body.favCharacter,
            movieRating:req.body.rating
    }
    Movies.findByIdAndUpdate(req.query.id,changeMovieData,function(err){
        // console.log(movie);
        if(err){
            console.log("Error in updating data",err);
            return;
        }
        return res.redirect('../movie-list'); 
        // res.json(changeMovieData);
    });

});


app.get('/delete-Movie',function(req,res){
    let id=req.query.id;
    Movies.findByIdAndDelete(id,function(err){                                  // Controller to delete movie detail
        if(err){
            console.log('Error in deleting an onjects');
            return;
        }
    });
    return res.redirect('back');
});

app.listen(port,function(err){                                                              /*Listener to localhost */ 
    if(err){
        console.log('Error in running the server');
    }
    console.log('Exress server is runnning ');
})