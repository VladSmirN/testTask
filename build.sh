sudo chmod -R 777 ./storage
sudo chmod -R 755 ./public
sudo docker-compose up -d --build mysql
composer install 
php artisan migrate:refresh
php artisan serve