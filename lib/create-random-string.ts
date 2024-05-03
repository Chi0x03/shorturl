export function createRandomString(length: number): string {
    let base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomStr = '';
    for(let i=0; i < length; i++) {
        let index = Math.floor(Math.random() * base64Chars.length);
        randomStr += base64Chars.charAt(index)
    }
    return randomStr;
}
