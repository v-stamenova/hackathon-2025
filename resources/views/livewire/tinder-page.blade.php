
<div class="h-screen w-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-black text-white">
    <section class="h-screen snap-start flex flex-col">
        <div class="relative h-[92%] w-full">
            <img
                src={{asset('images/blank.jpg')}}
                alt="Job Background"
                class="w-full h-full object-cover"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

            <div class="absolute bottom-10 left-0 z-20 px-5 w-full">
                <h1 class="text-2xl font-bold mb-3">{{$profession->title}}</h1>

                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="px-3 py-1 bg-white/10 border border-white/40 rounded-full text-sm">
                     {{$profession->education_level}}
                    </span>
                    <span class="px-3 py-1 bg-white/10 border border-white/40 rounded-full text-sm">
                     {{$profession->availability}}
                    </span>
                </div>

                <div class="flex justify-between">
                    <button wire:click="dislike" class="w-14 h-14 rounded-full flex border border-red-500 items-center justify-center text-2xl text-red-500 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-9" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <button wire:click="like" class="w-14 h-14 rounded-full border border-green-500 flex items-center justify-center text-2xl text-green-500 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="oklch(72.3% 0.219 149.579)" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Navigation Bar -->
        <div class="fixed bottom-0 left-0 w-full h-[8%] bg-white text-black flex justify-around items-center text-xl z-30">
            <div class="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
                </svg>
            </div>
            <a href="{{ route('statistics') }}" class="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 17h2v-7H3v7zm4 0h2V7H7v10zm4 0h2v-4h-2v4zm4 0h2v-9h-2v9zm4 0h2v-2h-2v2z" />
                </svg>
            </a>
            <div class="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            </div>
        </div>
    </section>

    <!-- === Slide 2: Job Details === -->
    <section class="min-h-screen bg-black text-white px-6 py-10 snap-start">
        <h2 class="text-xl font-semibold mb-4">{{ $profession->title }}</h2>
        <p class="text-sm leading-relaxed mb-6">
            {{ $profession->description }}
        </p>

        <ul class="text-sm space-y-2 pt-18">
            <li>🧠 Creativity: {{ number_format($profession->creativity * 100, 0) }}%</li>
            <li>🎨 Design Oriented: {{ number_format($profession->design_oriented * 100, 0) }}%</li>
            <li>💪 Physical: {{ number_format($profession->physical * 100, 0) }}%</li>
            <li>🌱 Sustainability Focused: {{ number_format($profession->sustainability_focused * 100, 0) }}%</li>
            <li>📊 Analytical: {{ number_format($profession->analytical * 100, 0) }}%</li>
            <li>🤝 Social Interaction: {{ number_format($profession->social_interaction * 100, 0) }}%</li>
            <li>🧑‍💼 Consulting: {{ number_format($profession->consulting * 100, 0) }}%</li>
        </ul>
    </section>

</div>
