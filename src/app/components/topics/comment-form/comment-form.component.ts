import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TopicsService} from "../../../services/topics.service";
import {Comment, User, Topic} from "../../../models/models";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'rc-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {


  comment: Comment;
  copy: Comment;
  @Input() topic: Topic;

  @Output() addComment: EventEmitter<Comment> = new EventEmitter();


  constructor(public topicsService: TopicsService, public usersService: UsersService) {
  }

  ngOnInit() {


    this.comment = {

      id: 12,
      content: "",
      user: {
        name: "Jojo",
        id: 23,
        email: "toto@robusta.io",
        admin: false
      }
    }

    /*
        this.comment = {

          id: 12,
          content: "",
          user: this.usersService.logged
        }
    */

  }


  createComment() {

    this.copy = {...this.comment};
    this.topicsService.createComment(this.comment, this.topic).subscribe(response => this.addComment.emit(this.copy));
  }

}

