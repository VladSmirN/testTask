FROM nginx:latest

ADD docker/conf/nginx.conf /etc/nginx/conf.d/defauls.conf

WORKDIR /var/www/task 