import {ToastrModule} from 'ngx-toastr';

const TOASTR_CONFIG = {
  timeOut: 3000,
  positionClass: 'toast-bottom-right',
  preventDuplicates: true,

};

export const ToastrModuleConfig = ToastrModule.forRoot(TOASTR_CONFIG);
