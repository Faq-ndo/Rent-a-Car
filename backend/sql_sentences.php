<?php
include_once "config_values.php";

define("SQL_INSERT_CLIENT",
    "INSERT INTO ". DB_TABLE_CLIENT . " (dni, name, address, phoneNumber) 
    VALUES (:dni, :cName, :address, :phoneNumber)");

define("SQL_SELECT_ALL_CLIENTS", "SELECT * FROM " . DB_TABLE_CLIENT);

define("SQL_SELECT_CLIENT_BY_ID", "SELECT * FROM " . DB_TABLE_CLIENT . " WHERE clientID = :id");

define("SQL_DELETE_CLIENT_BY_ID", "DELETE FROM " . DB_TABLE_CLIENT . " WHERE clientID = :id");

define("SQL_UPDATE_CLIENT_BY_ID", "UPDATE " . DB_TABLE_CLIENT . " SET dni = :dni, name = :cName, address = :address, 
    phoneNumber = :phoneNumber WHERE clientID = :clientID");



define("SQL_SELECT_ALL_CARS", "SELECT * FROM " . DB_TABLE_CAR);

define("SQL_SELECT_CAR_BY_ID", "SELECT * FROM " . DB_TABLE_CAR . " WHERE carID = :id");

define("SQL_INSERT_CAR", "insert into " . DB_TABLE_CAR . " (number_plate, brand, model, color, bookingPrice, garage) 
values (:numberPlate, :brand, :model, :color, :bookingPrice, :garage)");

define("SQL_DELETE_CAR", "delete from " . DB_TABLE_CAR . " where carID = :id");

define("SQL_UPDATE_CAR", "update " . DB_TABLE_CAR . " set number_plate = :numberPlate, brand = :brand, model = :model, 
color = :color, bookingPrice = :bookingPrice, garage = :garage where carID = :id");


define("SQL_INSERT_BOOKING", "INSERT INTO " . DB_TABLE_BOOKING . " (clientID, startDate, endDate, totalPrice, delivered) 
VALUES (:clientID, :startDate, :endDate, :totalPrice, :delivered)");

define("SQL_SELECT_ALL_BOOKINGS", "SELECT c.name, c.dni , b.*, d.*, ca.*  FROM " . DB_TABLE_BOOKING . " b 
INNER JOIN " . DB_TABLE_CLIENT . " c 
ON b.clientID = c.clientID INNER JOIN " . DB_TABLE_DETAILS . " d 
ON b.bookingID = d.bookingID INNER JOIN " . DB_TABLE_CAR .  " ca ON d.carID = ca.carID");


define("SQL_SELECT_BOOKING_BY_CLIENT_DNI", "SELECT c.name, c.dni , b.*, d.*, ca.*  FROM " . DB_TABLE_BOOKING . " b 
INNER JOIN " . DB_TABLE_CLIENT . " c 
ON b.clientID = c.clientID INNER JOIN " . DB_TABLE_DETAILS . " d 
ON b.bookingID = d.bookingID INNER JOIN " . DB_TABLE_CAR .  " ca ON d.carID = ca.carID WHERE c.dni = :dni");

define("SQL_DELETE_BOOKING_BY_CLIENT_DNI", "DELETE FROM " . DB_TABLE_BOOKING . " WHERE clientID =  :clientID");

define("SQL_UPDATE_BOOKING_BY_CLIENT_ID", "UPDATE " . DB_TABLE_BOOKING . " 
     startDate = :startDate, endDate = :endDate, 
    totalPrice = :totalPrice, delivered = :delivered WHERE clientID = :clientID");

?>