export default interface IResponseError {
  message: string;
  errors: IError[];
}

interface IError {
  code: string;
  message: string;
}
