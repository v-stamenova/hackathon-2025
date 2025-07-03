<?php

namespace App\Livewire;

use App\Models\Activity;
use App\Models\Profession;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Carbon\Carbon;

class TinderPage extends Component
{
    public Profession $profession;
    public Carbon $viewedAt;

    public function mount()
    {
        $this->loadRandomProfession();
    }

    public function loadRandomProfession()
    {
        $this->profession = Profession::inRandomOrder()->first();
        $this->viewedAt = now();
    }

    public function dislike()
    {
        $this->recordActivity(false);
    }

    public function like()
    {
        $this->recordActivity(true);
    }

    public function recordActivity(bool $isLike)
    {
        $secondsViewed = now()->diffInSeconds($this->viewedAt);

        Activity::create([
            'profession_id' => $this->profession->id,
            'user_id' => Auth::id(),
            'is_liked' => $isLike,
            'time_spent' => $secondsViewed,
            'seen_at' => now(),
        ]);

        $this->loadRandomProfession();
    }

    public function render()
    {
        return view('livewire.tinder-page');
    }
}
