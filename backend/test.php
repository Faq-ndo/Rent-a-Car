<?php
include_once "clientService.php";
include_once "bookingService.php";
include_once "carService.php";
include_once "connection.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Testing</title>
</head>
<body>
<?php
$pdo = getConexion();

$clients = selectAllClients();
foreach ($clients as $i => $d) {
    print_r($d);
}
?>
</body>
</html>
