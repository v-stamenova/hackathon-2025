<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProfessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();

        $domains = collect([
            'engineering', 'design', 'architecture', 'finance', 'healthcare',
            'education', 'it', 'legal', 'marketing', 'logistics',
            'data-science', 'biotech', 'media', 'consulting', 'manufacturing',
            'agriculture', 'environment', 'robotics', 'ai', 'sustainability'
        ]);

        for ($i = 0; $i < 20; $i++) {
            $title = $faker->jobTitle;
            $domain = $domains->pull(rand(0, $domains->count() - 2));
            DB::table('professions')->insert([
                'title' => $title,
                'domain' => $domain,
                'description' => $faker->sentence(10),
                'education_level' => $faker->randomElement(['High School', 'Bachelor', 'Master', 'PhD']),
                'availability' => $faker->randomElement(['Full-time', 'Part-time', 'Freelance', 'Contract']),
                'creativity' => $faker->randomFloat(2, 0, 1),
                'design_oriented' => $faker->randomFloat(2, 0, 1),
                'physical' => $faker->randomFloat(2, 0, 1),
                'sustainability_focused' => $faker->randomFloat(2, 0, 1),
                'analytical' => $faker->randomFloat(2, 0, 1),
                'social_interaction' => $faker->randomFloat(2, 0, 1),
                'consulting' => $faker->randomFloat(2, 0, 1),
                'decimal' => $faker->boolean,
                'seen_at' => $faker->optional()->dateTimeThisYear(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
