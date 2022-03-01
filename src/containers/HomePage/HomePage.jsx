import { tableTitleColumns } from "../../common/tableTitleColumns";
import MaterialTable from "material-table";
import React from "react";
const HomePage = () => {
  return (
    <>
      <MaterialTable columns={tableTitleColumns} data={[]} title="Demo Title" />
    </>
  );
};

export default HomePage;
