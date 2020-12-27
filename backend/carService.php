<?php
include_once "config_values.php";
include_once "connection.php";

function selectAllCars () {
    $stm = executeQuery([], SENTENCE_SELECT_ALL_CARS);
    return $stm->fetch();
}

function selectCarByNumberPlate ($carQueryData) {
    $stm = executeQuery($carQueryData, SENTENCE_SELECT_ALL_CARS);
    return $stm->fetch();
}

function deleteCarByID ($carQueryData) {
    executeQuery($carQueryData, SENTENCE_DELETE_CAR);
}

function insertCar ($carQueryData) {
    executeQuery($carQueryData, SENTENCE_INSERT_CAR);
}

function updateCarData ($carQueryData) {
    executeQuery($carQueryData, SENTENCE_UPDATE_CAR);
}