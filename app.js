// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors')

// const errorController = require('./controllers/error');
// const sequelize = require('./util/database');
// const Product = require('./models/product');
// const User = require('./models/user');
// const Cart = require('./models/cart');
// const CartItem = require('./models/cart-item');
// const Order = require('./models/order');
// const OrderItem = require('./models/orderItem');

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.json());

// // app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(cors())

// app.use((req, res, next) => {
//   User.findByPk(1)
//     .then(user => {
//       req.user = user;
//       next();
//     })
//     .catch(err => console.log(err));
// });

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);

// app.use(errorController.get404);

// Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });

// Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product, { through: OrderItem})


// sequelize
//   //.sync({ force: true })
//   .sync()
//   .then(result => {
//     return User.findByPk(1);
//     // console.log(result);
//   })
//   .then(user => {
//     if (!user) {
//       return User.create({ name: 'Max', email: 'test@test.com' });
//     }
//     return user;
//   })
//   .then(user => {
//     // console.log(user);
//     return user.createCart();
//   })
//   .then(cart => {
//     app.listen(3000);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// sql
const express = require("express");
const app = express();
const path = require ('path')
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, `views`)));
const shopRoutes = require("./routes/shop");
const userRoutes = require("./routes/user");



const con = require("./util/database");
const { dirname } = require("path");

app.use("/shopping",shopRoutes);
app.use("/user",userRoutes);

app.use("/signup",(req,res)=>
{
  console.log(__dirname);
  res.status(404).sendFile(path.join(__dirname,'./','views','signup.html'));
})
con.connect(function(err){
  if(err)throw err;
  console.log("Connected!!");
  app.listen(3000);
})