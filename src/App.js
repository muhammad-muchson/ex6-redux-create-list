import "./App.css"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import Home from "./component/Home"
import { store, persistor } from "./store/store"
//app js
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
