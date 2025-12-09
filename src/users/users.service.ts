import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findById(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });
  }

  findByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { username } });
  }

  save(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async createAdminUserIfNotExists(): Promise<void> {
    const totalUsers = await this.usersRepository.count();
    if (totalUsers > 0) {
      return;
    }

    const passwordHash = await bcrypt.hash('admin123', 10);
    await this.usersRepository.save(
      this.usersRepository.create({
        username: 'admin',
        displayName: '管理员',
        role: 'admin',
        passwordHash,
      }),
    );
    // 默认管理员账号：admin / admin123
  }
}

