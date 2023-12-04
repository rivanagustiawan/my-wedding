<script setup lang="ts">

const route = useRoute()
const page = ref(false)

function openInvitation() {
    window.scrollTo(0,0);
    page.value = true
}

</script>

<template>
        <Opening v-if="!page" @open="openInvitation()" :name="route.query.to"></Opening>
        <Invitation v-if="page"></Invitation>
</template>
