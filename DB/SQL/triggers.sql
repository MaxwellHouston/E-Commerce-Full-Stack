CREATE OR REPLACE FUNCTION modify_timestamp()
RETURNS TRIGGER AS 
$$ 
  BEGIN
  	NEW.modified = NOW();
    RETURN NEW;
  END;
$$ 
LANGUAGE PLPGSQL;



CREATE OR REPLACE FUNCTION modify_cart_timestamp()
RETURNS TRIGGER AS 
$$ 
  BEGIN
    IF (TG_OP = 'INSERT') THEN
      UPDATE cart
      SET modified = NOW()
      WHERE id = NEW.cart_id;
      RETURN NEW;
    ELSIF (TG_OP = 'DELETE') THEN
      UPDATE cart
      SET modified = NOW()
      WHERE id = OLD.cart_id;
      RETURN OLD;
    END IF;
  END;
$$ 
LANGUAGE PLPGSQL;



CREATE TRIGGER update_timestamp_order
BEFORE UPDATE ON orders
FOR EACH ROW
EXECUTE PROCEDURE modify_timestamp();




CREATE TRIGGER update_timestamp_user
BEFORE UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE modify_timestamp();




CREATE TRIGGER update_timestamp_cart
BEFORE INSERT OR DELETE ON cart_product
FOR EACH ROW
EXECUTE PROCEDURE modify_cart_timestamp();