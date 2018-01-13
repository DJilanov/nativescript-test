import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { EventBusService } from "../../core/event-bus/event-bus.service";

@Component({
    selector: "ns-table-footers",
    moduleId: module.id,
    templateUrl: "./table-footers.component.html",
    styleUrls: [ './table-footers.component.css' ]
})
export class TableFootersComponent {

    enabledNextPage = false;
    enabledPreviousPage = false;

    constructor(
        private eventBusService: EventBusService,
        private routerExtensions: RouterExtensions
    ) {
        this.eventBusService.paginationControllsAvailability.subscribe((data) => this.updatePaginationControlls(data))
    }

    updatePaginationControlls(data) {
        this.enabledNextPage = data.enabledNextPage;
        this.enabledPreviousPage = data.enabledPreviousPage;
    }

    goToNextPage(next) {
        console.log('go to next page:', next);
        this.eventBusService.emitChangePitchesPagination({
            next: next
        });
    }
}