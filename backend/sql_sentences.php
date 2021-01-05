<?php
include_once "config_values.php";

define("SQL_INSERT_CLIENT",
    "INSERT INTO ". DB_TABLE_CLIENT ." (dni, name, address, phoneNumber) 
    VALUES (:dni, :name, :address, :phoneNumber)");

define("SQL_SELECT_ALL_CLIENTS", "SELECT * FROM " . DB_TABLE_CLIENT);/*-------------------------------*/
define("SQL_SELECT_ALL_CLIENTS_WITH_AVALED_BY", "select c.*, clientendorse.dniGuarantor avaledBy from ". DB_TABLE_CLIENT ." c left join ". DB_TABLE_ENDORSED ." e on c.id = e.clientIDEndorsed left join (select distinct cl.id as idGuarantor, cl.dni as dniGuarantor from ". DB_TABLE_CLIENT ." cl join ". DB_TABLE_ENDORSED ." e on cl.id = e.clientIDGuarantor) clientendorse on e.clientIDGuarantor = clientendorse.idGuarantor");

define("SQL_SELECT_ALL_ENDORSED_CLIENTS_BY_ID", "select c.dni from ". DB_TABLE_CLIENT ." c join ". DB_TABLE_ENDORSED ." e on c.id = e.clientIDEndorsed where e.clientIDGuarantor = :id");

define("SQL_SELECT_CLIENT_BY_ID", "SELECT * FROM " . DB_TABLE_CLIENT . " WHERE id = :id");

define("SQL_SELECT_CLIENT_BY_DNI", "SELECT * FROM " . DB_TABLE_CLIENT . " WHERE dni = :dni");

define("SQL_DELETE_CLIENT", "DELETE FROM " . DB_TABLE_CLIENT . " WHERE id = :id");

define("SQL_UPDATE_CLIENT", "UPDATE " . DB_TABLE_CLIENT . " SET dni = :dni, name = :name, address = :address, 
    phoneNumber = :phoneNumber WHERE id = :id");



define("SQL_SELECT_ALL_CARS", "SELECT * FROM " . DB_TABLE_CAR);

define("SQL_SELECT_CAR_BY_ID", "SELECT * FROM " . DB_TABLE_CAR . " WHERE id = :id");

define("SQL_SELECT_CAR_BY_NUMBER_PLATE", "SELECT * FROM " . DB_TABLE_CAR . " WHERE numberPlate = :numberPlate");

define("SQL_INSERT_CAR", "insert into " . DB_TABLE_CAR . " (numberPlate, brand, model, color, bookingPrice, garage) 
values (:numberPlate, :brand, :model, :color, :bookingPrice, :garage)");

define("SQL_DELETE_CAR", "delete from " . DB_TABLE_CAR . " where id = :id");

define("SQL_UPDATE_CAR", "update " . DB_TABLE_CAR . " set numberPlate = :numberPlate, brand = :brand, model = :model, 
color = :color, bookingPrice = :bookingPrice, garage = :garage where id = :id");



define("SQL_INSERT_BOOKING", "INSERT INTO " . DB_TABLE_BOOKING . " (clientID, startDate, endDate, totalPrice, delivered) 
VALUES (:clientID, :startDate, :endDate, :totalPrice, :delivered)");

define("SQL_INSERT_BOOKING_DETAIL", "INSERT INTO " . DB_TABLE_BOOKING_DETAILS . " (carID, bookingID, description, gasLiters) 
VALUES (:carID, :bookingID, :description, :gasLiters)");

define("SQL_SELECT_ALL_BOOKINGS", "SELECT c.name, c.dni , b.*, d.*, ca.*  FROM " . DB_TABLE_BOOKING . " b 
INNER JOIN " . DB_TABLE_CLIENT . " c 
ON b.clientID = c.id INNER JOIN " . DB_TABLE_BOOKING_DETAILS . " d 
ON b.bookingID = d.bookingID INNER JOIN " . DB_TABLE_CAR .  " ca ON d.carID = ca.id");


define("SQL_SELECT_BOOKING_BY_BOOKING_ID", "SELECT b.bookingID, c.dni , ca.numberPlate, b.startDate, b.endDate, b.totalPrice, b.delivered, d.gasLiters, d.description  FROM " . DB_TABLE_BOOKING . " b 
INNER JOIN " . DB_TABLE_CLIENT . " c 
ON b.clientID = c.id INNER JOIN " . DB_TABLE_BOOKING_DETAILS . " d 
ON b.bookingID = d.bookingID INNER JOIN " . DB_TABLE_CAR .  " ca ON d.carID = ca.id WHERE b.bookingID = :bookingID");

define("SQL_SELECT_BOOKING_BY_CLIENT_DNI", "SELECT b.bookingID, c.dni , ca.numberPlate, b.startDate, b.endDate, b.totalPrice, b.delivered, d.gasLiters, d.description  FROM " . DB_TABLE_BOOKING . " b 
INNER JOIN " . DB_TABLE_CLIENT . " c 
ON b.clientID = c.id INNER JOIN " . DB_TABLE_BOOKING_DETAILS . " d 
ON b.bookingID = d.bookingID INNER JOIN " . DB_TABLE_CAR .  " ca ON d.carID = ca.id WHERE c.dni = :dni");

define("SQL_DELETE_BOOKING", "DELETE FROM " . DB_TABLE_BOOKING . " WHERE bookingID =  :bookingID");

define("SQL_DELETE_BOOKING_DETAIL", "DELETE FROM " . DB_TABLE_BOOKING_DETAILS . " WHERE bookingID =  :bookingID && carID = :carID");

define("SQL_UPDATE_BOOKING", "UPDATE " . DB_TABLE_BOOKING . " 
    clientID = :clientID, startDate = :startDate, endDate = :endDate, 
    totalPrice = :totalPrice, delivered = :delivered WHERE bookingID = :bookingID");

define("SQL_UPDATE_BOOKING_DETAIL", "UPDATE " . DB_TABLE_BOOKING_DETAILS . " 
    carID = :carID, description = :description, gasLiters = :gasLiters 
    WHERE bookingID =  :bookingID && carID = :carID");