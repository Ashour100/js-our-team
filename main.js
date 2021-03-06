const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];
let cardsContainer=document.querySelector("#con");

for(let i=0;i<team.length;i++){
    let card=document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`<img src="img/${team[i].image}">
                    <div class="txt">
                    <h4>${team[i].name}</h4>
                    <span>${team[i].role}</span>
                    </div>`;
    cardsContainer.appendChild(card);
    // document.writeln(`<img src="img/${team[i].image}"><br>`);
    // document.writeln(`Name ${i+1}:${team[i].name}<br>`);
    // document.writeln(`Role ${i+1}:${team[i].role}<br>`);
}