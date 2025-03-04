<template>
  <div class="steamline mt-4">
    <div class="sl-item">
      <div class="sl-left bg-success"><i class="ti-user"></i></div>
      <div class="sl-right">
        <div class="fw-medium">
          Meeting today <span class="sl-date"> 5pm</span>
        </div>
        <div class="desc">you can write anything</div>
      </div>
    </div>
    <div class="sl-item">
      <div class="sl-left bg-info"><i class="fa fa-image"></i></div>
      <div class="sl-right">
        <div class="fw-medium">Send documents to Clark</div>
        <div class="desc">Lorem Ipsum is simply</div>
      </div>
    </div>
    <div class="sl-item">
      <div class="sl-left">
        <img
          class="rounded-circle"
          alt="user"
          src="../../../../assets/images/users/1.jpg"
        />
      </div>
      <div class="sl-right">
        <div>
          <a href="#">Gohn Doe</a> <span class="sl-date">5 minutes ago</span>
        </div>
        <div class="desc">Call today with gohn doe</div>
      </div>
    </div>
    <div class="sl-item">
      <div class="sl-left">
        <img
          class="rounded-circle"
          alt="user"
          src="../../../../assets/images/users/2.jpg"
        />
      </div>
      <div class="sl-right">
        <div class="fw-medium">
          Go to the Doctor <span class="sl-date">5 minutes ago</span>
        </div>
        <div class="desc">Contrary to popular belief</div>
      </div>
    </div>
    <div class="sl-item mb-0">
      <div class="sl-left">
        <img
          class="rounded-circle"
          alt="user"
          src="../../../../assets/images/users/3.jpg"
        />
      </div>
      <div class="sl-right">
        <div>
          <a href="#">Tiger Sroff</a> <span class="sl-date">5 minutes ago</span>
        </div>
        <div class="desc">
          <div>Approve meeting with tiger</div>
          <b-button pill variant="outline-success" class="mt-2 mr-1"
            >Apporve</b-button
          >
          <b-button pill variant="outline-danger" class="mt-2">Refuse</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodaySchedule",
  data: () => ({
    title: "TodaySchedule",
  }),
};
</script>
