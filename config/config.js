require('dotenv').config();

module.exports = { 
    
    PORT: process.env.PORT || 8000,

    dbLogin: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    },

    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,

    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,

    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,

    node_env: process.env.NODE_ENV,

    database_url: process.env.DATABASE_URL,

    session_secret: process.env.SESSION_SECRET,

    USPSID: process.env.USER_ID
}