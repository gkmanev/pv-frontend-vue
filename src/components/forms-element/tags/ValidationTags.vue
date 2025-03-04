<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Tag validation -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Tag validation"
    subtitle="<b-form-tags> detects when the user is attempting to enter a (case-sensitive) duplicate tag, and will provide integrated feedback to the user."
    modalid="modal-5"
    modaltitle="Tag validation"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-group label=&quot;Tags validation example&quot; label-for=&quot;tags-validation&quot; :state=&quot;state&quot;&gt;
      &lt;b-form-tags
        input-id=&quot;tags-validation&quot;
        v-model=&quot;tags&quot;
        :input-attrs=&quot;{ 'aria-describedby': 'tags-validation-help' }&quot;
        :tag-validator=&quot;tagValidator&quot;
        :state=&quot;state&quot;
        separator=&quot; &quot;
      &gt;&lt;/b-form-tags&gt;

      &lt;template #invalid-feedback&gt;
        You must provide at least 3 tags and no more than 8
      &lt;/template&gt;

      &lt;template #description&gt;
        &lt;div id=&quot;tags-validation-help&quot;&gt;
         Tags must be 3 to 5 characters in length and all lower
         case. Enter tags separated by spaces or press enter.
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/b-form-group&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        tags: [],
        dirty: false
      }
    },
    computed: {
      state() {
        // Overall component validation state
        return this.dirty ? (this.tags.length &gt; 2 &amp;&amp; this.tags.length &lt; 9) : null
      }
    },
    watch: {
      tags(newValue, oldValue) {
        // Set the dirty flag on first change to the tags array
        this.dirty = true
      }
    },
    methods: {
      tagValidator(tag) {
        // Individual tag validator function
        return tag === tag.toLowerCase() &amp;&amp; tag.length &gt; 2 &amp;&amp; tag.length &lt; 6
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-group
        label="Tags validation example"
        label-for="tags-validation"
        :state="state"
      >
        <b-form-tags
          input-id="tags-validation"
          v-model="tags"
          :input-attrs="{ 'aria-describedby': 'tags-validation-help' }"
          :tag-validator="tagValidator"
          :state="state"
          separator=" "
        ></b-form-tags>

        <template #invalid-feedback>
          You must provide at least 3 tags and no more than 8
        </template>

        <template #description>
          <div id="tags-validation-help">
            Tags must be 3 to 5 characters in length and all lower case. Enter
            tags separated by spaces or press enter.
          </div>
        </template>
      </b-form-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ValidationTags",

  data: () => ({
    tags: [],
    dirty: false,
  }),
  components: { BaseCard },
  computed: {
    state() {
      // Overall component validation state
      return this.dirty ? this.tags.length > 2 && this.tags.length < 9 : null;
    },
  },
  watch: {
    tags() {
      // Set the dirty flag on first change to the tags array
      this.dirty = true;
    },
  },
  methods: {
    tagValidator(tag) {
      // Individual tag validator function
      return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6;
    },
  },
};
</script>