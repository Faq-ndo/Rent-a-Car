class rentView {
    constructor()  {

        /*CLIENT TABLE*/
        this.clientTbody = document.getElementById('client_tbody'); 
        this.carTbody = document.getElementById('car_tbody');
        this.bookingTbody = document.getElementById('booking_tbody');

        /*INPUTS ADD CLIENT FORM*/
        this.clientNif = document.getElementById('dniTxt');
        this.clientName = document.getElementById('nameTxt');
        this.clientPhone = document.getElementById('phoneTxt');
        this.clientAddress = document.getElementById('addressTxt');

        /*INPUTS ADD CAR FORM*/
        this.carPlate = document.getElementById('plateTxt');
        this.carModel = document.getElementById('modelTxt');
        this.carColor = document.getElementById('colorTxt');
        this.carBrand = document.getElementById('brandTxt');
        this.carBookingPrice = document.getElementById('bookingPriceTxt');
        this.carGaraje = document.getElementById('garageTxt');

        /*HIDDEN SECTIONS*/
        this.setDisplayByClassName('sectionsTable', true);//thClient, thCar...

        /*HIDDEN FORMS*/
        this.setDisplayByClassName('forms', true);

        /*BIND FUNCTIONS BUTTONS*/
        this.bindReturnButtons();
        this.bindButtonDisplayClientForm();
        this.bindButtonDisplayCarForm();
        this.bindButtonDisplayBookingForm();


    }   

    /*====================================HIDDEN FUNCTIONS====================================*/
    setDisplayById = (id, status)  => document.getElementById(id).hidden = status;

    setDisplayByClassName(className, status) {
        const domElements = document.getElementsByClassName(className);
        for(const $domElement of domElements) {
            $domElement.hidden = status;
        }
    }

    /*=======================================================================================*/
    /*====================================TABLE FUNCTIONS====================================*/
    updateClientTbody = clients => this.clientTbody.innerHTML = clients;

    clientTemplate = ({ id, dni, name, address, phoneNumber }) => {
     return  `
            <td name='clientIdtd'>${id}</td>
            <td name='clientNametd'>${dni}</td>
            <td name='clientNametd'>${name}</td>
            <td name='clientAddresstd'>${address}</td>
            <td name='clientPhoneNumbertd'>${phoneNumber}</td>
            `;
    }

    loadClientTemplate = clients => {
        let result = '';
         for(const $client of  Object.values(clients)) {
                result += `<tr>${this.clientTemplate($client)}</tr>`;
            }
        return result;
    }

    updateCarTbody = cars => this.carTbody.innerHTML = cars;

    carTemplate = ({numberPlate, model, color, brand, bookingPrice, garage }) => {
        return  `
        <td name='carBrandtd'>${brand}</td>
        <td name='carModeltd'>${model}</td>
        <td name='carColortd'>${color}</td>
        <td name='carNumberPlatetd'>${numberPlate}</td>
        <td name='carGaragetd'>${garage}</td>
        <td name='carBookingPricetd'>${bookingPrice}</td>
        <td name='carUpdateButton'><input type='button' value='update' id='updateClientButton'></td>
        <td name='carDeleteButton'><input type='button' value='delete' id='deleteClientButton'></td>
            `;
    }

    bindUpdateCarButton() {
        document.getElementById('updateClientButton').addEventListener('click', _ => {
            alert("jdkfgkdfjg")
        });
    }

    loadCarTemplate = cars => {
        let result = '';
        for(const $car of Object.values(cars)) {
             result += `<tr>${this.carTemplate($car)}</tr>`;
            }
        return result;
    }

    updateBookingTbody = bookings => this.bookingTbody.innerHTML = bookings;

    bookingTemplate = ({ startDate, endDate, totalPrice, delivered }) => {
        return  `
             <td name='bookingStartDatetd'>${startDate}</td>
             <td name='bookingEndDatetd'>${endDate}</td>
             <td name='bookingTotalPricetd'>${totalPrice}</td>
             <td name='bookingDeliveredtd'>${delivered}</td>
            `;
    }

    loadBookingTemplate = bookings => {
        let result = '';
        for(const $booking of Object.values(bookings)) {
             result += `<tr>${this.bookingTemplate($booking)}</tr>`;
            }
        return result;
    }
    /*====================================BUTTONS FUNCTIONS====================================*/
    bindReturnButtons() {
        Array.from(document.getElementsByClassName('backAndReturnButtons')).map(returnButton => {
            returnButton.addEventListener('click', _ => {
                this.setDisplayById('managements', false);
                this.setDisplayById('thUser', true);
                this.setDisplayById('thCars', true);
                this.setDisplayById('thBooking', true);
                this.setDisplayByClassName('forms', true); 
            });
        });
    }

    bindInfoClientButton(handlerShowAll) {
        document.getElementById('clientInfoButton').addEventListener('click', _ => {
            handlerShowAll();
            this.setDisplayById('thUser', false);
            this.setDisplayById('managements', true);
            this.setDisplayById('thCars', true);
            this.setDisplayById('thBooking', true);
        });
    }

    bindInfoCarButton(handlerShowAll) {
        document.getElementById('carInfoButton').addEventListener('click', _ => {
            handlerShowAll();
            this.setDisplayById('thCars', false);
            this.setDisplayById('managements', true);
            this.setDisplayById('thUser', true);
            this.setDisplayById('thBooking', true);
        });
    }    

    bindInfoBookingButton(handlerShowAll) {
        document.getElementById('bookingInfoButton').addEventListener('click', _ => {
            handlerShowAll();
            this.setDisplayById('thBooking', false);
            this.setDisplayById('managements', true);
            this.setDisplayById('thUser', true);
            this.setDisplayById('thCars', true);
        });
    }

    bindButtonInsertClient(handlerInsertClient) {
        document.getElementById('clientInsertButton').addEventListener('click', _ => {
            handlerInsertClient(
                {
                    dni: this.clientNif.value, 
                    name: this.clientName.value, 
                    address: this.clientAddress.value, 
                    phoneNumber: this.clientPhone.value
                }
            );
        });
    }

    bindButtonInsertCar(handlerInsertCar) {
        document.getElementById('carAddFormButton').addEventListener('click', _ => {
           handlerInsertCar(
              {
                numberPlate: this.carPlate.value,
                model: this.carModel.value,
                color: this.carColor.value,
                brand: this.carBrand.value,
                bookingPrice: this.carBookingPrice.value,
                garage: this.carGaraje.value
            
              }
            );
        });
    }

    bindButtonDisplayClientForm() {
        document.getElementById('insertClientButton').addEventListener('click', _ => {
            this.setDisplayById('clientInsertForm', false);
            this.setDisplayById('thUser', true);
        });
    }

    bindButtonDisplayCarForm() {
        document.getElementById('carInsertButton').addEventListener('click', _ => {
            this.setDisplayById('carInsertForm', false);
            this.setDisplayById('thCars', true);
        });
    }

    bindButtonDisplayBookingForm() { 
        document.getElementById('bookingInsertButton').addEventListener('click', _ => {
            this.setDisplayById('bookingInsertForm', false);
            this.setDisplayById('thBooking', true)
        });
    }

    /*=======================================================================================*/

}
/*¿Qué función estaría bien aplicada, la que recorremos con map o con el for of?
     Array.from(this.returnButtons).map(returnButton => {
            returnButton.addEventListener('click', _ => {
                this.setDisplay('managements', false);
                this.setDisplay('thUser', true);
                this.setDisplay('thCars', true);
                this.setDisplay('thBooking', true);
            });
        });
        
        for(const $returnBut of this.returnButtons) {
            $returnBut.addEventListener('click', _ => {
                this.setDisplay('managements', false);
                this.setDisplay('thUser', true);
                this.setDisplay('thCars', true);
                this.setDisplay('thBooking', true);
            });

*/