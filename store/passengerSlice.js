import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

const initialPassengers = [
  {
    id: uuidv4(),
    nama: "Yoga",
    umur: 22,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Ria",
    umur: 19,
    jenisKelamin: "Wanita",
  },
  {
    id: uuidv4(),
    nama: "Fahmi",
    umur: 25,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Lala",
    umur: 21,
    jenisKelamin: "Wanita",
  },
  {
    id: uuidv4(),
    nama: "Ivan2",
    umur: 25,
    jenisKelamin: "Pria",
  },
]

export const passengerSlice = createSlice({
  name: "passenger",
  // initialState = memasukkan data ke dalam localstorage
  initialState: {
    passengers: initialPassengers,
  },
  reducers: {
    // digunakan untuk melakukan logic dari data yang telah tersimpan dan ingin di panggil
    clickSaya: (state, action)=>{
      console.log("saya telah di klik", state.passengers)
      console.log("saya telah di klik")
    },
    hapusPengunjung: (state, action) => {
      console.log("di dalam state hapusPengunjung", state);
      console.log("di dalam action hapusPengunjung", action);
      console.log();
      state.passengers = state.passengers.filter((passenger) => {
        return passenger.id !== action.payload
      })
    },
    tambahPengunjung: (state, action) => {
      const newPassenger = {
        id: uuidv4(),
        ...action.payload,
      }
      state.passengers = [...state.passengers, newPassenger]
    },
  },
  
})
console.log("passengerSlice = ",passengerSlice)
// Action creators are generated for each case reducer function
export const { hapusPengunjung, tambahPengunjung, clickSaya} = passengerSlice.actions

export default passengerSlice.reducer

