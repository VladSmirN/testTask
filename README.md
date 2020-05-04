Установка: 
git clone https://github.com/VladSmirN/testTask/ -b vsem-edu
Перейти в папку с файлами
sudo chmod -R 777 ./storage
sudo chmod -R 755 ./public
Порт 3306 должен быть свбоден
sudo docker-compose up -d --build mysql
composer install 
php artisan migrate:refresh
Порт 8000 должен быть свободен
php artisan serve

Задание 1 
По роуту 127.0.0.1:8000/reviews/show
Код в https://github.com/VladSmirN/testTask/blob/vsem-edu/app/Http/Controllers/ReviewsController.php
      https://github.com/VladSmirN/testTask/blob/vsem-edu/resources/js/components/ShowComponent.vue  
Задание 2 
По роуту 127.0.0.1:8000/card
Код в https://github.com/VladSmirN/testTask/blob/vsem-edu/resources/js/components/CardComponent.vue
