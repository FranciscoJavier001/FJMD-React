Mis Anotaciones

Para correr este servidor lo primero que necesito es ejecutar el comando "npm run dev"

Connect Mongo
db user: mern_user
db pass: 4f0QVqSSQ2F2IQew

Anotaciones Independientes
21/12/24 : 
Subir todo a Git
Entrar a Heroku
Asegurarme que funciona el comando npm start - este comando lo va a buscar HEROKU
Hacer Validacion del puerto PORT en index.js
Heroku>new app> choosing name> create
Heroku Git
Instalacion Heroku
    brew tap heroku/brew && brew install heroku
Ahora Para empezar a usar Heroku
    heroku login
        Ya debemos estar el git, porque aqui nos dice git init, pero ya subi todo al repo
    heroku git:remote -a mern-calendar-frank
    git push heroku master