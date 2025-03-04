<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Single Radio -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Single Radio"
    subtitle="For cross browser consistency, <b-form-radio-group> and <b-form-radio> uses Bootstrap's custom radio input to replace the browser default radio input"
    modalid="modal-1"
    modaltitle="Single Radio"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-group label=&quot;Individual radios&quot; v-slot=&quot;{ ariaDescribedby }&quot;&gt;
      &lt;b-form-radio v-model=&quot;selected&quot; :aria-describedby=&quot;ariaDescribedby&quot; name=&quot;some-radios&quot; value=&quot;A&quot;&gt;Option A&lt;/b-form-radio&gt;
      &lt;b-form-radio v-model=&quot;selected&quot; :aria-describedby=&quot;ariaDescribedby&quot; name=&quot;some-radios&quot; value=&quot;B&quot;&gt;Option B&lt;/b-form-radio&gt;
    &lt;/b-form-group&gt;

    &lt;div class=&quot;mt-3&quot;&gt;Selected: &lt;strong&gt;{{ selected }}&lt;/strong&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        selected: ''
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
      <b-form-group label="Individual radios" v-slot="{ ariaDescribedby }">
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="A"
          >Option A</b-form-radio
        >
        <b-form-radio
          v-model="selected"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="B"
          >Option B</b-form-radio
        >
      </b-form-group>

      <div class="mt-3">
        Selected: <strong>{{ selected }}</strong>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "MultipleChoiceCheckbox",

  data: () => ({
    selected: "",
  }),
  components: { BaseCard },
};
</script>