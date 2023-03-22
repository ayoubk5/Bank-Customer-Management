import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormGroupDirective } from '@angular/forms';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
