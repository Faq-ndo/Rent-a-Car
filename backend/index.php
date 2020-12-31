<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('Content-Type: application/json; charset=utf-8');

include_once "clientService.php";
include_once "carService.php";
include_once "bookingService.php";

if($_GET["service"] == "carService") {
    if(!isset($_GET["id"])){
        selectAllCars();
    }
    else {
        selectCarByID($_GET["id"]);
    }
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        insertCar($_REQUEST);
    }
    if($_SERVER['REQUEST_METHOD'] == 'PUT') {
        updateCar($_REQUEST);
    }
    if($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        deleteCar($_GET["id"]);
    }
}

if($_GET["service"] == "clientService") {
    $location = isset($_GET["id"]) ? "clientService.php?id=".$_GET['id'] : "carService.php";
    header("location: $location");
}

if($_GET["service"] == "bookingService") {
    $location = isset($_GET["id"]) ? "carService.php?id=".$_GET['id'] : "carService.php";
    header("location: $location");
}

if($_GET["service"] == "serviceCars") {
    $location = isset($_GET["id"]) ? "carService.php?id=".$_GET['id'] : "carService.php";
    header("location: $location");
}