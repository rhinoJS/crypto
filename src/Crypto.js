const CryptoJS = require("crypto-js");

class Crypto
{
    /**
     * Criptografar uma string.
     * 
     * @param {String} message String a ser criptografada.
     * @param {String} key Chave para criptografar
     * @returns {String}
     */
    static encrypt(message, key = null)
    {
        key = key ? key : process.env.APP_KEY;

        return CryptoJS.AES.encrypt(message, key).toString();
    }

    /**
     * Descriptografar uma string.
     * 
     * @param {String} message String a ser descriptografada.
     * @param {String} key Chave para criptografar
     * @returns {String}
     */
    static decrypt(message, key = null)
    {
        key = key ? key : process.env.APP_KEY;

        return CryptoJS.AES.decrypt(message, key).toString(CryptoJS.enc.Utf8);
    }
}