export default function naviPage() {
  const container = document.createElement("div");
  // container.className = "bg-gray-100 min-h-screen flex justify-center";

  // let userstate = null;
  let userstate = {};
  if(localStorage.getItem("user")){
    
  }
  // if(localStorage.getItem("user")){
  //   userstate = document.createElement("li");
  //   userstate.innerHTML = `<a href="" id="logout" class="text-gray-600">로그아웃</a>`;
  //   userstate.querySelector("#logout").addEventListener("click", function (e) {
  //     e.preventDefault();
  //     localStorage.removeItem("user");
  //     alert("로그아웃 되었습니다.");
  //     window.location.href = "/login";
  //   });
  // } else{
  //   userstate = document.createElement("li");
  //   userstate.innerHTML = `<li><a href="/login" id="login" class="text-gray-600">로그인</a></li>`;
  // }

  container.innerHTML = `
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="text-blue-600">홈</a></li>
        <li><a href="/profile" class="text-gray-600">프로필</a></li>
        <li><a href="" id="logout" class="text-gray-600"></a></li>
      </ul>
    </nav>
  `;


  return container;
}
