<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Overlay No wrap -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Overlay No wrap" modalid="modal-7" modaltitle="Overlay No wrap">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-card header=&quot;Card header&quot; footer=&quot;Card footer&quot;&gt;
      &lt;b-media&gt;
        &lt;template #aside&gt;
          &lt;b-img
            thumbnail
            rounded=&quot;circle&quot;
            src=&quot;https://picsum.photos/72/72/?image=58&quot;
            alt=&quot;Image&quot;
          &gt;&lt;/b-img&gt;
        &lt;/template&gt;
        &lt;p class=&quot;mb-0&quot;&gt;
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
      &lt;/b-media&gt;
      &lt;b-overlay :show=&quot;show&quot; no-wrap&gt;&lt;/b-overlay&gt;
    &lt;/b-card&gt;
    &lt;b-button @click=&quot;show = !show&quot; class=&quot;mt-3&quot;&gt;Toggle overlay&lt;/b-button&gt;
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
        <b-card header="Card header" class="border" footer="Card footer">
          <b-media>
            <template #aside>
              <b-img
                thumbnail
                rounded="circle"
                src="@/assets/images/users/1.jpg"
                width="60"
                alt="Image"
              ></b-img>
            </template>
            <p class="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </b-media>
          <b-overlay :show="show" no-wrap></b-overlay>
        </b-card>
        <b-button @click="show = !show" class="mt-3">Toggle overlay</b-button>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "NowrapOverlay",

  data: () => ({
    show: true,
  }),
  components: { BaseCard },
};
</script>