<?php

header("Content-type: application/json; charset=utf-8");

if (!isset($_GET['index']) || !is_int(intval($_GET['index']))) {
    $response = array(
        'status' => 'error',
        'message' => 'No correct parameters'
    );

    echo json_encode($response);
    die();
}

$index = intval($_GET['index']);

define("XML_FILE", "data.xml");
$xml = simplexml_load_file(XML_FILE);
unset($xml->viestit->viesti[$index]);

$dom = new DOMDocument("1.0");
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($xml->asXML());
if ($dom->save(XML_FILE)) {
    $response = array(
        'status' => 'success',
        'messages' => 'XML node deleted'
    );

    echo json_encode($response);

}