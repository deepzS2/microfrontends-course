import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import Checkbox from 'primevue/checkbox';
import Panel from 'primevue/panel';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Chart from 'primevue/chart';
import ProgressBar from 'primevue/progressbar';

import Dashboard from './components/Dashboard.vue'

const mount = (el) => {
  const app = createApp(Dashboard)

  app.mount(el)
  app.component(Checkbox)
  app.component(Panel)
  app.component(Dropdown)
  app.component(InputText)
  app.component(Button)
  app.component(Column)
  app.component(DataTable)
  app.component(Chart)
  app.component(ProgressBar)
  app.use(PrimeVue)
}

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById('_dashboard-dev-root')

  devRoot && mount(devRoot)
}

export { mount }