import { HTTP } from '@/Composables/Http/http';

export class AuthApi {
    async login(data: any) {
        try {
            return await HTTP.post(route('login'), data);
        }
        catch (e: any) {
            return e.response.data;
        }
    }

    async register(data: any) {
        try {
            return await HTTP.post(route('register'), data);
        }
        catch (e: any) {
            return e.response.data;
        }
    }
}


export default new AuthApi();
