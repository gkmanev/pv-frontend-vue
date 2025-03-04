<template>
  <b-card class="d-flex flex-row email-app" no-body>
    <!-- ====================================== -->
    <!-- Left Part -->
    <!-- ====================================== -->    
      <div class="left-part border-right flex-shrink-0" :class="showleftpart ? '' : 'show-left-part'">
          <div class="p-3 text-right border-bottom d-block d-lg-none">
                <i class="mdi mdi-close" @click="toggleSide"></i>
           </div>
           <div class="p-3">
                <h3 class="text-center my-2 mb-4">MailBox</h3>
                <!-- ====================================== -->
                <!-- Compose Button -->
                <!-- ====================================== --> 
                <b-button block variant="danger" v-b-modal.composeModal>Compose</b-button>
                <EmailCompose composeModal="composeModal"/>
                <!-- ====================================== -->
                <!-- Navigation List -->
                <!-- ====================================== --> 
                <b-list-group flush class="mail-nav">
                    <template v-for="(item,i) in menus">
                    <h6 v-if="item.heading" :key="i" class="mt-4">{{item.heading}}</h6>    
                    <b-list-group-item :active="$route.path == item.to" v-else :to="item.to" :key="i" class="d-flex justify-content-between align-items-center px-0">
                        <span><i :class="`${item.icon + ' ' + item.iconColor}`" class="mx-2"></i>{{item.title}}</span>
                        <b-badge variant="success" class="mx-2">{{item.chip}}</b-badge>
                    </b-list-group-item>
                    </template>
                </b-list-group>
           </div>    
      </div> 
    <!-- ====================================== -->
    <!-- Middle Part -->
    <!-- ====================================== -->    
        <div class="right-part min-h border-right col-12 col-lg-4 p-0">
            <EmailList :toggleSide="toggleSide" :togglethird="togglethird"/>
        </div>   
    <!-- ====================================== -->
    <!-- Third Part -->
    <!-- ====================================== -->   
        <div class="third-part w-100" :class="showthirdpart ? '' : 'show-third-part'">
            <EmailDetail :togglethird="togglethird" />
            <h3 class="d-block d-lg-none mb-0 ml-auto"><i class="mr-2 mdi mdi-menu"  @click="togglethird"></i></h3>
        </div>
  </b-card>
</template>

<script>
import { MailMenu } from "@/views/apps/email/api/mail";
export default {
    name: 'Email',
    components:{
        EmailList: () => import("@/views/apps/email/EmailList"),
        EmailCompose: () => import("@/views/apps/email/EmailCompose"),
        EmailDetail: () => import("@/views/apps/email/EmailDetail"),
    },
    data:()=>({
      showleftpart:true,
      showthirdpart:true,
      menus: MailMenu,
      selected:0  
    }),
    methods:{
        toggleSide() {
            this.showleftpart = !this.showleftpart;
        },
        togglethird(){
            this.showthirdpart = !this.showthirdpart
        },
        
    }
}
</script>

<style lang="scss">
    .email-app{
        overflow: hidden;
        .list-group-item-action.router-link-exact-active{
            background: rgba(0,0,0,0.05);
        }
    }
    .min-h{
        min-height: calc(100vh - 300px);
    }
    .mail-nav .list-group-item{
        border-width: 0px;
        margin-bottom: 2px;
        border-radius: 4px;
    }
</style>