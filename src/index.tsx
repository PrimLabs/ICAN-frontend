import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./views";
import "./index.css"
import { fontResize } from "./utils/fontResize";
import rewriteFixed from "./utils/rewriteFixed";
import { ProvideAuth } from "./usehooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { Buffer } from 'buffer';
import "react-toastify/dist/ReactToastify.css";
//@ts-ignore
window.Buffer = Buffer;
if (typeof (window as any).global === 'undefined') {
  (window as any).global = window;
}

fontResize();
rewriteFixed();
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ProvideAuth>
                <App />
            </ProvideAuth>
        </Provider>
        <ToastContainer
            style={{ top: "300px", fontSize: "18px" }}
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            theme="colored"
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </BrowserRouter>,
    document.getElementById("root")
);
