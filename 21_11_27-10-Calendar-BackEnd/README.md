Mis Anotaciones

Para correr este servidor lo primero que necesito es ejecutar el comando "npm run dev"

Connect Mongo
db user: mern_user
db pass: 4f0QVqSSQ2F2IQew

Anotaciones Independientes
21/12/24 : 
Subir todo a Git
Entrar a Heroku
Asegurarme que funciona el comando 
    npm start - index.js
este comando lo va a buscar HEROKU
Hacer Validacion del puerto 
PORT - index.js
Heroku>new app> choosing name> create
Heroku Git
Instalacion Heroku
heroku --version
    brew tap heroku/brew && brew install heroku
Ahora Para empezar a usar Heroku
    git init
    git add .
    git commit -m "Backend Calendar Mern"   
    heroku login
    heroku git:remote -a mern-calendar-frank
    git push heroku master

Cuando usaba el localhost
    localhost:4000/api/auth/ "new, renew"
    localhost:4000/api/events 

    https://mern-calendar-frank.herokuapp.com "ya en linea esta es la URL, postman"

Mongo Web
Network Access - Agregar 0.0.0.0/0 para usar postman y hacer los endpoints publicos

Funciona Todo en Postman

Para saber los logs
heroku logs -n 1000 --tail