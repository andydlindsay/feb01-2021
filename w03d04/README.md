# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST [Stretch]
- [x] More HTTP methods/`Method Override` [Stretch]

### Hashing
* one-way process
* feed our plaintext password into a function => hash
* '1234' + 'asdkfjaklsdf'

### Encryption
* feed our plaintext into a function => encrypt `fklasdhjfklajadjk fjawioehfioansd`
* two-way process


### HTTP
* http://localhost:9876/protected
* plaintext protocol
* person-in-the-middle attack
* HTTP Secure HTTPS
* public key => encrypt requests
* private key => decrypt requests

### REST
* RESTful API, REST
* GET /urls
* POST /login
* POST /createNewUser
* POST /editAUser
* GET /allTheUsers

* BREAD / CRUD
* REpresentational State Transfer
* routes should represent the underlying data we are accessing

* Browse  GET  /users
* Read    GET  /dinosaurs/:dinosaurs_id
* Edit    POST /dinosaurs/:dinosaurs_id/edit
* Add     POST /dinosaurs
* Delete  POST /dinosaurs/:dinosaurs_id/delete

* maps => pins

GET /authors/:author_id/books

B  GET  /maps/:map_id/pins `GET /maps/7/pins`
R  GET  /maps/:map_id/pins/:pin_id
E
A
D


### More HTTP Methods
* Limited to GET/POST because of HTML forms/elements
* PUT/PATCH/DELETE
* Semantic aliases for POST
* PUT - replace the entire resource
* PATCH - replace a piece of a resource
* DELETE - delete a resource

* Browse  GET  /dinosaurs
* Read    GET  /dinosaurs/:dinosaurs_id
* Edit    POST /dinosaurs/:dinosaurs_id/edit
* Add     POST /dinosaurs
* Delete  POST /dinosaurs/:dinosaurs_id/delete

* Browse  GET    /dinosaurs
* Read    GET    /dinosaurs/:dinosaurs_id
* Edit    PATCH  /dinosaurs/:dinosaurs_id
* Add     POST   /dinosaurs
* Delete  DELETE /dinosaurs/:dinosaurs_id

* AJAX requests

https://www.google.com/search?
q=query+string
&rlz=1C5CHFA_enCA814CA814
&oq=query+string
&aqs=chrome..69i57j0i67j0i20i263j0l5.1241j0j1
&sourceid=chrome
&ie=UTF-8

req.query.q === 'query string'

# 
