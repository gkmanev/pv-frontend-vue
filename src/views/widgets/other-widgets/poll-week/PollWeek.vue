<template>
  <div>
    <ul class="list-inline mt-3">
      <li class="d-flex align-items-center">
        <b-form-radio v-model="radios1" name="radios1" value="a">
          <b class="mr-1">A</b> 30 Minutes
        </b-form-radio>
      </li>
      <li class="mt-3 d-flex align-items-center">
        <b-form-radio v-model="radios1" name="radios1" value="b" checked="">
          <span class="text-primary">
            <b class="mr-1">B</b> More than 30 minutes
          </span>
        </b-form-radio>
      </li>
      <li class="mt-3 d-flex align-items-center">
        <b-form-radio v-model="radios1" name="radios1" value="c">
          <b class="mr-1">C</b> 1 Hour
        </b-form-radio>
      </li>
      <li class="mt-3 d-flex align-items-center">
        <b-form-radio v-model="radios1" name="radios1" value="d">
          <b class="mr-1">D</b> More than 1 hour
        </b-form-radio>
      </li>
    </ul>
    <b-button variant="success" class="mt-2">Submit Answer</b-button>
  </div>
</template>
<script>
export default {
  name: "PollWeek",
  data: () => ({
    title: "PollWeek",
    radios1: "",
  }),
};
</script>