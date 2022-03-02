import React, { useEffect } from 'react'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import MaterialTable from 'material-table'
import { tableTitleColumns } from '../../common/tableTitleColumns'
import { useCrudActions } from '../../hooks/useActions'
import { isEqual } from 'lodash'
const HomePage = () => {
  // ALL CRUD ACTIONS
  const {
    getCarsStart,
    createCarStart,
    deleteCarStart,
    editCarStart,
  } = useCrudActions()
  //USER AND CARS INFORMATION
  const token = useSelector((state) => state.login.user?.accessToken)
  const user = useSelector((state) => state.login.user)
  const cars = useSelector((state) => state.getAll.cars)
  //FIGURE OUT IF USER IS LOGGED IN AND LIFTING OWNED CARS ON TOP OF THE TABLE
  const sortCars = useMemo(() => {
    let sortedCars = cars
    if (user) {
      const userCars = cars.filter((car) => car.user.id === user._id)
      const otherCars = cars.filter((car) => car.user.id !== user._id)
      sortedCars = [...userCars, ...otherCars]
    }
    return sortedCars
  }, [cars, user])

  useEffect(() => {
    getCarsStart()
  }, [])
  console.log(cars)
  return (
    <>
      <MaterialTable
        columns={tableTitleColumns}
        data={sortCars}
        title="Cars"
        options={{ addRowPosition: 'first', actionsColumnIndex: -1 }}
        editable={{
          onRowAdd: user
            ? (rowData) =>
                new Promise((resolve) => {
                  resolve()
                  createCarStart(token, user, rowData)
                })
            : null,
          isEditHidden: user ? (row) => row.user.id !== user._id : null,
          onRowUpdate: user
            ? (newRowData, oldRowData) =>
                new Promise((resolve) => {
                  resolve()
                  //CHECKS IF NEW AND OLD DATA ARE EQUAL AND RETURNS IF SO
                  const { tableData, ...otherProps } = oldRowData
                  if (isEqual(newRowData, { ...otherProps })) return
                  editCarStart(token, user, newRowData)
                })
            : null,
          isDeleteHidden: user ? (row) => row.user.id !== user._id : null,
          onRowDelete: user
            ? (selectedRow) =>
                new Promise((resolve) => {
                  resolve()
                  deleteCarStart(token, user, selectedRow)
                })
            : null,
        }}
      />
    </>
  )
}

export default HomePage
