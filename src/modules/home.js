export default function createHomePage(){
    const article = document.querySelector("article");
    article.innerHTML = "";
    const home = document.createElement("div");
    home.innerHTML = 
    `
        <h2>ABOUT</h2>
        <br>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem cum voluptate, obcaecati rerum eius quod odio iste non consectetur officia libero consequuntur velit est, et voluptates nesciunt. Obcaecati, perferendis quod!</p>
    `;
    article.appendChild(home)
}
