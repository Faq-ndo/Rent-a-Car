<?php
include_once "clientService.php";
include_once "bookingService.php";
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
$paramsCar = ["numberPlate" => "6881GDL", "brand" => "Ford", "model" => "Focus 2008", "color" => "Verde oliva", "bookingPrice" => "20€/h", "garage" => "A52"];
//insertBooking($paransBooking);

print_r(insertCar($paramsCar));
?>
</body>
</html>
