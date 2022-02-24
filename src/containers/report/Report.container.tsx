// eslint-disable-line react-hooks/exhaustive-deps
import { useEffect, useState } from 'react';
import { HeaderComponent } from '../../components/header/Header.component';
import { ItemReportComponent } from '../../components/item-report/ItemReport.component';
import { IReportItems } from '../../interfaces/itemReport.interface';
import { DataReport } from '../../services/data-fake/dataFake.services';
import './Report.container.scss';

export const ReportContainer = () => {
  const [ reportData, setReportData ] = useState<IReportItems[]>()
  const dataReportService = new DataReport();
  // const temporalFunction = useRef(() => {})
  
  // this.setState(prevState => ({
  //   arrayvar: [...prevState.arrayvar, newelement]
  // }))

  const handleGetDataReport = async() => {
    try {
      const { data } = await dataReportService.getDataReport();
      const formatData = [
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
      ]
      // setReportData(prev => [...prev, formatData]);
      setReportData((oldArray: any) => [...oldArray, formatData]);
    } catch (error) {
      console.log('err: ', error);
    }
  }

  // temporalFunction.current = handleGetDataReport
  

  useEffect(() => {
    handleGetDataReport();
    // temporalFunction.current()
  }, []);


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
