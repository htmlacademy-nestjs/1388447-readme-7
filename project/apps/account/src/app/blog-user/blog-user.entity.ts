import {
  Entity,
  StorableEntity,
  AuthUser,
  UserRole
} from '@project/core';

export class BlogUserEntity extends Entity implements StorableEntity<AuthUser>{
  public email: string;
  public firstname: string;
  public lastname: string;
  public dateOfBirth: Date;
  public role: UserRole;
  public passwordHash: string;

  constructor(user?: AuthUser) {
    super();
    this.populate(user);
  }

  public populate(user?: AuthUser): void {
    if(!user) {
      return;
    }
    this.id = user.id ?? '';
    this.email = user.email;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.dateOfBirth = user.dateOfBirth;
    this.passwordHash = user.passwordHash;
    this.role = user.role;
  }

  public toPOJO(): AuthUser {
    return {
      id: this.id,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      dateOfBirth: this.dateOfBirth,
      role: this.role,
      passwordHash: this.passwordHash,
    }
  }
}
