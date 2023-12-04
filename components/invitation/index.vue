
import { UButton } from '#build/components';

import { Countdown } from '#build/components';
<script setup lang="ts">
const toast = useToast()

const ucapan = ref()
const isLoading = ref(false)

const input = reactive({
  name: '',
  kehadiran: '',
  ucapan: ''
})

async function submit() {
    if(input.name === '' || input.kehadiran === '' || input.ucapan === '') {
        toast.add({ title: 'Oops....', description: 'Jangan lupa Nama, Ucapan, Kehadiran diisi yaa..',  color: 'red' })
        return
    }

    try {
    isLoading.value = true
    const { data, error } = await useFetch('/api/my-wedding', {
      method: 'POST',
      body: input,
      baseURL: 'https://api.rivanannisa.my.id',
    })
    if (data.value) {
        input.name = '',
        input.kehadiran = '',
        input.ucapan = '',
        toast.add({
            title: 'Yeee',
            description: 'Terimakasih atas ucapan & doanya..',
        })
        isLoading.value = false

        fetchData()
    }
    else { throw error }
  }
  catch (error: any) {
    toast.add({ title: 'Oops', description: 'Sepertinya terjadi kesalahan !', color: 'red' })
    isLoading.value = false
  }
}

async function fetchData() {
  const { data } = await useAsyncData('ucapan', () => $fetch('/api/my-wedding', {
    baseURL: 'https://api.rivanannisa.my.id',
  }))
  ucapan.value = data.value
}

onMounted(async () => {
  fetchData()
})

</script>

<template>

