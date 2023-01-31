import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { Comment } from 'src/app/interfaces/comment';
import { HomeService } from './../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  comments: Comment[] = [];
  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.getPosts();
    this.getComments();
  }

  getPosts() {
    this.service.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

  getComments() {
    this.service.getComments().subscribe(data => {
      this.comments = data;
    })
  }

  getCommentsForPost(id: number) {
    return this.comments.filter(comment => comment.postId === id)
  }

}
