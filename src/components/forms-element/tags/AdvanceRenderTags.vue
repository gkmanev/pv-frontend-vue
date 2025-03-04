<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Advanced custom rendering -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Advanced custom rendering"
    subtitle="In situations where the inputHandlers will not work with your custom input, or if you need greater control over tag creation,"
    modalid="modal-11"
    modaltitle="Advanced custom rendering"
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
      <b-form-checkbox switch size="lg" v-model="disabled"
        >Disable</b-form-checkbox
      >
      <b-form-tags
        v-model="value"
        @input="resetInputValue()"
        tag-variant="success"
        class="mb-2 mt-2"
        :disabled="disabled"
        no-outer-focus
        placeholder="Enter a new tag value and click Add"
        :state="state"
      >
        <template
          v-slot="{ tags, inputId, placeholder, disabled, addTag, removeTag }"
        >
          <b-input-group>
            <!-- Always bind the id to the input so that it can be focused when needed -->
            <b-form-input
              v-model="newTag"
              :id="inputId"
              :placeholder="placeholder"
              :disabled="disabled"
              :formatter="formatter"
            ></b-form-input>
            <b-input-group-append>
              <b-button
                @click="addTag(newTag)"
                :disabled="disabled"
                variant="primary"
                >Add</b-button
              >
            </b-input-group-append>
          </b-input-group>
          <b-form-invalid-feedback :state="state">
            Duplicate tag value cannot be added again!
          </b-form-invalid-feedback>
          <ul v-if="tags.length > 0" class="mb-0">
            <li
              v-for="tag in tags"
              :key="tag"
              :title="`Tag: ${tag}`"
              class="mt-2"
            >
              <span class="d-flex align-items-center">
                <span class="mr-2">{{ tag }}</span>
                <b-button
                  :disabled="disabled"
                  size="sm"
                  variant="outline-danger"
                  @click="removeTag(tag)"
                >
                  remove tag
                </b-button>
              </span>
            </li>
          </ul>
          <b-form-text v-else>
            There are no tags specified. Add a new tag above.
          </b-form-text>
        </template>
      </b-form-tags>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "AdvanceRenderTags",

  data: () => ({
    newTag: "",
    disabled: false,
    value: [],
  }),
  components: { BaseCard },
  computed: {
    state() {
      // Return false (invalid) if new tag is a duplicate
      return this.value.indexOf(this.newTag.trim()) > -1 ? false : null;
    },
  },
  methods: {
    resetInputValue() {
      this.newTag = "";
    },
    formatter(value) {
      return value.toUpperCase();
    },
  },
};
</script>