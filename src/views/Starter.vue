<template>
  <div>
    <BaseCard title="This is the dummy title" subtitle="this is dummy subtitle" modalid="my-modal">

        <template v-slot:highlight>
          &lt;b-alert show variant=&quot;primary&quot;&gt;Primary Alert&lt;/b-alert&gt;
        </template> 
    
        <template v-slot:comcode>
          <b-alert class="d-flex align-items-center" show variant="primary"
              ><feather type="alert-triangle" class="mr-2 feather-sm"></feather
              >Primary Alert</b-alert
            >
        </template> 
   
    </BaseCard>

  </div>  
</template>

<script>
import BaseCard from '../components/card/BaseCard'
export default {
  name: "Starter",
  components:{
    BaseCard
  },
  data: () => ({
    
  })
};
</script>
