<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header('Content-Type: application/json; charset=utf-8');

include_once "connection.php";
include_once "clientService.php";
include_once "carService.php";
include_once "bookingService.php";

$pdo = getConexion();

function getValuesFromRequest (){
    $request = file_get_contents("php://input");
    return json_decode($request, true);;
}

if($_GET["service"] == "carService") {

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $queryData = getValuesFromRequest();
        insertCar($queryData);
        die();
    }
    if($_SERVER['REQUEST_METHOD'] == 'PUT') {
        $queryData = getValuesFromRequest();
        updateCar($queryData, $_GET["id"]);
        die();
    }
    if($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        deleteCar($_GET["id"]);
        die();
    }
    if(isset($_GET["id"])){
        selectCarByID($_GET["id"]);
    }else {
        selectAllCars();
    }
}

if($_GET["service"] == "clientService") {
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $queryData = getValuesFromRequest();
        insertClient($queryData);
        die();
    }
    if($_SERVER['REQUEST_METHOD'] == 'PUT') {
        $queryData = getValuesFromRequest();
        updateClient($queryData, $_GET["id"]);
        die();
    }
    if($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        deleteClient($_GET["id"]);
        die();
    }
    if(isset($_GET["id"])){
        selectClientByID($_GET["id"]);
    }else {
        selectAllClients();
    }
}

if($_GET["service"] == "bookingService") {
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $queryData = getValuesFromRequest();
        insertBooking($queryData);
        die();
    }
    if($_SERVER['REQUEST_METHOD'] == 'PUT') {
        $queryData = getValuesFromRequest();
        updateBooking($queryData, $_GET["id"]);
        die();
    }
    if($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        deleteBooking($_GET["id"]);
        die();
    }
    if(isset($_GET["id"])){
        selectBookingByID($_GET["id"]);
    }else {
        selectAllBookings();
    }
}

closeConexion();