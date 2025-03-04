<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Internationalization -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Internationalization"
    subtitle="For cross browser consistency, <b-form-checkbox-group> and <b-form-checkbox> use Bootstrap's custom checkbox input to replace the browser default checkbox input."
    modalid="modal-14"
    modaltitle="Internationalization"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-select v-model=&quot;locale&quot; :options=&quot;locales&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-select&gt;
    &lt;b-form-rating v-model=&quot;value&quot; :locale=&quot;locale&quot; show-value precision=&quot;1&quot;&gt;&lt;/b-form-rating&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Value: {{ value }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 3.5,
        locale: 'en-US',
        locales: [
          { text: 'English US (en-US)', value: 'en-US' },
          { text: 'French (fr)', value: 'fr' },
          { text: 'Persian (fa)', value: 'fa'},
          { text: 'Arabic Egyptian (ar-EG)', value: 'ar-EG' }
        ]
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
      <b-form-select
        v-model="locale"
        :options="locales"
        class="mb-2"
      ></b-form-select>
      <b-form-rating
        v-model="value"
        :locale="locale"
        show-value
        precision="1"
      ></b-form-rating>
      <p class="mt-2">Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "InternationalizationRating",

  data: () => ({
    value: 3.5,
    locale: "en-US",
    locales: [
      { text: "English US (en-US)", value: "en-US" },
      { text: "French (fr)", value: "fr" },
      { text: "Persian (fa)", value: "fa" },
      { text: "Arabic Egyptian (ar-EG)", value: "ar-EG" },
    ],
  }),
  components: { BaseCard },
};
</script>