<?php
include_once "config_values.php";

require_once "config_values.php";

function getConexion() {
    try {
        $pdo = new PDO(DB_HOST, DB_USER, DB_PASSWORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
        return $pdo;
    } catch (PDOException $err) {
        die($err);
    }
}

function closeConexion() {
    global $pdo;
    unset($pdo);
}

function executeQuery ($queryData, $sql) {
    global $pdo;
    $stm = $pdo->prepare($sql);
    $stm->execute($queryData);
    return $stm;
}

function getLastInsertId () {
    global $pdo;
    return $pdo->lastInsertId();
}
?>