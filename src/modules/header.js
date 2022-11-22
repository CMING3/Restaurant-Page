export default function createHeader(){
    const content = document.querySelector("#content");

    const header = document.createElement("header");
    header.innerHTML=`
        <div class="logo">
            <h1>POOR GUYS</h1>
            <p>BURGERS and FRIES</p>
        </div>
        <div class="navbar">
            <div class="home">HOME</div>
            <div class="menu">MENU</div>
            <div class="contact">CONTACT</div>
        </div>
        <article></article>
    `;
    content.appendChild(header)
}