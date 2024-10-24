export interface User {
    id?: number;
    username: string;
    password?: string;
    email?: string;
    active?: boolean;
    name?: string;
    lastname?: string;
    birthdate?: Date;
    document?: number;
    typeDocument?: string;
}
  
export type Users = User[];

export interface UserResponse {
    data: User;
    token: string;
    error: string;
}