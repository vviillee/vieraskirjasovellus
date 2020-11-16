<?php

if (!isset($_POST['viesti']) && !isset($_POST['nimi'])) {
    $response = array(
        'status' => 'error',
        'message' => 'no correct data set!'
    );

    echo json_encode($response);
    die();
}


if (empty($_POST['nimi']) || empty($_POST['viesti'])) {
    $response = array(
        'status' => 'error',
        'message' => 'data was empty'
    );
}


define("XML_FILE", "data.xml");

$nimi = $_POST['nimi'];
$viesti = $_POST['viesti'];

$xml = simplexml_load_file(XML_FILE);

$uusi_viesti = $xml->viestit->addChild('viesti',$viesti);
$uusi_viesti->addAttribute('lähettäjä', $nimi);

$dom = new DOMDocument("1.0");
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($xml->asXML());
if ($dom->save(XML_FILE)) {
    $response = array(
        'status' => 'success',
        'messages' => 'XML saved'
    );

    echo json_encode($response);

}