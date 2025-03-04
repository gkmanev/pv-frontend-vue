<template>
  <b-modal :id="composeModal" title="Compose Email" okTitle="Send">
    <label>To </label>
    <b-form-input label="to" v-model="to" />
    <label class="mt-3">Subject </label>
    <b-form-input label="subject" v-model="subject" />
    <label class="mt-3">Type a Message </label>
    <b-textarea label="Title" v-model="title" />

  </b-modal>
</template>

<script>
export default {
    name:"EmailCompose",
    props:{
        composeModal:{
            type: String,
            default:""
        }
    }
}
</script>

<style>

</style>