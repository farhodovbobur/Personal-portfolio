<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <div class="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      <!-- Left Profile Section -->
      <div class="bg-gray-800 p-6 rounded-xl shadow-md w-full md:w-1/3">
        <div class="text-center">
          <div class="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-500">
            <!-- Replace src with your avatar -->
            <img
                src="https://via.placeholder.com/150"
                alt="Avatar"
                class="w-full h-full object-cover"
            />
          </div>
          <h2 class="mt-4 text-xl font-bold">Technical Mickey</h2>
          <p class="text-yellow-500 text-sm mt-2">Full Stack Developer</p>
        </div>
        <div class="mt-6 border-t border-gray-700 pt-4 space-y-4">
          <!-- Contact Details -->
          <div class="flex items-center gap-4">
          <span class="text-yellow-500 text-lg">
            <i class="fas fa-envelope"></i> <!-- FontAwesome Icon -->
          </span>
            <span class="text-sm">info@technicalmickey.com</span>
          </div>
          <div class="flex items-center gap-4">
          <span class="text-yellow-500 text-lg">
            <i class="fas fa-phone"></i>
          </span>
            <span class="text-sm">+91 8000000000</span>
          </div>
          <div class="flex items-center gap-4">
          <span class="text-yellow-500 text-lg">
            <i class="fas fa-calendar"></i>
          </span>
            <span class="text-sm">Dec 25, 1995</span>
          </div>
          <div class="flex items-center gap-4">
          <span class="text-yellow-500 text-lg">
            <i class="fas fa-map-marker-alt"></i>
          </span>
            <span class="text-sm">India</span>
          </div>
        </div>
      </div>

      <!-- Right About Me Section -->
      <div class="w-full md:w-2/3 space-y-8">
        <div class="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 class="text-xl font-bold">About Me</h2>
          <p class="text-sm text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione tempore
            provident aspernatur distinctio? Alias aperiam sit dicta excepturi fuga perspiciatis
            soluta reprehenderit.
          </p>
          <p class="text-sm text-gray-400 mt-4">
            Harum est vel a placeat dolorem sunt vitae aliquid aliquam quis earum iste reiciendis,
            commodi eaque beatae fugit...
          </p>
        </div>
        <div class="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 class="text-xl font-bold">What I'm Doing</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <!-- Service Card -->
            <div class="flex items-center bg-gray-700 p-4 rounded-lg">
            <span class="text-yellow-500 text-2xl mr-4">
              <i class="fas fa-paint-brush"></i>
            </span>
              <div>
                <h3 class="text-lg font-bold">Web Design</h3>
                <p class="text-sm text-gray-400">
                  The most modern and high-quality design made at a professional level.
                </p>
              </div>
            </div>
            <div class="flex items-center bg-gray-700 p-4 rounded-lg">
            <span class="text-yellow-500 text-2xl mr-4">
              <i class="fas fa-code"></i>
            </span>
              <div>
                <h3 class="text-lg font-bold">Web Development</h3>
                <p class="text-sm text-gray-400">
                  The most modern and high-quality development at a professional level.
                </p>
              </div>
            </div>
            <div class="flex items-center bg-gray-700 p-4 rounded-lg">
            <span class="text-yellow-500 text-2xl mr-4">
              <i class="fas fa-mobile-alt"></i>
            </span>
              <div>
                <h3 class="text-lg font-bold">Mobile Apps</h3>
                <p class="text-sm text-gray-400">
                  High-quality and innovative app development solutions.
                </p>
              </div>
            </div>
            <div class="flex items-center bg-gray-700 p-4 rounded-lg">
            <span class="text-yellow-500 text-2xl mr-4">
              <i class="fas fa-palette"></i>
            </span>
              <div>
                <h3 class="text-lg font-bold">Design UI</h3>
                <p class="text-sm text-gray-400">
                  Creative and professional UI design solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

</script>

<style scoped>

</style>