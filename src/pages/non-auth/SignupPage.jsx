import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";

const SignupPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmitButtonClick = async (e) => {
    e.preventDefault();
    const newUser = {
      id,
      nickname,
      password,
    };

    try {
      await authApi.post("/register", newUser);
      alert("회원가입에 성공하였습니다. 로그인 페이지로 이동할게요");
      navigate("/login");
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  const handleIdValue = (e) => {
    setId(e.target.value);
  };
  const handleNicknameValue = (e) => {
    setNickname(e.target.value);
  };
  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>Signup</h1>
      <p>Signup page</p>

      <form onSubmit={handleSubmitButtonClick}>
        <div>
          <label htmlFor='id'>id</label>
          <input value={id} onChange={handleIdValue} />
        </div>
        <div>
          <label htmlFor='nickname'>nickname</label>
          <input value={nickname} onChange={handleNicknameValue} />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input value={password} onChange={handlePasswordValue} />
        </div>

        <button type='submit'>Signup</button>
        <button
          type='button'
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인하러가기
        </button>

        <button
          type='button'
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
