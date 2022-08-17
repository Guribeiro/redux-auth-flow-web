import { connect } from 'react-redux';
import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { ApplicationState } from '../store';
import { Theme } from '../store/ducks/theme/types';

interface StateProps {
  theme: Theme;
}

interface DispatchProps {}

interface OwnProps {}

type GlobalStyledComponentProps = StateProps & DispatchProps & OwnProps;

function GlobalStyledComponent({
  theme,
}: GlobalStyledComponentProps): JSX.Element {
  const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
    @media(max-width: 414px){
      font-size: 81.25%;
    }
  }
  html, body, #root{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body{
    background: ${theme.colors.background};
    font-size: 1.6rem;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }
  button{
    background-color: transparent;
    border: 0;
  }
  body, input, button, select, option{
    font: 400 1.6rem 'Roboto', serif;
  }
  h1, h2, h3, h4, h5, h6{
    font-weight: 500;
    font-family: 'Roboto', serif;
  }
  input[type="file"] {
    display: none;
  }
  a{
    text-decoration: none;
    color: #FFF;
    font-size: 1.4rem;
    font-weight: 500;
    transition: .3s;
  }
  button{
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
  }
  [disabled]{
    opacity: 0.5;
    cursor: not-allowed;
  }
  .react-modal-overlay {
    background-color: #00000050;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 1160px;
    background-color: #F0F0F0;
    padding: 5rem 3rem;
    position: relative;
    border-radius: 5px;
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
  }

  ::-webkit-scrollbar {
    width: 8px;
    /* display: none; */
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #151417;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${lighten(0.1, `${'#1b1b1b'}`)};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #222222;
  }
`;

  return <GlobalStyle />;
}

const mapStateToProps = ({ theme }: ApplicationState) => ({
  theme: theme.data,
});

export default connect(mapStateToProps)(GlobalStyledComponent);
