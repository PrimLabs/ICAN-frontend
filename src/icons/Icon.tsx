import { width } from "@mui/system";
import "./Icon.css";

export type Name = "add"|"login"|"account"|"file"|"station"|"spin"|"discord"|"twitter"|"github"|"document"|"link"|"refresh"|"home"|"minus"|"mail"|"more";

interface Props {
    name: Name;
    bg?: string;
    color?: string;
    width?:string;
    height?:string;
    spin?: boolean
}

const Icon = ({ name, bg, color, width, height,spin }: Props) => {
    switch (name) {
        case "minus":
            return (
                <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1906" width="20" height="20">
                    <path
                        d="M853.333333 554.666667H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667s19.2-42.666667 42.666667-42.666667h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667s-19.2 42.666667-42.666667 42.666667z"
                        p-id="1907"/>
                </svg>
            )
        case "add":
            return (
                <svg width={width ? width : "48"} height={height ? height :"48"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 12H4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        case "login":
            return(<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>)
        case "account":
            return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>)
        case "file":
            return (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>)
        case "station":
            //@ts-ignore
            return (<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" width="48" height="48" viewBox="0 0 110.9 122.88"  xml:space="preserve" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g><path d="M99.06,20.2c0.27,0.13,0.51,0.3,0.74,0.52c0.06,0.06,0.11,0.12,0.16,0.18c2.89,2.29,5.78,4.88,7.88,8 c2.32,3.45,3.61,7.44,2.83,12.17c-0.33,1.98-1.08,3.71-2.22,5.24c-0.82,1.09-1.82,2.05-3,2.89c-0.06,1.53-0.08,3.03-0.08,4.52 c0.01,1.91,0.07,3.88,0.18,5.9c0.25,4.74,0.96,9.52,1.67,14.26c0.76,5.1,1.52,10.16,1.72,15.43c0.27,6.75-0.53,12.3-2.76,16.22 c-2.48,4.38-6.51,6.72-12.45,6.51v0c-7.09-0.13-11.45-4.11-13.42-11.46c-1.72-6.43-1.46-15.61,0.49-27.16 c-0.06-9.15-1.25-16.08-3.61-20.75c-1.54-3.05-3.63-5.07-6.27-6.03v59.91c0.86,0.41,1.64,0.97,2.3,1.64 c1.52,1.52,2.47,3.63,2.47,5.95v5.98c0,1.51-1.23,2.74-2.74,2.74H2.74c-1.51,0-2.74-1.23-2.74-2.74v-5.98 c0-2.32,0.95-4.42,2.47-5.95c0.47-0.47,1-0.89,1.57-1.24V14.52c0-4,1.63-7.63,4.26-10.26C10.93,1.63,14.56,0,18.56,0h37.78 C60.35,0,64,1.64,66.64,4.28c2.64,2.64,4.28,6.29,4.28,10.31v26.36c4.86,1.06,8.57,4.17,11.15,9.27 c2.77,5.47,4.15,13.31,4.19,23.46c0,0.16-0.01,0.32-0.04,0.47l0.01,0c-1.85,10.87-2.15,19.35-0.63,25.02 c1.27,4.77,3.95,7.35,8.24,7.41l0.05,0v0c3.66,0.12,6.09-1.22,7.52-3.75c1.69-2.98,2.28-7.55,2.05-13.31 c-0.19-4.88-0.94-9.85-1.68-14.85c-0.72-4.82-1.44-9.68-1.71-14.78c-0.11-2.01-0.17-4.06-0.18-6.18c-0.01-1.68,0.02-3.34,0.09-4.97 c-5.11-4.48-8.22-8.96-9.18-13.42c-0.91-4.23,0.05-8.29,3-12.17c-2.25-1.54-4.54-2.8-6.86-3.81c-3.17-1.38-6.43-2.31-9.75-2.85 c-1.49-0.24-2.5-1.65-2.26-3.14c0.24-1.49,1.65-2.5,3.14-2.26c3.76,0.61,7.45,1.66,11.06,3.23C92.54,15.82,95.85,17.75,99.06,20.2 L99.06,20.2z M65.44,44.23c-0.12-0.34-0.18-0.7-0.15-1.08c0.02-0.27,0.07-0.52,0.15-0.76v-27.8c0-2.5-1.03-4.78-2.68-6.43 c-1.65-1.65-3.93-2.68-6.43-2.68H18.56c-2.48,0-4.74,1.02-6.38,2.66c-1.64,1.64-2.66,3.9-2.66,6.38v91.22h55.92V44.23L65.44,44.23z M68.42,111.46c-0.08,0.01-0.15,0.01-0.23,0.01H7.26c-0.34,0.15-0.65,0.36-0.91,0.62c-0.53,0.53-0.86,1.26-0.86,2.07v3.24h64.73 v-3.24c0-0.8-0.33-1.53-0.86-2.07C69.09,111.82,68.77,111.61,68.42,111.46L68.42,111.46z M23.04,13.74h29.44 c1.53,0,2.92,0.62,3.92,1.63c0.07,0.07,0.14,0.14,0.2,0.22c0.89,0.99,1.43,2.29,1.43,3.7v18.78c0,1.53-0.62,2.92-1.63,3.92 c-1,1-2.39,1.63-3.92,1.63H23.04c-1.52,0-2.9-0.63-3.91-1.63l-0.01,0.01c-1-1-1.63-2.39-1.63-3.92V19.29 c0-1.53,0.62-2.92,1.63-3.92c0.07-0.07,0.14-0.14,0.22-0.2C20.33,14.28,21.63,13.74,23.04,13.74L23.04,13.74z M52.48,19.22H23.04 c-0.01,0-0.02,0-0.02,0L23,19.24c-0.01,0.01-0.02,0.03-0.02,0.04v18.78c0,0.01,0.01,0.03,0.02,0.04L23,38.12L23,38.12 c0.01,0.01,0.02,0.01,0.04,0.01h29.44c0.01,0,0.03-0.01,0.04-0.02c0.01-0.01,0.02-0.03,0.02-0.04V19.29c0-0.01,0-0.02,0-0.02 l-0.02-0.02C52.51,19.23,52.5,19.22,52.48,19.22L52.48,19.22z M98.15,26.5c-1.91,2.56-2.55,5.12-1.99,7.7 c0.67,3.12,3,6.44,6.88,9.95c0.39-0.35,0.74-0.72,1.03-1.11c0.61-0.81,1.02-1.76,1.19-2.84c0.52-3.16-0.37-5.87-1.97-8.25 C101.97,29.97,100.13,28.16,98.15,26.5L98.15,26.5z"/></g></svg>)
        case "spin":
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                <path opacity=".25"
                      d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
                <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
                    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s"
                                      repeatCount="indefinite"/>
                </path>
            </svg>
        case "twitter":
        return <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 32 6 C 26.568583 6 22.160643 10.388731 22.042969 15.792969 C 17.240727 15.216998 14.113589 13.421507 12.195312 11.652344 C 10.067982 9.6903754 9.3945312 7.9472656 9.3945312 7.9472656 A 1.50015 1.50015 0 0 0 6.8007812 7.5996094 C 6.8007812 7.5996094 5 10 5 13.5 C 5 15.500985 5.6317952 16.981554 6.3847656 18.236328 C 6.3570276 18.223338 6.1699219 18.158203 6.1699219 18.158203 A 1.50015 1.50015 0 0 0 4.0058594 19.636719 C 4.0058594 19.636719 4.5832039 23.856843 8.5507812 26.941406 L 8.1367188 27.044922 A 1.50015 1.50015 0 0 0 7.1972656 29.244141 C 7.1972656 29.244141 7.8700527 30.382221 9.2792969 31.580078 C 10.11485 32.290298 11.34227 33.023169 12.789062 33.701172 C 11.012271 34.35044 8.362818 35 4.5 35 A 1.50015 1.50015 0 0 0 3.3710938 37.488281 C 3.3710938 37.488281 4.5173251 38.751002 6.7832031 39.849609 C 9.0490812 40.948217 12.539474 42 17.5 42 C 26.219697 42 32.484656 37.817151 36.394531 32.515625 C 40.304407 27.214099 42 20.861111 42 16 C 42 15.691547 41.980739 15.387437 41.953125 15.085938 C 44.064371 13.051602 44.856626 11.522235 44.894531 11.447266 C 45.084531 11.066266 45.01375 10.608688 44.71875 10.304688 C 44.42475 9.9996875 43.969031 9.9137969 43.582031 10.091797 L 43.419922 10.166016 C 43.280922 10.230016 43.141953 10.294422 43.001953 10.357422 C 43.408953 9.7084219 43.730125 9.014875 43.953125 8.296875 C 44.077125 7.900875 43.943234 7.4669375 43.615234 7.2109375 C 43.287234 6.9549375 42.835469 6.9275312 42.480469 7.1445312 C 41.258221 7.8873594 40.086652 8.40739 38.867188 8.7558594 C 37.072578 7.0534724 34.656873 6 32 6 z M 32 9 C 35.883178 9 39 12.116822 39 16 C 39 20.138889 37.445593 26.035901 33.980469 30.734375 C 30.515344 35.432849 25.280303 39 17.5 39 C 13.7348 39 11.230189 38.318942 9.3535156 37.582031 C 11.319341 37.276755 13.011947 36.869367 14.228516 36.398438 C 16.338182 35.581792 17.476563 34.638672 17.476562 34.638672 A 1.50015 1.50015 0 0 0 16.863281 32.044922 C 14.140556 31.364241 12.394328 30.263307 11.298828 29.345703 L 12.863281 28.955078 A 1.50015 1.50015 0 0 0 13.039062 26.099609 C 9.7939415 24.851486 8.4312292 23.086373 7.734375 21.607422 C 8.5823538 21.782967 9.3718961 22 10.5 22 A 1.50015 1.50015 0 0 0 11.169922 19.158203 C 11.169922 19.158203 8 17.7 8 13.5 C 8 12.745947 8.2088435 12.268355 8.3613281 11.697266 C 8.884507 12.400354 9.3156815 13.07859 10.160156 13.857422 C 12.734824 16.231954 16.990366 18.653154 23.419922 18.998047 A 1.50015 1.50015 0 0 0 25 17.5 L 25 16 C 25 12.116822 28.116822 9 32 9 z"/></svg>
        case "discord":
            return  <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 16.671875 7.2148438 C 16.486405 7.2190874 16.299581 7.2386152 16.113281 7.2734375 C 13.574331 7.7479578 10.975933 8.649134 8.3554688 9.7148438 A 1.50015 1.50015 0 0 0 7.7226562 10.201172 C 2.0175326 17.763657 0.3684573 25.710581 1.2402344 33.605469 A 1.50015 1.50015 0 0 0 1.9570312 34.726562 C 5.0443136 36.584848 8.2440569 38.215846 11.642578 39.337891 C 13.115662 39.823695 14.751851 39.27377 15.628906 37.992188 L 17.027344 35.945312 C 17.581741 36.085368 18.144758 36.213605 18.714844 36.328125 C 20.410438 36.733685 22.175039 36.957031 23.988281 36.957031 C 25.981196 36.957031 27.915944 36.694149 29.763672 36.207031 C 30.150613 36.12236 30.537903 36.039741 30.917969 35.943359 L 32.390625 38.035156 C 33.27394 39.291311 34.892743 39.826103 36.349609 39.345703 C 39.756167 38.223569 42.960978 36.588499 46.054688 34.726562 A 1.50015 1.50015 0 0 0 46.773438 33.605469 C 47.6452 25.71071 45.995291 17.763742 40.289062 10.201172 A 1.50015 1.50015 0 0 0 39.658203 9.7148438 C 37.037148 8.6478745 34.438942 7.7478833 31.900391 7.2734375 C 30.408472 6.9945742 28.892989 7.7176076 28.173828 9.0546875 L 28.15625 9.0878906 C 26.973043 8.9716886 25.763955 8.862565 24.005859 8.9023438 C 22.246769 8.8617578 21.039043 8.9711398 19.855469 9.0878906 L 19.837891 9.0546875 C 19.208719 7.8862268 17.970165 7.1851384 16.671875 7.2148438 z M 16.826172 10.216797 C 16.982233 10.235833 17.117055 10.3276 17.197266 10.476562 L 17.660156 11.335938 A 1.50015 1.50015 0 0 0 19.175781 12.111328 C 20.401057 11.950157 21.866217 11.849961 23.970703 11.900391 A 1.50015 1.50015 0 0 0 24.041016 11.900391 C 26.144782 11.850921 27.611838 11.951001 28.837891 12.111328 A 1.50015 1.50015 0 0 0 30.353516 11.335938 L 30.814453 10.476562 C 30.919293 10.281643 31.127575 10.18152 31.347656 10.222656 C 33.443438 10.61435 35.747401 11.417301 38.115234 12.363281 C 42.996223 18.995645 44.42905 25.642641 43.8125 32.535156 C 41.062959 34.147542 38.284264 35.549515 35.410156 36.496094 C 35.193022 36.567694 34.974435 36.496392 34.84375 36.310547 L 33.742188 34.746094 C 34.104612 34.573012 34.464659 34.394563 34.816406 34.203125 A 1.50015 1.50015 0 1 0 33.382812 31.568359 C 31.734964 32.4652 29.951905 33.12537 28.074219 33.523438 C 26.764025 33.745094 25.40575 33.885414 23.978516 33.914062 C 22.625605 33.886829 21.326145 33.761688 20.072266 33.560547 C 18.131495 33.167227 16.290693 32.492226 14.59375 31.568359 A 1.50015 1.50015 0 0 0 13.876953 31.375 A 1.50015 1.50015 0 0 0 13.160156 34.203125 C 13.506722 34.391805 13.86178 34.567432 14.21875 34.738281 L 13.152344 36.298828 C 13.023796 36.486666 12.802248 36.561303 12.583984 36.490234 C 9.7179766 35.544001 6.9431409 34.144986 4.2011719 32.537109 C 3.5842436 25.643997 5.0177769 18.996357 9.8984375 12.363281 C 12.266754 11.417839 14.568689 10.614274 16.664062 10.222656 C 16.719464 10.212301 16.774152 10.210452 16.826172 10.216797 z M 30.488281 18.966797 C 28.580281 18.966797 27.009766 21.007281 27.009766 23.488281 C 27.009766 25.969281 28.580281 28.009766 30.488281 28.009766 C 32.396281 28.009766 33.966797 25.969281 33.966797 23.488281 C 33.966797 21.007281 32.396281 18.966797 30.488281 18.966797 z M 16.488281 18.992188 C 14.562281 18.992188 12.976563 21.022281 12.976562 23.488281 C 12.976562 25.954281 14.562281 27.982422 16.488281 27.982422 C 18.414281 27.982422 19.998047 25.954281 19.998047 23.488281 C 19.998047 21.022281 18.414281 18.992187 16.488281 18.992188 z"/></svg>
        case "github":
            return <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"/></svg>
        case "document":
            return <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"/></svg>
        case "link":
            return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px" xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 128 128">
                <g>
                    <path d="m487.6,90.6l-66.2-66.2c-9.3-10.5-39.1-24.2-64.6,0l-115.1,115.2c-17.8,17.8-17.8,46.8 0,64.6l19.2,19.2-37.5,37.6-19.2-19.2c-8.6-8.6-35.7-25.1-64.6,0l-115.2,115.1c-17.8,17.8-17.8,46.8-7.10543e-15,64.6l66.2,66.2c22.7,22.7 52.4,12.1 64.6,0l115.2-115.2c17.8-17.8 17.8-46.8 0-64.6l-19.2-19.2 37.6-37.6 19.2,19.2c27.7,23.8 53.5,11 64.6,0l115.2-115.2c17.6-17.7 17.6-46.7-0.2-64.5zm-245,245c2.5,2.5 2.5,6.6 0,9.1l-115.2,115.2c-2.5,2.5-6.3,2.9-9.1,0l-66.2-66.2c-2.5-2.5-2.5-6.6 0-9.1l115.2-115.2c3.1-3.1 7.1-2 9.1,0l19.2,19.2-32.5,32.5c-7.7,7.7-7.7,20.1 0,27.7 3.8,3.8 17.3,10.4 27.7,0l32.5-32.5 19.3,19.3zm217.3-208.1l-115.2,115.1c-2.5,2.5-6.3,2.9-9.1,0l-19.2-19.2 32.5-32.5c7.7-7.7 7.7-20.1 0-27.7-7.7-7.7-20.1-7.7-27.7,0l-32.5,32.5-19.2-19.2c-2.5-2.5-2.5-6.6 0-9.1l115.1-115.2c3.1-3.1 7.1-2.1 9.1,0l66.2,66.2c2.5,2.5 2.5,6.6-5.68434e-14,9.1z"/>
                </g>
                </svg>
        case "refresh":
            return <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${spin ? "animate-spin" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        case "home": 
            return <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px" strokeWidth="2"><path  stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"/></svg> 
        case "mail":
            return <svg xmlns="http://www.w3.org/2000/svg" className="h-[48px] w-[48px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        case "more":
            return <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
        default:
            return null;
    }
};
export default Icon;
