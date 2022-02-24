import { useEffect, useState } from 'react';
import { HeaderComponent } from '../../components/header/Header.component';
import { IDataFake } from '../../interfaces/dataFake.interface';
import { DataReport } from '../../services/data-fake/dataFake.services';
import './Report.container.scss';

export const ReportContainer = () => {
  const [ reportData, setReportData ] = useState<IDataFake>()
  const dataReportService = new DataReport();
  
  const handleGetDataReport = async() => {
    try {
      const { data } = await dataReportService.getDataReport();
      console.log('resp: ', data);
      setReportData(data);
    } catch (error) {
      console.log('err: ', error);
    }
  }


  useEffect(() => {
    handleGetDataReport()
  }, []);


  return (
    <div className='report-container'>

      <div className='report-container__header'>
        <HeaderComponent />
      </div>

      <section className='report-container__items'>
        <div className='item-report-component'>

        </div>

        <div className='item-report-component'>
          
        </div>

        <div className='item-report-component'>
          
        </div>

        <div className='item-report-component'>
          
        </div>
      </section>

      <div className='report-container_content'>

        <section className="report-container__history-list"></section>
        <section className="report-container__content-image"></section>

      
      </div>

      <footer className='report-container__footer'>
        <div className='report_container__action-camera'></div>
      </footer>

    </div>
  )
}
