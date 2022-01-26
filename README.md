<h1>BS_EDUCATION</h1>
<p>Для начала просто требуется скачать репо и исполнить команды:
<br>composer install //установка vendor
<br>npm install //установка node_modules
<br>
<h3>v1.0 MID</h3>
<br>composer require laravel/sanctum //установка Sanctum
<br>php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider" //установка Sanctum
<br>composer require laravel/fortify //установка Fortify
<br>php artisan vendor:publish --provider="Laravel\Fortify\FortifyServiceProvider" //установка Fortify
<br>php artisan migrate // для БД
<br>php artisan db:seed // для заполения БД ролями и городами
<br>php artisan storage:link (для файлов Laravel ссылки в папку public)
</p>

<h3>v1.0 arm</h3>
<p> npm i @emotion/react @emotion/styled @mui/icons-material @mui/lab @mui/material @mui/styles // установка material ui
<br> npm i mobx mobx-react-lite yup // установка state manager mobx 
<br> Добавлен роутинг и некоторые компоненты в приложение
</p>


