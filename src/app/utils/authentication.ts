import jwt from "jsonwebtoken";


const JWT_KEY  = "javalolagetai";

export function getAuthToken(userId: string, role: string, expiresIn = '7d') {
    return jwt.sign({ userId, role }, JWT_KEY, {
        expiresIn,
    });
}

export function getPermanentAuthToken(userId: string) {
    return jwt.sign({ userId }, JWT_KEY);
}

export function verifyAuthToken(token: string): any {
    return jwt.verify(token, JWT_KEY);
}