<div class="relative justify-center text-center min-h-screen scroll-smooth overflow-x-hidden">
    <img src="/images/we-2.png" alt="me" v-motion-fade class="transition duration-500 absolute z-0 blur-[0.5px]"/>
    <div class="flex text-black dark:text-black justify-center flex-col items-center w-full" v-motion-fade>
        <div class='flex justify-center items-center z-50'>
            <div class="translate-y-[35%] ph-1:translate-y-[35%]">
                <div class='text-[14px] ph-1:text-[16px] ph-2:text-[18px] tab:text-[20px] text-black dark:text-black font-podkova tracking-wide inline-flex space-x-2'>
                    <p class='animate-pulse'>♡</p> 
                    <p>THE WEDDING OF</p> 
                    <p class='animate-pulse'>♡</p>
                </div>
                <h1 class='text-[40px] ph-1:text-[48px] ph-2:text-[54px] tab:text-[64px] text-black dark:text-black font-playball'>Annisa & Rivan</h1>
                <h1 class='text-[14px] ph-1:text-[16px] ph-2:text-[18px] tab:text-[20px] text-black dark:text-black font-podkova tracking-widest '>Save The Date | 8 October 2023</h1>
                <countdown/>
            </div>
        </div>
        <div class="mx-auto px-2 mt-48 ph-1:mt-52 tab:mt-64 desk:mt-[17rem] relative">
            <img src="/images/flower-1.png" class="absolute opacity-70 -bottom-40 -right-8 ph-2:-right-12 animated-image -z-50 w-52 ph-2:w-48">
            <img src="/images/flower-2.png" class="absolute opacity-70 -top-12 -left-16 animated-image -z-50 w-52 ph-2:w-48">
            <img src="/images/flower-5.png" class="absolute opacity-70 -bottom-20 left-1 animated-image -z-50 w-28 ph-2:w-20">
            <img src="/images/flower-4.png" class="absolute opacity-70 -top-6 right-2 ph-2:-top-10 animated-image -z-50 w-24 ph-2:w-20">

            
            <h1 class='text-black dark:text-black font-podkova text-[16px] ph-1:text-[16px] ph-2:text-[18px] tab:text-[24px]'>اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ</h1>
            <h1 class='text-black dark:text-black font-podkova text-[18px] ph-1:text-[22px] ph-2:text-[22px] tab:text-[32px] font-bold'>Assalamu’alaikum Wr. Wb.</h1>
            
            <h1 class='text-black dark:text-black text-[14px] ph-1:text-base tab:text-xl font-poppinLight px-4 my-4 z-50'>Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah kami akan menyelenggarakan acara pernikahan :</h1>
            <div class='grid grid-cols-9 space-x-0 justify-center mt-8'>
                <div class='col-span-4' v-motion-slide-left v-motion-slide-visible-left :delay="300">
                    <img src="/images/annisa.png" alt="annisa" class='mx-auto w-24 ph-2:w-[5.5rem] tab:w-[7rem]'/>
                    <p class='text-black dark:text-black text-[15px] ph-1:text-[17px] tab:text-xl font-podkova font-bold mt-2'>Annisa Nur Shabrina</p>
                    <p class='text-black dark:text-black text-[12px] ph-1:text-[14px] tab:text-base font-poppinLight;'>Putri dari <br/> Asep Mulyadi & <br/> Lasih</p>
                </div>
                <div class='col-span-1'>
                    <img src="/images/line-love.png" alt="love" class='mx-auto opacity-80'/>
                </div>
                <div class='col-span-4' v-motion-slide-right v-motion-slide-visible-right :delay="300">
                    <img src="/images/rivan.png" alt="rivan" class='mx-auto w-24 ph-2:w-[5.5rem] tab:w-[7rem]'/>
                    <p class='text-black dark:text-black text-[15px] ph-1:text-[17px] tab:text-xl font-podkova font-bold mt-2'>Rivan Agustiawan</p>
                    <p class='text-black dark:text-black text-[12px] ph-1:text-[14px] tab:text-base font-poppinLight;'>Putra dari <br/> Kolonel (Purn) Giyanto, S.H (Alm) & <br/> Endang Purwaningsih</p>
                </div>
            </div>
            <h1 class='text-black dark:text-black text-[14px] ph-1:text-base tab:text-xl font-poppinLight mt-6 px-4 z-50' v-motion-slide-bottom v-motion-slide-visible-right>“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.”</h1>
            <p class='text-black dark:text-black text-[16px] ph-1:text-lg tab:text-2xl font-podkova font-bold' v-motion-slide-visible-left>~ QS. Ar-Rum : 21 ~</p>
        </div>
        <div class='w-full px-4 z-50' v-motion-slide-visible-right :delay="200">
            <h1 class='text-black dark:text-black font-podkova text-[20px] ph-1:text-[24px] tab:text-4xl font-bold my-6'>Save The Date</h1>
            <div class='ring-1 ring-fuchsia-500 shadow-xl rounded-xl text-center bg-white dark:bg-white bg-opacity-60 shadow-purple-200 w-full p-4 mb-10'>
                <img src="/images/ring-2.png" class='w-16 ph-1:w-20 mx-auto animate-pulse bg-opacity-60' alt='ring' v-motion-pop-visible :delay="400"/>
                <div class='w-full flex justify-evenly px-4 mt-4'>
                    <div v-motion-slide-visible-left :delay="400">
                        <h1 class='text-black dark:text-black font-podkova text-[18px] ph-1:text-[24px] tab:text-3xl font-bold'>Akad</h1>
                        <h1 class='text-black dark:text-black text-[12px] ph-1:text-[14px] tab:text-lg font-poppinsLight font-poppinsRegular'>Minggu, <br/> 08 Oktober 2023</h1>
                        <h1 class='text-black dark:text-black text-[12px] ph-1:text-[14px] tab:text-lg font-poppinsLight font-poppinsRegular'>08:00 - 10:00</h1>
                    </div>
                    <div>
                        <img src="/images/line.png" alt="love" class='h-20 mx-4 ph-1:h-28 opacity-30'/>
                    </div>
                    <div v-motion-slide-visible-right :delay="400">
                        <h1 class='text-black dark:text-black font-podkova text-[18px] ph-1:text-[24px] tab:text-3xl font-bold'>Resepsi</h1>
                        <h1 class='text-black dark:text-black text-[12px] ph-1:text-[14px] tab:text-lg font-poppinsLight font-poppinsRegular'>Minggu, <br/> 08 Oktober 2023</h1>
                        <h1 class='text-black dark:text-black text-[12px] ph-1:text-[14px] tab:text-lg font-poppinsLight font-poppinsRegular'>11:00 - 14:00</h1>
                    </div>
                </div>
                <h1 class='text-black dark:text-black text-[16px] ph-1:text-[18px] tab:text-2xl font-podkova font-bold leading-5 mt-4' v-motion-pop-visible :delay="400">Pajajaran Convention Centre, <br/> Hotel Sutan Raja</h1>
                <h1 class='text-black dark:text-black text-[12px] ph-1:text-[14px] tab:text-lg font-poppinsLight font-extralight leading-5 mt-2' v-motion-pop-visible :delay="400">Jalan Raya Soreang KM.17 No.10 Cingcin, Pamekaran, Kec. Soreang, Kabupaten Bandung, Jawa Barat</h1>
                <div class='iframe-container mt-4 mb-4'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1282.3488313074424!2d107.53421402996157!3d-7.0238022111607314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68edbb3ecc4025%3A0x1b66df9bbdc75019!2sPadjadjaran%20Convention%20Centre!5e0!3m2!1ses!2sid!4v1684217620640!5m2!1ses!2sid" 
                    width="450" height="500" class='rounded-md' loading="lazy" ></iframe>
                </div>
                <a href='https://goo.gl/maps/gT5urnuLxrmc2HB46'>
                    <button 
                    v-motion-pop-visible :delay="400"
                    class=" bg-[#6F5FAC] text-white dark:text-white tab:text-2xl shadow-xl rounded-xl font-poppinsLight py-2 px-8 tab:py-2 tab:px-8 hover:scale-110 mt-2">Buka Maps</button>
                </a>
            </div>
        </div>
        <div className='w-full relative'>
            <img src="/images/flower-6.png" class="absolute opacity-80 top-6 right-0 left-0 mx-auto animated-image -z-50 w-full">
            <h1 className='text-black dark:text-black font-rougeScript text-[48px] ph-1:text-[54px] tab:text-[72px] font-bold mb-6 mt-3'>Galeri</h1>
            <div className=' shadow-xl shadow-purple-200 text-center bg-white dark:bg-white bg-opacity-80 w-full py-4 mb-10 grid grid-cols-3 gap-1 px-1 rounded-b-lg' >
                <img src="/images/galeri-1.jpeg" :delay="300" v-motion-slide-visible-left class="h-52 tab:h-64 w-full "/>
                <img src="/images/galeri-4.jpeg" :delay="300" v-motion-slide-visible-right class="h-52 tab:h-64 w-auto col-span-2"/>
                <img src="/images/galeri-3.jpeg" :delay="300" v-motion-slide-visible-left class="h-52 tab:h-64 w-auto col-span-2"/>
                <img src="/images/galeri-6.jpeg" :delay="300" v-motion-slide-visible-right class="h-52 tab:h-64 w-auto"/>
                <img src="/images/galeri-5.jpeg" :delay="300" v-motion-slide-visible-left class="h-52 tab:h-64 w-auto"/>
                <img src="/images/galeri-8.jpeg" :delay="300" v-motion-slide-visible-top class="h-52 tab:h-64 w-auto"/>
                <img src="/images/galeri-11.jpeg" :delay="300" v-motion-slide-visible-right class="h-52 tab:h-64 w-auto"/>
                <img src="/images/galeri-7.jpeg" :delay="300" v-motion-slide-visible-left class="h-60 tab:h-auto w-full col-span-3 mx-auto"/>
            </div>
        </div>
        <div class="w-full px-4">
            <div class="ring-1 ring-fuchsia-500 shadow-xl rounded-xl text-start bg-white dark:bg-white bg-opacity-60 shadow-purple-200 p-4 mb-10">
                <h1 class="text-black dark:text-black text-center text-3xl font-podkova font-bold mb-4">Ucapan & Doa</h1>
                <div class="flex flex-col space-y-4">
                    <div class="flex flex-col">
                        <label class="text-black dark:text-black font-poppinLight text-base mb-1">Nama Anda</label>
                        <input type="text" v-model="input.name" class="bg-white dark:bg-white border-[1px] border-slate-400 rounded-md py-1.5 px-4 text-black dark:text-black" placeholder=".....">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-black dark:text-black font-poppinLight text-base mb-1">Ucapan</label>
                        <textarea type="text" v-model="input.ucapan" class="bg-white dark:bg-white border-[1px] border-slate-400 rounded-md py-1.5 px-4 text-black dark:text-black" rows="7" placeholder="....."></textarea>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-black dark:text-black font-poppinLight text-base mb-1">Konfirmasi Kehadiran</label>
                        <select v-model="input.kehadiran" class="text-black dark:text-black bg-white dark:bg-white border-[1px] border-slate-400 py-1.5 px-4 rounded-md font-poppinLight" >
                            <option value="" disabled> - Pilih -</option>
                            <option value="hadir">Hadir</option>
                            <option value="ragu">Ragu</option>
                            <option value="tidak">Tidak Hadir</option>
                        </select>
                    </div>
                    <UButton v-motion-pop-visible :delay="400" label="Kirim Ucapan" color="purple" :loading="isLoading" @click="submit()" class=" dark:bg-[#6F5FAC] bg-[#6F5FAC] text-white dark:text-white text-center justify-center text-base" ></UButton>
                    <!-- <button 
                        v-motion-pop-visible :delay="400"
                        @click="submit()"
                        class=" bg-[#6F5FAC] text-white tab:text-base shadow-xl rounded-xl font-poppinsLight py-2 px-8 tab:py-2 tab:px-8 hover:scale-110 mt-2">Kirim Ucapan</button> -->

                    <div class="w-full h-96 max-h-96 overflow-y-scroll overflow-x-hidden ring-1 ring-purple-200 bg-purple-50 rounded-b-xl scroll-auto no-scrollbar ">
                        <div class="flex px-4 py-6" v-for="item in ucapan" :key="item.id">
                            <img src="/images/ring.png" class="w-8 h-8 ring-1 ring-slate-400 rounded-full">
                            <div class="text-black dark:text-black font-poppinLight ml-2 w-[90%] shadow-xl bg-white dark:bg-white rounded-e-md rounded-b-md px-4 py-2 overflow-x-hidden">
                                <p class="text-black dark:text-black font-poppinsSemibold text-sm flex items-center capitalize">{{ item.name }} 
                                    <span class="text-xs font-light font-poppinLight ml-1">
                                        <svg v-if="item.kehadiran === 'hadir'" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z"/></svg>
                                        <svg v-if="item.kehadiran === 'ragu'" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8Z"/></svg>
                                        <svg v-if="item.kehadiran === 'tidak'" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8Z"/></svg>
                                    </span></p>
                                <p class="text-black dark:text-black font-poppinLight text-sm">{{ item.ucapan }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="mb-12 relative">
            <img src="/images/flower-1.png" class="absolute -bottom-6 opacity-40 -right-8 ph-2:-right-12 animated-image -z-50 w-52 ph-2:w-48">
            <img src="/images/flower-2.png" class="absolute -bottom-6 opacity-40 -left-8 ph-2:-right-12 animated-image -z-50 w-52 ph-2:w-48">

            <h1 class="text-black dark:text-black font-rougeScript text-[56px] tab:text-[62px]">Terima Kasih</h1>
            <h2 class="text-black dark:text-black font-poppinLight text-sm ph-1:text-base tab:text-xl mx-4">Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do’a restu kepada kami.</h2>
            <h2 class="text-black dark:text-black font-podkova text-sm ph-1:text-base tab:text-xl mx-4 mt-10">Kami Yang Berbahagia</h2>
            <h1 class='text-black dark:text-black text-[32px] ph-1:text-[52px] tab:text-[62px] font-playball '>Annisa & Rivan</h1>
        </div>
        <div>
            <p class="text-black dark:text-black mb-8 text-xs font-poppinLight">Made with<strong class="mx-1">💜</strong>By Rivan Agustiawan</p>
        </div>
        <audio autoplay="true" src="/music.mp4" />
    </div>
</div>
      

</template>
