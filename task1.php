<?php
final class Item{

    private int $id;
    private string $name;
    private int $status;
    private bool $changed;
    private bool $first_call_init = true;
    private bool $update_data_object = false;

    public function __construct(int $id)
    {
        $this->id = $id;

    }

    /**
    * Метод получает из таблицы objects. данные name и status и заполняет их в свойства экземпляра
    * @return void
    */
    private function init(){

        if(!$this->$first_call_init) return;
            
        $this->name = $objects->name ;
        $this->status  = $objects->status ;
        $this->$first_call_init = false;
        $this->$update_data_object = false;
    }

    /**
    * Получение свойств объекта
    * @return mixed 
    */
    public function __get($property)
    {
       if (!property_exists($this, $property)) {
         throw new Exception('Property not exist.');
       }
            
        return $this->$property;
        
    }

    /**
    * Задание свойств объекта, используя magic methods с проверкой вводимого значения на заполненность и тип значения. Свойство ID не поддается записи
    * @return void
    */
    public function __set($property, $value)
    {   
        $type = gettype($value);
        if(isset($value)) return ;
        
        switch ($property){

            case  'name': 
                if($type == 'string')
                {   
                    $this->$update_data_object = true;
                    $this->$property = $value;
                }
            break;
            case  'status': 
                if($type == 'integer')
                {   
                    $this->$update_data_object = true;
                    $this->$property = $value;
                }
            break;
            case  'changed': 
                if($type == 'bool')
                {
                    $this->$property = $value;
                }
            break;
        }
    }

    /**
    * Метод сохраняет установленные значения name и status в случае, если свойства объекта были изменены извне.
    * @return void
    */
    public function save(){
        if(!$this->$update_data_object) return;
        $objects->name = $this->name;
        $objects->status = $this->status;
    }
}
