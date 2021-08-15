import LayOut from "@/layout/index.js";
import { withRouter } from 'react-router-dom'

import './App.css'

function App(props) {
  return (
    <div>
      <LayOut { ...props }/>
    </div>
  )
}

export default withRouter(App);
