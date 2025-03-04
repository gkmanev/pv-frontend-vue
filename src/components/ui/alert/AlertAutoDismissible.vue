<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Auto dismissing alert -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Auto dismissing alerts"
    subtitle="To create a b-alert that dismisses automatically after a period of
          time, set the show prop (or the v-model) to the number of seconds you
          would like the b-alert to remain visible for. Only integer number of
          seconds are supported."
    modalid="modal-2"
    modaltitle="Auto dismissing alerts"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
      <code class="javascript">
&lt;b-alert
  :show=&quot;dismissCountDown&quot;
  dismissible
  variant=&quot;warning&quot;
  @dismissed=&quot;dismissCountDown = 0&quot;
  @dismiss-count-down=&quot;countDownChanged&quot;
&gt;
  This alert will dismiss after {{ dismissCountDown }} seconds...
&lt;/b-alert&gt;
&lt;b-button @click=&quot;showAlert&quot; variant=&quot;warning&quot; class=&quot;m-1 text-white&quot;&gt;
  Show alert with count-down timer
&lt;/b-button&gt;
&lt;!-- 2 --&gt;
&lt;div class=&quot;mt-3&quot;&gt;
  &lt;b-alert
    :show=&quot;dismissCountDown2&quot;
    dismissible
    variant=&quot;info&quot;
    @dismissed=&quot;dismissCountDown2 = 0&quot;
    @dismiss-count-down=&quot;countDownChanged2&quot;
  &gt;
    This alert will dismiss after {{ dismissCountDown2 }} seconds...
  &lt;/b-alert&gt;
  &lt;b-button @click=&quot;showAlert2&quot; variant=&quot;info&quot; class=&quot;m-1 text-white&quot;&gt;
    Show alert with count-down timer
  &lt;/b-button&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="warning"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        This alert will dismiss after {{ dismissCountDown }} seconds...
      </b-alert>
      <b-button @click="showAlert" variant="outline-primary" class="m-1">
        Show alert with count-down timer
      </b-button>
      <!-- 2 -->
      <div class="mt-3">
        <b-alert
          :show="dismissCountDown2"
          dismissible
          variant="info"
          @dismissed="dismissCountDown2 = 0"
          @dismiss-count-down="countDownChanged2"
        >
          This alert will dismiss after {{ dismissCountDown2 }} seconds...
        </b-alert>
        <b-button @click="showAlert2" variant="outline-info" class="m-1">
          Show alert with count-down timer
        </b-button>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "AlertAutoDismissible",

  data: () => ({
    dismissSecs: 5,
    dismissCountDown: 0,
    dismissSecs2: 5,
    dismissCountDown2: 0,
  }),
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
    countDownChanged2(dismissCountDown2) {
      this.dismissCountDown2 = dismissCountDown2;
    },
    showAlert2() {
      this.dismissCountDown2 = this.dismissSecs2;
    },
  },
  components: { BaseCard },
};
</script>