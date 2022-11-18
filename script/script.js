const cars =
[

    {
    
    title: "BMW",
    
    price: "40000",
    
    count: "15"
    
    },
    
    {
    
    title: "Toyota",
    
    price: "20000",
    
    count: "13"
    
    },
    
    {
    
    title: "Ford",
    
    price: "30000",
    
    count: "20"
    
    },
    
    {
    
    title: "Chevrolet",
    
    price: "60000",
    
    count: "9"
    
    },
    
    {
    
    title: "Volkswagen",
    
    price: "30000",
    
    count: "13"
    
    },
    
    ]
    const rootElem = document.querySelector('body');

    for (let i = 0; i < cars.length; i++)
    {
        const new_OL = makeOL(cars[i]);
        rootElem.append(new_OL);
    
    }
    sum(cars);

    function makeOL(car){
        let numlist = document.createElement('ol');
        let titleLi = document.createElement('li');
        let priceLi = document.createElement('li');
        let countLi = document.createElement('li');
        titleLi.innerText = car.title;
        priceLi.innerText = car.price;
        countLi.innerText = car.count;
        numlist.appendChild(titleLi);
        numlist.appendChild(priceLi);
        numlist.appendChild(countLi);
        return numlist;
        }
    function sum(cars){
    let sum = document.createElement('p');
    rootElem.append(sum);
    let sprice = 0;
    let scount = 0;
    for (let i = 0; i < cars.length; i++) {
        sprice += Number(cars[i].price);
        scount += Number(cars[i].count)
    }
    sum.innerText = `Суммарная цена = ${sprice} \n Суммарное количество = ${scount} `;
}
