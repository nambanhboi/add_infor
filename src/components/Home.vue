<template>
  <Toast />
  <ConfirmDialog group="templating">
      <template #message="slotProps">
          <div class="flex flex-column gap-2">
            <label for="username">Username</label>
            <InputText id="username" v-model="username" aria-describedby="username-help" />
          </div>
          <div class="flex flex-column gap-2">
            <label for="adress">Adress</label>
            <InputText id="adress" v-model="adress" aria-describedby="adress-help" />
          </div>
          <!-- <div class="flex p-4">
              <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
              <p class="pl-2">{{ slotProps.message.message }}</p>
          </div> -->
      </template>
  </ConfirmDialog>
  <div class="card flex flex-wrap gap-2 justify-content-center">
      <Button @click="showTemplate()" icon="pi pi-check" label="Add information" class="mr-2"></Button>
  </div>

  <!-- table  -->
  <div class="card">
      <DataTable :value="products" tableStyle="min-width: 50rem">
          <Column v-for="(user, index) in users" :key="index" :field="user.field" :header="user.header"></Column>
      </DataTable>
  </div>
</template>

<script>
export default {
  name: 'Home-',
  data() {
    return {
      username: '',
      adress: '',
      users: [
        {
          username: 'nam hip',
          adress: 'thai binh'
        },
      ],
    }
  },
  methods: {
      showTemplate() {
          this.$confirm.require({
              group: 'templating',
              header: 'Fill Information',
              // message: 'Do you accept that?',
              // icon: 'pi pi-question-circle',
              acceptIcon: 'pi pi-check',
              rejectIcon: 'pi pi-times',
              accept: () => {
                  this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });

                  //add data into table, push data into users
                  this.users.push({
                    username: this.username,
                    adress: this.adress
                  });
              },
              reject: () => {
                  this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
              }
          });
      }
  }
};
</script>