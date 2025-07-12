import {User} from "../model/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const adminUser: User = {
    id: 1,
    username: "admin",
    password: bcrypt.hashSync("1234", 10),
    role: "admin"
}

const customerUser: User = {
    id: 2,
    username: "customer",
    password: bcrypt.hashSync("1234", 10),
    role: "customer"
}

const userList: User[] = [];

userList.push(adminUser);
userList.push(customerUser);

export const authenticateUser = (username: string, password: string) => {
    const existingUser: User | undefined = userList.find(user => user.username === username);

    let isValidPassword = bcrypt.compareSync(password, <string>existingUser?.password);
    if (!existingUser || !isValidPassword) {
        return null;
    }

    jwt
}