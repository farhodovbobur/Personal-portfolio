<script setup>

</script>

<template>
  <div class="min-h-screen bg-white text-black mt-12 font-sans">
    <div class="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Left Profile Section -->
        <div class="w-full md:col-span-1 space-y-8">

          <div class="bg-white p-6 border hover:border-gray-300 rounded-xl shadow-all">
            <div class="justify-center text-center">
                <div class="w-auto h-auto my-5 mx-5 rounded-xl overflow-hidden border-2 border-gray-50">
                  <!-- Replace src with your avatar -->
                  <img
                      src="@/assets/images/farhodov.jpg"
                      alt="Profile Picture"
                      class="w-full h-auto object-cover"
                  />
                </div>

                <div class="text-center mt-4">
                  <h2 class="text-3xl font-bold text-gray-900">Farhodov Bobur</h2>

                  <div class="w-48 items-center bg-gray-200 p-1 mt-2 mx-auto rounded-lg">
                    <p class="text-gray-700 text-center text-l">Software Engineer</p>
                  </div>
                </div>
              </div>

            <div class="mt-6 border-t border-gray-300 pt-4 space-y-4">
                <!-- Contact Details -->
                <div class="flex items-center gap-4">
                  <span class="rounded-lg shadow-inner_all text-2xl px-3 py-2">
                    <i class="mdi mdi-phone"></i>
                  </span>
                  <div>
                    <p class="text-gray-800 text-sm font-medium">Phone:</p>
                    <a href="tel:+998951880800" class="text-sm text-gray-500 font-light hover:text-gray-900">+998 95 188-08-00</a>
                  </div>
                </div>

                <div class="flex items-center gap-4">
                  <span class="rounded-lg shadow-inner_all text-2xl px-3 py-2">
                    <i class="mdi mdi-email"></i>
                  </span>
                  <div>
                    <p class="text-gray-800 text-sm font-medium">Email:</p>
                    <a href="mailto:farhodovbobur@icloud.com" class="text-sm text-gray-500 font-light hover:text-gray-900">farhodovbobur@icloud.com</a>
                  </div>
                </div>

                <div class="flex items-center gap-4">
                  <span class="rounded-lg shadow-inner_all text-2xl px-3 py-2">
                    <i class="mdi mdi-github"></i>
                  </span>
                  <div>
                    <p class="text-gray-800 text-sm font-medium">GitHub:</p>
                    <a href="https://github.com/farhodovbobur" target="_blank" class="text-sm text-gray-500 font-light hover:text-gray-900">/farhodovbobur</a>
                  </div>
                </div>

                <div class="flex items-center gap-4">
                  <span class="rounded-lg shadow-inner_all text-2xl px-3 py-2">
                    <i class="mdi mdi-linkedin"></i>
                  </span>
                  <div>
                    <p class="text-gray-800 text-sm font-medium">LinkedIn:</p>
                    <a href="https://www.linkedin.com/in/farhodovbobur/" target="_blank" class="text-sm text-gray-500 font-light hover:text-gray-900">/farhodovbobur</a>
                  </div>
                </div>
              </div>
          </div>

          <!-- Languages -->
          <div class="bg-white p-6 border hover:border-gray-300 rounded-xl shadow-all">
            <h2 class="text-xl font-bold mb-4">Languages</h2>
            <div class="grid grid-cols-1 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-gray-800 text-sm font-medium">Uzbek</span>

                <span class="text-gray-800 text-sm font-medium">Native</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-800 text-sm font-medium">English</span>

                <span class="text-gray-800 text-sm font-medium">B1</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-800 text-sm font-medium">Russian</span>

                <span class="text-gray-800 text-sm font-medium">B2</span>
              </div>
            </div>
          </div>
      </div>

        <!-- Right About Me Section -->
        <div class="w-full md:col-span-2 space-y-8">
          <div class="bg-white p-6 border hover:border-gray-300 rounded-xl shadow-all">
            <h2 class="text-xl font-bold">About Me</h2>
            <p class="text-sm text-gray-400 mt-4">
              I am a junior developer specializing in backend development and software engineering.
              Proficient in PHP, Laravel, and MySQL, I thrive on solving complex problems with efficient and scalable solutions.
              A quick learner, I’m eager to adapt and grow in dynamic environments, bringing value to every project I undertake.
            </p>
          </div>

          <div class="bg-white p-6 border hover:border-gray-300 rounded-xl shadow-all">
            <h2 class="text-xl font-bold ml-2">Skills</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <!-- Service Card -->
              <div class="flex items-start bg-gray-100 p-4 rounded-lg">
                <div class="space-y-2">
                  <h3 class="text-lg font-bold mb-2 ml-2">Programming Languages</h3>

                  <div class="flex items-center">
                    <img src="@/assets/logos/php.svg" alt="php" class="w-6 h-6 mx-2"/>
                    <span class="text-gray-800 text-sm">PHP</span>
                  </div>

                  <div class="flex items-center">
                    <img src="@/assets/logos/python.svg" alt="python" class="w-6 h-6 mx-2"/>
                    <span class="text-gray-800 text-sm">Python</span>
                  </div>

                  <div class="flex items-center">
                    <img src="@/assets/logos/c.svg" alt="c" class="w-6 h-5 mx-2"/>
                    <span class="text-gray-800 text-sm">C</span>
                  </div>
                </div>
              </div>

              <div class="flex items-start bg-gray-100 p-4 rounded-lg">
                <div class="space-y-2">
                  <h3 class="text-lg font-bold mb-2 ml-2">Frameworks</h3>

                  <div class="flex items-center">
                    <img src="@/assets/logos/laravel.svg" alt="laravel" class="w-6 h-6 mx-2"/>
                    <span class="text-gray-800 text-sm">Laravel</span>
                  </div>

                  <div class="flex items-center">
                    <img src="@/assets/logos/vue.svg" alt="vue" class="w-6 h-6 mx-2"/>
                    <span class="text-gray-800 text-sm">Vue.js</span>
                  </div>

                  <div class="flex items-center">
                    <img src="@/assets/logos/tailwind.svg" alt="tailwind" class="w-6 h-6 mx-2"/>
                    <span class="text-gray-800 text-sm">Tailwind css</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 mt-4">
              <!-- Service Card -->
              <div class="items-start bg-gray-100 p-4 rounded-lg">
                <div class="space-y-2">
                  <h3 class="text-lg font-bold mb-2 ml-2">Databases</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div class="space-y-2 -mr-2 border-r border-gray-300">
                      <p class="font-semibold text-gray-800 text-center">Relational</p>

                      <div class="flex items-center">
                        <img src="@/assets/logos/mysql.svg" alt="mysql" class="w-6 h-6 mx-2"/>
                        <span class="text-gray-800 text-sm">MySql</span>
                      </div>

                      <div class="flex items-center">
                        <img src="@/assets/logos/postgresql.svg" alt="laravel" class="w-6 h-6 mx-2"/>
                        <span class="text-gray-800 text-sm">PostgreSQL</span>
                      </div>
                    </div>

                    <div class="space-y-2">
                      <p class="font-semibold text-gray-800 text-center">Non-Relational</p>
                      <div class="flex items-center">
                        <img src="@/assets/logos/mongo.svg" alt="mongo" class="w-6 h-6 mx-2"/>
                        <span class="text-gray-800 text-sm">MongoDB</span>
                      </div>
                      <div class="flex items-center">
                        <img src="@/assets/logos/redis.png" alt="redis" class="w-6 h-6 mx-2"/>
                        <span class="text-gray-800 text-sm">Redis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 mt-4">
              <div class="flex items-start bg-gray-100 p-4 rounded-lg">
                <div class="space-y-2">
                  <h3 class="text-lg font-bold mb-2 ml-2">Tools & Technologies</h3>

                  <div class="flex flex-wrap gap-4 pt-1">
                    <div class="flex items-center ">
                      <img src="@/assets/logos/github.svg" alt="github" class="w-6 h-6 mx-2"/>
                      <span class="text-gray-800 text-sm">GitHub</span>
                    </div>

                    <div class="flex items-center ">
                      <img src="@/assets/logos/docker.svg" alt="docker" class="w-6 h-6 mx-2"/>
                      <span class="text-gray-800 text-sm">Docker</span>
                    </div>

                    <div class="flex items-center ">
                      <img src="@/assets/logos/wordpress.svg" alt="wordpress" class="w-6 h-6 mx-2"/>
                      <span class="text-gray-800 text-sm">Wordpress</span>
                    </div>

                    <div class="flex items-center ">
                      <img src="@/assets/logos/postman.svg" alt="postman" class="w-6 h-6 mx-2"/>
                      <span class="text-gray-800 text-sm">Postman</span>
                    </div>

                    <div class="flex items-center ">
                      <img src="@/assets/logos/phpmyadmin.svg" alt="phpmyadmin" class="w-6 h-6 mx-2"/>
                      <span class="text-gray-800 text-sm">phpMyAdmin</span>
                    </div>

                    <div class="flex items-center ">
                      <img src="@/assets/logos/pgadmin.ico" alt="pgadmin" class="w-6 h-6 mx-2"/>
                      <span class="text-gray-800 text-sm">pgAdmin</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 border hover:border-gray-300 rounded-xl shadow-all">
            <h2 class="text-xl font-bold">Work Experience</h2>
            <ul class="space-y-8 pt-6">
              <li class="border-b last:border-b-0 pb-8 last:pb-0">
                <div class="flex items-center space-x-4">
                  <img alt="" loading="lazy" decoding="async" data-nimg="1" class="border shadow-md rounded-md w-16 h-16 p-2" style="color:transparent" src="@/assets/company/infinity.png">
                  <div>
                    <h3 class="font-semibold">Infinity Innovation</h3>
                    <p class="text-sm text-gray-500">Accountant</p>
                  </div>
                </div>
                <p class="text-xs text-gray-500 mt-2 flex items-center">
                  <img src="@/assets/icons/calendar.svg" alt="calendar" class="w-3 h-3 mr-1">
                  Aug 2021 - Present
                </p>
              </li>

              <li class="border-b last:border-b-0 pb-8 last:pb-0">
                <div class="flex items-center space-x-4">
                  <img alt="" loading="lazy" decoding="async" data-nimg="1" class="border shadow-md rounded-md w-16 h-16 p-2" style="color:transparent" src="@/assets/company/artel.png">
                  <div>
                    <h3 class="font-semibold">Artel</h3>
                    <p class="text-sm text-gray-500">Accountant</p>
                  </div>
                </div>
                <p class="text-xs text-gray-500 mt-2 flex items-center">
                  <img src="@/assets/icons/calendar.svg" alt="calendar" class="w-3 h-3 mr-1">
                  Sep 2020 - Mar 2021
                </p>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
