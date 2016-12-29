const LOCAL_API = 'http://localhost:5050'
const DEV_API = '';
const PROD_API = '';

const API={
    'localhost':LOCAL_API,
    'dev':DEV_API,
    'prod':PROD_API
};
export default API[window.location.hostname]||LOCAL_API