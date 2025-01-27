<?php
$data = array(
    "name" => "Hey Python",
    "description" => "demande de test de communication"
);

$options = array(
    'http' => array(
        'header' => "Content-Type: application/json\r\n",
        'method' => "POST",
        'content' => json_encode($data)
    )
    );

$context = stream_context_create($options);
$response = file_get_contents('http://localhost:3000/node', false, $context);

if ($response === FALSE){
    die('Erreur avec la requete Node.js');
}

echo "Reponse de Node.js : " . $response . "\n";

?>
