export default function Post(post: string, img): object {
    return {
        "post": post,
        "img": img,
        "date": new Date().toJSON()
    }
}