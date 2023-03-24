import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiPostService } from './05-dependency-c'
// Main
(async () => {
  const provider1 = new LocalDataBaseService()
  const provider2 = new JsonDataBaseService()
  const provider3 = new WebApiPostService()

  const postService1 = new PostService(provider1);
  const postService2 = new PostService(provider2);
  const postService3 = new PostService(provider3);

  const posts1 = await postService1.getPosts();
  const posts2 = await postService2.getPosts();
  const posts3 = await postService3.getPosts();

  console.log({ posts1, posts2, posts3 })
})();
