import React, {ChangeEvent, SyntheticEvent, useState} from 'react';

type PostRequest = () => {
    title : string,
    message : string,
    nickname : string
}



function Post() {
    const [postRequest, setPostRequest] = useState<PostRequest>();
    const handleSubmit = (event : SyntheticEvent) => {

    }

    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        setPostRequest({
            ...postRequest,
            [event.target.name] : event.target.value,
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={postRequest?.name}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
            </form>
        </div>
    );
}

export default Post;