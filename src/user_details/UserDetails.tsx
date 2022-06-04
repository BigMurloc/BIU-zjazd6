import {UserDetailsModel} from "../model/UserDetailsModel";


const UserDetails = (userDetails: any) => {

    return (
        <div>
            {userDetails?.name}
        </div>
    )
}

export default UserDetails