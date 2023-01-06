import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, paymentGrid } from '../data/dummy';
import { Header } from '../components';

const Payments = () => {    
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Money" title="Payments"/>
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
        >
        <ColumnsDirective>
          {paymentGrid.map((item, index) => ( 
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport,Search, Toolbar ]} />
      </GridComponent>
    </div>
  )
}

export default Payments