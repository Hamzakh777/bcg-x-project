export interface Appointment {
    uuid: string
    date: string
    name: string
    user: User
}

export interface User {
    uuid: string,
}