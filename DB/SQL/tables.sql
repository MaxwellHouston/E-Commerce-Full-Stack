CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name varchar(20) NOT NULL,
    last_name varchar(20) NOT NULL,
    email varchar(50) UNIQUE NOT NULL,
    password varchar(100) NOT NULL,
    created timestamp NOT NULL,
    modified timestamp
);

CREATE TABLE address (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES users(id) ON DELETE CASCADE,
    street varchar(100) NOT NULL,
    city varchar(100) NOT NULL,
    state varchar(2) NOT NULL,
    zip varchar(5) NOT NULL,
    comments varchar(250)
);

CREATE TABLE product (
    id varchar(6) PRIMARY KEY,
    name varchar(50) NOT NULL,
    price money NOT NULL,
    sport varchar(20) NOT NULL,
    category varchar(20),
    description varchar(250) NOT NULL,
    size varchar(10),
    color varchar(10)
);

CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES users(id) ON DELETE CASCADE,
    created timestamp NOT NULL,
    modified timestamp
);

CREATE TABLE cart_product (
    cart_id integer REFERENCES cart(id) ON DELETE CASCADE,
    product_id varchar(6) REFERENCES product(id) ON DELETE CASCADE,
    qty integer NOT NULL,
    PRIMARY KEY (cart_id, product_id)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES users(id) ON DELETE CASCADE,
    total_price money DEFAULT 0,
    status varchar(20) NOT NULL,
    created timestamp NOT NULL,
    modified timestamp
);

CREATE TABLE order_product (
    order_id integer REFERENCES orders(id) ON DELETE CASCADE,
    product_id varchar(6) REFERENCES product(id) ON DELETE CASCADE,
    price money NOT NULL,
    qty integer NOT NULL,
    PRIMARY KEY (order_id, product_id)
);