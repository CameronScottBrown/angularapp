import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  
  constructor(private postService: PostService) { }

  ngOnInit() {




  }

  addPost(title: string, body: string){
    //simple validation
    if(!title || !body){
      alert('Please add post title and body');
    } else {
      this.postService.savePost({title, body} as Post).subscribe(post => {
        this.newPost.emit(post); //emit the event of form post
      });
    }
  }

  editPost(title: string, body: string){

  }

}
