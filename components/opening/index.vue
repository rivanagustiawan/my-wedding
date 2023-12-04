<script setup lang="ts">


const emit = defineEmits(['open'])
const props = defineProps(['name'])
</script>

<template>
    <div class=" bg-[url('/images/galeri-6.jpeg')] h-screen bg-cover ">
        <div class="h-screen flex flex-col items-center text-center justify-between bg-gradient-to-t from-black pb-6">
            <div class="flex text-white dark:text-white justify-center flex-col items-center w-full -space-y-4 ph-1:-space-y-6 mt-6 ph-1:mt-12 tab:mt-20 desk:mt-16" v-motion-fade>
                <h1 
                    v-motion-slide-visible-left
                    class="text-sm ph-1:text-base tab:text-xl font-light font-podkova text-white dark:text-white"
                    >THE WEDDING OF
                </h1>
                <h1 
                    class="text-[52px] ph-1:text-[76px] ph-2:text-[80px] tab:text-[86px] tab-2:text-[84px] font-light font-playball mr-16 text-white dark:text-white" v-motion-slide-visible-left>Annisa
                </h1>
                <div class="inline-flex text-white dark:text-white ml-16" v-motion-slide-visible-right>
                    <h1 class="text-[32px] ph-1:text-[44px] font-light font-poorstory">&</h1>
                    <h1 class="text-[52px] ph-1:text-[76px] ph-2:text-[80px] tab:text-[86px] tab-2:text-[84px] font-light font-playball ml-2"> Rivan</h1>
                </div>
            </div>
            <div v-motion-slide-visible-bottom :delay="100" class="pb-6 text-white dark:text-white mt-8 tab:pb-20 desk:pb-14">
                <h1 class="text-sm ph-1:text-base tab:text-xl font-light font-poppinsLight">Minggu, 8 Oktober 2023</h1>
                <button 
                    @click="emit('open')"
                class=" ring-1 ring-white text-white dark:text-white ph-1:text-base ph-2:text-xl tab:text-2xl shadow-xl mt-4 ph-1:mt-8 rounded-xl font-poppinsLight py-1 px-8 tab:py-2 tab:px-8 hover:scale-110">Buka Undangan</button>
                <div class="space-y-2 mt-8 text-white dark:text-white">
                    <h1 class="text-sm ph-1:text-base tab:text-xl font-light font-poppinsLight">Kepada Yth. Bapak/Ibu/Sdr/i</h1>
                    <h1 class="text-[24px] ph-1:text-2xl tab:text-4xl font-light font-poppinsSemibold capitalize">{{ props.name }}</h1>
                    <hr class="mx-16 bg-gray-400 border-0"/>
                </div>
                <h1  class="text-[12px] ph-1:text-sm tab:text-lg font-light font-poppinsLight max-w-[85%] mx-auto my-2 text-white dark:text-white">Tanpa mengurangi rasa hormat,  kami mengundang anda untuk hadir di pernikahan kami.</h1>
            </div>
        </div>
    </div>
</template>
