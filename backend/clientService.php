<?php
include_once "crud_functions.php";
include_once "sql_sentences.php";
include_once "config_values.php";

function selectAllClients(){
    $allClientsData = selectAll(SQL_SELECT_ALL_CLIENTS_WITH_AVALED_BY);
    foreach ($allClientsData as &$clientData){
        $clientQueryData = ["id" => $clientData["id"]];
        $endorsedClients = selectAllBy($clientQueryData, SQL_SELECT_ALL_ENDORSED_CLIENTS_BY_ID);
        if($endorsedClients){
            foreach ($endorsedClients as $endorsedClient){
                $clientData["endorses"][] = $endorsedClient["dni"];
            }
        }
    }
    echo json_encode($allClientsData);
    /*$data = json_encode(selectAll(SQL_SELECT_ALL_CLIENTS));
    echo $data;*/
}

function selectClientByID($clientID){
    $queryData = ["id" => $clientID];
    echo json_encode(selectBy($queryData, SQL_SELECT_CLIENT_BY_ID));
}

function insertClient($clientQueryData){
    $clientData = selectBy(["dni" => $clientQueryData["dni"]], SQL_SELECT_CLIENT_BY_DNI);
    if (!$clientData["id"]){
        $hasBeenInserted = insert($clientQueryData, SQL_INSERT_CLIENT);
        if($hasBeenInserted){
            echo json_encode(["status" => "ok", "id" => getLastInsertId(), "dni" => $clientQueryData["dni"]]);
        } else echo json_encode(["status" => "ko", "errorMessage" => "The client could not be inserted due to a problem"]);
    } else echo json_encode(["status" => "ko", "errorMessage" => "The client that is being inserted is duplied"]);
}

function updateClient($clientQueryData, $id){
    $clientQueryData["id"] = $id;
    $hasBeenUpdated = updateByID($clientQueryData, SQL_UPDATE_CLIENT);
    if($hasBeenUpdated){
        echo json_encode(["status" => "ok"]);
    } else echo json_encode(["status" => "ko", "errorMessage" => "The client data could not be updated"]);
}

function deleteClient($clientID){
    $queryData = ["id" => $clientID];
    $clientData = selectBy($queryData, SQL_SELECT_CLIENT_BY_ID);
    if (isset($clientData["id"])){
        $hasBeenDeleted = deleteByID($queryData, SQL_DELETE_CLIENT);
        if($hasBeenDeleted){
            echo json_encode(["status" => "ok"]);
        } else echo json_encode(["status" => "ko", "errorMessage" => "The client data could not be deleted"]);
    } else echo json_encode(["status" => "ko", "errorMessage" => "The client that is being deleted does not exist"]);
}