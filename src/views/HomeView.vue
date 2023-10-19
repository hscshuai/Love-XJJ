<template>
  <div class="home">
    <Heart/>
  </div>
</template>

<script>
// @ is an alias to /src
import Heart from '@/components/canvas/Heart.vue'

export default {
  name: 'HomeView',
  components: {
    Heart
  }
}
</script>
