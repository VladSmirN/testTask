<?php

if (isset($_POST['order_id'])) {
    $orderId = $_POST['order_id'];
    if ($order = DB::query("SELECT o1.`order_id`, o2.`order_status`
        FROM `orders` o1
                 INNER JOIN `orders` o2 ON o2.`order_id` = o1.`order_id`
        WHERE o1.`order_id` = {$orderId}") {
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