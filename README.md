# cms-api
A simple cms with rest api. This app jus demonstrate the BREAD (Browse, Read, Edit, Add, Delete) with Express REST-API on the server, and Vue.JS on the client side.

### Technologies
#### Server Side
* Node.JS
* Express.js
* MongoDB
* Mongoose
* Passport
* JsonWebToken

#### Client Side
* HTML5
* CSS3
* Bootstrap
* Vue.JS

### File Structures
```
.
├── LICENSE
├── client
│   ├── css
│   │   └── style.css
│   ├── index.html
│   └── js
│       └── main.js
└── server
    ├── app.js
    ├── bin
    │   └── www
    ├── controllers
    │   ├── authController.js
    │   ├── dataController.js
    │   └── dataDateController.js
    ├── models
    │   ├── DataDates.js
    │   ├── Datas.js
    │   └── Users.js
    ├── package.json
    └── routes
        ├── apiData.js
        ├── apiDataDate.js
        ├── auth.js
        └── index.js
```

### package.json (Server Side Dependencies)

```
{
  "name": "server",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "cors": "^2.8.1",
    "debug": "~2.2.0",
    "express": "~4.13.4",
    "express-jwt": "^5.1.0",
    "jade": "~1.11.0",
    "jsonwebtoken": "^7.1.9",
    "mongodb": "^2.2.11",
    "mongoose": "^4.6.8",
    "morgan": "~1.7.0",
    "passport": "^0.3.2",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^4.0.0",
    "serve-favicon": "~2.3.0"
  }
}
```

### API Endpoints

**Will documenting it later** 
| Endpoint | Method | Action |
|----------|--------|--------|
| /api/data/ | GET | get all data |
| /api/data/ | POST | post new data |
