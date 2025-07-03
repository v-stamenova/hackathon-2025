<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profession>
 */
class ProfessionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->jobTitle,
            'domain' => $this->faker->unique()->slug(2), // e.g. 'web-design'
            'description' => $this->faker->sentence(12),
            'education_level' => $this->faker->randomElement([
                'High School', 'Bachelor', 'Master', 'PhD'
            ]),
            'availability' => $this->faker->randomElement([
                'Full-time', 'Part-time', 'Contract', 'Freelance'
            ]),
            'creativity' => $this->faker->randomFloat(2, 0, 1),
            'design_oriented' => $this->faker->randomFloat(2, 0, 1),
            'physical' => $this->faker->randomFloat(2, 0, 1),
            'sustainability_focused' => $this->faker->randomFloat(2, 0, 1),
            'analytical' => $this->faker->randomFloat(2, 0, 1),
            'social_interaction' => $this->faker->randomFloat(2, 0, 1),
            'consulting' => $this->faker->randomFloat(2, 0, 1),
            'decimal' => $this->faker->boolean,
        ];
    }
}
