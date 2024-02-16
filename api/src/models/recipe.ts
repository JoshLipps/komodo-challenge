import { ObjectId } from "mongodb";


export default class Recipe {
  constructor(
    public Name: string,
    public url: string,
    public Description: string,
    public Author: string,
    public Ingredients: string[],
    public Method: string[],
    public id?: ObjectId
  ) { }
}