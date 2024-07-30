import { Injectable } from '@nestjs/common';

import {BlogUserRepository} from "../blog-user";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly blogUserRepository: BlogUserRepository
  ) {
  }
}
