import {MongoContainer} from "./managers/mongo.manager.js";
import {UserModel} from "./models/user.models.js";

export const UserManager = new MongoContainer(UserModel);