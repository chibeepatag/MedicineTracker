import * as PatientActions from './patients'
import * as EventActions from './events'
import * as MedicineActions from './medicines'

export const ActionCreators = Object.assign({}, PatientActions, EventActions, MedicineActions)
