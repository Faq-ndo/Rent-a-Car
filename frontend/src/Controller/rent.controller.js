class rentController {
    constructor(rentView, rentClientService, rentCarService, rentBookingService) {
        this.rentView = rentView;
        this.rentClientService = rentClientService;
        this.rentCarService = rentCarService;
        this.rentBookingService = rentBookingService;

        this.rentView.bindInfoClientButton(this.handlerShowAll);
        this.rentView.bindInfoCarButton(this.handlerShowAll);
        this.rentView.bindInfoBookingButton(this.handlerShowAll);
        
        this.rentView.bindButtonInsertClient(this.handlerInsertClient);
        this.rentView.bindButtonInsertCar(this.handlerInsertCar);

        this.rentView.bindUpdateCarButton(); 

    }

    handlerShowAll = () =>  {
        this.rentView.updateClientTbody(this.rentView.loadClientTemplate(this.rentClientService.clients));
        this.rentView.updateCarTbody(this.rentView.loadCarTemplate(this.rentCarService.cars));
        this.rentView.updateBookingTbody(this.rentView.loadBookingTemplate(this.rentBookingService.bookings))
    }

    handlerInsertClient = client => this.rentClientService.insertClient(new rentClient(client.dni, client.name, client.address, client.phoneNumber));

    handlerInsertCar = car => {
        const carModel = new rentCar(car);
        this.rentCarService.insertCar(carModel);
    }
    
}