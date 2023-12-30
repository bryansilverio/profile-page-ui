<template>
  <section id="proyectos" data-section="proyectos" class="section undefined w-full mx-auto lg:w-[740px] pb-24">
    <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center title-section-color">
      <CodeIcon />
      Proyectos
    </h2>
    <article v-for="(v, i) in projects" :Key="i">
      <h3 class="text-2xl font-semibold text-yellow-200 mb-2">{{ v.name }}</h3>
      <p class="text-lg mb-4 text-pretty text-gray-200">{{ v.description }}</p>
      <ul class="flex gap-x-2 flex-row mb-2">
        <li>
          <span class="flex gap-x-2 rounded-full text-xs bg-black text-white py-1 px-2">
            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 256">
              <defs>
                <linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%">
                  <stop offset="0%" stop-color="#FFF"></stop>
                  <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%">
                  <stop offset="0%" stop-color="#FFF"></stop>
                  <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop>
                </linearGradient>
                <circle id="a" cx="128" cy="128" r="128"></circle>
              </defs>
              <mask id="b" fill="#fff">
                <use xlink:href="#a"></use>
              </mask>
              <g mask="url(#b)">
                <circle cx="128" cy="128" r="128"></circle>
                <path fill="url(#c)"
                  d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z">
                </path>
                <path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z"></path>
              </g>
            </svg>Next.js
          </span>
        </li>
        <li>
          <span class="flex gap-x-2 rounded-full text-xs bg-[#003159] text-white py-1 px-2">
            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
              <g clip-path="url(#a)">
                <path fill="#38bdf8" fill-rule="evenodd"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                  clip-rule="evenodd"></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h54v32.4H0z"></path>
                </clipPath>
              </defs>
            </svg>Tailwind CSS
          </span>
        </li>
      </ul>
      <NextButton :text="'Saber más...'" :url="v.url" />
    </article>
  </section>
</template>
<script>
import NextButton from '@/components/NextButton.vue';
import CodeIcon from '@/components/icons/CodeIcon.vue';
import listProjectsService from '@/services/projects/listProjectsService';
export default {
  name: "Projects",
  components: {
    NextButton,
    CodeIcon
  },
  mixins: [
    listProjectsService
  ],
  computed: {
    projects() {
      return this.executelistProjects();
    }
  }
};
</script>