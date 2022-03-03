import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { isEqual } from 'lodash'
import MaterialTable from 'material-table'
import { tableTitleColumns } from '../../common/tableTitleColumns'
import { useCrudActions, useAuthActions } from '../../hooks/useActions'

const validateRow = (row) => {
  //CHECKS IF THE INPUT HAS NO EMPTY FIELDS
  return Object.values(row).length === tableTitleColumns.length
}

const HomePage = () => {
  // ALL CRUD ACTIONS
  const {
    getCarsStart,
    createCarStart,
    deleteCarStart,
    editCarStart,
  } = useCrudActions()
  const { setError } = useAuthActions()
  //USER AND CARS INFORMATION
  const token = useSelector((state) => state.login.user?.accessToken)
  const { user } = useSelector((state) => state.login)
  const { cars } = useSelector((state) => state.getAll)

  //FIGURE OUT IF USER IS LOGGED IN AND LIFTING OWNED CARS ON TOP OF THE TABLE
  const sortCars = useMemo(() => {
    let sortedCars = cars
    if (user) {
      const userCars = cars.filter((car) => car.user._id === user._id)
      const otherCars = cars.filter((car) => car.user._id !== user._id)
      sortedCars = [...userCars, ...otherCars]
    }
    return sortedCars
  }, [cars, user])

  useEffect(() => {
    getCarsStart()
  }, [])

  return (
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

                validateRow(rowData)
                  ? createCarStart(token, user, rowData)
                  : setError('Incorrect input', 'error')
              })
          : null,
        isEditHidden: user ? (row) => row.user._id !== user._id : null,
        onRowUpdate: user
          ? (newRowData, oldRowData) =>
              new Promise((resolve) => {
                resolve()
                //CHECKS IF NEW AND OLD DATA ARE EQUAL AND RETURNS IF SO
                const { tableData, ...otherProps } = oldRowData
                if (isEqual(newRowData, { ...otherProps })) return
                editCarStart(token, oldRowData._id, newRowData)
              })
          : null,
        isDeleteHidden: user ? (row) => row.user._id !== user._id : null,
        onRowDelete: user
          ? (selectedRow) =>
              new Promise((resolve) => {
                resolve()
                deleteCarStart(token, selectedRow)
              })
          : null,
      }}
    />
  )
}

export default HomePage
