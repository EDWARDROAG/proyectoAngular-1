import { CharacterService } from './../../../../shared/services/character.service';
import { Component, OnInit } from '@angular/core';
import { Character } from '@app/shared/interface/character.interface';
import { take } from 'rxjs';
type RecuestInfo= {
  next: String;
}
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters:Character[] = [];
  info: RequestInfo = {
    next: null,
  };
  private pageNum = 1;
  private query = "";
  private hideScrollHeight =200;
  private showScrollHeight =500;
  constructor(private characterSvc: CharacterService) { }

  ngOnInit(): void {
    this.getDataFromService();
  }
private getDataFromService():void{
this.characterSvc.searchCharacters(this.query, this.pageNum)
.pipe(
  take(1)
).subscribe((res:any)=>{
  console.log('response ->',res);
  const { info, results}= res;
  this.characters=[...this.characters,...results];
})

}
}
