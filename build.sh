sudo chmod -R 777 ./storage
sudo chmod -R 755 ./public

echo "start building"

sudo docker-compose up -d --build

sudo docker-compose exec fpm cp .env.example .env && php artisan key:generate

echo "end building"