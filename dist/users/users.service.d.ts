import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findById(id: number): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    save(user: User): Promise<User>;
    createAdminUserIfNotExists(): Promise<void>;
}
