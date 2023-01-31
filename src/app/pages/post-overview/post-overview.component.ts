import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './../../services/home.service';
import { Post } from 'src/app/interfaces/post';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-post-overview',
  templateUrl: './post-overview.component.html',
  styleUrls: ['./post-overview.component.scss']
})
export class PostOverviewComponent implements OnInit {
  post: Post;
  comments: any[] = [];
  constructor(private router: ActivatedRoute, private service: HomeService) { }

  ngOnInit(): void {
    this.getComments();
    this.router.params.subscribe(param => {
      this.service.getPost(param['id']).subscribe(data => {
        this.post = data;
      })
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
