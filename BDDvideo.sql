CREATE DATABASE videoDB
CHARACTER
SET 'utf8';

USE videoDB;

CREATE TABLE videos (
    video_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR
(100),
    pseudo VARCHAR
(50),
    view INT,
    resume_video VARCHAR
(100),
    creation_date DATE,
    img VARCHAR
(100),
    link VARCHAR
(100),
    user_id INT,
    category_id INT
)
ENGINE=INNODB;

/* INSERT INTO videos
VALUES
    (NULL, 'Salutatouslesamis', 'pseudo1', 0, 'grosse video easy', '1994-04-23', 'image/img.jpg'
        , 'image/videos/coucou.mp4', 2, 1),
    (NULL, 'huiuhjijbhjijh', 'pseudo2', 1, 'trop bien', '1993-09-29', 'image/img1.png' , 'image/videos/rjfo.mp4', 1, 3); */

CREATE TABLE categories (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    text_category VARCHAR
(50)
)
ENGINE=INNODB;

INSERT INTO categories
VALUES
    (NULL, 'cuisine'),
    (NULL, 'musique'),
    (NULL, 'jeux videos'),
    (NULL, 'culture'),
    (NULL, 'sciences');

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    lastname VARCHAR
(20),
    firstname VARCHAR
(20),
    pseudo VARCHAR
(30),
    profilPic VARCHAR
(100), 
    email VARCHAR
(50) UNIQUE,
    password_user VARCHAR
(500),
    role_id INT,
    date_of_birth DATE,
    gender VARCHAR
(10)
)
ENGINE=INNODB;

/* INSERT INTO users
VALUES
    (NULL, 1, 'Metais', 'Nicolas', 'Larks', 'Images/Profil.png', 'aaa@gmail.com', 'coucou', 1 , '1995-03-15', 'homme'),
    (NULL, 2, 'hij', 'jjhjj', 'ooppo', 'Images/Profil.png', 'bbbb@gmail.com', 'mdp', 2, '1934-12-12', 'femme'); */

CREATE TABLE roles (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    role_txt VARCHAR
(20)
)
ENGINE=INNODB;

INSERT INTO roles
VALUES
    (NULL, 'inscrit'),
    (NULL, 'modérateur'),
    (NULL, 'Admin');

CREATE TABLE Comments (
    comment_id INT PRIMARY KEY AUTO_INCREMENT,
    text_comment VARCHAR
(300),
    user_id INT,
    video_id INT,
    creation_date DATE
)
ENGINE=INNODB;

CREATE TABLE Subscribe (
    subscribe_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    follow_id INT
)
ENGINE=INNODB;

CREATE TABLE Follow (
    follow_id INT PRIMARY KEY AUTO_INCREMENT
)
ENGINE=INNODB;

ALTER TABLE Subscribe
ADD CONSTRAINT fk_SubscribeToUser FOREIGN KEY (user_id) REFERENCES users(user_id);

ALTER TABLE Subscribe
ADD CONSTRAINT fk_SubscribeToFollow FOREIGN KEY (follow_id) REFERENCES Follow(follow_id);

ALTER TABLE videos
ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (user_id);

ALTER TABLE videos
ADD CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES categories (category_id);

ALTER TABLE comments
ADD CONSTRAINT fk_commentToUser FOREIGN KEY (user_id) REFERENCES users (user_id);

ALTER TABLE comments
ADD CONSTRAINT fk_commentToVideo FOREIGN KEY(video_id) REFERENCES videos (video_id);

ALTER TABLE users
ADD CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles (role_id);

