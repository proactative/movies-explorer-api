# Project "Movies explorer"

![shield](https://img.shields.io/badge/status-release-brightgreen)
![shield](https://img.shields.io/badge/version-1.0.0-blue)

### __About the project__
Backend part for the application which helps find movies according to the request and save them as chosen ones. </br>
The project was done as a diploma work within Yandex Practicum course "Web-developer".

### Link to the project [https://api.movies.proactative.nomoredomains.work](https://api.movies.proactative.nomoredomains.work)

### __Start the project__

`npm run start` — start the server  <br/>
`npm run dev` — start the server with hot-reload


### __Details__
Middleware __apiLimiter__ limits the amount of requests to 100 within 15 minutes. <br/>
Middleware __auth__ protects all routes except `/signin` and `/signup`. <br/>
Middleware __error__ is used for processing errors.<br/>
Middleware __logger__ keeps logging errors in `error.log` and requests in `request.log` at the server.<br/>
Password is kept as a hash and API doesn`t return it to the user.<br/>
User can delete only his/her saved movie.

### __Main directories__

`/routes`  
`/controllers` <br/> 
`/models`  <br/>
`/middlewares` <br/>
`/errors`<br/>
`/utils`

### __Routes__
|API request| Route | Aim |
| ------------- | ------------- |------------- |
| POST |`/signin` | authorization|
| POST |`/signup` | registration|
| GET |`/users/me`|  get information about the user|
| PATCH |`/users/me`| update information about the user|
| GET |`/movies` | get user`s movies |
| POST |`/movies`  | add a movie |
| DELETE |`/movies/:id` | delete the movie by id |

### __Libraries__

- Express
- Mongoose
- Jsonwebtoken
- Bcryptjs
- Celebrate/Joi
- Winston
- Body-parser
- Helmet
- Express-rate-limit
- Validator

for development
- ESLint
- Nodemon
