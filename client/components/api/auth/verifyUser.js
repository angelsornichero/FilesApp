import { catchCookie } from "./cookies/catchCookie";

export const VerifyUser = () => {
    if (catchCookie() === null) return false

}