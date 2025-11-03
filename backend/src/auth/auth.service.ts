import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from 'src/users/users.repostory';
import * as bcrypt from "bcrypt"
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository:Repository<User>,
        private jwtService: JwtService
    ){}

    async register(email:string,password:string){
          if (!email || !password) {
        throw new Error("Email and password are required");
    }
        
        const hashed = await bcrypt.hash(password,10)
        const user = this.usersRepository.create({email,password:hashed})
        return this.usersRepository.save(user)
    }
    async login(email:string,password:string){
      
        const user = await this.usersRepository.findOne({where:{email}})
        if(!user) throw new UnauthorizedException("User not found")
        const valid  = await bcrypt.compare(password,user.password)
        if(!valid) throw new UnauthorizedException("Invalid credentials")
        const payload = {sub:user.id,role:user.role}
        const access_token = await this.jwtService.signAsync(payload)
        return {access_token}
    }

}
