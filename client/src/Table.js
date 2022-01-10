import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Job</th>
        <th>Priority</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.listedJobData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.job}</td>
        <td>{row.priority}</td>
        <td>
          <button onClick={() => props.removelistedJob(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { listedJobData, removelistedJob } = props;

  return (
    <table>
      <TableHeader />
      <TableBody listedJobData={listedJobData} removelistedJob={removelistedJob} />
    </table>
  );
};

export default Table;
