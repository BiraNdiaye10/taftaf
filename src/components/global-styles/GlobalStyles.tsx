import { Global } from '@emotion/react';
import React from 'react';

export const GlobalStyles = (): JSX.Element => (
    <Global
        styles={`
            html {
                scroll-behavior: smooth;
            }

            .css-yk16xz-control, .css-1pahdxg-control {
                min-height: 50px !important;
                border-color: #E2E8F0 !important;
            
            }

            .css-1pahdxg-control {
                border-color: #0F9D58 !important;
                box-shadow: 0 0 0 1px #0F9D58 !important;
            }


            .leaflet-popup-content-wrapper {
                color: #1A202C;
                padding: 1px !important;
                border-radius: 6px !important;
                box-shadow: 0px 0px 25px rgb(54 91 125 / 20%) !important;
            }



            .leaflet-popup-content p {
                margin: 0 !important;
                font-family: 'HK Grotesk', sans-serif !important;
            }
            `}
    />
);
