import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService]
})
export class AppComponent implements OnInit {
    items: MenuItem[] = [];
    itemsMenuRight: MenuItem[] = [];

    constructor(public userServer: UserService) { }

    ngOnInit() {
        this.itemsMenuRight = [
            {
                label: 'Справочники',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'Номенклатура',
                        icon: 'pi pi-fw pi-plus',
                    },
                    {
                        label: 'Изображение',
                        icon: 'pi pi-fw pi-trash'
                    },
                    {
                        label: 'Цены',
                        icon: 'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label: 'Производство',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'Посадка',
                        icon: 'pi pi-fw pi-plus',
                    }
                ]
            },
            {
                label: 'Продажи',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'Заказ на покупку',
                        icon: 'pi pi-fw pi-plus',
                    }
                ]
            },
            {
                label: 'Закупки',
                icon: 'pi pi-fw pi-file',
                items: [
                    {
                        label: 'Документ покупка',
                        icon: 'pi pi-fw pi-plus',
                    }
                ]
            },
        ]
    }


}
