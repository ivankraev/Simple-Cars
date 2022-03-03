import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { isEqual } from "lodash";
import MaterialTable from "material-table";
import { tableTitleColumns } from "../../common/tableTitleColumns";
import { useCrudActions, useAuthActions } from "../../hooks/useActions";
//CHECKS IF THE INPUT HAS NO EMPTY FIELDS
const validateRow = (row) => {
  return Object.values(row).length === tableTitleColumns.length;
};
const HomePage = () => {
  // ALL CRUD ACTIONS
  const { getCarsStart, createCarStart, deleteCarStart, editCarStart } =
    useCrudActions();
  const { setError } = useAuthActions();
  //USER AND CARS INFORMATION
  const token = useSelector((state) => state.login.user?.accessToken);
  const { user } = useSelector((state) => state.login);
  const { cars } = useSelector((state) => state.getAll);

  //FIGURE OUT IF USER IS LOGGED IN AND LIFTING OWNED CARS ON TOP OF THE TABLE
  const sortCars = useMemo(() => {
    let sortedCars = cars;
    if (user) {
      const userCars = cars.filter((car) => car.user._id === user._id);
      const otherCars = cars.filter((car) => car.user._id !== user._id);
      sortedCars = [...userCars, ...otherCars];
    }
    return sortedCars;
  }, [cars, user]);

  useEffect(() => {
    getCarsStart();
  }, []);

  return (
    <MaterialTable
      title="Car list"
      columns={tableTitleColumns}
      data={sortCars}
      options={{ addRowPosition: "first" }}
      editable={{
        isEditable: (row) => row.user._id === user._id,
        isDeletable: (row) => row.user._id === user._id,
        onRowAdd: user
          ? (rowData) =>
              new Promise((resolve, reject) => {
                const isDataValid = validateRow(rowData);
                const timer = !isDataValid ? 0 : 800;
                setTimeout(() => {
                  if (!isDataValid) {
                    setError("Incorrect input", "error");
                    reject();
                  } else {
                    createCarStart(token, user, rowData);
                    resolve();
                  }
                }, timer);
              })
          : null,
        onRowUpdate: user
          ? (newRowData, oldRowData) =>
              new Promise((resolve, reject) => {
                const { tableData, ...otherProps } = oldRowData;
                const isRowEqual = isEqual(newRowData, { ...otherProps });
                const timer = isRowEqual ? 0 : 800;
                setTimeout(() => {
                  if (isRowEqual) {
                    setError("Your input matches the current", "error");
                    reject();
                  } else {
                    editCarStart(token, oldRowData._id, newRowData);
                    resolve();
                  }
                }, timer);
              })
          : null,
        onRowDelete: user
          ? (selectedRow) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  deleteCarStart(token, selectedRow);
                  resolve();
                }, 800);
              })
          : null,
      }}
    />
  );
};

export default HomePage;
