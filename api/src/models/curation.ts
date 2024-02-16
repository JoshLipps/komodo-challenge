import { ObjectId } from "mongodb";
import Recipe from "./recipe";


export default class Curation {
  public Recipe_IDs: ObjectId[];
  constructor(
    public Name: string,
    public Description: string,
    recipe_IDs: (ObjectId|string)[],
    // public Owner_ID: string, //needed?
    public _id?: ObjectId,
    public Recipes?: Recipe[]
  ) {
    if(Name === ""){
      throw new Error("Name cannot be empty");
    }
    if(recipe_IDs instanceof Array === false){
      this.Recipe_IDs = [];
    } else {
      this.Recipe_IDs = recipe_IDs.map((id) => {
        if(id instanceof ObjectId){
          return id;
        } else if(ObjectId.isValid(id) === true){
          return new ObjectId(id);
        } else {
          throw new Error("Invalid recipe id");
        }
      });
    }
  }
}