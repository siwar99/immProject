import { Component, OnInit } from '@angular/core';
import { RDV } from '../module/RDV';
import { UserClientService } from '../services/user-client.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-rendez-vous',
  templateUrl: './all-rendez-vous.component.html',
  styleUrls: ['./all-rendez-vous.component.css']
})
export class AllRendezVousComponent implements OnInit {
 RDVS!:RDV[];
 displayedColumns: string[] = ['description', 'dateHeure', 'statusRDV', 'propertyType', 'actions'];
 constructor(private clientService:UserClientService,private toastr: ToastrService){}
 
 ngOnInit(): void {
  this.AllRDV();
  }

  AllRDV():void{
   this.clientService.AllRDV().subscribe((data)=>{
      this.RDVS=data
      console.log("All RDV ", this.RDVS)
   },
   (error) => {
    console.error('Error fetching RDV:', error);
  }
  )
  }

  deleteRDV(id: number): void {
    this.clientService.deleteRDV(id).subscribe(
      () => {
        this.toastr.success('RDV deleted successfully');
        console.log('RDV deleted');
        this.AllRDV(); 
      
      },
      (error) => {
        console.error('Error deleting RDV:', error);
        this.toastr.error('Error deleting RDV');
      }
    );
  }

}
