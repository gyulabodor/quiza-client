import { isDevMode } from '@angular/core';
import { environment as dev_env } from './enviroment.dev';
import { environment as prod_env } from './enviroment.prod';

export const QUIZA_API_URL = isDevMode() ? dev_env.quiza_api_url : prod_env.quiza_api_url;
