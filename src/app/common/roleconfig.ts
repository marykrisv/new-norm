import { PrivilegeInterface } from 'src/app/interface/privilege.interface';
export class RoleConfig {
    static role = {
        "Super Admin": {
            priDashboard: true,
            priUser: true,
            priInventory: true,
            priManage: true,
            priNotification: true,
            priPos: true
        },
        "Admin": {
            priDashboard: true,
            priUser: true,
            priInventory: true,
            priManage: true,
            priNotification: true,
            priPos: true
        },
        "Staff": {
            priDashboard: false,
            priUser: false,
            priInventory: true,
            priManage: true,
            priNotification: true,
            priPos: false
        },
        "Cashier": {
            priDashboard: false,
            priUser: false,
            priInventory: false,
            priManage: false,
            priNotification: true,
            priPos: true
        }
    }
}