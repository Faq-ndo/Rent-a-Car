<?php
include_once "crud_functions.php";
include_once "sql_sentences.php";
include_once "connection.php";

$pdo = getConexion();

function selectAllCars() {
    $data = json_encode(selectAll(SQL_SELECT_ALL_CARS));
    echo $data;
}

function selectCarByID($carID) {
    $queryData = ["id" => $carID];
    echo json_encode(selectByID($queryData, SQL_SELECT_CAR_BY_ID));
}

function insertCar($request) {
    $carQueryData = json_decode($request, true);
    insert($carQueryData, SQL_INSERT_CAR);
    echo json_encode([$carQueryData["numberPlate"] => getLastInsertId()]);
}

function updateCar($request, $id) {
    $carQueryData = json_decode($request, true);
    $carQueryData["id"] = $id;
    updateByID($carQueryData, SQL_UPDATE_CAR);
    echo json_encode(["status" => "ok"]);
}

function deleteCar($carID) {
    $queryData = ["id" => $carID];
    deleteByID($queryData, SQL_DELETE_CAR);
    echo json_encode(["status" => "ok"]);
}

closeConexion();