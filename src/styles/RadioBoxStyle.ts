import styled from "styled-components";
import { darken, transparentize } from 'polished'

interface RadioBoxProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    width: 15rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    transition: border-color 0.2s;
    margin-bottom: 1rem;

    background: ${(props) => props.isActive
        ? transparentize(0.8, '#000000')
        : '#ffffff'
    };
    
    &:hover{
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    a{
        text-decoration: none;
        display: inline-block;
        font-size: 1rem;
        height: 4rem;
        width: 15rem;
        text-align: left;
        padding: 1.4rem;
        color: #000;
    }

    img{
        width: 20px;
        height: 20px;
    }

    span{

    }

`