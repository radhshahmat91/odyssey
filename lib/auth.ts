import {jwtVerify,SignJWT} from 'jose';
const secret=new TextEncoder().encode(process.env.JWT_SECRET||'development-secret-change-me');
export async function signToken(id:string){return new SignJWT({id}).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('7d').sign(secret)}
export async function verifyToken(token:string){try{return (await jwtVerify(token,secret)).payload as {id:string}}catch{return null}}
