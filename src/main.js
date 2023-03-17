import { createApp } from 'vue';
import App from './App.vue';

//primevue
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";      
//core
import "primevue/resources/primevue.min.css";
//icons
import "primeicons/primeicons.css";
//button 
import Button from 'primevue/button'
//input text
import InputText from 'primevue/inputtext';
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


const app = createApp(App);

//use
app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);
//component
app.component('Button-', Button);
app.component('InputText-', InputText);
app.component('ConfirmDialog-', ConfirmDialog);
app.component('Toast-', Toast);
app.component('DataTable-', DataTable);
app.component('Column-', Column);


app.mount('#app');
