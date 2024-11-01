import { createActionGroup, emptyProps } from '@ngrx/store';
import { ADMIN_FEATURE_KEY } from './admin.reducer';

export const AdminActions = createActionGroup({
  source: ADMIN_FEATURE_KEY,
  events: {
    'Login': emptyProps()
  }
});
