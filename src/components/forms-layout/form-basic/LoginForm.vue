<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Login Form -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Login Form" modalid="modal-4" modaltitle="Login Form">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
   &lt;b-form @submit.stop.prevent&gt;
        &lt;b-row&gt;
          &lt;b-col cols=&quot;12&quot;&gt;
            &lt;b-form-group
              id=&quot;uname1&quot;
              label-cols-sm=&quot;4&quot;
              label-cols-lg=&quot;4&quot;
              content-cols-sm
              content-cols-lg=&quot;8&quot;
              label=&quot;Username&quot;
              label-for=&quot;uname1&quot;
              label-class=&quot;fw-medium&quot;
            &gt;
              &lt;b-form-input
                id=&quot;uname1&quot;
                v-model=&quot;userId&quot;
                :state=&quot;validation&quot;
                size=&quot;lg&quot;
              &gt;&lt;/b-form-input&gt;
              &lt;b-form-invalid-feedback :state=&quot;validation&quot;&gt;
                Your username must be 5-12 characters long.
              &lt;/b-form-invalid-feedback&gt;
              &lt;b-form-valid-feedback :state=&quot;validation&quot;&gt;
                Looks Good.
              &lt;/b-form-valid-feedback&gt;
            &lt;/b-form-group&gt;
          &lt;/b-col&gt;
          &lt;b-col cols=&quot;12&quot;&gt;
            &lt;b-form-group
              id=&quot;input3&quot;
              label-cols-sm=&quot;4&quot;
              label-cols-lg=&quot;4&quot;
              content-cols-sm
              content-cols-lg=&quot;8&quot;
              label=&quot;Password&quot;
              label-for=&quot;input3&quot;
              label-class=&quot;fw-medium&quot;
            &gt;
              &lt;b-form-input
                id=&quot;input3&quot;
                type=&quot;password&quot;
                v-model=&quot;pwd&quot;
                :state=&quot;pwdvel&quot;
                size=&quot;lg&quot;
              &gt;&lt;/b-form-input&gt;
              &lt;b-form-invalid-feedback :state=&quot;pwdvel&quot;&gt;
                Your password must be atleast 8 characters long.
              &lt;/b-form-invalid-feedback&gt;
              &lt;b-form-valid-feedback :state=&quot;pwdvel&quot;&gt;
                Storng Password.
              &lt;/b-form-valid-feedback&gt;
            &lt;/b-form-group&gt;
          &lt;/b-col&gt;
          &lt;b-col cols=&quot;12&quot; class=&quot;d-flex align-items-center mt-3&quot;&gt;
            &lt;b-form-checkbox class=&quot;mb-2 mr-sm-2 mb-sm-0&quot;
              &gt;Remember Me&lt;/b-form-checkbox
            &gt;
            &lt;b-button
              variant=&quot;info&quot;
              pill
              class=&quot;d-flex align-items-center ml-auto px-3&quot;
            &gt;
              &lt;feather type=&quot;lock&quot; class=&quot;feather-sm mr-2&quot;&gt;&lt;/feather&gt;
              Login
            &lt;/b-button&gt;
          &lt;/b-col&gt;
        &lt;/b-row&gt;
      &lt;/b-form&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data: () =&gt; ({
    userId: &quot;&quot;,
    pwd: &quot;&quot;,
  }),
  computed: {
    validation() {
      return this.userId.length &gt; 4 &amp;&amp; this.userId.length &lt; 13;
    },
    pwdvel() {
      return this.pwd.length &gt;= 8 &amp;&amp; this.pwd.length &lt; 12;
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
      <b-form @submit.stop.prevent>
        <b-row>
          <b-col cols="12">
            <b-form-group
              id="uname1"
              label-cols-sm="4"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="8"
              label="Username"
              label-for="uname1"
              label-class="fw-medium"
            >
              <b-form-input
                id="uname1"
                v-model="userId"
                :state="validation"
                size="lg"
              ></b-form-input>
              <b-form-invalid-feedback :state="validation">
                Your username must be 5-12 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="validation">
                Looks Good.
              </b-form-valid-feedback>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              id="input3"
              label-cols-sm="4"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="8"
              label="Password"
              label-for="input3"
              label-class="fw-medium"
            >
              <b-form-input
                id="input3"
                type="password"
                v-model="pwd"
                :state="pwdvel"
                size="lg"
              ></b-form-input>
              <b-form-invalid-feedback :state="pwdvel">
                Your password must be atleast 8 characters long.
              </b-form-invalid-feedback>
              <b-form-valid-feedback :state="pwdvel">
                Storng Password.
              </b-form-valid-feedback>
            </b-form-group>
          </b-col>
          <b-col cols="12" class="d-flex align-items-center mt-3">
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0"
              >Remember Me</b-form-checkbox
            >
            <b-button
              variant="info"
              pill
              class="d-flex align-items-center ml-auto px-3"
            >
              <feather type="lock" class="feather-sm mr-2"></feather>
              Login
            </b-button>
          </b-col>
        </b-row>
      </b-form>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "LoginForm",

  data: () => ({
    userId: "",
    pwd: "",
  }),
  components: { BaseCard },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    },
    pwdvel() {
      return this.pwd.length >= 8 && this.pwd.length < 12;
    },
  },
};
</script>