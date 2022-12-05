import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UntypedFormControl } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import {
    map
} from 'rxjs/operators';

import { ExclusionDialogComponent } from '../../../shared/components/exclusion-dialog/exclusion-dialog.component';

import { Room } from '../../../models/room.interface';
import { RoomsDataService } from 'src/app/services/rooms-data.service';

interface RoomTableData {
    position: number;
    title: string;
    exits: string[];
    description: string;
}

@Component({
    selector: 'commud-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
})
export class HomeComponent implements OnInit, AfterViewInit {
    search = new UntypedFormControl();
    searchTerms: string = '';
    searchLoading: boolean = false;

    columnsToDisplay: string[] = ['position', 'hash', 'title', 'exits'];
    columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    dataSource: MatTableDataSource<RoomTableData> = new MatTableDataSource<RoomTableData>();

    expandedElement: Room | null = null;
    @ViewChild(MatSort) sort: MatSort = new MatSort();
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

    constructor(private dialog: MatDialog,
        private snackBar: MatSnackBar,
        private _liveAnnouncer: LiveAnnouncer,
        private roomsData: RoomsDataService) { }

    ngOnInit(): void {
        this.listRooms();
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

    /** TODO: Acessibility
     * Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        } else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }

    listRooms() {
        this.roomsData.getRooms()
            .pipe(
                map((rooms: Room[]) => {
                    console.log(rooms)
                    return rooms.map((room: Room, index: number) => {
                        return {
                            position: index + 1,
                            ...room
                        };
                    });
                })
            )
            .subscribe({
                next: (rooms: RoomTableData[]) => {
                    this.dataSource = new MatTableDataSource<RoomTableData>(rooms);
                    this.dataSource.paginator = this.paginator;
                    this.dataSource.sort = this.sort;
                }
            });
    }

    remove(hash: string) {
        const dialogRef = this.dialog.open(ExclusionDialogComponent, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe((result: any) => {
            if (result) {
                this.roomsData.delete(hash).subscribe({
                    next: () => this.listRooms(),
                    error: (err) => this.snackBar.open(err.error),
                });
            }
        });
    }
}