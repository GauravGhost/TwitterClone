import User from "../models/user.js";
import ApiError from "../utils/Error/ApiError.js";
import CrudRepository from "./crud-repository.js";
import {StatusCodes} from 'http-status-codes'


class UserRepository extends CrudRepository{
    constructor(){
        super(User)
    }
}

export default UserRepository;