<?php

header("Content-type: application/json; charset-utf-8");

if (!isset($_GET['index']) || !is_int(intaval($_GET['index']))) {
    $response = array(
        'status' => 'error',
        'message' => 'No correct parameters'
    );

    echo json_encode($response);
    die();
}