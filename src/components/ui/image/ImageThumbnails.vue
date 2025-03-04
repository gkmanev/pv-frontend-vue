<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Image thumbnails -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard title="Image thumbnails" modalid="modal-2" modaltitle="Image thumbnails">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;b-row&gt;
&lt;b-col&gt;
  &lt;b-img
    thumbnail
    fluid
    src=&quot;@/assets/images/big/img5.jpg&quot;
    alt=&quot;Image 1&quot;
  &gt;&lt;/b-img&gt;
&lt;/b-col&gt;
&lt;b-col&gt;
  &lt;b-img
    thumbnail
    fluid
    src=&quot;@/assets/images/big/img6.jpg&quot;
    alt=&quot;Image 2&quot;
  &gt;&lt;/b-img&gt;
&lt;/b-col&gt;
&lt;b-col&gt;
  &lt;b-img
    thumbnail
    fluid
    src=&quot;@/assets/images/big/img7.jpg&quot;
    alt=&quot;Image 3&quot;
  &gt;&lt;/b-img&gt;
&lt;/b-col&gt;
&lt;/b-row&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <b-row>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="@/assets/images/big/img5.jpg"
            alt="Image 1"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="@/assets/images/big/img6.jpg"
            alt="Image 2"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="@/assets/images/big/img7.jpg"
            alt="Image 3"
          ></b-img>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ImageThumbnails",

  data: () => ({}),
  components: { BaseCard },
};
</script>