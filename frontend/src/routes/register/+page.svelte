<div class="h-full px-10 py-10">
    <div class="flex flex-col h-full items-start">
        <div class="text-4xl font-black mt-10">
            My details are
        </div>

        <form
            method="POST"
            action="?/register"
            class='w-full'
          >
            <div class="grid grid-cols-1 gap-4 w-full max-w-md mt-20">
                <div class='px-1'>
                    <input type="text" name='name' placeholder="Name" class="px-2 py-3 border-b-1 border-gray-900 w-full" />
                </div>
                <div class='px-1'>
                    <input type="email" name='email' placeholder="Email" class="px-2 py-3 border-b-1 border-gray-900 w-full" />
                </div>
                <div class='px-1'>
                    <input type="password" name='password' placeholder="Password" class="px-2 py-3 border-b-1 border-gray-900 w-full" />
                </div>
                <button class='text-center px-4 py-3 border-2 border-gray-900 font-bold uppercase rounded-4xl mt-10 w-full'>Register</button>
        </div>
        </form>
        <div class='flex items-center w-full justify-center mt-48'>
            <img src='/images/logo.png' class='h-5' alt=''/>
            <h1 class='text-xs font-bold'>X</h1>
            <img src='/images/futureu.png' class='h-5' alt=''/>
        </div>
    </div>
</div>
