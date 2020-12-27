type Client = {
    id : string,
    dni : string,
    name: string,
    address : string,
    phone : string,
    avaledBy? : string,
    endorses? : Client[]
}

type Car = {
    id : string,
    numberPlate : string,
    model : string,
    color : string,
    brand : string,
    bookingPrice : number,
    garage : string
}

type Booking = {
    bookingId: string,
    clientId: string,
    startDate: string,
    endDate: string,
    totalPrice: number,
    delivered: boolean,
    description: string
}