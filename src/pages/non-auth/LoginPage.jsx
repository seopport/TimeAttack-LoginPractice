import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginButtonClick = async (e) => {
    e.preventDefault();
    const newUser = {
      id,
      password,
    };

    try {
      const response = await authApi.post("/login", newUser);
      const { accessToken, nickname, userId } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", userId);
      localStorage.setItem("nickname", nickname);
      alert("로그인에 성공하였습니다. 메인 페이지로 이동할게요");
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };

  const handleIdValue = (e) => {
    setId(e.target.value);
  };
  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Login page</p>

      <form onSubmit={handleLoginButtonClick}>
        <div>
          <label htmlFor='id'>id</label>
          <input value={id} onChange={handleIdValue} />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input value={password} onChange={handlePasswordValue} />
        </div>

        <button type='submit'>Login</button>
        <button
          type='button'
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하러가기
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

export default LoginPage;
