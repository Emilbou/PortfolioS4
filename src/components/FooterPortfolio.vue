

<template>
  <div class="flex w-full justify-center flex-col items-center overflow-x-hidden">
  
    <div class="h-[80svh] flex flex-col bg-black ">
      <div class="text-white flex gap-10 " style=" transform: translateX(20%); animation: marquee 20s linear infinite;">
          <h1 class="text-marquee whitespace-nowrap">EMILIEN BOUCARD</h1>
          <h1 class="text-marquee whitespace-nowrap">EMILIEN BOUCARD</h1>
    </div>
    </div>
  </div>
  <div>EMILIEN BOUCARD</div>
</template>

<style>
@keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}
</style>