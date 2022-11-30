import React, {ChangeEvent, SyntheticEvent, useEffect, useState} from 'react';

type PostRequest = () => {
    title: string,
    message: string,
    nickname: string
}

const defaultModel: any = {
    title: "",
    message: "",
    nickname: ""
}

function Post() {
    const [postRequest, setPostRequest] = useState<any>(defaultModel);
    const [allPosts, setAllPosts] = useState<PostRequest[]>(defaultModel);
    const posts: PostRequest[] = []

    const handleSubmit = (event: SyntheticEvent) => {
        posts.push(postRequest)
        setPostRequest(defaultModel)
        setAllPosts(posts)
        console.log(posts)

    }

    const handleChange = (event: any) => {
        if (event.target.name == "nickname" && event.target.value == "Nickname wählen") return;
        setPostRequest({...postRequest, [event.target.name]: event.target.value})
        console.log(postRequest)
    }


    return (
        <div>
            <label>
                Title:
                <input
                    type="text"
                    name="title"
                    value={postRequest?.title}
                    onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                Message:
                <textarea
                    name="message"
                    value={postRequest?.message}
                    onChange={(e) => handleChange(e)}
                />
            </label>
            <label>Author</label>
            <select id="nickname" name="nickname" onChange={handleChange} required>
                <option defaultValue="INVALID">Nickname wählen</option>
                <option value="Foo">Foo</option>
                <option value="Bar">Bar</option>
                <option value="Shan">Shan</option>
            </select>
            <button onClick={handleSubmit}>submit</button>
        </div>
    );
}

export default Post;