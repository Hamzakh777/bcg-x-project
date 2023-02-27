import { Appointment, User } from "@pp/utils";

const user1: User = {
    uuid: '1'
}

const user2: User = {
    uuid: '2'
}

const appointments: Appointment[] = [
    {
        date: (new Date()).toString(),
        name: "Appointment 1",
        uuid: '1',
        user: user1
    },
    {
        date: (new Date()).toString(),
        name: "Appointment 2",
        uuid: '2',
        user: user1
    },
    {
        date: (new Date()).toString(),
        name: "Appointment 3",
        uuid: '3',
        user: user1
    },
    {
        date: (new Date()).toString(),
        name: "Appointment 4",
        uuid: '4',
        user: user2
    },
    {
        date: (new Date()).toString(),
        name: "Appointment 5",
        uuid: '5',
        user: user2
    },
    {
        date: (new Date()).toString(),
        name: "Appointment 6",
        uuid: '6',
        user: user2
    },
]

export function getUserAppointments(uuid: string): Appointment[] {
    return appointments.filter(({user}) => user.uuid === uuid);
}