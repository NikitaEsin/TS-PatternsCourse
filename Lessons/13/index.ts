function createdAt<T extends new (...args: any[]) => {}>(constructor: T) {
  return class extends constructor {
    createdAt: Date;

    constructor(...args: any[]) {
      super(...args);
      this.createdAt = new Date();
    }
  };
}

interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

interface IUserServiceWithCreatedAt extends IUserService {
  createdAt: Date;
}

const UserServiceWithCreatedAt = createdAt(class UserService implements IUserService {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}) as new () => IUserServiceWithCreatedAt;

const userServiceInstance = new UserServiceWithCreatedAt();
console.log(userServiceInstance.createdAt); 
