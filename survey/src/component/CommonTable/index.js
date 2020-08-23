import React from 'react';

const CommonTable = ({ columns, data }) => {
  const renderTableData = (data, columns) => {
    return data.map((datum, dataIndex) => (
      <tr key={dataIndex}>
        {columns.map((col, colIndex) => (
          <td key={colIndex}>{datum[col.dataKey]}</td>
        ))}
      </tr>
    ));
  };
  return (
    <table className='table'>
      <thead>
        <tr>
          {columns.map(item => (
            <th key={item.key}>{item.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data.length > 0 ? renderTableData(data, columns) : null}</tbody>
    </table>
  );
};

export default CommonTable;
