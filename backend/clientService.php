<?php
include_once "connection.php";
include_once "sql_sentences.php";

function insertClient($clientQueryData) {
    executeQuery($clientQueryData, SQL_INSERT_CLIENT);
}

function selectAllClients() {
    $stm = executeQuery([], SQL_SELECT_ALL_CLIENTS);
    return $stm->fetch();
}

function selectClientByDNI($clientQueryData) {
    $stm =  executeQuery($clientQueryData, SQL_SELECT_CLIENT_BY_DNI);
    return $stm->fetch();
}

function deleteClientByDNI($clientQueryData) {
    executeQuery($clientQueryData, SQL_DELETE_CLIENT_BY_DNI);
}

function updateClientByID($clientQueryData) {
    executeQuery($clientQueryData, SQL_UPDATE_CLIENT_BY_ID);
}
?>