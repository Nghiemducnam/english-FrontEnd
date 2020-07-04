import { Component, OnInit } from '@angular/core';
import {IrregularVerbSearch} from '../../../models/IrregularVerbSearch';
import {VerbsService} from '../../../services/verbs.service';
import {IrregularVerb} from '../../../models/IrregularVerb';

@Component({
  selector: 'app-irr-verb-list',
  templateUrl: './irr-verb-list.component.html',
  styleUrls: ['./irr-verb-list.component.css']
})
export class IrrVerbListComponent implements OnInit {
  verbs: IrregularVerb [];
  irregularVerb: IrregularVerbSearch = {
    page: 0,
    pageSize: 5,
    orders: [{"property": "verb",
      "ascending": false}]
  };
  constructor(private verb: VerbsService) { }

  ngOnInit(): void {
    this.verb.getIrregularList(this.irregularVerb).subscribe(res => {
      // console.log(res)
      this.verbs = res.data
      console.log(this.verbs)
    })
  }

}
