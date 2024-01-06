import { tokenDataT } from "@/app/page";
import { jwtDecode } from "jwt-decode";

const tokenDecode = (token: any) => {
    const decodedToken = jwtDecode<tokenDataT>(token)
    return decodedToken;
}

export default tokenDecode;