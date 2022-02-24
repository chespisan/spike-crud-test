import { IReportItems } from '../../interfaces/itemReport.interface';
import './ItemReport.component.scss';

export interface IItemReport {
  item: IReportItems;
}

export const ItemReportComponent = ({item}: IItemReport) => {
  console.log('item: ', item);
  
  return (
    <div className='item-report-component'>
      <p className='item-report-component__text'>{item.title}</p>
      <p className='item-report-component__text'>{item.data}</p>
    </div>
  )
}
