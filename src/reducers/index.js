import { combineReducers } from 'redux'

import user from './user'
import goods from './goods'
import staff from './staff'
import order from './order'
import home from './home'

const rootReducer = combineReducers({
    user,
    goods,
    staff,
    order,
    home
})

export default rootReducer