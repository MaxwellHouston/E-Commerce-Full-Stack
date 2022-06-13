import { CityInput } from "../../../address/inputs/CityInput";
import { CommentsInput } from "../../../address/inputs/CommentsInput";
import { StateInput } from "../../../address/inputs/StateInput";
import { StreetInput } from "../../../address/inputs/StreetInput";
import { ZipInput } from "../../../address/inputs/ZipInput";

export const ShippingForm = ({address, updateAddress, selectedAddress, toggleAddressModal}) => {
    return(
        <form className="address-form">
            <StreetInput street={address.street} updateAddress={updateAddress} selectedAddress={selectedAddress} />
            <CityInput city={address.city} updateAddress={updateAddress} selectedAddress={selectedAddress} />
            <StateInput state={address.state} updateAddress={updateAddress} selectedAddress={selectedAddress} />
            <ZipInput zip={address.zip} updateAddress={updateAddress} selectedAddress={selectedAddress} />
            <CommentsInput comments={address.comments} updateAddress={updateAddress} selectedAddress={selectedAddress} />
            <button className="submit-btn" onClick={toggleAddressModal} disabled={address.id ? true : false}>Save Address</button>
        </form>
    )
}