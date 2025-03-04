<template>
  <b-card no-body>
      <div class="p-3 d-flex align-items-center">
            <b-button variant="outline-warning">
                    <i class="mdi-star mdi text-warning"  v-if="mail.type == 'starred'"></i>
                    <i class="mdi mdi-star-outline" v-else></i>
            </b-button>
            <b-button variant="outline-danger"  class="mx-2"><i class="mdi mdi-heart"></i></b-button>
            
            <b-button size="sm"  variant="primary" v-if="mail.tag === 'Social'" class="ml-auto">{{mail.tag}}</b-button>
            <b-button size="sm"  variant="warning" v-if="mail.tag === 'Work'" class="ml-auto">{{mail.tag}}</b-button>
            <b-button size="sm" variant="success" v-if="mail.tag === 'Promotion'" class="ml-auto">{{mail.tag}}</b-button>
            <b-button size="sm"  variant="danger" v-if="mail.tag === 'Personal'" class="ml-auto">{{mail.tag}}</b-button>
            <b-button class="d-block d-lg-none pr-0" size="lg" variant="link"><i class="mdi mdi-close"  @click="togglethird"></i></b-button>
      </div>
      <div class="p-3 border-bottom"><h4>{{ mail.title }}</h4></div>
      <div class="p-3">
          <div class="d-flex align-items-center">
            <b-img :src="mail.from.avatar" :alt="mail.from.avatar" width="37" rounded="circle"/>
            <h5 class="mx-2 mb-0">{{ mail.from.name }}</h5>
          </div>
          <h3 class="mt-4 mb-4">Hi Dear,</h3>
          <div class="" v-html="mail.content"></div>
          <span>{{ mail.from.name }},
                <br />Thanks
          </span> 
          <hr/>
          <h5 class="mt-4">Reply</h5>
          <b-form-textarea id="textarea"  v-model="text"  placeholder="Enter reply..."  rows="3" max-rows="6"></b-form-textarea> 
          <b-button variant="primary" class="mt-3">Send</b-button>
              
      </div>
  </b-card>
</template>

<script>
import { getMailById } from "@/views/apps/email/api/mail";
import { MailMenu } from "@/views/apps/email/api/mail";
export default {
    name:"EmailDetail",
    props:{
        togglethird:{}
    },
    data:()=>({
        items: MailMenu,
        text: ''
    }),
    computed: {
        mail() {
        return getMailById(this.$route.params.uuid);
        }
    },
}
</script>

<style>

</style>