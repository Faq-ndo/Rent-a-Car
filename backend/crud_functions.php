<?php
include_once "connection.php";

function insert($queryData, $sql) {
    return executeQuery($queryData, $sql);
}

function selectAll($sql) {
    $stm = executeQuery([], $sql, true);
    if($stm->rowCount() > 0){
        while ($row = $stm->fetch(PDO::FETCH_ASSOC)){
            $rows[] = $row;
        }
    } else $rows = ["NoRecords" => "No records found at this moment"];
    return $rows;
}

function selectBy($queryData, $sql) {
    $stm =  executeQuery($queryData, $sql, true);
    return $stm->fetch(PDO::FETCH_ASSOC);
}

function deleteByID($queryData, $sql) {
    return executeQuery($queryData, $sql);
}

function updateByID($queryData, $sql) {
    return executeQuery($queryData, $sql);
}