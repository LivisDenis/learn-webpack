import Post from "@models/Post.ts";
import img from '@/assets/3-37.jpg'
import '@/styles/style.css'
import "@/styles/scss.scss";
import {start} from "@/babel";

const post = new Post('blalbalab', img)
// start().then(console.log)

console.log('post', JSON.stringify(post))