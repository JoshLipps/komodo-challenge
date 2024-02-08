### Technology choices:
UI: React / Typescript / styled-components /// speed.... use component lib?
API : REST(Express) vs graphQL
DB: MongoDB vs RDB
Models: Recipe, Curation, User?

### User Stories
- View all the recipes in my 'favorites' library.
- Create custom lists to organize my recipes.
- Display user’s curated recipe lists.
### Backend
- Develop an API endpoint that provides the list of recipes for the user library.
   GET /recipe
- Develop an API endpoint to add a recipe to a new or existing list
   PUT /list/:id/recipe/:recipe_id
- Develop an API endpoint to fetch a list of curations
   GET /list

### Frontend
- Build My Favorites page: to browse all the recipes of a user
- Build My Lists page: to present all curations, with each curation appearing as a
horizontal list with title and its associated recipes
- Implement a feature on the My Favorites page that enables users to add a recipe to a
new or existing list.

RDB:
Curation
 - id
 - name
 - description
 - user_id
CurationRecipes
 - user_id
 - curation_id
 - recipe_id
 Recipes
 - name
 - description
 - url
 ...
 Pro:
 - traditional
 - expected?
 - challenge has a relational list of lists build in challenge
 Con:
 - time
 - familiarity

 Mongo:
 Curation
 - id
 - name
 - description
 - user_id
 - recipes:
    - id

 Recipes
 - name
 - description
 - url
 ...

Pro:
 Easy Model / fast
 Familiar
 1 less table/collection
Cons
- requires aggregation n * m db $lookup => $group => sort? scalability?