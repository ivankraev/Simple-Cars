import { tableTitleColumns } from '../../common/tableTitleColumns'
import MaterialTable from 'material-table'
import React from 'react'

const exampleData = [
  {
    make: 'BMW',
    model: '335i',
    year: 2015,
    enginType: 'GASOLINE',
    gearBox: 'AUTOMATIC',
    condition: 'USED',
    horsePower: 2300,
    color: 'white',
    price: '2000',
    city: 'Plovdiv',
    mileage: 100000,
    extras: 'nothing',
  },
]

const HomePage = () => {
  const [tableData, setTableData] = React.useState(exampleData)
  console.log(tableData)
  return (
    <>
      <MaterialTable
        columns={tableTitleColumns}
        data={tableData}
        title="Cars"
        options={{ addRowPosition: 'first', actionsColumnIndex: -1 }}
        editable={{
          onRowAdd: (rowData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
                console.log(rowData)
                setTableData([...tableData, rowData])
              }, 100)
            }),
          onRowUpdate: (newRowData, oldRowData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
                console.log(newRowData)
              }, 100)
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
                console.log(selectedRow)
              }, 100)
            }),
        }}
      />
    </>
  )
}

export default HomePage
