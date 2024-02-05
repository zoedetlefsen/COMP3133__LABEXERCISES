const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/RestaurantRoutes'); // Import the routes

const app = express();
app.use(express.json());

const port = 3000;

mongoose.connect('mongodb+srv://root:4chJbbfBfyJNUOv5@cluster0.bs6u4dl.mongodb.net/?retryWrites=true&w=majority', 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(success => {
    console.log('Success Mongodb connection')
  }).catch(err => {
    console.log('Error Mongodb connection')
  });

app.use('/', restaurantRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
