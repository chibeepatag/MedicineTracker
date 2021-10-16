const medicines = require("./medicines")
// @ponicode
describe("medicines.setMedicineClass", () => {
    test("0", () => {
        let callFunction = () => {
            medicines.setMedicineClass("Australian Freshwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            medicines.setMedicineClass("Spectacled Caiman")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            medicines.setMedicineClass("Nile Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            medicines.setMedicineClass("Saltwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            medicines.setMedicineClass("Dwarf Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            medicines.setMedicineClass(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("medicines.setMedicineAntibiotic", () => {
    test("0", () => {
        let callFunction = () => {
            medicines.setMedicineAntibiotic("Spectacled Caiman")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            medicines.setMedicineAntibiotic("Australian Freshwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            medicines.setMedicineAntibiotic("Nile Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            medicines.setMedicineAntibiotic("Dwarf Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            medicines.setMedicineAntibiotic("Saltwater Crocodile")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            medicines.setMedicineAntibiotic(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("medicines.setMedicineDose", () => {
    test("0", () => {
        let callFunction = () => {
            medicines.setMedicineDose(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            medicines.setMedicineDose(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            medicines.setMedicineDose(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("medicines.setMedicineFrequency", () => {
    test("0", () => {
        let callFunction = () => {
            medicines.setMedicineFrequency(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            medicines.setMedicineFrequency(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            medicines.setMedicineFrequency("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            medicines.setMedicineFrequency(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            medicines.setMedicineFrequency(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            medicines.setMedicineFrequency(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("medicines.setMedicineRoute", () => {
    test("0", () => {
        let callFunction = () => {
            medicines.setMedicineRoute("LLC")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            medicines.setMedicineRoute("Inc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            medicines.setMedicineRoute("and Sons")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            medicines.setMedicineRoute(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("medicines.setMedicineStart", () => {
    test("0", () => {
        let callFunction = () => {
            medicines.setMedicineStart(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            medicines.setMedicineStart(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            medicines.setMedicineStart(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            medicines.setMedicineStart("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            medicines.setMedicineStart(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            medicines.setMedicineStart(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("medicines.setMedicineEnd", () => {
    test("0", () => {
        let callFunction = () => {
            medicines.setMedicineEnd(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            medicines.setMedicineEnd("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            medicines.setMedicineEnd(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            medicines.setMedicineEnd(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            medicines.setMedicineEnd("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            medicines.setMedicineEnd(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("medicines.addMedicine", () => {
    test("0", () => {
        let callFunction = () => {
            medicines.addMedicine(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            medicines.addMedicine(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            medicines.addMedicine(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
