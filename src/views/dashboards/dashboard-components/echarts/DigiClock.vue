<template>
    
          <div class="chart-container chart-container  justify-content-end">
            <div id="screen">
                <div id="timeZone">
                    <p id="time">UTC: {{ time }}</p>                       
                </div>
            </div>
            <div id="screen-local">
                <div id="timeZone">
                    <p id="time">Local: {{ time }}</p>
                <div class="date-wrap">
                    <p id="date">{{ date }}</p>
                </div>
                        
                </div>
            </div>
          </div>       
  
</template>
  
  <script>
  
  
  export default {
    name: "DigiClock",  
    data() {
      return {
        time: '',
        date:''

      }
    },
  
    mounted() {
        this.updateTime();
        setInterval(this.updateTime, 1000);
    },
  
    
    methods: {
       
            updateTime() {
                
                const clock = new Date();
                
                // Time
                let hour = clock.getHours();
                hour = hour < 10 ? '0' + hour : hour;

                let mn = clock.getMinutes();
                mn = mn < 10 ? '0' + mn : mn;

                let sec = clock.getSeconds();
                sec = sec < 10 ? '0' + sec : sec;

                this.time = `${hour} : ${mn} : ${sec}`;

                // Date
                let day = clock.getDate();
                day = day < 10 ? '0' + day : day;

                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                let month = monthNames[clock.getMonth()];
                // month = month < 10 ? '0' + month : month;             
       
                const year = clock.getFullYear();

                this.date = `${day} - ${month} - ${year}`;
               
            },       
    },
    
  };
  </script>
  
  <style scoped>

#screen{
  display:block;
  margin-top: 25px;
}
#timeZone{
  display:inline-block;  
  margin:auto;
}
p{
  text-align:center;
  color:#ebf3f5;

}
#time{
  font-size:20px;
  /* font-weight:bold; */
}
#date{
  font-size:16px;
  /* font-weight:bold; */
}


.chart-container {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: flex-end; 
  align-items: center;
}


#timeZone {
  text-align: right; /* Ensures the content inside is also right-aligned */
}
</style>
  