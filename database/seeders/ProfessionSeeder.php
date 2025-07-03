<?php

namespace Database\Seeders;

use App\Models\Profession;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProfessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = file_get_contents(base_path('database/professions.json'));
        $professions = json_decode($json, true);

        foreach ($professions as $profession) {
            Profession::create([
                'title' => $profession['job_title'],
                'domain' => $profession['domain'],
                'description' => $profession['description'],
                'education_level' => $profession['education_level'],
                'availability' => $profession['job_outlook'],
                'creativity' => $profession['themes'][0] || 0,
                'design_oriented' => $profession['themes'][1] || 0,
                'physical' => $profession['themes'][2] || 0,
                'sustainability_focused' => $profession['themes'][3] || 0,
                'analytical' => $profession['themes'][4] || 0,
                'social_interaction' => $profession['themes'][5] || 0,
                'consulting' => $profession['themes'][6] || 0,
                'decimal' => false,
                'seen_at' => null,
            ]);
        }
    }
}
