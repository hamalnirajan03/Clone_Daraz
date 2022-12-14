import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    .nav-link{
        color: white;
        text-decoration: none;
        
    }
    li{
        list-style: none;

        
    }

    h2{
        color: black;
    }
    h3{
        color: white;
    }

    Button{
        width: 85px;
    }

    .grid{
        display: grid;
        gap: 9rem;

    }

    .grid-two-column{
        grid-template-columns: repeat(2,1fr);
    }

    .grid-three-column{
        grid-template-columns: repeat(3,1fr);
    }

    .grid-four-column{
         grid-template-columns: 1fr 1.2fr .5fr .8fr ;
    }

    .grid-five-column{
        grid-template-columns: repeat(5, 1fr);
    }
    
`;