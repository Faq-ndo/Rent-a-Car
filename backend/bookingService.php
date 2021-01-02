<?php
include_once "crud_functions.php";
include_once "sql_sentences.php";
include_once "connection.php";

$pdo = getConexion();

function selectAllBookings()
{
    $data = json_encode(selectAll(SQL_SELECT_ALL_BOOKINGS));
    echo $data;
}

function selectBookingById($bookingID){
    $queryData = ["id" => $bookingID];
    echo json_encode(selectByID($queryData, SQL_SELECT_BOOKING_BY_ID));
}

function insertCar($request)
{
    $carQueryData = json_decode($request, true);
    insert($carQueryData, SQL_INSERT_CAR);
    echo json_encode([$carQueryData["numberPlate"] => getLastInsertId()]);
}

function updateCar($request, $id)
{
    $carQueryData = json_decode($request, true);
    $carQueryData["id"] = $id;
    updateByID($carQueryData, SQL_UPDATE_CAR);
    echo json_encode(["status" => "ok"]);
}

function deleteCar($carID)
{
    $queryData = ["id" => $carID];
    deleteByID($queryData, SQL_DELETE_CAR);
    echo json_encode(["status" => "ok"]);
}

closeConexion();

include_once "connection.php";
include_once "sql_sentences.php";

/*
 * TODO:
 * Añadir un detalle reserva con su descripción -> insertBookingDetail, updateBookingDetail y deleteBookingDetail.
 *
 *
 * */
function insertBooking($bookingQueryData, $sql) {
    executeQuery($bookingQueryData, SQL_INSERT_BOOKING);
}

function selectAllBookings() {
    $stm = executeQuery([], SQL_SELECT_ALL_BOOKINGS);
    return $stm->fetchAll(PDO::FETCH_ASSOC);
}

function selectBookingByClientDNI($bookingQueryData) {
    $stm =  executeQuery($bookingQueryData, SQL_SELECT_BOOKING_BY_CLIENT_DNI);
    return $stm->fetch();
}

function deleteBookingByClientID($bookingQueryData) {
    executeQuery($bookingQueryData, SQL_DELETE_BOOKING_BY_CLIENT_DNI);
}

function updateBookingByClientID($bookingQueryData) {
    executeQuery($bookingQueryData, SQL_UPDATE_BOOKING_BY_CLIENT_ID);
}

?>