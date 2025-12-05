import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Instalacion } from './pages/instalacion/instalacion';
import { Tutorial } from './pages/tutorial/tutorial';
import { Funcionamiento } from './pages/funcionamiento/funcionamiento';

// Creación de las rutas para que se cambie de página sin recargar navegador
export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'instalacion', component: Instalacion },
  { path: 'tutorial', component: Tutorial },
  { path: 'funcionamiento', component: Funcionamiento },
  { path: '**', redirectTo: '' },
];
