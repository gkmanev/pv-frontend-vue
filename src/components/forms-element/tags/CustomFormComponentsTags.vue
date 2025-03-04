<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Using custom form components -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Using custom form components"
    subtitle="The scope contains attributes and event handlers that can be directly bound to most custom inputs or select components."
    modalid="modal-9"
    modaltitle="Using custom form components"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-tags v-model=&quot;value&quot; no-outer-focus class=&quot;mb-2&quot;&gt;
      &lt;template v-slot=&quot;{ tags, inputAttrs, inputHandlers, tagVariant, addTag, removeTag }&quot;&gt;
        &lt;b-input-group class=&quot;mb-2&quot;&gt;
          &lt;b-form-input
            v-bind=&quot;inputAttrs&quot;
            v-on=&quot;inputHandlers&quot;
            placeholder=&quot;New tag - Press enter to add&quot;
            class=&quot;form-control&quot;
          &gt;&lt;/b-form-input&gt;
          &lt;b-input-group-append&gt;
            &lt;b-button @click=&quot;addTag()&quot; variant=&quot;primary&quot;&gt;Add&lt;/b-button&gt;
          &lt;/b-input-group-append&gt;
        &lt;/b-input-group&gt;
        &lt;div class=&quot;d-inline-block&quot; style=&quot;font-size: 1.5rem;&quot;&gt;
          &lt;b-form-tag
            v-for=&quot;tag in tags&quot;
            @remove=&quot;removeTag(tag)&quot;
            :key=&quot;tag&quot;
            :title=&quot;tag&quot;
            :variant=&quot;tagVariant&quot;
            class=&quot;mr-1&quot;
          &gt;{{ tag }}&lt;/b-form-tag&gt;
        &lt;/div&gt;
      &lt;/template&gt;
    &lt;/b-form-tags&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: ['apple', 'orange', 'banana']
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
      <b-form-tags v-model="value" no-outer-focus class="mb-2">
        <template
          v-slot="{
            tags,
            inputAttrs,
            inputHandlers,
            tagVariant,
            addTag,
            removeTag,
          }"
        >
          <b-input-group class="mb-2">
            <b-form-input
              v-bind="inputAttrs"
              v-on="inputHandlers"
              placeholder="New tag - Press enter to add"
              class="form-control"
            ></b-form-input>
            <b-input-group-append>
              <b-button @click="addTag()" variant="primary">Add</b-button>
            </b-input-group-append>
          </b-input-group>
          <div class="d-inline-block" style="font-size: 1.5rem">
            <b-form-tag
              v-for="tag in tags"
              @remove="removeTag(tag)"
              :key="tag"
              :title="tag"
              :variant="tagVariant"
              class="mr-1"
              >{{ tag }}</b-form-tag
            >
          </div>
        </template>
      </b-form-tags>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "CustomFormComponentsTags",

  data: () => ({
    tag: "",
    value: ["xtreme", "ample", "monster"],
  }),
  components: { BaseCard },
};
</script>