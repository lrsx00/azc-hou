import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: {
        user: any;
        body: LoginDto;
    }): Promise<{
        access_token: string;
        user: {
            id: number;
            username: string;
            displayName: string;
            role: string;
        };
    }>;
    getProfile(req: {
        user: {
            userId: number;
            username: string;
            role: string;
        };
    }): {
        userId: number;
        username: string;
        role: string;
    };
}
