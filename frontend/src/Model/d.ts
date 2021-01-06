type Client = {
    id?: number,
    dni : string,
    name: string,
    address : string,
    phoneNumber : string,
    avaledBy? : string,
    endorses? : string[]
}

type ClientResponse = {
    id?: string,
    dni?: string,
    errorMessage?: string,
    status: string,
}

type Car = {
    id?: number,
    numberPlate : string,
    model : string,
    color : string,
    brand : string,
    bookingPrice : number,
    garage : string
}

type CarResponse = {
    id?: string,
    numberPlate?: string,
    errorMessage?: string,
    status: string,
}

type Booking = {
    bookingId: string,
    clientId: string,
    carId: string,
    startDate: string,
    endDate: string,
    totalPrice: number,
    delivered: boolean,
    gasLiters: number,
    description: string
}