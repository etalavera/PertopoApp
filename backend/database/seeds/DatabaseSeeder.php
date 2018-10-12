<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('users')->insert([
            [
                'email' => 'soporte@example.com',
                'password' => bcrypt('Hola1234')
            ],
            [
                'email' => 'mario.talavera@example.com',
                'password' => bcrypt('Hola1234')
            ]
        ]);

        DB::table('staff')->insert([
            [
                'id_user' => 1,
                'primerNombre' => 'ENRIQUE',
                'segundoNombre' => 'DE JESUS',
                'apellidoPaterno' => 'TALAVERA',
                'apellidoMaterno' => 'ORDAZ',
                'domicilio' => 'VEREDA',
                'exterior' => '12',
                'colonia' => 'EL FORTIN',
                'municipio' => 'ZAPOPAN',
                'estado' => 'JALISCO',
                'cp' => 59200,
                'telefono' => '3333333333'
            ],
            [
                'id_user' => 2,
                'primerNombre' => 'MARIO',
                'segundoNombre' => 'ALBERTO',
                'apellidoPaterno' => 'TALAVERA',
                'apellidoMaterno' => 'SOTO',
                'domicilio' => 'VEREDA',
                'exterior' => '12',
                'colonia' => 'EL FORTIN',
                'municipio' => 'ZAPOPAN',
                'estado' => 'JALISCO',
                'cp' => 59200,
                'telefono' => '3333333333'
            ]
        ]);

        DB::table('roles')->insert([
            ['rol' => 'ADMINISTRADOR'],
            ['rol' => 'TRABAJADOR'],
            ['rol' => 'OPERADOR']
        ]);
    }
}
