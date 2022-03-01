import { CarsTypes } from '../containers/HomePage/types'

const INITIAL_STATE = {
  cars: [
    {
      id: "3",
      make: "BMW3",
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
      user: {
        id: '61a7c53242b46ac58ecbd859'
      }
    },
    {
      id: "2",
      make: "BMW2",
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
      user: {
        id: '2'
      }
    },
  ],
  isLoading: false,
}

const getCarsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CarsTypes.GET_CARS_START:
      return {
        ...state,
        isLoading: true,
      }
    case CarsTypes.GET_CARS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cars: action.payload,
      }
    case CarsTypes.GET_CARS_FAIL:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}
export default getCarsReducer
