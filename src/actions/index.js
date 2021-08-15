import user from "./user"
import goods from "./goods"
import staff from "./staff"
import order from "./order"
import home from "./home"

const actions = module => {
    switch (module) {
        case 'user':
            return user
            break

        case 'goods':
            return goods
            break

        case 'staff':
            return staff
            break

        case 'order':
            return order
            break

        case 'home':
            return home
            break

        default:
            break
    }
}

export default actions