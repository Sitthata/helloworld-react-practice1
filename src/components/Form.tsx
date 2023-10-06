import { useState } from "react";

const Form = () => {
    const [username, setUsername] = useState<string>('');
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        console.log(username);
    }
  return (
    <form className="flex flex-col">
        <label htmlFor="username">Your username</label>
        <input type="text" name="username" id="username" value={username} onChange={handleOnChange}/>
        <p>This is what you typing: {username}</p>
    </form>
  )
}

export default Form