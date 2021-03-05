# W05D05 - Midterm Project Kickoff

### Learning Outcomes
* Repetition, solid what you've learned
* put all the knowledge together
* apply ourselves
* make us uncomfortable
* prove it!
* working with a team
* collaboration with git!!!
* merge conflicts

### Pick a Project!

### Convert requirements to user stories
* As a _____, I can _____, because _____
* As a logged in user, I can create a new map, because I want to share POI with my friends

Requirement: users can see a list of the available maps
User Story: As a user, I can see a list of available maps, because I want to see interesting things in my area

As a logged in user, I can add a pin to a map, because ...
As a non-logged in user, I am unable to add a pin to a map, because that map doesn't belong to me

As a user, I can favourite an item, because I want to be able to review it later AND the heart icon turns red

* Ask for a review

### Pick out all the nouns
* nouns === tables
* create the ERD

### Routes
* describe how we access the resource

RESTful

Browse  GET  /users
Read    GET  /users/:id
Edit    POST /users/:id/edit
Add     POST /users
<!-- Delete  POST /users/:id/delete -->

Browse GET /map/:map_id/pins
GET /users/:user_id/items

### MVP
* Minimal Viable Product
* Minimum Viable Demo MVD
* If you don't show it, don't build it

### User Interface
* Mockup/wireframe
* We are NOT a web design school
* STEAL
* diagrams.net, moqups, balsamiq

### User Login/Registration
* DON'T DO IT

```js
app.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});
```

### Tech Choices
* Front End: HTML, CSS, JS, jQuery, SCSS
* Back End: Node, Express, Postgres

### SPA vs Multi-page
* these are not mutually exclusive

### Git
* use branches
* do not code on master/main
* pull request
* merge conflicts => I hope you have 'em

### Splitting up the work
* Horizontal = all members are working on the same layer
* Vertical = members are working on different layers
* Pair Programming
* Do what you are weakest at

### Communication
* Just do it





# 
