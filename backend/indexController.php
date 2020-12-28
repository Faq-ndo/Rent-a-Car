<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('Content-Type: application/json; charset=utf-8');

include_once "clientService.php";
include_once "carService.php";
include_once "bookingService.php";
include_once "connection.php";


if($_GET["service"] == "serviceCars") {
    header("location: carService2.php");
}
