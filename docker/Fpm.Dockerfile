FROM php:7.2-fpm

RUN docker-php-ext-install pdo pdo_mysql 

WORKDIR /var/www/task 
