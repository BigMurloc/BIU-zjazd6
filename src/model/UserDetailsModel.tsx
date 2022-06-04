export function toUserDetailsModel(response: any) {
    return {
        name: `${response.name.title} ${response.name.first} ${response.name.last}`,
        address: `${response.location.country} ${response.location.state} ${response.location.street.name}`
    }
}

export interface UserDetailsModel {
    readonly name: string;
    readonly address: string;
}

