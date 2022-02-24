// eslint-disable-line react-hooks/exhaustive-deps
import { useCallback, useEffect, useState } from 'react';
import { HeaderComponent } from '../../components/header/Header.component';
import { ItemReportComponent } from '../../components/item-report/ItemReport.component';
import { IReportItems } from '../../interfaces/itemReport.interface';
import { DataReport } from '../../services/data-fake/dataFake.services';
import './Report.container.scss';

export const ReportContainer = () => {
  const [ reportData, setReportData ] = useState<IReportItems[]>()
  const dataReportService = new DataReport();
  
  const test = useCallback(() => {
    const handleGetDataReport = async() => {
      try {
        const { data } = await dataReportService.getDataReport();
        setReportData([
          {
            id: 1,
            title: 'ambientTemperture',
            data: data.ambientTemperture,
          },
          {
            id: 2,
            title: 'exteriorTemperature',
            data: data.exteriorTemperature,
          },
          {
            id: 3,
            title: 'patientTemperature',
            data: data.patientTemperature,
          },
          {
            id: 4,
            title: 'risk',
            data: data.risk
          }
        ]);
      } catch (error) {
        console.log('err: ', error);
      }
    }
  }, [])


  useEffect(() => {
    test()
  }, [])


  return (
    <div className='report-container'>

      <div className='report-container__header'>
        <HeaderComponent />
      </div>

      <section className='report-container__items'>
        {reportData?.map(item => (
          <ItemReportComponent key={item.id} item={item} />
        ))}
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
