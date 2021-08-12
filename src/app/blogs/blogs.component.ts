import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  posts: any[]=[];
  constructor() {
    this.getPosts();
  }

  ngOnInit() {
  }

  getPosts(){
    // get the list of posts
    firebase.firestore().collection("posts")
    .orderBy("created", "desc")
    .get().then((querySnapshot)=>
    {
      this.posts=querySnapshot.docs;
    }).catch((error)=>{
      console.log(error);
    })
  } //getPosts

}
