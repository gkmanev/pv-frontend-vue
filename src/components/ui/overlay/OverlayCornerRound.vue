<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Overlay corner rounding -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Overlay corner rounding"
    subtitle="you can use the rounded prop to apply rounding to the overlay's corners to match the obscured content's rounded corners."
    modalid="modal-9"
    modaltitle="Overlay corner rounding"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-button @click=&quot;show = !show&quot;&gt;Toggle overlay&lt;/b-button&gt;
    &lt;b-row class=&quot;text-center mt-3&quot;&gt;
      &lt;b-col md=&quot;6&quot;&gt;
        &lt;p&gt;With rounding&lt;/p&gt;
        &lt;b-overlay :show=&quot;show&quot; class=&quot;d-inline-block&quot; rounded=&quot;circle&quot;&gt;
          &lt;b-img thumbnail rounded=&quot;circle&quot; fluid src=&quot;https://picsum.photos/200/200/?image=54&quot; alt=&quot;Image 1&quot;&gt;&lt;/b-img&gt;
        &lt;/b-overlay&gt;
      &lt;/b-col&gt;
      &lt;b-col md=&quot;6&quot;&gt;
        &lt;p&gt;Without rounding&lt;/p&gt;
        &lt;b-overlay :show=&quot;show&quot; class=&quot;d-inline-block&quot;&gt;
          &lt;b-img thumbnail rounded=&quot;circle&quot; fluid src=&quot;https://picsum.photos/200/200/?image=54&quot; alt=&quot;Image 1&quot;&gt;&lt;/b-img&gt;
        &lt;/b-overlay&gt;
      &lt;/b-col&gt;
    &lt;/b-row&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        show: true
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
      <div>
        <b-button @click="show = !show">Toggle overlay</b-button>
        <b-row class="text-center mt-3">
          <b-col md="6">
            <p>With rounding</p>
            <b-overlay :show="show" class="d-inline-block" rounded="circle">
              <b-img
                thumbnail
                rounded="circle"
                fluid
                src="@/assets/images/big/img4.jpg"
                alt="Image 1"
                width="150"
                height="150"
              ></b-img>
            </b-overlay>
          </b-col>
          <b-col md="6">
            <p>Without rounding</p>
            <b-overlay :show="show" class="d-inline-block">
              <b-img
                thumbnail
                rounded="circle"
                fluid
                src="@/assets/images/big/img4.jpg"
                alt="Image 1"
                width="150"
                height="150"
              ></b-img>
            </b-overlay>
          </b-col>
        </b-row>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "OverlayCornerRound",

  data: () => ({
    show: true,
  }),
  components: { BaseCard },
};
</script>