import LoginPage from "./pages/loginPage";
import MainPage from "./pages/mainPage";

const pagenation = () => {
  switch (window.location.pathname) {
    case "/login":
      return LoginPage();
    case "/":
      return MainPage();
  }
};

document.body.innerHTML = `${pagenation()}`;

//   ${LoginPage()}
//   ${ProfilePage()}
//   ${ErrorPage()}
//   ${MainPage()}
