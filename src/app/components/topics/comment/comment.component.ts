import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../models/models";

@Component({
  selector: 'rc-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment:Comment

  constructor() { }

  ngOnInit() {
  }



  getCommentUser(){
if (this.comment.user && this.comment.user.name){
  return this.comment.user.name;
}

return "Anonymous";
  }

}
