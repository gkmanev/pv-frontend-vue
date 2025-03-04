<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Detecting new, invalid, and duplicate tags -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Detecting new, invalid, and duplicate tags"
    subtitle="The event tag-state will be emitted whenever new tags are entered into the new tag input element"
    modalid="modal-6"
    modaltitle="Detecting new, invalid, and duplicate tags"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">

        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <label for="tags-state-event">Enter tags</label>
      <b-form-tags
        input-id="tags-state-event"
        v-model="tags"
        :tag-validator="validator"
        placeholder="Enter tags (3-5 characters) separated by space"
        separator=" "
        @tag-state="onTagState"
      ></b-form-tags>
      <p class="mt-2">Tags: {{ tags }}</p>
      <p>Event values:</p>
      <ul>
        <li>validTags: {{ validTags }}</li>
        <li>invalidTags: {{ invalidTags }}</li>
        <li>duplicateTags: {{ duplicateTags }}</li>
      </ul>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DetectNewInvalidDuplicateTags",

  data: () => ({
    tags: [],
    validTags: [],
    invalidTags: [],
    duplicateTags: [],
  }),
  components: { BaseCard },
  methods: {
    onTagState(valid, invalid, duplicate) {
      this.validTags = valid;
      this.invalidTags = invalid;
      this.duplicateTags = duplicate;
    },
    validator(tag) {
      return tag.length > 2 && tag.length < 6;
    },
  },
};
</script>