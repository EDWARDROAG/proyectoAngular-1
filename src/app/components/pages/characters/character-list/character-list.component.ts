import { Component, OnInit } from '@angular/core';
import { Character } from '@app/shared/interface/character.interface';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters:Character[]=[];

  private pageNum = 1;
  private query=""
  private hideScrollHeight =200;
  private showScrollHeight =500;
  constructor() { }

  ngOnInit(): void {
  }

}
