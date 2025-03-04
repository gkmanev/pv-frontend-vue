<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Bagde with Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard title="Bagde with Buttons" 
    subtitle="Badges can be used as part of links or buttons to provide a counter
          (or similar flag)." 
    modalid="modal-2"
    modaltitle="Bagde with Buttons"
    >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
    <pre class="mb-0">
        <code class="javascript">
&lt;b-button variant=&quot;primary&quot;&gt;
  Chats &lt;b-badge variant=&quot;light&quot;&gt;4&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;info&quot;&gt;
  Mails &lt;b-badge variant=&quot;light&quot;&gt;14&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;danger&quot;&gt;
  Notifications &lt;b-badge variant=&quot;light&quot;&gt;25&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;warning&quot;&gt;
  Trello &lt;b-badge variant=&quot;light&quot;&gt;12&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;success&quot;&gt;
  Facebook &lt;b-badge variant=&quot;light&quot;&gt;2&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;light-primary&quot; class=&quot;text-primary fw-medium&quot;&gt;
  Chats &lt;b-badge variant=&quot;primary&quot;&gt;4&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;light-info&quot; class=&quot;text-info fw-medium&quot;&gt;
  Mails &lt;b-badge variant=&quot;light&quot;&gt;14&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;light-danger&quot; class=&quot;text-danger fw-medium&quot;&gt;
  Notifications &lt;b-badge variant=&quot;light&quot;&gt;25&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;light-warning&quot; class=&quot;text-warning fw-medium&quot;&gt;
  Trello &lt;b-badge variant=&quot;light&quot;&gt;12&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;light-success&quot; class=&quot;text-success fw-medium&quot;&gt;
  Facebook &lt;b-badge variant=&quot;light&quot;&gt;2&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-primary&quot;&gt;
  Chats &lt;b-badge variant=&quot;primary&quot;&gt;4&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-info&quot;&gt;
  Mails &lt;b-badge variant=&quot;info&quot;&gt;14&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-danger&quot;&gt;
  Notifications &lt;b-badge variant=&quot;danger&quot;&gt;25&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-warning&quot;&gt;
  Trello &lt;b-badge variant=&quot;warning&quot;&gt;12&lt;/b-badge&gt;
&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-success&quot;&gt;
  Facebook &lt;b-badge variant=&quot;success&quot;&gt;2&lt;/b-badge&gt;
&lt;/b-button&gt;
        </code>
      </pre>
    </template> 
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
    <div class="btn-grp">
        <b-button variant="primary">
        Chats <b-badge variant="light">4</b-badge>
      </b-button>
      <b-button variant="info">
        Mails <b-badge variant="light">14</b-badge>
      </b-button>
      <b-button variant="danger">
        Notifications <b-badge variant="light">25</b-badge>
      </b-button>
      <b-button variant="warning">
        Trello <b-badge variant="light">12</b-badge>
      </b-button>
      <b-button variant="success">
        Facebook <b-badge variant="light">2</b-badge>
      </b-button>
      <b-button variant="light-primary" class="text-primary fw-medium">
        Chats <b-badge variant="primary">4</b-badge>
      </b-button>
      <b-button variant="light-info" class="text-info fw-medium">
        Mails <b-badge variant="light">14</b-badge>
      </b-button>
      <b-button variant="light-danger" class="text-danger fw-medium">
        Notifications <b-badge variant="light">25</b-badge>
      </b-button>
      <b-button variant="light-warning" class="text-warning fw-medium">
        Trello <b-badge variant="light">12</b-badge>
      </b-button>
      <b-button variant="light-success" class="text-success fw-medium">
        Facebook <b-badge variant="light">2</b-badge>
      </b-button>
      <b-button variant="outline-primary">
        Chats <b-badge variant="primary">4</b-badge>
      </b-button>
      <b-button variant="outline-info">
        Mails <b-badge variant="info">14</b-badge>
      </b-button>
      <b-button variant="outline-danger">
        Notifications <b-badge variant="danger">25</b-badge>
      </b-button>
      <b-button variant="outline-warning">
        Trello <b-badge variant="warning">12</b-badge>
      </b-button>
      <b-button variant="outline-success">
        Facebook <b-badge variant="success">2</b-badge>
      </b-button>
      </div>
    </template> 
   
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "BadgeButton",

  data: () => ({}),
  components: { BaseCard },
};
</script>