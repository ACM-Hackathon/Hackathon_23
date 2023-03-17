const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

// Configuration of App
const PORT = 5500;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(session({
    secret : "This is Auth",
    resave : false,
    saveUninitialized : false
}))
app.use(passport.initialize());
app.use(passport.session());


// Configuring DataBase
mongoose.connect('mongodb://127.0.0.1:27017/catalyst', { useNewUrlParser : true});
const UserSchema = new mongoose.Schema({
    username : String,
    firstname: String,
    lastname: String,
    location: String,
    password : String,
    phonenumber: Number,
    harvest: Array,
    isStaff: Boolean
})
UserSchema.plugin(passportLocalMongoose);

const UserModel = mongoose.model('users', UserSchema);
passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());


const locationSchema = new mongoose.Schema({
    _id : Object,
    name: String,
    crops:  [{
        name: {
          type: String,
          required: true
        },
        introduction: {
          type: String,
          required: true
        },
        soil: {
            type: String,
            required: true
        },
        sowing: {
            type: String,
            required: true
        },
        fertilizers: {
            type: String,
            required: true
        },
        weed_management: {
            type: String,
            required: true
        },
        yield:{
            type: String,
            required: true
        },
        msp: {
          type: String,
          required: true
        },
        month:{
            type: String,
            required: true
        },
        schedule:{
            type: Object,
            require: true
        }

      }]
})

const locationModel = mongoose.model("locations", locationSchema);


app.get("/", (req, res)=>{
    res.render("index", {title: "title", crop:undefined})
})





// Authenctication Part 
// Login Get and Post
app.get('/login', (req, res)=>{
    let message = null;
    res.render('login', {message : message});
});


app.post('/login', (req, res)=>{
    const user = new UserModel({
        username : req.body.username,
        password : req.body.password
    })
    req.login(user, (err)=>{
        if(err){
            console.log(err);
            res.redirect('/login');
        }
        else{
            passport.authenticate('local')(req, res, ()=>{
                if(req.user.isStaff){
                    return res.redirect('/profile');
                }
                res.redirect('/crops')
            })
        }
    })
})

// Registor Get and Post
app.get('/register', (req, res)=>{
    res.render('login');
})

app.post('/register', (req, res)=>{
    UserModel.register({username : req.body.username, firstname: req.body.firstname, lastname: req.body.lastname, location: req.body.location, phonenumber: req.body.phonenumber}, req.body.password, (err, user)=>{
        if(err){
            console.log(err);
            res.redirect('/register')
        }
        else{
            passport.authenticate('local')(req, res, ()=>{
                res.redirect('/login');
            })
        }
    })
});

app.get('/logout', (req, res)=>{
    req.logout((err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/');
        }
    });

})
// Profile 
app.get('/profile', (req, res)=>{
    if(req.isAuthenticated() && req.user.isStaff){
        locationModel.findOne({name: req.user.location}, (err, result)=>{
            if(err){
                console.log(err);
            }
            else{
                let crops = result.crops;
                res.render('profile', {'crops': crops});
            }
        }
        );
    }
    else{
        res.redirect('/crops');
    }
})
app.post('/profile', (req, res)=>{
    let cropName = req.body.cropName;
    let price = req.body.price;
    locationModel.findOneAndUpdate(
        { 'name': req.user.location, 'crops.name': cropName },
        { $set: { 'crops.$.msp': price } },
        { new: true },
        (err, doc)=>{

        }
    );
    return res.redirect('crops');
      
})



// Crops Handling
app.get('/crops', (req, res)=>{
    if(req.isAuthenticated()){
        locationModel.findOne({name: req.user.location}, (err, result)=>{
            if(err){
                console.log(err);
                res.redirect('/login');
            }
            else{
                let crops = result.crops;
                
                let cityName = req.user.location;
                var appID = "12166c4882e0ab1ff59f3c9864b20917";
                var units = "metric";
                const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=" + units + "&appid=" + appID;
                https.get(url, (response) => {
                    // console.log(response.statusCode);
                    response.on("data", (data) => {
                        const wetherData = JSON.parse(data);
                        // console.log(wetherData);
                        const tmp = wetherData.main.temp;
                        const desc = wetherData.weather[0].description;
                        // console.log(desc);
                        const imgID = wetherData.weather[0].icon;
                        var iconurl = "http://openweathermap.org/img/wn/" + imgID + "@2x.png";
                        obj = {
                            'temp': tmp,
                            'cond': desc,
                            'iurl': iconurl
                        };
                        res.render("cropsInfo", { crops: crops, whe: obj, cityName:req.user.location });
                    });
                });
            }
        })
    }
    else{
        res.redirect('/login');
    }
});

app.get('/crops/add/:cropName', (req, res)=>{
    if(req.isAuthenticated()){
        locationModel.findOne({name: req.user.location}, (err, result)=>{
            if(err){
                console.log(err);
                res.redirect('/login');
            }
            else{
                for (let index = 0; index < req.user.harvest.length; index++) {
                    if(req.user.harvest[index].cropName == req.params.cropName){
                        return res.redirect("/crop/"+req.params.cropName);
                    }
                    else{
                        req.user.harvest.push({
                            'cropName' : req.params.cropName,
                            'harDate' : new Date()
                        })
                        req.user.save()
                        return res.redirect('/crop/'+req.params.cropName);
                    }
                }
            }
        })
    }
    else{
        res.redirect('/login');
    }
});



app.get('/crop/:cropName', (req, res)=>{
    if(req.isAuthenticated()){
        locationModel.findOne({name: req.user.location}, (err, result)=>{
            if(err){
                console.log(err);
                res.redirect('/login');
            }
            else{
                for (let index = 0; index < req.user.harvest.length; index++) {
                    if(req.user.harvest[index].cropName == req.params.cropName){
                        for (let i = 0; i < result.crops.length; i++) {
                            if(result.crops[i].name == req.params.cropName){
                                return res.render('roadmap', {sch: result.crops[i].schedule});
                            }
                        }
                    }
                }
                return res.send("Crops Not Harvested");
                
            }
        })
    }
    else{
        res.redirect('/login');
    }
})




app.listen(PORT, ()=>{
    console.log(` The Server is running at port ${PORT}`);
})

