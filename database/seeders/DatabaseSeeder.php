<?php

namespace Database\Seeders;

use App\Models\Profession;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

<<<<<<< HEAD
        $this->call([ProfessionSeeder::class]);
=======
        Profession::factory(20)->create();
>>>>>>> 96a9f2bc2e6268467ddab77b6f45ab0eae8f8535
    }
}
