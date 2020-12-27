<?php
include_once "clientService.php";
include_once "bookingService.php";
include_once "connection.php";
$pdo = getConexion();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Testing</title>
</head>
<body>
<?php
//$paramsClient = [/*"clientID" => 1,*/"dni" => "2415587G"/*, "cName" => "Lorenzo", "address" => "Calle La Era", "phoneNumber" => "800100200"*/];
$paransBooking = ["clientID" => 5];//, "startDate" => "2020-12-27",  "endDate" => "2020-12-30", "totalPrice" => 40, "delivered" => 0
$paramsClient = ["dni" => "2410000V"/*, "cName" => "Facundo", "address" => "Benagalbón", "phoneNumber" => "652025548"*/];
?>
</body>
</html>
