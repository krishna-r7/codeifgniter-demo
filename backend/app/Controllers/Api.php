<?php
namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;

class Api extends ResourceController {
    use ResponseTrait;

    public function getData() {
        // $this->response->setHeader('Access-Control-Allow-Origin', '*');
        // $this->response->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        // $this->response->setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
        $data = [
            [ 'name' => 'Welcome', 'title' => 'Have Great Day'],
            
        ];
        return $this->respond($data);
    }


}