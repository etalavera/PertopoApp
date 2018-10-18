<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
            [
                'primerNombre' => 'Enrique',
                'apellidoPaterno' => 'Talavera',
                'apellidoMaterno' => 'Ordaz',
                'domicilio' => 'Francisco Tamayo',
                'exterior' => '349',
                'colonia' => 'Centro',
                'municipio' => 'Vista Hermosa',
                'estado' => 'Michoacan',
                'cp' => '59200',
                'telefono' => '1234567890',
                'email' => 'email@example.com', 
                'password' => bcrypt('Hola1234')
            ]
        ]);
    }
}
