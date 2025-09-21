import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface MyJwtPayload extends jwt.JwtPayload {
    id: string;
  }

export const getData = (req: NextRequest) => {
    try {
        const token = req.cookies.get("token")?.value || "";
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as MyJwtPayload;

        return decodedToken.id;


    } catch (error: any) {
        throw new Error(error.message);
    }
}