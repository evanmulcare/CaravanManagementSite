import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, paymentGrid } from '../data/Links';
import { Header } from '../components';

const Payments = () => {    
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Money" title="Payments"/>
    </div>
  )
}

export default Payments