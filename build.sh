sudo chmod -R 777 ./storage
sudo chmod -R 755 ./public
composer install 
sudo docker-compose up -d --build mysql
php artisan migrate:refresh
php artisan migrate:refresh
php artisan serve