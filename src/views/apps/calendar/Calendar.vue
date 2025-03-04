<template>
  <b-card>
      <full-calendar class="w-100" :config="config" :events="events">
          <div slot="fc-header-right" class="d-flex justify-content-end">
            <b-button variant="success" @click="addEvent(new Date())">Add Event</b-button>
          </div>
        </full-calendar>
        <b-modal ref="eventModal" title="Add Event" hide-footer>
            <label>Event Title </label>
            <b-form-input label="Title" v-model="title" />
            <label class="mt-3">Start Date </label>
            <b-form-datepicker label="Start Date" v-model="start" class="mb-2"></b-form-datepicker>
            <label class="mt-3">End Date </label>
            <b-form-datepicker label="End Date" v-model="end" class="mb-4"></b-form-datepicker>
            <b-button @click="acceptEvent" variant="success">Add Event</b-button> <b-button @click="clearData" class="mx-2">Cancel</b-button>
        </b-modal>
  </b-card>
</template>

<script>
import FullCalendar from "vue-fullcalendar";
export default {
    name:'Calendar',
    components: {
        FullCalendar
    },
    data: () => ({
        title: "Calendar",
        activePrompt2: false,
        start: "",
        end: "",
        desc: "",
        config: {
            defaultView: "month",
        },
        props: {
        date: {
            type: Number
        }
        }
    }),
    methods: {
        clearData() {
            this.$refs['eventModal'].hide()
            this.title = this.end = this.desc = "";
            
        },
        addEvent() {
            this.clearData();
            this.$refs['eventModal'].show()
        },
        acceptEvent() {
            const eventobject = {
                title: this.title,
                start: this.start,
                end: this.end
            };
            this.$store.dispatch("addCalendarEvent", eventobject);
            this.$refs['eventModal'].hide()
        },
       
    },
    computed: {
        events() {
            return this.$store.state.calendarEvents;
        },
        validName() {
            return this.title.length > 0;
        }
    },
    
}
</script>

<style>
.comp-full-calendar {
  max-width: 100%;
  background: transparent;
}
.full-calendar-header .header-center .title {
  font-size: 18px;
  font-weight: 600;
}
.full-calendar-body .dates .week-row, .full-calendar-body .weeks, .full-calendar-body .weeks .week, .full-calendar-body .dates .week-row .day-cell{
    border-color:rgba(0,0,0, 0.1);
}
.full-calendar-header .header-center .prev-month,
.full-calendar-header .header-center .next-month {
  padding: 9px 14px;
  border-radius: 100%;
  border: 1px solid #dadada;
}

</style>