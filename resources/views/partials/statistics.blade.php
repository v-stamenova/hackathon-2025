<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Statistics</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="h-screen w-screen overflow-y-auto snap-y snap-mandatory scroll-smooth text-black">

<section class="pt-10 h-screen snap-start flex flex-col justify-between">
    <div class="flex flex-col flex-grow w-full px-6">
        <h1 class="text-3xl font-bold mb-2 text-center">Your Progress</h1>
        <p class="text-center text-gray-600 mb-6">Here you can see the statistics</p>

        <div class="flex items-center justify-center gap-3 mb-10">
            <div class="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 44 54" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10">
                    <path d="M22.3311 0.400467C22.7893 0.0572179 23.3273 0.0286296 23.8047 0.226639C24.2839 0.4254 24.7017 0.852559 24.9053 1.41902C26.395 5.57666 29.2274 9.06561 32.917 11.2872L32.9199 11.2911L32.9326 11.3145L32.9561 11.3292C36.7522 13.6143 39.8028 17.0342 41.7129 21.1466C43.623 25.259 44.3043 29.8741 43.668 34.3946C43.0316 38.9152 41.1073 43.1324 38.1445 46.5001C35.1819 49.8677 31.3174 52.2307 27.0518 53.2843C22.7862 54.3378 18.3156 54.0333 14.2178 52.4102C10.1199 50.7871 6.58318 47.9198 4.06641 44.1788C1.54968 40.4377 0.168478 35.9952 0.102539 31.4268C0.0366935 26.8585 1.28864 22.3748 3.69629 18.5567C4.04101 18.0092 4.59524 17.7892 5.1543 17.8419C5.71593 17.8948 6.28256 18.2242 6.63672 18.7794C8.37144 21.4976 10.7407 23.7129 13.5225 25.2178H13.5234C13.9164 25.4295 14.305 25.4692 14.6562 25.377C15.0059 25.2852 15.3118 25.0655 15.5459 24.7696C15.984 24.2158 16.1815 23.3854 15.9531 22.5831L15.9014 22.4229C15.1828 20.3977 14.7812 18.2089 14.7666 15.9288V15.8067C14.7643 12.7974 15.4492 9.83034 16.7646 7.15144C18.08 4.47276 19.9883 2.15899 22.3311 0.400467ZM25.0156 23.7794C24.6741 23.7102 24.3193 23.7582 24.0029 23.9122C23.6413 24.0882 23.3544 24.3945 23.1953 24.7735C22.3651 26.6991 21.9004 28.8321 21.9004 31.0802C21.8985 32.6957 22.1416 34.3021 22.6201 35.8389C22.9465 36.8738 22.4952 38.0244 21.5156 38.255C19.2659 38.7786 16.9288 38.7401 14.6963 38.1417C13.9208 37.9343 13.1289 38.1572 12.627 38.6192C12.121 39.085 11.9091 39.7965 12.3086 40.5382C13.196 42.1924 14.4607 43.595 15.9912 44.6212C17.5217 45.6473 19.2714 46.2664 21.0859 46.4229C22.9005 46.5794 24.7245 46.2687 26.3965 45.5186C28.0685 44.7685 29.5381 43.6011 30.6748 42.1212C31.8113 40.6413 32.5807 38.8932 32.916 37.0313C33.2513 35.1694 33.1428 33.2502 32.5986 31.4425C32.0544 29.6347 31.0916 27.993 29.7949 26.6632C28.5791 25.4163 27.1043 24.4785 25.4863 23.922L25.1611 23.8165L25.0156 23.7794Z" fill="#FAB919" />
                </svg>
            </div>

            <p class="text-lg text-gray-700 leading-tight flex items-baseline gap-1">
                You made
                <span class="text-4xl font-bold text-yellow-900 leading-none">15</span>
                swaps
            </p>
        </div>
    </div>


    <div class="bg-[#FFFFD2] rounded-t-[100px] pt-10 pb-20 px-6 text-center">
        <h2 class="text-xl mb-6 text-center">WERELDEN</h2>

        <div class="w-full max-w-sm mx-auto space-y-6 text-left">
            @php
                $categories = [
                    ['percent' => 80, 'label' => 'Wonen, Werken & Verkeer', 'color' => 'bg-green-500'],
                    ['percent' => 50, 'label' => 'Energie, Water & Veiligheid', 'color' => 'bg-yellow-500'],
                    ['percent' => 30, 'label' => 'Mens & Gezondheid', 'color' => 'bg-orange-500'],
                    ['percent' => 15, 'label' => 'Voeding & Natuur', 'color' => 'bg-red-500'],
                    ['percent' => 15, 'label' => 'Digitaal, Media & Entertainment', 'color' => 'bg-red-500'],
                    ['percent' => 15, 'label' => 'Ontwerp, Productie & wereidhandel', 'color' => 'bg-red-500'],
                    ['percent' => 0,  'label' => 'Hi-tech & Science', 'color' => 'bg-gray-200'],
                ];
            @endphp

            @foreach ($categories as $item)
                <div class="space-y-1">
                    <p class="font-semibold text-sm">
                        {{ $item['percent'] }}% <span class="font-normal">{{ $item['label'] }}</span>
                    </p>
                    <div class="w-full h-3 bg-gray-300 rounded-full">
                        <div class="h-3 rounded-full {{ $item['color'] }}" style="width: {{ $item['percent'] }}%"></div>
                    </div>
                </div>
            @endforeach
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

</body>
</html>
