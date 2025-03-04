<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- <b-toast> component -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="<b-toast> component"
    subtitle="When you have a custom component that would like to display just a single toast at a time, use the <b-toast> component. "
    modalid="modal-2"
    modaltitle="<b-toast> component"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-button variant=&quot;primary&quot; @click=&quot;$bvToast.show('my-toast')&quot;&gt;Show toast&lt;/b-button&gt;

&lt;b-toast id=&quot;my-toast&quot; variant=&quot;warning&quot; solid&gt;
  &lt;template #toast-title&gt;
    &lt;div class=&quot;d-flex flex-grow-1 align-items-baseline&quot;&gt;
      &lt;b-img
        blank
        blank-color=&quot;#ff5555&quot;
        class=&quot;mr-2&quot;
        width=&quot;12&quot;
        height=&quot;12&quot;&gt;
      &lt;/b-img&gt;
      &lt;strong class=&quot;mr-auto&quot;&gt;Notice!&lt;/strong&gt;
      &lt;small class=&quot;text-muted mr-2&quot;&gt;42 seconds ago&lt;/small&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  This is the content of the toast. It is short and to the point.
&lt;/b-toast&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-button variant="primary" @click="$bvToast.show('my-toast')">Show toast</b-button>

      <b-toast id="my-toast" variant="warning" solid>
        <template #toast-title>
          <div class="d-flex flex-grow-1 align-items-baseline">
            <b-img
              blank
              blank-color="#ff5555"
              class="mr-2"
              width="12"
              height="12">
            </b-img>
            <strong class="mr-auto">Notice!</strong>
            <small class="text-muted mr-2">42 seconds ago</small>
          </div>
        </template>
        This is the content of the toast. It is short and to the point.
      </b-toast>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ToastComponent",

  data: () => ({}),
  components: { BaseCard },
};
</script>