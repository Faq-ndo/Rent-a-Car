<?php
include_once "config_values.php";
include_once "connection.php";

function selectAllCars() {
    $stm = executeQuery([], SQL_SELECT_ALL_CARS);
    return $stm->fetchAll(PDO::FETCH_ASSOC);
}

function selectCarByNumberPlate($carQueryData) {
    $stm = executeQuery($carQueryData, SQL_SELECT_CAR_BY_NUMBER_PLATE);
    return $stm->fetch();
}

function deleteCarByNumberPlate($carQueryData) {
    executeQuery($carQueryData, SQL_DELETE_CAR);
}

function insertCar($carQueryData) {
    executeQuery($carQueryData, SQL_INSERT_CAR);
}

function updateCarData($carQueryData) {
    executeQuery($carQueryData, SQL_UPDATE_CAR);
}

