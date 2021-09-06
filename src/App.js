import { useState } from 'react';
import InvoiceRow from './invoice-row';

function App() {

  const [rowKeys,setRowKeys] = useState([1]);

  const addRow = (k) => {
    setRowKeys(rowKeys.concat(k));
  }

  return (
    rowKeys.map((ele) => {
      return <InvoiceRow key={ele} keyValue={ele} addRow={addRow}/>
    })
  );
}

export default App;
