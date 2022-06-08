import { useNavigate } from "react-router-dom";

export function FacbookButton({location}) {

    const navigate = useNavigate();

    const openWindow = (win, w, h) => {
        const y = win.top.outerHeight / 2 + win.top.screenY - ( h / 2);
        const x = win.top.outerWidth / 2 + win.top.screenX - ( w / 2);
        return window.open("http://localhost:5000/api/login-facebook", "_blank", `top=${y}, left=${x}, width=${w}, height=${h}`);
    }

    const facebookLogin = async (e) => {
        e.preventDefault();
        let timer;
        const loginWindow = openWindow(window, 500, 600);
        if(loginWindow){
            timer = setInterval(() => {
                if (loginWindow.closed) {
                    navigate('/load-user', {state: location});
                    if(timer)clearInterval(timer);
                }
            }, 500)
        }
    }

    return(
        <div className="third-party-login-btn" id="facebook-log" onClick={facebookLogin} ><span>Login with Facebook</span></div>
    )
}