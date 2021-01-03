<?php
include_once "crud_functions.php";
include_once "sql_sentences.php";
include_once "connection.php";
include_once "config_values.php";

$pdo = getConexion();

function selectAllCars() {
    echo json_encode(selectAll(SQL_SELECT_ALL_CARS, true));
}

function selectCarByID($carID) {
    $queryData = ["id" => $carID];
    echo json_encode(selectByID($queryData, SQL_SELECT_CAR_BY_ID, true));
}

function insertCar($carQueryData) {
    $selectQueryData = ["id" => $carQueryData["id"]];
    $carData = selectCarByID($selectQueryData);
    if (!$carData){
        $wasInserted = insert($carQueryData, SQL_INSERT_CAR);
        if($wasInserted){
            echo json_encode([$carQueryData["numberPlate"] => getLastInsertId()]);
        } else throw new Exception("the car could not be inserted due to a problem");
    } else{
        throw new Exception("The car that is being inserted is duplied");
    }
}

function updateCar($carQueryData, $id) {
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