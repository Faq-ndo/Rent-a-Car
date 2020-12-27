<?php
include_once "config_values.php";

define("SENTENCE_SELECT_ALL_CARS", "select * from " . DB_TABLE_CAR);
define("SENTENCE_SELECT_CAR_BY_NUMBER_LICENSE", "select * from " . DB_TABLE_CAR . " where number_plate = :numberPlate");
define("SENTENCE_INSERT_CAR", "insert into " . DB_TABLE_CAR . " (number_plate, brand, model, color, bookingPrice, garage) values number_plate = :numberPlate, brand = :brand, model = :model, color = :color, bookingPrice = :bookingPrice, garage = :garage");
define("SENTENCE_DELETE_CAR", "delete from " . DB_TABLE_CAR . " where number_plate = :numberPlate");
define("SENTENCE_UPDATE_CAR", "update ".DB_TABLE_CAR." set number_plate = numberPlate, brand = :brand, model = :model, color = :color, bookingPrice = :bookingPrice where carID = :carId");