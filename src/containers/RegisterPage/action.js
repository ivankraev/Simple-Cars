import { RegisterTypes } from "./types"

export const registerStart = (data) => ({
    type: RegisterTypes.REGISTER_START,
    payload: data
})
