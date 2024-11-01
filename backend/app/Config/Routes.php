<?php
namespace Config;
use CodeIgniter\Config\BaseConfig;
use CodeIgniter\Router\RouteCollection;

// $routes = Services::routes();

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('data', 'Api::getData');