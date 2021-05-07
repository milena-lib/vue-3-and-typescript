<template>
  <div>
      <EventDetails></EventDetails>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventDetails from "@/components/EventDetails.vue";

export default defineComponent({
  name: "Home",
  prop: {
      
  },
  components: {
      EventDetails
  },
  date() {
    return {
      event: null
    };
  },
  setup() {}
});
</script>

<style>

</style>