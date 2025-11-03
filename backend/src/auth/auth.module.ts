import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersRepository } from 'src/users/users.repostory';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret:process.env.JWT_SECRET || 'dev_secret',
      signOptions:{expiresIn:'1d'},
    })
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,UsersRepository],
  exports:[AuthService]
})
export class AuthModule {}
