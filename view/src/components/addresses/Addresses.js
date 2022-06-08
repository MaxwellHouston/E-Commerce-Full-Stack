import { useContext } from "react"
import { AddressList } from "../cart/checkout/shipping/AddressList"
import { AddressContext } from "../context/AddressContext"

export const Addresses = () => {


    return(
        <div>
            <AddressList />
        </div>
    )
}