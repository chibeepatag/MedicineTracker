import * as types from './types'

export const setMedicineClass = medicineClass => ({
  type: types.SET_MEDICINE_CLASS,
  payload: medicineClass,
})

export const setMedicineAntibiotic = medicineAntibiotic => ({
  type: types.SET_MEDICINE_ANTIBIOTIC,
  payload: medicineAntibiotic,
})

export const setMedicineDose = medicineDose => ({
  type: types.SET_MEDICINE_DOSE,
  payload: medicineDose,
})

export const setMedicineFrequency = medicineFrequency => ({
  type: types.SET_MEDICINE_FREQUENCY,
  payload: medicineFrequency,
})

export const setMedicineRoute = medicineRoute => ({
  type: types.SET_MEDICINE_ROUTE,
  payload: medicineRoute,
})

export const setMedicineStart = medicineStart => ({
  type: types.SET_MEDICINE_START,
  payload: medicineStart,
})

export const setMedicineEnd = medicineEnd => ({
  type: types.SET_MEDICINE_END,
  payload: medicineEnd,
})

export const addMedicine = medicine => ({
  type: types.ADD_MEDICINE,
  payload: medicine,
})
