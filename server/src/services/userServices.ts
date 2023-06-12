import { UserRegisterPayloadType, UserLoginPayloadType, UserType } from "../types";
import User from "../models/UserModel";

export const createUser = async ( payload: UserRegisterPayloadType ): Promise<UserType> => {
    try {
        const user = await User.create(payload);
        return user;
    } catch (error) {
        throw Error(error);
    }
};

export const loginUser = async ( payload: UserLoginPayloadType ): Promise<UserType | boolean> => {
    try {
        const user = await User.findOne({ email: payload.email });
        if (!user) return false;

        //compare the password

        return user;
    } catch (error) {
        throw Error(error);
    }
};