<?php

$root = __DIR__ . DIRECTORY_SEPARATOR;
require $root . 'config.php'; //Данные для авторизации . пример - configExampl.php
require $root . 'AmocrmAPI.php'; //класс для работы с апи амо

$amocrmAPI = new AmocrmAPI($subdomain, $user_login, $user_hash);

$leads = [];
$limit = 500;//лимит на получение сделок/добавления тасков
//создаем задния 
do {
    $leads = $amocrmAPI->leads_list();
    if(!$leads) break;
    $tasks = [];
    for ($i = 0; $i < sizeof($leads); $i++) {
        $tasks[] = array(
            'element_id' => $leads[$i]["id"],
            'element_type' => 2, #Показываем, что это - сделка, а не контакт
            'text' => 'Сделка без задачи',
        );
    }
    $amocrmAPI->add_tasks($tasks);

} while (sizeof($leads) == $limit);
