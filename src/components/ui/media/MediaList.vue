<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Media list -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Media list"
    subtitle="Because the media object has so few structural requirements, you can also use these component as list HTML elements. "
    modalid="modal-2"
    modaltitle="Media list"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;ul class=&quot;list-unstyled&quot;&gt;
  &lt;b-media tag=&quot;li&quot;&gt;
    &lt;template #aside&gt;
      &lt;b-img
        src=&quot;@/assets/images/users/1.jpg&quot;
        width=&quot;64&quot;
        alt=&quot;placeholder&quot;
      &gt;&lt;/b-img&gt;
    &lt;/template&gt;
    &lt;h5 class=&quot;mt-0 mb-1&quot;&gt;List-based media object&lt;/h5&gt;
    &lt;p class=&quot;mb-0&quot;&gt;
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
      scelerisque ante sollicitudin. Cras purus odio, vestibulum in
      vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
      vulputate fringilla. Donec lacinia congue felis in faucibus.
    &lt;/p&gt;
  &lt;/b-media&gt;

  &lt;b-media tag=&quot;li&quot; class=&quot;my-4&quot;&gt;
    &lt;template #aside&gt;
      &lt;b-img
        src=&quot;@/assets/images/users/2.jpg&quot;
        width=&quot;64&quot;
        alt=&quot;placeholder&quot;
      &gt;&lt;/b-img&gt;
    &lt;/template&gt;

    &lt;h5 class=&quot;mt-0 mb-1&quot;&gt;List-based media object&lt;/h5&gt;
    &lt;p class=&quot;mb-0&quot;&gt;
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
      scelerisque ante sollicitudin. Cras purus odio, vestibulum in
      vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
      vulputate fringilla. Donec lacinia congue felis in faucibus.
    &lt;/p&gt;
  &lt;/b-media&gt;

  &lt;b-media tag=&quot;li&quot;&gt;
    &lt;template #aside&gt;
      &lt;b-img
        src=&quot;@/assets/images/users/4.jpg&quot;
        width=&quot;64&quot;
        alt=&quot;placeholder&quot;
      &gt;&lt;/b-img&gt;
    &lt;/template&gt;

    &lt;h5 class=&quot;mt-0 mb-1&quot;&gt;List-based media object&lt;/h5&gt;
    &lt;p class=&quot;mb-0&quot;&gt;
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
      scelerisque ante sollicitudin. Cras purus odio, vestibulum in
      vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
      vulputate fringilla. Donec lacinia congue felis in faucibus.
    &lt;/p&gt;
  &lt;/b-media&gt;
&lt;/ul&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <ul class="list-unstyled">
        <b-media tag="li">
          <template #aside>
            <b-img
              src="@/assets/images/users/1.jpg"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>
          <h5 class="mt-0 mb-1">List-based media object</h5>
          <p class="mb-0">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </b-media>

        <b-media tag="li" class="my-4">
          <template #aside>
            <b-img
              src="@/assets/images/users/2.jpg"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0 mb-1">List-based media object</h5>
          <p class="mb-0">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </b-media>

        <b-media tag="li">
          <template #aside>
            <b-img
              src="@/assets/images/users/4.jpg"
              width="64"
              alt="placeholder"
            ></b-img>
          </template>

          <h5 class="mt-0 mb-1">List-based media object</h5>
          <p class="mb-0">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </b-media>
      </ul>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "MediaList",

  data: () => ({}),
  components: { BaseCard },
};
</script>