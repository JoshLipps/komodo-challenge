import { ObjectId } from "mongodb";


export default class Curation {
    constructor(
        public Recipe_IDs: ObjectId[],
        public Name: string,
        public Description: string,
        public Owner_ID: string, //needed?
        public id?: ObjectId
    ) {}
}