export interface IReqUserRegistration {
    nombre:   string;
    phone:    string;
    email:    string;
    password: string;
    role:     string;
}
export interface IReqFavoritos {
    userId:  number;
    floorId: number;
}
