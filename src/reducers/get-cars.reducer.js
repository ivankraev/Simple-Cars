import { CarsTypes } from '../containers/HomePage/types'
/** Store states
 * @constant {Object} */
const INITIAL_STATE = {
  cars: [
    {
      id: '3',
      make: 'BMW owned',
      model: '335i',
      year: 2015,
      engineType: 'GASOLINE',
      gearBox: 'AUTOMATIC',
      condition: 'USED',
      horsePower: 2300,
      color: 'white',
      price: '2000',
      city: 'Plovdiv',
      mileage: 100000,
      extras: 'nothing',
      user: {
        id: '61a7c53242b46ac58ecbd859',
      },
    },
    {
      id: '2',
      make: 'BMW2',
      model: '335i',
      year: 2015,
      engineType: 'GASOLINE',
      gearBox: 'AUTOMATIC',
      condition: 'USED',
      horsePower: 2300,
      color: 'white',
      price: '2000',
      city: 'Plovdiv',
      mileage: 100000,
      extras: 'nothing',
      user: {
        id: '2',
      },
    },
    {
      id: '4',
      make: 'BMW211',
      model: '335i',
      year: 2015,
      engineType: 'GASOLINE',
      gearBox: 'AUTOMATIC',
      condition: 'USED',
      horsePower: 2300,
      color: 'white',
      price: '2000',
      city: 'Plovdiv',
      mileage: 100000,
      extras: 'nothing',
      user: {
        id: '5',
      },
    },
    {
      id: '5',
      make: 'BMW owned',
      model: '335i',
      year: 2015,
      engineType: 'GASOLINE',
      gearBox: 'AUTOMATIC',
      condition: 'USED',
      horsePower: 2300,
      color: 'white',
      price: '2000',
      city: 'Plovdiv',
      mileage: 100000,
      extras: 'nothing',
      user: {
        id: '61a7c53242b46ac58ecbd859',
      },
    },
  ],
  isLoading: false,
}
/** Get cars reducer.
 * @param {Object} state - Initial state
 * @param {Object} action - Payload object
 * @return {Object} - return new state
 */
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
