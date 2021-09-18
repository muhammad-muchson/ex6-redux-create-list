//use selector untuk pemanggilan data dari redux. 
//usedispatch untuk melakukan pemanggilan terhadap function hapus pengunjung di reducer redux

import { useSelector, useDispatch } from "react-redux"
import { hapusPengunjung,clickSaya,tambahPengunjung } from "../store/passengerSlice"

import ListItem from "./ListItem"
const ListPassenger = () => {
  const passengers = useSelector((state) => state.passenger.passengers)
  
  console.log("didalam passengers = ", passengers );

  const dispatch = useDispatch()
  console.log("dispact didalam ListPassenger = ", dispatch );

  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {passengers.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            hapusPengunjung={() => {
              dispatch(hapusPengunjung(item.id))
            }}
          />
        ))}
      </table>
    </div>
  )
}

export default ListPassenger
