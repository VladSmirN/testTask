<?php

if (isset($_POST['order_id'])) {
    $orderId = $_POST['order_id'];
    //убрал INNER JOIN , так как выборка происходит из одной таблицы 
    if ($order = DB::query("SELECT  `order_id`, `order_status`
        FROM `orders` WHERE `order_id` = {$orderId}"      
       ) {
        sendJson([
            'status'       => 'success';
            'order_id'     => $order['order_id'],
            'order_status' => $order['status'],
        ]);
    }else // добавил else
    sendJson(
        [
            'status'  => 'fail',
            'message' => sprintf('Заказ с ID `%x` не найден', $orderId);
        ]
    );
}

function sendJson($array)
{
    //json_decode => json_encode
    print(json_encode($array));
}