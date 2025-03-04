<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Media -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Media"
    subtitle="The media object helps build complex and repetitive components where some media is positioned alongside content that doesn't wrap around said media. Plus, it does this with only two required classes thanks to flexbox."
    modalid="modal-1"
    modaltitle="Media"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-media&gt;
&lt;template #aside&gt;
  &lt;b-img
    src=&quot;@/assets/images/users/1.jpg&quot;
    width=&quot;64&quot;
    alt=&quot;placeholder&quot;
  &gt;&lt;/b-img&gt;
&lt;/template&gt;

&lt;h5 class=&quot;mt-0&quot;&gt;Media Title&lt;/h5&gt;
&lt;p&gt;
  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
  vulputate fringilla. Donec lacinia congue felis in faucibus.
&lt;/p&gt;
&lt;p&gt;
  Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
  leo. Cum sociis natoque penatibus et magnis dis parturient montes,
  nascetur ridiculus mus.
&lt;/p&gt;

&lt;b-media&gt;
  &lt;template #aside&gt;
    &lt;b-img
      src=&quot;@/assets/images/users/2.jpg&quot;
      width=&quot;64&quot;
      alt=&quot;placeholder&quot;
    &gt;&lt;/b-img&gt;
  &lt;/template&gt;

  &lt;h5 class=&quot;mt-0&quot;&gt;Nested Media&lt;/h5&gt;
  &lt;p class=&quot;mb-0&quot;&gt;
    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
    congue felis in faucibus.
  &lt;/p&gt;
&lt;/b-media&gt;
&lt;/b-media&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-media>
        <template #aside>
          <b-img
            src="@/assets/images/users/1.jpg"
            width="64"
            alt="placeholder"
          ></b-img>
        </template>

        <h5 class="mt-0">Media Title</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <p>
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
          leo. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </p>

        <b-media>
          <template #aside>
            <b-img
              src="@/assets/images/users/2.jpg"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0">Nested Media</h5>
          <p class="mb-0">
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
            congue felis in faucibus.
          </p>
        </b-media>
      </b-media>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "BasicMedia",

  data: () => ({}),
  components: { BaseCard },
};
</script>