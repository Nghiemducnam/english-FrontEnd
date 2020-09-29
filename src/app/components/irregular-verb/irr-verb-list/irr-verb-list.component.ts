import { Component, OnInit } from '@angular/core';
import {IrregularVerb} from '../../../models/IrregularVerb';
import {VerbsService} from '../../../services/verbs.service';

@Component({
  selector: 'app-irr-verb-list',
  templateUrl: './irr-verb-list.component.html',
  styleUrls: ['./irr-verb-list.component.css']
})
export class IrrVerbListComponent implements OnInit {
  irregularVerb: IrregularVerb = {
    page: 0,
    pageSize: 5,
    orders: [{"property": "verb",
      "ascending": false}]
  };
  constructor(private verb: VerbsService) { }

  ngOnInit(): void {
    this.verb.getIrregularList(this.irregularVerb).subscribe(res => {
      console.log(res);
    });
  }

}
