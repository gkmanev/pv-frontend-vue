<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Native browser inputs -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Native browser inputs"
    subtitle="The scope contains attributes and event handlers that can be directly bound to native <input> or <select> elements."
    modalid="modal-8"
    modaltitle="Native browser inputs"
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
      &lt;template v-slot=&quot;{ tags, inputAttrs, inputHandlers, addTag, removeTag }&quot;&gt;
        &lt;b-input-group aria-controls=&quot;my-custom-tags-list&quot;&gt;
          &lt;input
            v-bind=&quot;inputAttrs&quot;
            v-on=&quot;inputHandlers&quot;
            placeholder=&quot;New tag - Press enter to add&quot;
            class=&quot;form-control&quot;&gt;
          &lt;b-input-group-append&gt;
            &lt;b-button @click=&quot;addTag()&quot; variant=&quot;primary&quot;&gt;Add&lt;/b-button&gt;
          &lt;/b-input-group-append&gt;
        &lt;/b-input-group&gt;
        &lt;ul
          id=&quot;my-custom-tags-list&quot;
          class=&quot;list-unstyled d-inline-flex flex-wrap mb-0&quot;
          aria-live=&quot;polite&quot;
          aria-atomic=&quot;false&quot;
          aria-relevant=&quot;additions removals&quot;
        &gt;
          &lt;!-- Always use the tag value as the :key, not the index! --&gt;
          &lt;!-- Otherwise screen readers will not read the tag
               additions and removals correctly --&gt;
          &lt;b-card
            v-for=&quot;tag in tags&quot;
            :key=&quot;tag&quot;
            :id=&quot;`my-custom-tags-tag_${tag.replace(/s/g, '_')}_`&quot;
            tag=&quot;li&quot;
            class=&quot;mt-1 mr-1&quot;
            body-class=&quot;py-1 pr-2 text-nowrap&quot;
          &gt;
            &lt;strong&gt;{{ tag }}&lt;/strong&gt;
            &lt;b-button
              @click=&quot;removeTag(tag)&quot;
              variant=&quot;link&quot;
              size=&quot;sm&quot;
              :aria-controls=&quot;`my-custom-tags-tag_${tag.replace(/s/g, '_')}_`&quot;
            &gt;&lt;feather type=&quot;x-circle&quot; class=&quot;feather-sm&quot;&gt;&lt;/feather&gt;&lt;/b-button&gt;
          &lt;/b-card&gt;
        &lt;/ul&gt;
      &lt;/template&gt;
    &lt;/b-form-tags&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: [&quot;xtreme&quot;, &quot;monster&quot;, &quot;ample&quot;, &quot;severny&quot;, &quot;nice&quot;],
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
          v-slot="{ tags, inputAttrs, inputHandlers, addTag, removeTag }"
        >
          <b-input-group aria-controls="my-custom-tags-list">
            <input
              v-bind="inputAttrs"
              v-on="inputHandlers"
              placeholder="New tag - Press enter to add"
              class="form-control"
            />
            <b-input-group-append>
              <b-button @click="addTag()" variant="primary">Add</b-button>
            </b-input-group-append>
          </b-input-group>
          <ul
            id="my-custom-tags-list"
            class="list-unstyled d-inline-flex flex-wrap mb-0"
            aria-live="polite"
            aria-atomic="false"
            aria-relevant="additions removals"
          >
            <!-- Always use the tag value as the :key, not the index! -->
            <!-- Otherwise screen readers will not read the tag
               additions and removals correctly -->
            <b-card
              v-for="tag in tags"
              :key="tag"
              :id="`my-custom-tags-tag_${tag.replace(/\s/g, '_')}_`"
              tag="li"
              class="mt-1 mr-1"
              body-class="py-1 pr-2 text-nowrap"
            >
              <strong>{{ tag }}</strong>
              <b-button
                @click="removeTag(tag)"
                variant="link"
                size="sm"
                :aria-controls="`my-custom-tags-tag_${tag.replace(
                  /\s/g,
                  '_'
                )}_`"
              >
                <feather type="x-circle" class="feather-sm"></feather>
              </b-button>
            </b-card>
          </ul>
        </template>
      </b-form-tags>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "NativeTags",

  data: () => ({
    tag: "",
    value: ["xtreme", "monster", "ample", "severny", "nice"],
  }),
  components: { BaseCard },
};
</script>