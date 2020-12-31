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

$cars = selectAll(SQL_SELECT_ALL_CARS);
print_r($cars);
?>
</body>
</html>
