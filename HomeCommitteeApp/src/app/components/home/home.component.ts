import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantService } from 'src/app/service/tenant.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() numNotification: number;

  showFiller = false;
  permission: number;
  tenantName: string;

  constructor(private route: ActivatedRoute, private userServise: UserService, private tenantService: TenantService,
    private router: Router) { }

  ngOnInit(): void {
    // this.permission = this.route.snapshot.paramMap.get('permission');
    this.permission = this.userServise.user.permission;
    this.tenantService.getTenant(this.userServise.user.id).subscribe((tenant => {
      console.log(tenant);
      this.tenantName = this.tenantService.tenant.first_name;
    }));

    console.log(this.permission);
    console.log("name: " + this.tenantName);
  }
  Exit() {
    this.router.navigate(['/main'])
  }

}




