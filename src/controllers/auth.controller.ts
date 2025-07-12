import { Request, Response } from "express";
export const authenticateUser= (req:Request, res:Response)=> {
   const {username, password} = req.body;
}