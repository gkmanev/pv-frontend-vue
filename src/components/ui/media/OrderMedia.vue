<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Order -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Order"
    subtitle="Change the order of content in media objects by adding right-align property."
    modalid="modal-4"
    modaltitle="Order"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-media right-align vertical-align=&quot;center&quot;&gt;
&lt;template #aside&gt;
  &lt;b-img
    src=&quot;@/assets/images/users/2.jpg&quot;
    width=&quot;80&quot;
    alt=&quot;placeholder&quot;
  &gt;&lt;/b-img&gt;
&lt;/template&gt;
&lt;h5 class=&quot;mt-0 mb-1&quot;&gt;Media object&lt;/h5&gt;
&lt;p class=&quot;mb-0&quot;&gt;
  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
  vulputate fringilla. Donec lacinia congue felis in faucibus.
&lt;/p&gt;
&lt;/b-media&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-media right-align vertical-align="center">
        <template #aside>
          <b-img
            src="@/assets/images/users/2.jpg"
            width="80"
            alt="placeholder"
          ></b-img>
        </template>
        <h5 class="mt-0 mb-1">Media object</h5>
        <p class="mb-0">
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
      </b-media>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "OrderMedia",

  data: () => ({}),
  components: { BaseCard },
};
</script>