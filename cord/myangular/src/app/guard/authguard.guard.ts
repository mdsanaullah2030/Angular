import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../service/auth.service";


export class authguardGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {

  }


  canActivate(): boolean {
    //login por token pele ture na pale [logen] pathabe//
    if (this.authService.getToken()) {
      console.log(this.authService.getToken())
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }

}
//1.pathe  canActivate:[authguardGuard] ///
// { path: '**', redirectTo: 'login',pathMatch:'full' }, url //
//3. lLogin componet home call korlam this.router.navigate(['home']);//
//logout companet//
//login     this.storeUserProfile(user);//