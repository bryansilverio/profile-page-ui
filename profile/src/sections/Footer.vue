<template>
  <footer class="rounded-lg shadow m-4 bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm sm:text-center text-yellow-200/90">
        © {{ new Date().getFullYear() }}
        <a href="https://bryansilverio.com/" class="hover:underline">Copyright Bryan Silverio</a>.
        Todos los derechos reservados
      </span>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>