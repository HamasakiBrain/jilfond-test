import axios from 'axios';

export const HTTP  = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})


export default HTTP;
