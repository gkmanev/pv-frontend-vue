<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Confirm message box -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Confirm message box" modalid="modal-2" modaltitle="Confirm message box">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;div class=&quot;mb-2&quot;&gt;
     &lt;b-button @click=&quot;showMsgBoxOne&quot;&gt;Simple msgBoxConfirm&lt;/b-button&gt;
     Return value: {{ String(boxOne) }}
    &lt;/div&gt;
    &lt;div class=&quot;mb-1&quot;&gt;
     &lt;b-button @click=&quot;showMsgBoxTwo&quot;&gt;msgBoxConfirm with options&lt;/b-button&gt;
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
        this.$bvModal.msgBoxConfirm('Are you sure?')
          .then(value =&gt; {
            this.boxOne = value
          })
          .catch(err =&gt; {
            // An error occurred
          })
      },
      showMsgBoxTwo() {
        this.boxTwo = ''
        this.$bvModal.msgBoxConfirm('Please confirm that you want to delete everything.', {
          title: 'Please Confirm',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          okTitle: 'YES',
          cancelTitle: 'NO',
          footerClass: 'p-2',
          hideHeaderClose: false,
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
          >Simple msgBoxConfirm</b-button
        >
        Return value: {{ String(boxOne) }}
      </div>
      <div class="mb-1">
        <b-button variant="primary" @click="showMsgBoxTwo"
          >msgBoxConfirm with options</b-button
        >
        Return value: {{ String(boxTwo) }}
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ConfirmMsgboxModal",

  data: () => ({
    boxOne: "",
    boxTwo: "",
  }),
  components: { BaseCard },
  methods: {
    showMsgBoxOne() {
      this.boxOne = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure?")
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
        .msgBoxConfirm("Please confirm that you want to delete everything.", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
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