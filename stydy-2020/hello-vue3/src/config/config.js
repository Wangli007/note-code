const development = 'https://api.sulinks.com/api';
const production = 'https://api.sulinks.com/api';
module.exports = {
    TokenKey:'Admin-Token',
    baseURL:process.env.NODE_ENV === "production"?production:development
}
