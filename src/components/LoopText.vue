<template>
  <div class="flex w-full justify-center flex-col items-center overflow-x-hidden mt-12">
    <div class="h-[80svh] flex flex-col bg-black">
      <div class="flex whitespace-nowrap">
        <div
          class="text-white w-full flex">
          <h1 class="text-marquee whitespace-nowrap">EMILIEN BOUCARD&nbsp;</h1>
          <h1 class="text-marquee whitespace-nowrap">EMILIEN BOUCARD&nbsp;</h1>
        </div>
        <div
          class="text-white w-full flex">
          <h1 class="text-marquee whitespace-nowrap">EMILIEN BOUCARD&nbsp;</h1>
          <h1 class="text-marquee whitespace-nowrap">EMILIEN BOUCARD&nbsp;</h1>
        </div>
      </div>

    </div>




  </div>
</template>

<style>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.text-marquee {
  white-space: nowrap;
  animation: marquee 5s linear infinite;
}
</style>