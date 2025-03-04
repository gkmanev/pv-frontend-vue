<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Form Basic -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Form Basic"
    subtitle="BootstrapVue form component and helper components that optionally support inline form styles and validation states."
    modalid="modal-1"
    modaltitle="Form Basic"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
   &lt;b-row&gt;
        &lt;b-col cols=&quot;12&quot; lg=&quot;8&quot;&gt;
          &lt;b-form @submit=&quot;onSubmit&quot; @reset=&quot;onReset&quot; v-if=&quot;show&quot;&gt;
            &lt;b-form-group
              id=&quot;input-group-1&quot;
              label=&quot;Email address:&quot;
              label-for=&quot;input-1&quot;
              description=&quot;We'll never share your email with anyone else.&quot;
            &gt;
              &lt;b-form-input
                id=&quot;input-1&quot;
                v-model=&quot;form.email&quot;
                type=&quot;email&quot;
                placeholder=&quot;Enter email&quot;
                required
              &gt;&lt;/b-form-input&gt;
            &lt;/b-form-group&gt;

            &lt;b-form-group
              id=&quot;input-group-2&quot;
              label=&quot;Your Name:&quot;
              label-for=&quot;input-2&quot;
            &gt;
              &lt;b-form-input
                id=&quot;input-2&quot;
                v-model=&quot;form.name&quot;
                placeholder=&quot;Enter name&quot;
                required
              &gt;&lt;/b-form-input&gt;
            &lt;/b-form-group&gt;

            &lt;b-form-group id=&quot;input-group-3&quot; label=&quot;Food:&quot; &gt;
              &lt;b-form-select
                v-model=&quot;form.food&quot;
                :options=&quot;foods&quot;
                required
              &gt;&lt;/b-form-select&gt;
            &lt;/b-form-group&gt;

            &lt;b-form-group id=&quot;input-group-4&quot; v-slot=&quot;{ ariaDescribedby }&quot;&gt;
              &lt;b-form-checkbox-group
                v-model=&quot;form.checked&quot;
                id=&quot;checkboxes-4&quot;
                :aria-describedby=&quot;ariaDescribedby&quot;
              &gt;
                &lt;b-form-checkbox value=&quot;me&quot;&gt;Check me out&lt;/b-form-checkbox&gt;
                &lt;b-form-checkbox value=&quot;that&quot;&gt;Check that out&lt;/b-form-checkbox&gt;
              &lt;/b-form-checkbox-group&gt;
            &lt;/b-form-group&gt;
            &lt;div class=&quot;btn-grp&quot;&gt;
              &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/b-button&gt;
              &lt;b-button type=&quot;reset&quot; variant=&quot;outline-danger&quot;&gt;Reset&lt;/b-button&gt;
            &lt;/div&gt;
          &lt;/b-form&gt;
        &lt;/b-col&gt;
        &lt;b-col cols=&quot;12&quot; lg=&quot;4&quot;&gt;
          &lt;b-card class=&quot;mt-3 border&quot; header=&quot;Form Data Result&quot;&gt;
            &lt;pre class=&quot;m-0&quot;&gt;{{ form }}&lt;/pre&gt;
          &lt;/b-card&gt;
        &lt;/b-col&gt;
      &lt;/b-row&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data: () =&gt; ({
    form: {
      email: &quot;&quot;,
      name: &quot;&quot;,
      food: null,
      checked: [],
    },
    foods: [
      { text: &quot;Select One&quot;, value: null },
      &quot;Carrots&quot;,
      &quot;Beans&quot;,
      &quot;Tomatoes&quot;,
      &quot;Corn&quot;,
    ],
    show: true,
  }),
methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = &quot;&quot;;
      this.form.name = &quot;&quot;;
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() =&gt; {
        this.show = true;
      });
    },
  },
};
&lt;/script&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-row>
        <b-col cols="12" lg="8">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Your Name:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Enter name"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Food:">
              <b-form-select
                v-model="form.food"
                :options="foods"
                required
              ></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                v-model="form.checked"
                id="checkboxes-4"
                :aria-describedby="ariaDescribedby"
              >
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <div class="btn-grp">
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="outline-danger">Reset</b-button>
            </div>
          </b-form>
        </b-col>
        <b-col cols="12" lg="4">
          <b-card class="mt-3 border" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicForm",

  data: () => ({
    form: {
      email: "",
      name: "",
      food: null,
      checked: [],
    },
    foods: [
      { text: "Select One", value: null },
      "Carrots",
      "Beans",
      "Tomatoes",
      "Corn",
    ],
    show: true,
  }),
  components: { BaseCard },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>