import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return {
      msg: 'You are signed in!',
    };
  }
  signup() {
    return {
      msg: 'You are signed up!',
    };
  }
}
