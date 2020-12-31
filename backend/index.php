<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header('Content-Type: application/json; charset=utf-8');

include_once "clientService.php";
include_once "carService.php";
include_once "bookingService.php";

if($_GET["service"] == "carService") {

    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        $request = file_get_contents("php://input");
        insertCar($request);
        die();
    }
    if($_SERVER['REQUEST_METHOD'] == 'PUT') {
        $request = file_get_contents("php://input");
        updateCar($request, $_GET["id"]);
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

}

if($_GET["service"] == "bookingService") {

}