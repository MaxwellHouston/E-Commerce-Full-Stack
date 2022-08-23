# E-commerce Website Project

## Max's Sporting Goods Store
This project is a mock e-commerce web app that I built for the Codecademy curriculum. I have always loved sports, so I decided to base the inventory and design on a sporting goods store. The project consists of three main sections, a PostgreSQL database, a back end built with Node.js, and the front end, which is built using React. The project is hosted on Heroku, and the link is provided below. Building a project of this size really tested me as a young developer but helped me find many ways of overcoming and solving problems on my own. Overall, it was a great learning experience and really gave me confidence in my coding ability. Please feel free to provide any feedback and improvements as I know it is far from perfect. 

### Heroku deployment
https://max-ecommerce-fullstack.herokuapp.com/

## Features
- The store database has 304 mock items, all with price points and sorted into 10 different categories.
- Users can register an account with either their email and password, or OAuth 2.0 from Google or Facebook.
- Update user information through the account page.
- Manage your shipping/billing addresses that are verified using the USPS API.
- Search for products from the search bar.
- Filter product results using the filters tab in the Shop page.   
- Add and remove products from your cart.
- Remove products and change quantity from the cart view.
- Complete checkout of cart with address and mock card information.
- Card input and verification handled using Stripe.js elements and API. 
- Review past orders.

### Coming Soon
- Favorites table so user can mark wishlist items.
- Mock shipping price and time using UPS API.
- Optimize for mobile use.

## How to use
To start, click the Sign Up button on the homepage. Enter your name, email, and password to create an account or sign in with your Google or Facebook account. Then using your email and password, login from the login page. Once logged in you can access anything in the app. View products in the shop section, manage your account and addresses in the accounts dropdown, and complete the checkout process with your cart. The billing is handled with Stripe API and they provide sample card information for mock checkouts. Enter this information when checking out to complete your order:

| Card Number | Expiration | CVC | Type |
| ----------- | ---------- | --- | ---- |
| 4242 4242 4242 4242 | Any Valid Date | Any | Accepted Visa
| 5555 5555 5555 4444 | Any Valid Date | Any | Accepted Mastercard
| 3782 822463 10005 | Any Valid Date | Any | Accepted Amex
| 6011 1111 1111 1117 | Any Valid Date | Any | Accepted Discover
| 4000 0000 0000 0002 | Any Valid Date | Any | Declined card

## Setup
Clone or download the project from Github and run npm install in the root directory as well as in the view folder to get the dependencies for both the front and back end. This project uses Postgresql so you need to have that set up and running on your computer. Create a database then enter the sql files provided in this order: tables.sql, triggers.sql, and products.sql. Next set up a .env file in the root directory with the following information. Be sure to include your own postgres server information in the database section. The PORT can be any port except 3000, as that is what the react front end will be running on, and the SESSION_SECRET can be any string. In order to use the OAuth 2.0 login or the USPS API you will need your own API codes. Check with the companies documentation on creating an account and getting these codes.
[Google Documentaion](https://support.google.com/cloud/answer/6158849?hl=en) | [Facebook Documentation](https://developers.facebook.com/docs/development#register) | [USPS Documentation](https://www.usps.com/business/web-tools-apis/welcome.htm)
```
#Example .env file
#SERVER CONFIGURATION
PORT=5000

#DB
DB_USER=*your database info*
DB_HOST=*your database info*
DB_DATABASE=*your database info*
DB_PASSWORD=*your database info*
DB_PORT=*your database info*

#GOOGLE
GOOGLE_CLIENT_ID=*your Google info*
GOOGLE_CLIENT_SECRET=*your Google info*

#FACEBOOK
FACEBOOK_CLIENT_ID=*your Facebook info*
FACEBOOK_CLIENT_SECRET=*your Facebook info*

#SESSION
SESSION_SECRET=ANYSTRING

#USPS
USER_ID=*your USPS info*
```
The project is now ready to deploy! run npm start in the root directory to load the server, then using a separate terminal, navigate to the view folder and run npm start to load the react application. 


## Technologies
This project is built using the PERN stack (PostgreSQL, Express, React, Node.js) and deployed using Heroku. Below are the dependencies used:

#### Express
- body-parser
- cors
- dotenv
- pg and pg-format
- bcryptjs
- express-validation
- express-session
- passport
- passport-local
- passport-facebook
- passport-google-oauth20
- express-flash
- stripe
- nodemon
- axios
- express-xml-bodyparser
- xml2js

#### React
- emotion/react
- emotion/styled
- mui/icons-material
- mui/material
- stripe/react-stripe-js
- stripe/stripe-js
- axios
- currency.js
- react
- react-dom
- react-modal
- react-router-dom
- react-scripts

## Documentation
I have included a Documents folder in the project that contains my initial wireframes for the web design as well as an ERD file for the database.