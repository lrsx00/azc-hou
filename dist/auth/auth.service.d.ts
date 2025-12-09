import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<Omit<User, 'passwordHash'> | null>;
    login(user: User | (Omit<User, 'passwordHash'> & {
        passwordHash?: string;
    })): Promise<{
        access_token: string;
        user: {
            id: number;
            username: string;
            displayName: string;
            role: string;
        };
    }>;
    changePassword(userId: number, oldPassword: string, newPassword: string): Promise<{
        message: string;
    }>;
}
