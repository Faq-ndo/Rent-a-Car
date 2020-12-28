<?php
function insert($queryData, $sql) {
    executeQuery($queryData, $sql);
}

function selectAll($sql) {
    $stm = executeQuery([], $sql);
    return $stm->fetchAll(PDO::FETCH_ASSOC);
}

function selectByID($queryData, $sql) {
    $stm =  executeQuery($queryData, $sql);
    return $stm->fetch();
}

function deleteByID($queryData, $sql) {
    executeQuery($queryData, $sql);
}

function updateByID($queryData, $sql) {
    executeQuery($queryData, $sql);
}