import { loginHTML, loginMethod } from "./pages/loginPage";
import MainPage from "./pages/mainPage";
import ProfilePage from "./pages/profilePage";
import ErrorPage from "./pages/errorPage";

//url변경
export function navigateTo(url) {
  window.history.pushState(null, null, url);
  renderPage();
}

//페이지 렌더링
function renderPage() {
  const route = window.location.pathname;
  const rootDiv = document.getElementById("root"); // root div 가져오기
  switch (route) {
    case "/":
      rootDiv.innerHTML = MainPage(); // MainPage 렌더링
      break;
    case "/login":
      rootDiv.innerHTML = loginHTML; // LoginPage 렌더링
      loginMethod();
      break;
    case "/profile":
      if (!chkLogin()) {
        return;
      }
      rootDiv.innerHTML = ProfilePage(); // ProfilePage 렌더링
      break;
    default:
      rootDiv.innerHTML = ErrorPage(); // 잘못된 경로 처리
  }
}

function chkLogin() {
  if (!window.localStorage.getItem("email")) {
    // 로그인이 되지 않았다면
    navigateTo("/login");
    return false;
  } else {
    return true;
  }
}

window.addEventListener("popstate", renderPage);
window.addEventListener("load", renderPage);
