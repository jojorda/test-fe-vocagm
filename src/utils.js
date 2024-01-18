import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = "vocaapproved";

export const setCookies = (name, data, expires) => {
    const encryptedPayload = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        ENCRYPTION_KEY
    ).toString();
    const currentTime = new Date();
    const defaultExpiredTime = currentTime.setTime(
        currentTime.getTime() + 1000 * 60
    );
    Cookies.set(name, encryptedPayload, {
        expires: expires || new Date(defaultExpiredTime),
    });
};

export const getDecryptedCookies = (name) => {
    const cookies = Cookies.get(name);
    if (!cookies) return null;

    const decryptedValue = CryptoJS.AES.decrypt(cookies, ENCRYPTION_KEY);
    const data = JSON.parse(CryptoJS.enc.Utf8.stringify(decryptedValue));
    return data;
};

export const removeCookies = (name) => Cookies.remove(name);
