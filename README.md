 
## Run Locally  
Clone the project  

~~~bash  
  git clone https://github.com/HamasakiBrain/jilfond-test.git
~~~

Go to the project directory  

~~~bash  
  cd jilfond-test
~~~

Install dependencies  

~~~bash  
npm install
~~~

Install vendors

~~~bash
composer install
~~~

Copy .env
~~~bash
cp .env.example .env
~~~

Change configuration to your Database
~~~bash
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database
DB_USERNAME=root
DB_PASSWORD=
~~~

And init database migrations

~~~bash
php artisan migrate
~~~

Start the server  

~~~bash  
npm run start
~~~  

Для логирования авторизации, регистрации, выхода мы используем библиотеку 
[rappasoft/laravel-authentication-log](https://github.com/rappasoft/laravel-authentication-log) 
