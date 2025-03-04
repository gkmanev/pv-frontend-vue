<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dropdown with Form -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Dropdown with Form"
    subtitle="Put a <b-dropdown-form> within a dropdown menu and place form controls within the <b-dropdown-form>."
    modalid="modal-5"
    modaltitle="Dropdown with Form"
  >
   <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-dropdown id=&quot;dropdown-form&quot; text=&quot;Dropdown with form&quot; ref=&quot;dropdown&quot; class=&quot;m-2&quot;&gt;
      &lt;b-dropdown-form&gt;
        &lt;b-form-group label=&quot;Email&quot; label-for=&quot;dropdown-form-email&quot; @submit.stop.prevent&gt;
          &lt;b-form-input
            id=&quot;dropdown-form-email&quot;
            size=&quot;sm&quot;
            placeholder=&quot;email@example.com&quot;
          &gt;&lt;/b-form-input&gt;
        &lt;/b-form-group&gt;

        &lt;b-form-group label=&quot;Password&quot; label-for=&quot;dropdown-form-password&quot;&gt;
          &lt;b-form-input
            id=&quot;dropdown-form-password&quot;
            type=&quot;password&quot;
            size=&quot;sm&quot;
            placeholder=&quot;Password&quot;
          &gt;&lt;/b-form-input&gt;
        &lt;/b-form-group&gt;

        &lt;b-form-checkbox class=&quot;mb-3&quot;&gt;Remember me&lt;/b-form-checkbox&gt;
        &lt;b-button variant=&quot;primary&quot; size=&quot;sm&quot; @click=&quot;onClick&quot;&gt;Sign In&lt;/b-button&gt;
      &lt;/b-dropdown-form&gt;
      &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
      &lt;b-dropdown-item-button&gt;New around here? Sign up&lt;/b-dropdown-item-button&gt;
      &lt;b-dropdown-item-button&gt;Forgot Password?&lt;/b-dropdown-item-button&gt;
    &lt;/b-dropdown&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      onClick() {
        // Close the menu and (by passing true) return focus to the toggle button
        this.$refs.dropdown.hide(true)
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="btn-grp">
        <b-dropdown
          variant="primary"
          id="dropdown-form"
          text="Dropdown with form"
          ref="dropdown"
        >
          <b-dropdown-form>
            <b-form-group
              label="Email"
              label-for="dropdown-form-email"
              @submit.stop.prevent
            >
              <b-form-input
                id="dropdown-form-email"
                size="sm"
                placeholder="email@example.com"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Password" label-for="dropdown-form-password">
              <b-form-input
                id="dropdown-form-password"
                type="password"
                size="sm"
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>
            <b-button variant="primary" size="sm" @click="onClick"
              >Sign In</b-button
            >
          </b-dropdown-form>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item-button
            >New around here? Sign up</b-dropdown-item-button
          >
          <b-dropdown-item-button>Forgot Password?</b-dropdown-item-button>
        </b-dropdown>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DropdownForm",

  data: () => ({}),
  components: { BaseCard },
  methods: {
    onClick() {
      // Close the menu and (by passing true) return focus to the toggle button
      this.$refs.dropdown.hide(true);
    },
  },
};
</script>