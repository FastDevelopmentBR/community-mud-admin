import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/models/room.interface';
import { RoomsDataService } from 'src/app/services/rooms-data.service';

@Component({
    selector: 'commud-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    pageTitle: string = 'Sala: Detalhes de Sala'
    
    hash: string
    room: Room | undefined 

    constructor(private activatedRoute: ActivatedRoute,
        private roomsData: RoomsDataService) {
        this.hash = this.activatedRoute.snapshot.params['hash'];
    }

    ngOnInit() {
        this.roomsData.getRoom(this.hash).subscribe(data => {
            this.pageTitle = `Sala: ${data.title}`
            this.room = data
        })
    }
}
