CREATE TABLE `hype`.`order_details` (
  `order_details_id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `quantity` VARCHAR(45) NULL,
  `price` VARCHAR(45) NULL,
  PRIMARY KEY (`order_details_id`));
  
  CREATE TABLE `hype`.`wishlist_items` (
  `wishlist_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(45) NOT NULL,
  `product_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`wishlist_id`));
  
  CREATE TABLE `hype`.`payment` (
  `payment_id` INT NOT NULL,
  `order_id` INT NOT NULL,
  `payment_method` VARCHAR(100) NOT NULL,
  `payment_status` VARCHAR(45) NOT NULL,
  `payment_date` DATE NOT NULL,
  PRIMARY KEY (`payment_id`));
  
  
  DROP TABLE users;
  CREATE TABLE `hype`.`users` (
  `users_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`users_id`));
  
  CREATE TABLE `hype`.`product_images` (
  `p_image_id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `url` VARCHAR(5000) NOT NULL,
  PRIMARY KEY (`p_image_id`));
  
  
  
  INSERT INTO `hype`.`catergories` (`catergory_name`) VALUES ('Air Jordans');
INSERT INTO `hype`.`catergories` (`catergory_name`) VALUES ('Adidas ');
INSERT INTO `hype`.`catergories` (`catergory_name`) VALUES ('New Balnce');


INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Adidas Campus  00s', 'The Adidas Campus 00s are retro-inspired sneakers with a suede build, plush collar, and iconic 3-Stripes, blending \'80s and 2000s style for a modern streetwear look.\n\n', '3', '1399.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Adidas Yeezy Boost 350', 'The Adidas Yeezy Boost 350 is a popular sneaker designed by Kanye West, featuring a Primeknit upper and Boost cushioning for comfort.\n\n', '3', '8499.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Adidas Foam Runner', 'The Adidas Yeezy Foam Runner is a futuristic slip-on made from EVA and algae foam, featuring vents for breathability.\n\n', '3', '3549.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Clot Air Jordan 14 Low', 'The Clot Air Jordan 14 Low, inspired by the Terracotta Army, features a tan suede upper with armor-like embossed details and a red-stitched heel medallion.', '2', '3999.99');


INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Jordan 1 high OG TS', 'The Jordan 1 High OG TS SP Travis Scott, a collaboration with Travis Scott, features an oversized backward-facing Swoosh, Sail leather, Dark Mocha nubuck, and a hidden stash pocket', '2', '27999.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Jordan 4 Retro bred', 'The Jordan 4 Retro Bred features a black nubuck upper, grey accents, and red detailing, with \"Nike Air\" branding on the heel for a classic look.\n\n', '2', '8199.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Jordan 4 Retro Cool Gray', 'The Jordan 4 Retro Cool Gray has a grey nubuck upper, white midsole, black accents, and yellow details.', '2', '5999.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('New Balance 550', 'The New Balance 550 is a retro basketball sneaker with a classic \'80s design, featuring a leather upper, perforated details, and a cushioned midsole for comfort and style.', '4', '2499.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('New Balance 9060', 'The New Balance 9060 blends classic running aesthetics with modern design, featuring mesh, suede, ABZORB cushioning, and a unique midsole.', '4', '3599.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Air Dt Max 96 ', 'The Nike Air DT Max 96 Falcons, inspired by Deion Sanders\' time with the Atlanta Falcons, features a black nubuck upper with metallic silver and fire red accents, and visible Air Max cushioning.', '1', '4199.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Air foamposite One Penny PE', 'The Nike Air Foamposite One Penny PE features a white Foamposite upper with black tumbled leather trim, inspired by Penny Hardaway\'s \'90s PE colorway', '1', '5199');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Air Pipen Black Varsity ', 'The Nike Air Pippen Black Varsity features a black nubuck upper with Varsity Red accents, a sculpted white midsole, and a full-length Max Air unit for cushioning', '1', '4999.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Air Step air terra', 'The Nike Hot Step Air Terra, a collaboration with Drake\'s NOCTA line, features a tumbled leather upper, perforated detailing, and a sculpted midsole with visible Air cushioning', '1', '4999.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Air Griffey Max 2', 'The Nike Air Griffey Max 2, inspired by baseball legend Ken Griffey Jr., features a mix of materials, a boldly constructed upper, and visible Air Max cushioning for comfort and style', '1', '4999.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Air Max 1 Patta Noise Aqua', 'The Nike Air Max 1 Patta Noise Aqua, a collaboration with Patta, features a wavy mudguard design, Pure Platinum upper, and Aqua accents for a fresh look', '1', '5399.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Air Max 90 OG \'Infrared\'', 'The Nike Air Max 90 OG \'Infrared\' features a white mesh upper with grey suede and black leather overlays, highlighted by iconic Infrared accents', '1', '3599.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Air Max 95 OG \'Neon\'', 'The Nike Air Max 95 OG \'Neon\' features a gradient grey suede upper, white mesh, and neon green accents, with reflective detailing and visible Air Max cushioning', '1', '3999.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Air Max 97 OG \'Silver Bullet\'', 'The Nike Air Max 95 OG \'Neon\' features a gradient grey suede upper, white mesh, neon green accents, reflective detailing, and visible Air Max cushioning.', '1', '4499.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Air Max 98 OG \'University Red\'', 'The Nike Air Max 98 OG \'University Red\' features a white mesh base with vibrant University Red leather overlays, reflective accents, and a full-length Max Air unit', '1', '4399.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Air Max Plus OG Sunset', 'The Nike Air Max Plus OG Sunset features a gradient orange-to-yellow upper, black accents, and Tuned Air cushioning for a bold, eye-catching look', '1', '429999');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Air Max Pillar Retro \'Michigan\'', 'The Nike Air Max Pillar Retro \'Michigan\' features a Midnight Navy upper with Varsity Maize accents, synthetic leather and mesh construction, and a full-length Air Max unit', '1', '11899.9');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Dunk Low off white \'Pine Green\'', 'The Nike Dunk Low Off-White \'Pine Green\', a collaboration with Virgil Abloh, features a white leather upper with Pine Green overlays, unique secondary lacing, and signature Off-White text', '1', '200099.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Cortez OG \'White\'', 'The Nike Cortez OG \'White\' features a white leather upper, red Swoosh, and a classic herringbone outsole for a timeless look', '1', '26999.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Shox R4 Orlando', 'The Nike Shox R4 Orlando features a white upper with metallic silver and royal blue accents, and the signature Shox columns for cushioning', '1', '7199.99');
INSERT INTO `hype`.`products` (`name`, `description`, `catergory_Id`, `price`) VALUES ('Nike Air Max x Sean WotherSpoon', 'The Nike Air Max 1/97 Sean Wotherspoon, a collaboration with Sean Wotherspoon, features a multicolor corduroy upper, combining the Air Max 97 upper with the Air Max 1 sole for a unique, retro-inspired design', '1', '37183.33');

ALTER TABLE products
ADD CONSTRAINT fk_category
FOREIGN KEY (catergory_id)
REFERENCES catergories(catergory_id);




CREATE TABLE cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    users_id INT NOT NULL,
    product_id INT  NOT NULL, -- Ensure this matches products.product_id
    quantity INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    -- FOREIGN KEY (users_id) REFERENCES users(users_id),
--     FOREIGN KEY (product_id) REFERENCES products(product_id)
);

CREATE TABLE cart (
  cart_id INT AUTO_INCREMENT PRIMARY KEY,
  users_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL
);

ALTER TABLE `hype`.`cart` 
ADD INDEX `users_id_idx` (`users_id` ASC) VISIBLE;
;
ALTER TABLE `hype`.`cart` 
ADD CONSTRAINT `users_id`
  FOREIGN KEY (`users_id`)
  REFERENCES `hype`.`users` (`users_id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;


CREATE TABLE `hype`.`checkout` (
  `checkout_id` INT NOT NULL AUTO_INCREMENT,
  `card_number` INT NOT NULL,
  `expiry_date` VARCHAR(45) NOT NULL,
  `cvv` INT NOT NULL,
  PRIMARY KEY (`checkout_id`)); 
  
ALTER TABLE checkout
ADD COLUMN adress_id INT;
  
  
ALTER TABLE checkout
ADD CONSTRAINT fk_address
FOREIGN KEY (adress_id)
REFERENCES addresses(adress_id)
ON DELETE CASCADE
ON UPDATE CASCADE;




  