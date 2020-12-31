<?php
include_once "connection.php";

function insert($queryData, $sql) {
    executeQuery($queryData, $sql);
}

function selectAll($sql) {
    $stm = executeQuery([], $sql);
    while ($row = $stm->fetch(PDO::FETCH_ASSOC)){
        $rows[] = $row;
    }
    return $rows;
}

function selectByID($queryData, $sql) {
    $stm =  executeQuery($queryData, $sql);
    return $stm->fetch(PDO::FETCH_ASSOC);
}

function deleteByID($queryData, $sql) {
    executeQuery($queryData, $sql);
}

function updateByID($queryData, $sql) {
    executeQuery($queryData, $sql);
}