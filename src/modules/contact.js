export default function createContact(){
    const article = document.querySelector("article");
    article.innerHTML = "";
    const contact = document.createElement("div");
    contact.innerHTML = 
    `
        <h2>How to find us</h2>
        <br>
        <p>
            <ul>
                <li>Our Phone Number: 0555-5555-5555</li>
            </ul>
        </p>
    `;
    article.appendChild(contact)
}