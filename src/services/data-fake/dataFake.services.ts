
import Axios, { AxiosResponse } from 'axios';
import { IDataFake } from '../../interfaces/dataFake.interface';

const { REACT_APP_API_REPORT } = process.env;

export class DataReport {

  private api: string | undefined;

  constructor() {
    this.api = REACT_APP_API_REPORT;
  }

  getDataReport(): Promise<AxiosResponse<IDataFake>> {
    return Axios.get(`${this.api}data`)
  }
}