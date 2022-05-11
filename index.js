//--------------------------------------------------Dependencies-----------------------------------------------------------------//
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./config/swaggerDoc.json');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('express-flash');

//--------------------------------------------------Imports-----------------------------------------------------------------//
const {PORT, session_secret} = require('./config/config');
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');
const cartRouter = require('./routes/cartRouter');
const orderRouter = require('./routes/orderRouter');
const { loadPassport } = require('./config/passportConfig');

const app = express();

//--------------------------------------------------Middleware-----------------------------------------------------------------//
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(session({
    secret: session_secret,
    resave: true,
    saveUninitialized: true 
}))
app.use(cookieParser(session_secret));
app.use(passport.initialize());
app.use(passport.session());
loadPassport(passport);

//--------------------------------------------------Routes-----------------------------------------------------------------//
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api', authRouter);
app.use('/api/user', userRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req, res) => {
    res.redirect('/api-docs');
})

//--------------------------------------------------Server-----------------------------------------------------------------//
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});


