### Technology choices:
#### UI:
 - React
 - Typescript
 - styled-components
 - use component lib? - final if time permits so i can do before and after quickly
#### API : REST(Express) vs graphQL
 - node (bun or deno if time permits)
 - express vs ~~graphql~~ ......... REST is fast and easy...

#### DB:
- MongoDB vs ~~RDB~~ see: [DB](./DB.mb) for more details on this call
#### Models:
- Recipe
- Curation
- User?  (implied but not required by test)

### User Stories
- View all the recipes in my 'favorites' library.
- Create custom lists to organize my recipes.
- Display user’s curated recipe lists.
### Backend
- Develop an API endpoint that provides the list of recipes for the user library. - GET /recipe
- Develop an API endpoint to add a recipe to a new or existing list - PUT /curation/:id/recipe/:recipe_id
- Develop an API endpoint to fetch a list of curations - GET /curation

### Frontend
- Build My Favorites page: to browse all the recipes of a user
- Build My Lists page: to present all curations, with each curation appearing as a
horizontal list with title and its associated recipes
- Implement a feature on the My Favorites page that enables users to add a recipe to a
new or existing list.

#### Run Project
```zsh
docker-compose up --build -d
# load recipes kinda hack for now for ease of initialization
curl -X POST localhost/recipe -H "Content-Type: application/json" -d '{}'

```
http://localhost

### TODO
- [*] docker-compose setup
- [*] system design / planing
- [*] API - initial (express + ts )setup
- [*] API - DB setup
- [*] load db -  api endpoint?
- [*] API - recipe endpoint
- [*] API - curation list endpoint
- [*] API - add curation to list endpoint
- [*] UI - initial setup (react / styled components)
- [ ] UI - Fav page
- [ ] UI - My Lists Page
- [ ] UI - Add Recipe to List feature
- [ ] Unit tests


#### Sample Curls
Load recipes
```
curl -X POST localhost/api/recipe -H "Content-Type: application/json" -d '{}'
```
get recipe
```
curl localhost/api/recipe -H "Content-Type: application/json"
```

create curation
```

curl -X POST localhost/api/curation -H "Content-Type: application/json" -d '{"Name":"Josh List", "Recipe_IDs": ["65cf26a9ed3a1c4b9aefef77"]}'
```

get curation
```
curl localhost/api/curation -H "Content-Type: application/json"
```

add recipe to curation
```
curl -X PUT localhost/api/curation/65cf2730ed3a1c4b9aeff5c9/recipe/65cf26a9ed3a1c4b9aefef77 -H "Content-Type: application/json"
```