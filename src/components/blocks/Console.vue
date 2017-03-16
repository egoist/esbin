<template>
  <div
    class="main__console"
    :class="{'main__block--focus': focus}">
    <div class="block__header">
      Console
    </div>
    <p style="padding: 0 5px;">
      Not available for now.
    </p>
  </div>
</template>

<script>
  import toggleFocusMixin from '@/mixins/toggle-focus'

  export default {
    mixins: [toggleFocusMixin]
  }
</script>
