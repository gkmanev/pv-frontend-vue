<template>
  <b-card no-body>
      <div class="p-3 border-bottom d-flex align-items-center">
          <h3 class="d-block d-lg-none mb-0"><i class="mr-2 mdi mdi-menu"  @click="toggleSide"></i></h3>
          <h5 v-if="$route.params.mailType" class="mb-0">{{this.$route.params.mailType | uppercase}}</h5>
          <h5 v-if="$route.params.mailTag" class="mb-0">{{this.$route.params.mailTag | uppercase}}</h5>
      </div>
      <b-list-group flush>
          <template v-for="(item, i) in mails">
            <b-list-group-item :to="computeMailPath(item.uuid)" @click="togglethird" :key="i" class="d-flex align-items-center px-0">
                <b-img class="mx-3" :src="item.from.avatar" :alt="item.from.avatar" width="37" rounded="circle"/>
                <div class="col-7 px-0 text-truncate">
                    <h5 class="mb-0">{{ item.from.name }}</h5>
                    <span>{{ item.title }}</span>
                </div>
                <span class="text-right ml-auto mx-2">
                    {{ formatDate(item.created_at) }}
                    <h4 v-if="item.type == 'starred'" class="mb-0"><i class="mdi mdi-star text-warning"></i></h4>
                    <h4 v-else  class="mb-0"><i class="mdi mdi-star-outline"></i></h4>
                </span>
            </b-list-group-item>    
          </template> 
      </b-list-group>    
  </b-card>    
</template>

<script>
import Vue from "vue";
import { getMailByType } from "@/views/apps/email/api/mail";
import { getMailByTag } from "@/views/apps/email/api/mail";
Vue.filter("uppercase", function(value) {
  return value.toUpperCase();
});
export default {
    name:"EmailList",
    props: {
        mailType: {
            type: String,
            default: "all"
        },
        mailTag: {
            tag: String
        },
        isSelecteda: {
            type: Boolean
        },
        toggleSide:{},
        togglethird:{}
    },
    data: () => ({
        selected: [0],
        istoggle: true,
        isSelected: false
    }),
    computed:{
        mails() {
            if (this.$route.params.mailType) {
                return getMailByType(this.$route.params.mailType);
            } else {
                return getMailByTag(this.$route.params.mailTag);
            }
        }
    },
    methods:{
        computeMailPath(id) {
            if (this.$route.params.mailType) {
                return {
                path: "/apps/email/" + this.$route.params.mailType + "/0/" + id
                };
            } else {
                return {
                path: "/apps/email/" + "0/" + this.$route.params.mailTag + "/0/" + id
                };
            }
        },
        formatDate(s) {
        //let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        var d = new Date(s);
        return months[d.getMonth()] + " " + d.getDay();
        }
    }
}
</script>

<style>

</style>