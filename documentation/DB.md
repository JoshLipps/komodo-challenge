Considerations for DB choice...

### RDB (postgres):
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
 - expected?
 - challenge has a relational list of lists build in challenge
 - groupby SQL
 - learn TS - postgress orm
 Con:
 - time
 - familiarity
 - not more performant for challenge size i.e. small list number and size
 - have to spent time learning TS - postgres orm

 ### Mongo:
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
 complexity - 1 less table/collection
 learn aggregations better
Cons
- requires aggregation n * m db $lookup => $group => sort? scalability?