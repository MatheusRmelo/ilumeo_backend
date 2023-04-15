import IRegisterAttributes from "./IRegisterAttributes";

export default interface IRegisterByDay {
  day: string;
  registers: IRegister[];
}

export interface IRegister {
  id: number;
  usercode: string;
  status: string;
  register_at: number;
}
