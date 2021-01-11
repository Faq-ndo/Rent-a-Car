<?php
include_once "crud_functions.php";
include_once "sql_sentences.php";
include_once "config_values.php";

function selectAllCars() {
    echo json_encode(selectAll(SQL_SELECT_ALL_CARS));
}

function selectCarByID($carID) {
    $queryData = ["id" => $carID];
    echo json_encode(selectBy($queryData, SQL_SELECT_CAR_BY_ID));
}

function insertCar($carQueryData) {
    $carData = selectBy(["numberPlate" => $carQueryData["numberPlate"]], SQL_SELECT_CAR_BY_NUMBER_PLATE);
    if (!$carData["id"]){
        $hasBeenInserted = insert($carQueryData, SQL_INSERT_CAR);
        if($hasBeenInserted){
            echo json_encode(["status" => "ok", "id" => getLastInsertId(), "numberPlate" => $carQueryData["numberPlate"]]);
        } else echo json_encode(["status" => "ko", "errorMessage" => "The car could not be inserted due to a problem"]);
    } else echo json_encode(["status" => "ko", "errorMessage" => "The car that is being inserted is duplied"]);
}

function updateCar($carQueryData, $id) {
    $carQueryData["id"] = $id;
    $hasBeenUpdated = updateByID($carQueryData, SQL_UPDATE_CAR);
    if($hasBeenUpdated){
        echo json_encode(["status" => "ok"]);
    } else echo json_encode(["status" => "ko", "errorMessage" => "The car data could not be updated"]);
}

function deleteCar($carID) {
    $queryData = ["id" => $carID];
    $carData = selectBy($queryData, SQL_SELECT_CAR_BY_ID);
    if (isset($carData["id"])){
        $hasBeenDeleted = deleteByID($queryData, SQL_DELETE_CAR);
        if($hasBeenDeleted){
            echo json_encode(["status" => "ok"]);
        } else echo json_encode(["status" => "ko", "errorMessage" => "The car data could not be deleted"]);
    } else echo json_encode(["status" => "ko", "errorMessage" => "The car that is being deleted does not exist"]);
}