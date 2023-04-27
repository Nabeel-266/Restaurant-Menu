// For Menu Buttons
const menuButtons = document.querySelector('.menuBtns');

const menuCategories = ['All', 'Breakfast', 'Lunch', 'Shakes', 'Brunch', 'Dinner'];
const menuBtns = []

menuCategories.forEach((category) => {
    let HtmlButtonsTags = `<button class="menuCatgryBtn ${category}">${category}</button>`;

    menuBtns.push(HtmlButtonsTags);
})

menuButtons.innerHTML = menuBtns.join('');


// For Menu Items
const menuItemsArea = document.querySelector('.menuItemsArea');

const menuItems = [
    {
        id: 1,
        category: "brunch",
        image: "./Images/mexi-chicken-cheese.jpg",
        itemName: "Mexi-Chicken Cheese",
        price: "$15.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 2,
        category: "lunch",
        image: "./Images/chicken-jalfrezi.jpg",
        itemName: "Chicken Jalfrezi",
        price: "$20.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 3,
        category: "shakes",
        image: "./Images/banana-milkshake.png",
        itemName: "Banana Milkshake",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 4,
        category: "breakfast",
        image: "./Images/breakfast-sandwich.jpg",
        itemName: "Breakfast Sandwich",
        price: "$13.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 5,
        category: "dinner",
        image: "./Images/mutton-karahi.jpg",
        itemName: "Mutton Karahi",
        price: "$25.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 6,
        category: "lunch",
        image: "./Images/biryani.jpg",
        itemName: "Chicken Biryani",
        price: "$20.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 7,
        category: "lunch",
        image: "./Images/beef-chowmein.webp",
        itemName: "Beef Chow Mein",
        price: "$20.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 8,
        category: "breakfast",
        image: "./Images/French-Toast.webp",
        itemName: "French Toast",
        price: "$18.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 9,
        category: "shakes",
        image: "./Images/chocolate-milkshake.avif",
        itemName: "Chocolate MilShake",
        price: "$15.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 10,
        category: "brunch",
        image: "./Images/potato-nuggets.jpg",
        itemName: "Potato Nuggets",
        price: "$10.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 11,
        category: "shakes",
        image: "./Images/strawberry-milkshake.avif",
        itemName: "Strawberry Milkshake",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 12,
        category: "lunch",
        image: "./Images/zinger-burger.jpg",
        itemName: "Zinger Classic",
        price: "$17.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 13,
        category: "dinner",
        image: "./Images/beef-burger.jpg",
        itemName: "Beef Cheese Burger",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 14,
        category: "breakfast",
        image: "./Images/chicken-and-waffles.jpg",
        itemName: "Chicken & Waffles",
        price: "$20.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 15,
        category: "brunch",
        image: "./Images/beef-patties.jpg",
        itemName: "Beef Crispy Patties",
        price: "$14.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 16,
        category: "brunch",
        image: "./Images/chicken-nuggets.jpg",
        itemName: "Chicken Nuggets",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 17,
        category: "dinner",
        image: "./Images/shashlik-rice.jpg",
        itemName: "Chicken Shashlik Rice",
        price: "$20.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 18,
        category: "shakes",
        image: "./Images/mango-milkshake.jpg",
        itemName: "Mango Milkshake",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 19,
        category: "breakfast",
        image: "./Images/Buttermilk-Pancakes.jpg",
        itemName: "Buttermilk Pancakes",
        price: "$15.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
    {
        id: 20,
        category: "dinner",
        image: "./Images/mutton-biryani.jpg",
        itemName: "Mutton Biryani",
        price: "$12.00",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ipsa deserunt atque in eos nostrum magni et harum expedita libero."
    },
]

function menuList() {
    const menuItemCards = [];

    menuItems.forEach((item) => {
        let htmlMenuCard = `<div class="menuItem col-12 col-lg-6">
                                <div class="itemImage">
                                    <img src="${item.image}" alt="">
                                </div>
                                <div class="itemText">
                                    <div class="upperText">
                                        <h2 class="m-0">${item.itemName}</h2>
                                        <h3 class="m-0">${item.price}</h3>
                                    </div>
                                    <div class="lowerText">
                                        <p class="m-0">${item.description}</p>
                                    </div>
                                </div>
                            </div>`

        menuItemCards.push(htmlMenuCard);
    })

    return menuItemsArea.innerHTML = menuItemCards.join('');
}
menuList();


// For Buttons Event Function
const allBtn = document.querySelector('.All');
const breakfastBtn = document.querySelector('.Breakfast');
const lunchBtn = document.querySelector('.Lunch');
const shakesBtn = document.querySelector('.Shakes');
const brunchBtn = document.querySelector('.Brunch');
const dinnerBtn = document.querySelector('.Dinner');

// For All Button Function
allBtn.addEventListener('click', () => {
    menuList()
})

// For Breakfast Button Function
breakfastBtn.addEventListener('click', () => {
    const breakfastItemCards = [];

    menuItems.forEach((item) => {
        if(item.category == "breakfast"){
            let htmlMenuCard = `<div class="menuItem col-12 col-lg-6">
                                    <div class="itemImage">
                                        <img src="${item.image}" alt="">
                                    </div>
                                    <div class="itemText">
                                        <div class="upperText">
                                            <h2 class="m-0">${item.itemName}</h2>
                                            <h3 class="m-0">${item.price}</h3>
                                        </div>
                                        <div class="lowerText">
                                            <p class="m-0">${item.description}</p>
                                        </div>
                                    </div>
                                </div>`

            breakfastItemCards.push(htmlMenuCard);
        }
                            
    })
    menuItemsArea.innerHTML = breakfastItemCards.join('');
})

// For Lunch Button Function
lunchBtn.addEventListener('click', () => {
    const lunchItemCards = [];

    menuItems.forEach((item) => {
        if(item.category == "lunch"){
            let htmlMenuCard = `<div class="menuItem col-12 col-lg-6">
                                    <div class="itemImage">
                                        <img src="${item.image}" alt="">
                                    </div>
                                    <div class="itemText">
                                        <div class="upperText">
                                            <h2 class="m-0">${item.itemName}</h2>
                                            <h3 class="m-0">${item.price}</h3>
                                        </div>
                                        <div class="lowerText">
                                            <p class="m-0">${item.description}</p>
                                        </div>
                                    </div>
                                </div>`

            lunchItemCards.push(htmlMenuCard);
        }
                            
    })
    menuItemsArea.innerHTML = lunchItemCards.join('');
})

// For Shakes Button Function
shakesBtn.addEventListener('click', () => {
    const shakesItemCards = [];

    menuItems.forEach((item) => {
        if(item.category == "shakes"){
            let htmlMenuCard = `<div class="menuItem col-12 col-lg-6">
                                    <div class="itemImage">
                                        <img src="${item.image}" alt="">
                                    </div>
                                    <div class="itemText">
                                        <div class="upperText">
                                            <h2 class="m-0">${item.itemName}</h2>
                                            <h3 class="m-0">${item.price}</h3>
                                        </div>
                                        <div class="lowerText">
                                            <p class="m-0">${item.description}</p>
                                        </div>
                                    </div>
                                </div>`

            shakesItemCards.push(htmlMenuCard);
        }
                            
    })
    menuItemsArea.innerHTML = shakesItemCards.join('');
})

// For Brunch Button Function
brunchBtn.addEventListener('click', () => {
    const brunchItemCards = [];

    menuItems.forEach((item) => {
        if(item.category == "brunch"){
            let htmlMenuCard = `<div class="menuItem col-12 col-lg-6">
                                    <div class="itemImage">
                                        <img src="${item.image}" alt="">
                                    </div>
                                    <div class="itemText">
                                        <div class="upperText">
                                            <h2 class="m-0">${item.itemName}</h2>
                                            <h3 class="m-0">${item.price}</h3>
                                        </div>
                                        <div class="lowerText">
                                            <p class="m-0">${item.description}</p>
                                        </div>
                                    </div>
                                </div>`

            brunchItemCards.push(htmlMenuCard);
        }
                            
    })
    menuItemsArea.innerHTML = brunchItemCards.join('');
})

// For Dinner Button Function
dinnerBtn.addEventListener('click', () => {
    const dinnerItemCards = [];

    menuItems.forEach((item) => {
        if(item.category == "dinner"){
            let htmlMenuCard = `<div class="menuItem col-12 col-lg-6">
                                    <div class="itemImage">
                                        <img src="${item.image}" alt="">
                                    </div>
                                    <div class="itemText">
                                        <div class="upperText">
                                            <h2 class="m-0">${item.itemName}</h2>
                                            <h3 class="m-0">${item.price}</h3>
                                        </div>
                                        <div class="lowerText">
                                            <p class="m-0">${item.description}</p>
                                        </div>
                                    </div>
                                </div>`

            dinnerItemCards.push(htmlMenuCard);
        }
                            
    })
    menuItemsArea.innerHTML = dinnerItemCards.join('');
})