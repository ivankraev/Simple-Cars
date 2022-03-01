import React from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { tableTitleColumns } from "../../common/tableTitleColumns";
import { useCrudActions } from "../../hooks/useActions";
import MaterialTable from "material-table";

const exampleData = [
  {
    id: "1",
    make: "BMW",
    model: "335i",
    year: 2015,
    enginType: "GASOLINE",
    gearBox: "AUTOMATIC",
    condition: "USED",
    horsePower: 2300,
    color: "white",
    price: "2000",
    city: "Plovdiv",
    mileage: 100000,
    extras: "nothing",
  },
];

const HomePage = () => {
  // ALL CRUD ACTIONS
  const { createCarStart, deleteCarStart, editCarStart } = useCrudActions();
  //USER AND CARS INFORMATION
  const token = useSelector((state) => state.login.user?.accessToken);
  const user = useSelector((state) => state.login.user);
  const cars = useSelector((state) => state.getAll.cars);
  //FIGURE OUT IF USER IS LOGGED IN AND LIFTING OWNED CARS ON TOP OF THE TABLE
  const sortCars = useCallback(() => {
    let sortedCars = exampleData;
    if (user) {
      const userCars = cars.filter((car) => car.user.id === user.id);
      const otherCars = cars.filter((car) => car.user.id !== user.id);
      sortedCars = [...userCars, ...otherCars];
    }
    return sortedCars;
  }, [cars, user]);

  return (
    <>
      <MaterialTable
        columns={tableTitleColumns}
        data={sortCars()}
        title="Cars"
        options={{ addRowPosition: "first", actionsColumnIndex: -1 }}
        editable={{
          onRowAdd: (rowData) =>
            new Promise((resolve, reject) => {
              resolve();
              createCarStart(token, user, rowData);
            }),
          onRowUpdate: (newRowData, oldRowData) =>
            new Promise((resolve, reject) => {
              resolve();
              editCarStart(token, user, newRowData);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              resolve();
              deleteCarStart(token, user, selectedRow);
            }),
        }}
      />
    </>
  );
};

export default HomePage;
