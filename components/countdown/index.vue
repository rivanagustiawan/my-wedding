<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const targetDate = ref(new Date("2023-10-08 08:00"));
const now = ref(new Date());

const updateNow = () => {
  now.value = new Date();
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(updateNow, 1000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});

const difference = computed(() => +targetDate.value - +now.value);

const getDays = computed(() => Math.floor(difference.value / (1000 * 60 * 60 * 24)));
const getHours = computed(() => Math.floor((difference.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const getMinutes = computed(() => Math.floor((difference.value % (1000 * 60 * 60)) / (1000 * 60)));
const getSeconds = computed(() => Math.floor((difference.value % (1000 * 60)) / 1000));
</script>

<template>
  <div class="text-black space-x-6 ph-2:text-lg tab:text-xl font-podkova inline-flex">
      <div class="block">
        {{ getDays }}
        <p>Days</p>
      </div>
      <div class="block">
        {{ getHours }}
        <p>Hours</p>
      </div>
      <div class="block">
        {{ getMinutes }}
        <p>Minutes</p>
      </div>
      <div class="block">
        {{ getSeconds }}
        <p>Second</p>
      </div>
    </div>
</template>
