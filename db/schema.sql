DROP DATABASE IF EXISTS hispanicallyMedia_db; 
create database hispanicallyMedia_db;
use hispanicallyMedia_db;
create table  article(  
    id int(10) auto_increment not null,
    article_name varchar(60) not null,
    devoured boolean not null,
    primary key(id)
);