export interface Client {
    id: number;
    numberId: string;
    firstName: string;
    lastName: string;
    email: string;
    photoUrl: string;
    birthday: Date;
    region: Region;
    state: string;
  }
  
  export interface Region {
    id: number;
    name: string;
  }
  