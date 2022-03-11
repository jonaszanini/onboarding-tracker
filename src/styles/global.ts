import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #f0f2f5;
    --red: #e52e40;
    --blue: #5429cc;
    --green: #33cc95;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #699cb3;
    --shape: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
}

h1 {
    text-align: center;
}

h2 {
    margin-bottom: 30px;
}

.container {
    padding-top: 50px;
    max-width: 1120px;
    margin: 0 auto;
    background: #f0f2f5;
    height: 100%;
}

.main-content {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
}

.users-container {
    width: 40%;
    padding: 20px;
    ul{
        list-style: none;
    }
    .user-item{
        background: #ffffff;
        border: 1px #363f5f solid;
        border-radius: 5px;
        display: block;
        width: 250px;
        height: 50px;
        margin-top: 20px;
        text-decoration: none;
        padding: 12px;
        color: #000;
    }
}

.tasks-container {
    width: 60%;
    padding: 20px;
}
`