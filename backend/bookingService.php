<?php
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