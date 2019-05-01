<template>
  <div>
    <input :type="type" @input="onInput" :value="value">
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value)
      this.$parent.$emit("validate")
    }
  },
}
</script>
