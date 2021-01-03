<?php
include_once "crud_functions.php";
include_once "sql_sentences.php";
include_once "config_values.php";

function selectAllClients(){
    $data = json_encode(selectAll(SQL_SELECT_ALL_CLIENTS));
    echo $data;
}

function selectClientByID($clientID){
    $queryData = ["id" => $clientID];
    echo json_encode(selectByID($queryData, SQL_SELECT_CLIENT_BY_ID));
}

function insertClient($clientQueryData){
    insert($clientQueryData, SQL_INSERT_CLIENT);
    echo json_encode([$clientQueryData["dni"] => getLastInsertId()]);
}

function updateClient($clientQueryData, $id){
    $clientQueryData["id"] = $id;
    updateByID($clientQueryData, SQL_UPDATE_CLIENT);
    echo json_encode(["status" => "ok"]);
}

function deleteClient($clientID){
    $queryData = ["id" => $clientID];
    deleteByID($queryData, SQL_DELETE_CAR);
    echo json_encode(["status" => "ok"]);
}