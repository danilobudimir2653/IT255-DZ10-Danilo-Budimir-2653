<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Headers: X-Requested-With');
header("Content-type: application/json");
$auto =  array(
	array
	(
		'idAuta' => '1',
		'brojVrata' => '3',
		'snagaMotora' => '105',
		'kubikazaMotora' => '2000',
	),
	array
	(
        'idAuta' => '2',
        'brojVrata' => '5',
        'snagaMotora' => '150',
        'kubikazaMotora' => '2200',
	),
	array
	(
        'idAuta' => '3',
        'brojVrata' => '3',
        'snagaMotora' => '200',
        'kubikazaMotora' => '2000',
	),
	array
	(
        'idAuta' => '4',
        'brojVrata' => '3',
        'snagaMotora' => '180',
        'kubikazaMotora' => '2500',
	),
	array
	(
        'idAuta' => '6',
        'brojVrata' => '5',
        'snagaMotora' => '101',
        'kubikazaMotora' => '1900',
	),
	array
	(
        'idAuta' => '7',
        'brojVrata' => '3',
        'snagaMotora' => '101',
        'kubikazaMotora' => '2000',
	),
	array
	(
        'idAuta' => '8',
        'brojVrata' => '3',
        'snagaMotora' => '300',
        'kubikazaMotora' => '4200',
	)
);
echo json_encode($auto);
?>