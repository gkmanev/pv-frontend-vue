<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Number formatting and locale -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Number formatting and locale"
    subtitle="For cross browser consistency, <b-form-checkbox-group> and <b-form-checkbox> use Bootstrap's custom checkbox input to replace the browser default checkbox input."
    modalid="modal-6"
    modaltitle="Number formatting and locale"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;label for=&quot;sb-locales&quot;&gt;Locale&lt;/label&gt;
    &lt;b-form-select id=&quot;sb-locales&quot; v-model=&quot;locale&quot; :options=&quot;locales&quot;&gt;&lt;/b-form-select&gt;
    &lt;label for=&quot;sb-local&quot; class=&quot;mt-2&quot;&gt;Spin button with locale&lt;/label&gt;
    &lt;b-form-spinbutton
      id=&quot;sb-locale&quot;
      v-model=&quot;value&quot;
      :locale=&quot;locale&quot;
      min=&quot;0&quot;
      max=&quot;10&quot;
      step=&quot;0.125&quot;
    &gt;&lt;/b-form-spinbutton&gt;
    &lt;p&gt;Value: {{ value }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: 0,
        locale: 'fr-CA',
        locales: [
          { value: 'en', text: 'English' },
          { value: 'de', text: 'German' },
          { value: 'fr-CA', text: 'French (Canadian)' },
          { value: 'fa', text: 'Persian' },
          { value: 'ar-EG', text: 'Arabic (Egyptian)' }
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
      <label for="sb-locales">Locale</label>
      <b-form-select
        id="sb-locales"
        v-model="locale"
        :options="locales"
      ></b-form-select>
      <label for="sb-local" class="mt-2">Spin button with locale</label>
      <b-form-spinbutton
        id="sb-locale"
        v-model="value"
        :locale="locale"
        min="0"
        max="10"
        step="0.125"
      ></b-form-spinbutton>
      <p>Value: {{ value }}</p>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "NumberFormatLocaleSpinButton",

  data: () => ({
    value: 0,
    locale: "fr-CA",
    locales: [
      { value: "en", text: "English" },
      { value: "de", text: "German" },
      { value: "fr-CA", text: "French (Canadian)" },
      { value: "fa", text: "Persian" },
      { value: "ar-EG", text: "Arabic (Egyptian)" },
    ],
  }),
  components: { BaseCard },
};
</script>