

<script setup lang="ts">
  useHead({
    link: [{ rel: '', type: 'image/png', href: '/images/icon.png' }],
  })
  useSeoMeta({
    title: 'My Wedding | Annisa & Rivan',
    ogTitle: 'My Wedding | Annisa & Rivan',
    description: 'Klik Untuk Membuka Undangan.',
    ogDescription: 'Klik Untuk Membuka Undangan.',
    ogImage: 'https://rivanannisa.my.id/images/galeri-6-min.jpg',
  })
</script>

<template>
  <Head>
    <Title>My Wedding | Annisa & Rivan</Title>
    <Meta name="description" content="Klik Untuk Membuka Undangan." />
    <Meta name="og:image" content="https://rivanannisa.my.id/images/galeri-6-min.jpg" />
    <meta property="og:image" content="https://rivanannisa.my.id/images/galeri-6-min.jpg" />
    <link rel='icon' type='image/png' href='/images/icon.png'>
  </Head>
  <div class="w-full bg-white dark:bg-white min-h-screen flex justify-center">
    <div class="w-[510px] bg-white dark:bg-white">
      <NuxtLoadingIndicator />
      <NuxtPage/>
      <UNotifications />

    </div>
  </div>
</template>

<style>
.font-playball {
  font-family: Playball;
}
.font-podkova {
  font-family: Podkova;
}
.font-poorstory {
  font-family: PoorStory;
}
.font-poppinsLight {
  font-family: Poppins-Light;
}
.font-poppinsRegular {
  font-family: Poppins-Regular;
}
.font-poppinsSemibold {
  font-family: Poppins-SemiBold;
}
.font-rougeScript {
  font-family: RougeScript;
}


.iframe-container {
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 */
  position: relative;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  width: 100%;
  height: 100%;
}

.no-scrollbar::-webkit-scrollbar {
          display: none;
      }

      /* Hide scrollbar for IE, Edge and Firefox */
      .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
      }

.animated-image {
  animation-name: slide-down;
  animation-duration: 2s; /* durasi animasi */
  animation-timing-function: ease-in-out; /* fungsi waktu animasi */
  animation-iteration-count: infinite; /* jumlah putaran animasi */
  animation-direction: alternate; /* arah pergerakan animasi */
}

@keyframes slide-down {
  0% {
    transform: rotate(0deg); /* posisi awal gambar */
  }
  50% {
    transform: rotate(1deg); /* posisi awal gambar */
  }
  100% {
    transform: rotate(-1deg); /* posisi akhir gambar */
  }
}


@font-face {
  font-family: 'Playball';
  src: url('/fonts/Playball.ttf') format('truetype');
}
@font-face {
  font-family: 'Podkova';
  src: url('/fonts/Podkova.ttf') format('truetype');
}
@font-face {
  font-family: 'PoorStory';
  src: url('/fonts/PoorStory.ttf') format('truetype');
}
@font-face {
  font-family: 'RougeScript';
  src: url('/fonts/RougeScript-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Poppins-Light';
  src: url('/fonts/PoppinsLight.ttf') format('truetype');
       font-weight: 400;
       font-display: swap;
       font-style: normal;
}
@font-face {
  font-family: 'Poppins-Regular';
  src: url('/fonts/PoppinsRegular.ttf') format('truetype');
       font-weight: 400;
       font-display: swap;
       font-style: normal;
}
@font-face {
  font-family: 'Poppins-SemiBold';
  src: url('/fonts/PoppinsSemiBold.ttf') format('truetype');
       font-weight: 400;
       font-display: swap;
       font-style: normal;
}


/* @font-face {
  font-family: 'ClashDisplay-Semibold';
  src: url('/fonts/ClashDisplay-Semibold.otf') format('truetype');
       font-weight: 600;
       font-display: swap;
       font-style: normal;
}

@font-face {
  font-family: 'ClashDisplay-Bold';
  src: url('/fonts/ClashDisplay-Bold.otf') format('truetype');
       font-weight: 700;
       font-display: swap;
       font-style: normal;
} */
</style>
