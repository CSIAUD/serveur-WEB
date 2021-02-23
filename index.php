<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Serveur Apache</title>
    <link rel="stylesheet" href="./css/style.css">
    <script src='./js/anim.js' defer></script>
</head>
<body>
    <h1>Serveur APACHE</h1>
    <p>Nous sommes le
    <?php
    $now = time();
    echo date('d-m-Y', $now);
    ?>
    et il est
    <?php
    echo date('H:i', $now);
    ?>
    </p>
</body>
</html>