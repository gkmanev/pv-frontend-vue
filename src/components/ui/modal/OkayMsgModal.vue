<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- OK message box -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="OK message box" modalid="modal-9" modaltitle="OK message box">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;div class=&quot;mb-2&quot;&gt;
     &lt;b-button @click=&quot;showMsgBoxOne&quot;&gt;Simple msgBoxOk&lt;/b-button&gt;
     Return value: {{ String(boxOne) }}
    &lt;/div&gt;
    &lt;div class=&quot;mb-1&quot;&gt;
     &lt;b-button @click=&quot;showMsgBoxTwo&quot;&gt;msgBoxOk with options&lt;/b-button&gt;
     Return value: {{ String(boxTwo) }}
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        boxOne: '',
        boxTwo: ''
      }
    },
    methods: {
      showMsgBoxOne() {
        this.boxOne = ''
        this.$bvModal.msgBoxOk('Action completed')
          .then(value =&gt; {
            this.boxOne = value
          })
          .catch(err =&gt; {
            // An error occurred
          })
      },
      showMsgBoxTwo() {
        this.boxTwo = ''
        this.$bvModal.msgBoxOk('Data was submitted successfully', {
          title: 'Confirmation',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value =&gt; {
            this.boxTwo = value
          })
          .catch(err =&gt; {
            // An error occurred
          })
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
      <div class="mb-2">
        <b-button variant="primary" @click="showMsgBoxOne"
          >Simple msgBoxOk</b-button
        >
        Return value: {{ String(boxOne) }}
      </div>
      <div class="mb-1">
        <b-button variant="primary" @click="showMsgBoxTwo"
          >msgBoxOk with options</b-button
        >
        Return value: {{ String(boxTwo) }}
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "OkayMsgModal",

  data: () => ({
    boxOne: "",
    boxTwo: "",
  }),
  components: { BaseCard },
  methods: {
    showMsgBoxOne() {
      this.boxOne = "";
      this.$bvModal
        .msgBoxOk("Action completed")
        .then((value) => {
          this.boxOne = value;
        })
        .catch(() => {
          // An error occurred
        });
    },
    showMsgBoxTwo() {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxOk("Data was submitted successfully", {
          title: "Confirmation",
          size: "sm",
          buttonSize: "sm",
          okVariant: "success",
          headerClass: "p-2 border-bottom-0",
          footerClass: "p-2 border-top-0",
          centered: true,
        })
        .then((value) => {
          this.boxTwo = value;
        })
        .catch(() => {
          // An error occurred
        });
    },
  },
};
</script>