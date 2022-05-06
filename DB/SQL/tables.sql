CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name varchar(20) NOT NULL,
    last_name varchar(20) NOT NULL,
    email varchar(50) UNIQUE NOT NULL,
    password varchar(100) NOT NULL,
    created timestamp NOT NULL,
    modified timestamp
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
    user_id integer REFERENCES users(id),
    created timestamp NOT NULL,
    modified timestamp
);

CREATE TABLE cart_product (
    cart_id integer REFERENCES cart(id),
    product_id varchar(6) REFERENCES product(id),
    qty integer NOT NULL,
    PRIMARY KEY (cart_id, product_id)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES users(id),
    total_price money DEFAULT 0,
    status varchar(20) NOT NULL,
    created timestamp NOT NULL,
    modified timestamp
);

CREATE TABLE order_product (
    order_id integer REFERENCES orders(id),
    product_id varchar(6) REFERENCES product(id),
    price money NOT NULL,
    qty integer NOT NULL,
    PRIMARY KEY (order_id, product_id)
);