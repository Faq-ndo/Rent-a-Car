<?php
include_once "crud_functions.php";
include_once "sql_sentences.php";

$pdo = getConexion();

if($_SERVER['REQUEST_METHOD'] == 'GET') {
    if(!isset($_GET["id"])){
        echo json_encode(selectAll(SQL_SELECT_ALL_CARS));
    }
    else {
        $queryData = ["numberPlate" => $_GET["id"]];
        echo json_encode(selectByID($queryData, SQL_SELECT_CAR_BY_NUMBER_PLATE));
    }
}
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $car = json_decode($_REQUEST['body']);
}
if($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $car = json_decode($_REQUEST['body']);
}
if($_SERVER['REQUEST_METHOD'] == 'DELETE') {

}

closeConexion();