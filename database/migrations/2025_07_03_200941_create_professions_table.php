<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('professions', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('domain')->unique();
            $table->string('description');
            $table->string('education_level');
            $table->string('availability');
            $table->decimal('creativity');
            $table->decimal('design_oriented');
            $table->decimal('physical');
            $table->decimal('sustainability_focused');
            $table->decimal('analytical');
            $table->decimal('social_interaction');
            $table->decimal('consulting');
            $table->boolean('decimal')->default(false);
            $table->timestamp('seen_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('professions');
    }
};
