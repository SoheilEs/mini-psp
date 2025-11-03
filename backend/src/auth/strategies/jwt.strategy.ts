import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // extract JWT from the Authorization header
      ignoreExpiration: false, // ensure token expiration is checked
      secretOrKey: process.env.JWT_SECRET, // use your secret key from config
    });
  }

  async validate(payload: any) {
    // This function is called automatically after token verification
    // You can attach the user info to the request object here
    return { userId: payload.sub, username: payload.username };
  }
}
