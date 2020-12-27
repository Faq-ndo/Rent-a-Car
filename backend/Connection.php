<?php
require_once "config_values.php";

class Connection {

    function __construct() {}

    function getConexion() {
        try {
            $pdo = new PDO(HOST, USER, PASSWORD);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
            return $pdo;
        }  catch (PDOException $err) {
            die("ERROR: no se puedo conectar a la base de datos");
        }
    }

    public function closeConexion($pdo) {
        unset($pdo);
    }
}