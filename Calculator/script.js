// --- Item Data (Prices in Naira with Categories - VASTLY EXPANDED for more realism and diversity) ---
// Prices are estimates for Lagos, July 2025 and are subject to real-world fluctuations.
const items = [
    // Food & Drink (More granular and realistic options)
    { name: "Pure Water Sachet 💧", price: 50, category: "Food & Drink" },
    { name: "Bottle of Bottled Water (50cl) 💧", price: 200, category: "Food & Drink" },
    { name: "Egg (single) 🥚", price: 150, category: "Food & Drink" },
    { name: "Small Bread Loaf 🍞", price: 500, category: "Food & Drink" },
    { name: "Indomie (Small pack) 🍜", price: 200, category: "Food & Drink" },
    { name: "Bottle of Coke/Fanta (small) 🥤", price: 300, category: "Food & Drink" },
    { name: "Sachet Milk (small) 🥛", price: 150, category: "Food & Drink" },
    { name: "Gala Sausage Roll 🥖", price: 200, category: "Food & Drink" },
    { name: "Akara (3 pieces) 🍘", price: 200, category: "Food & Drink" },
    { name: "Suya (1 stick) 🍢", price: 400, category: "Food & Drink" },
    { name: "Plantain (1 piece) 🍌", price: 150, category: "Food & Drink" },
    { name: "Puff Puff (3 pieces) 🍩", price: 150, category: "Food & Drink" },
    { name: "Zobo Drink (small) 🥤", price: 150, category: "Food & Drink" },
    { name: "Groundnut (small sachet) 🥜", price: 100, category: "Food & Drink" },
    { name: "Chin Chin (small sachet) 🥨", price: 150, category: "Food & Drink" },
    { name: "Chewing Gum (pack) 🍬", price: 100, category: "Food & Drink" },
    { name: "Sachet Tomato Paste 🥫", price: 350, category: "Food & Drink" },
    { name: "Small Bag of Popcorn 🍿", price: 200, category: "Food & Drink" },
    { name: "Orange (2 pieces) 🍊", price: 150, category: "Food & Drink" },
    { name: "Tea bag (1) ☕", price: 70, category: "Food & Drink" },
    { name: "Sachet Milo/Bournvita ☕", price: 150, category: "Food & Drink" },
    { name: "Small Pack of Biscuit 🍪", price: 120, category: "Food & Drink" },
    { name: "Small Watermelon Slice 🍉", price: 300, category: "Food & Drink" },
    { name: "Bole (Roasted Plantain, 1pc) 🍢", price: 250, category: "Food & Drink" },
    { name: "Roasted Corn (1 cob) 🌽", price: 200, category: "Food & Drink" },
    { name: "Shawarma (mini) 🌯", price: 1000, category: "Food & Drink" },
    { name: "Coconut Water (small) 🥥", price: 200, category: "Food & Drink" },
    { name: "Local Kunu Drink 🥛", price: 150, category: "Food & Drink" },
    { name: "Sachet Mayonnaise 🥚", price: 250, category: "Food & Drink" },
    { name: "Small Pack Sweet Pop (candy) 🍬", price: 80, category: "Food & Drink" },
    
    // Specific Meal Recommendations
    { name: "Plate of Rice & Stew (local buka) 🍚", price: 1500, category: "Food & Drink", tags: ["meal", "rice"] },
    { name: "Plate of Jollof Rice (local buka) 🍚", price: 1800, category: "Food & Drink", tags: ["meal", "rice"] },
    { name: "Plate of Garri & Soup (local buka) 🥣", price: 1000, category: "Food & Drink", tags: ["meal", "swallow"] },
    { name: "Plate of Beans Porridge (local buka) 🥣", price: 1200, category: "Food & Drink", tags: ["meal", "beans"] },
    { name: "Bread & Akara (street food combo) 🍞", price: 400, category: "Food & Drink", tags: ["meal", "snack"] },
    { name: "Mama Put Rice & Beans Plate 🍚", price: 1000, category: "Food & Drink", tags: ["meal", "rice", "beans"] },
    { name: "Amala & Ewedu Soup (local buka) 🥣", price: 1300, category: "Food & Drink", tags: ["meal", "swallow"] },
    { name: "Pounded Yam & Egusi Soup (local buka) 🥣", price: 2000, category: "Food & Drink", tags: ["meal", "swallow"] },

    // Transport
    { name: "Okada ride (short) 🏍️", price: 600, category: "Transport" },
    { name: "Keke Napep drop 🛺", price: 400, category: "Transport" },
    { name: "Danfo Bus Fare (short) 🚌", price: 300, category: "Transport" },
    { name: "BRT Bus Fare (short) 🚍", price: 250, category: "Transport" },
    { name: "Toll Gate Fee (1-way) 🛣️", price: 400, category: "Transport" },
    { name: "Fuel (1 liter) ⛽", price: 800, category: "Transport" }, // Highly variable!
    { name: "Car Wash (basic) 🚿", price: 1000, category: "Transport" },
    { name: "Minibus (longer distance) 🚐", price: 500, category: "Transport" },
    { name: "Uber/Bolt (minimum fare) 🚗", price: 1500, category: "Transport" },
    { name: "Ferry Ride (short) ⛴️", price: 500, category: "Transport" },

    // Airtime & Data
    { name: "Airtime (₦100) 📶", price: 100, category: "Airtime & Data" },
    { name: "Airtime (₦200) 📶", price: 200, category: "Airtime & Data" },
    { name: "Airtime (₦500) 📶", price: 500, category: "Airtime & Data" },
    { name: "Airtime (₦1000) 📶", price: 1000, category: "Airtime & Data" },
    { name: "Data (100MB Daily) 🌐", price: 150, category: "Airtime & Data", tags: ["data-small"] },
    { name: "Data (200MB Daily) 🌐", price: 250, category: "Airtime & Data", tags: ["data-small"] },
    { name: "Data (500MB Daily) 🌐", price: 400, category: "Airtime & Data", tags: ["data-small"] },
    { name: "Data (1GB Weekly) 🌐", price: 1000, category: "Airtime & Data", tags: ["data-medium"] },
    { name: "Data (2GB Monthly) 🌐", price: 2000, category: "Airtime & Data", tags: ["data-large"] },

    // Household & Personal Items
    { name: "Bar of Toilet Soap 🧼", price: 300, category: "Household & Personal" },
    { name: "Sachet Laundry Detergent 🧴", price: 200, category: "Household & Personal" },
    { name: "Small Candle 🕯️", price: 150, category: "Household & Personal" },
    { name: "Matchbox 🔥", price: 70, category: "Household & Personal" },
    { name: "Toilet Roll (1 roll) 🧻", price: 250, category: "Household & Personal" },
    { name: "Small Disinfectant (sachet) 🧴", price: 400, category: "Household & Personal" },
    { name: "Nail Cutter 💅", price: 200, category: "Household & Personal" },
    { name: "Scouring Sponge 🧽", price: 120, category: "Household & Personal" },
    { name: "Small Packet of Safety Pins 📍", price: 80, category: "Household & Personal" },
    { name: "Small Batteries (AA/AAA) 🔋", price: 400, category: "Household & Personal" },
    { name: "Plastic Bucket (small) 🪣", price: 800, category: "Household & Personal" },
    { name: "Clothes Pegs (5 pieces) 🧷", price: 200, category: "Household & Personal" },
    { name: "Small Broom 🧹", price: 500, category: "Household & Personal" },
    { name: "Dishwashing Liquid (sachet) 💧", price: 150, category: "Household & Personal" },
    { name: "Insecticide (small can) 🦟", price: 700, category: "Household & Personal" },

    // Entertainment & Leisure
    { name: "Newspaper 📰", price: 200, category: "Entertainment & Leisure" },
    { name: "Pure Blended Juice (small) 🥤", price: 300, category: "Entertainment & Leisure" },
    { name: "Small Betting Stake 🎰", price: 100, category: "Entertainment & Leisure" },
    { name: "Local Ludo Game (small) 🎲", price: 400, category: "Entertainment & Leisure" },
    { name: "Sachet Milk Sweets 🍭", price: 70, category: "Entertainment & Leisure" },
    { name: "CD/DVD (pirated, lol) 💿", price: 500, category: "Entertainment & Leisure" }, // Playful addition
    { name: "Online Game Time (1 hour) 🎮", price: 300, category: "Entertainment & Leisure" },
    { name: "Sachet Ice Cream 🍦", price: 250, category: "Entertainment & Leisure" },
    { name: "Local Snacks (e.g., Kuli-Kuli) 🥜", price: 100, category: "Entertainment & Leisure" },
    { name: "Sachet Yoghurt 🥛", price: 400, category: "Entertainment & Leisure" },
    { name: "Cinema Ticket (local) 🎟️", price: 2500, category: "Entertainment & Leisure" },

    // Basic Services
    { name: "Shoe Shine (basic) 👞", price: 250, category: "Basic Services" },
    { name: "K-leg (small errand fee) 🏃‍♂️", price: 150, category: "Basic Services" },
    { name: "Barber (basic trim) ✂️", price: 700, category: "Basic Services" },
    { name: "Dry Cleaning (1 shirt) 👕", price: 500, category: "Basic Services" },
    { name: "Phone Charging (per hour) 🔌", price: 150, category: "Basic Services" },
    { name: "Typing Service (1 page) 📄", price: 250, category: "Basic Services" },
    { name: "Photocopy (1 page) 🖨️", price: 50, category: "Basic Services" },
    { name: "Passport Photo (1 copy) 📸", price: 300, category: "Basic Services" },
    { name: "Local Tailor (button fix) 🧵", price: 200, category: "Basic Services" },
    { name: "Basic Phone Repair (e.g., charging port) 📱", price: 1500, category: "Basic Services" },
    { name: "Small Stitching/Mending 🧵", price: 300, category: "Basic Services" },

    // Personal Care
    { name: "Toothpaste (small) 🦷", price: 400, category: "Personal Care" },
    { name: "Small Hair Cream Sachet 🧴", price: 300, category: "Personal Care" },
    { name: "Sachet Shampoo 🧴", price: 150, category: "Personal Care" },
    { name: "Razor (single) 🪒", price: 100, category: "Personal Care" }, // Clarified as single razor
    { name: "Small Vaseline/Petroleum Jelly 🧴", price: 250, category: "Personal Care" },
    { name: "Sachet Body Lotion 🧴", price: 200, category: "Personal Care" },
    { name: "Sachet Powder 🧴", price: 150, category: "Personal Care" },
    { name: "Earbuds (pair) 🎧", price: 300, category: "Personal Care" },
    { name: "Comb 💇‍♀️", price: 150, category: "Personal Care" },
    { name: "Small Deodorant 💨", price: 700, category: "Personal Care" },
    { name: "Small Hair Attachment (for braiding) 👱‍♀️", price: 800, category: "Personal Care" },

    // Education
    { name: "Biro Pen 🖊️", price: 100, category: "Education" },
    { name: "Exercise Book (small) 📖", price: 250, category: "Education" },
    { name: "Pencil ✏️", price: 70, category: "Education" },
    { name: "Eraser 🧼", price: 50, category: "Education" },
    { name: "Sharpener 🪓", price: 50, category: "Education" },
    { name: "Ruler (small) 📏", price: 150, category: "Education" },
    { name: "Crayon (single) 🖍️", price: 80, category: "Education" },
    { name: "Chalk (box) chalk", price: 300, category: "Education" },

    // Healthcare (small items)
    { name: "Paracetamol (2 tabs) 💊", price: 100, category: "Healthcare" },
    { name: "Pain Relief Balm (small) 🩹", price: 300, category: "Healthcare" },
    { name: "Plaster/Band-Aid (1 piece) 🩹", price: 50, category: "Healthcare" },
    { name: "Antiseptic Wipes (single) 🧴", price: 100, category: "Healthcare" },
    { name: "Mouthwash Sachet 💧", price: 150, category: "Healthcare" },
    { name: "Cotton Wool (small pack) 🩹", price: 200, category: "Healthcare" },
    { name: "Antimalaria (basic dose) 💊", price: 1000, category: "Healthcare" },
];

// --- DOM Elements ---
const amountInput = document.getElementById('amountInput');
const calculateBtn = document.getElementById('calculateBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const basketSection = document.getElementById('basketSection'); // Container for basket & header
const basketDisplay = document.getElementById('basketDisplay');
const basketCategoryHeader = document.getElementById('basketCategoryHeader'); // Header for categories
const remainingDisplay = document.getElementById('remainingDisplay');
const messageDisplay = document.getElementById('messageDisplay');
const currentYearSpan = document.getElementById('currentYear');
const categoryFiltersContainer = document.getElementById('categoryFilters');
const quickBudgetButtons = document.querySelectorAll('.quick-budget-btn');
const budgetProgressBarContainer = document.getElementById('budgetProgressBarContainer');
const budgetProgressBar = document.querySelector('.budget-progress-bar');
const budgetProgressText = document.querySelector('.budget-progress-text');
const priceDisclaimer = document.querySelector('.price-disclaimer');
const recommendationsSection = document.getElementById('recommendationsSection'); // New section for recommendations
const recommendationsDisplay = document.getElementById('recommendationsDisplay'); // New display for recommendations


// --- Global State ---
let selectedCategories = []; // Stores active categories. Empty array means "All Categories" are implicitly selected.
const allAvailableCategories = [...new Set(items.map(item => item.category))].sort();


// --- Utility: Format Naira Currency ---
const formatNaira = (amount) => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) return '₦0';
    return `₦${numericAmount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

// --- Display Message Function ---
const displayMessage = (message, type = 'info', autoHide = true) => {
    messageDisplay.textContent = message;
    messageDisplay.className = `message-display show ${type}`; // Reset classes and add new ones
    if (autoHide) {
        setTimeout(() => {
            messageDisplay.classList.remove('show');
        }, 5000);
    }
};

// --- Render Category Filters ---
const renderCategoryFilters = () => {
    categoryFiltersContainer.innerHTML = ''; // Clear previous filters

    // Add an "All Categories" button first
    const allBtn = document.createElement('button');
    allBtn.textContent = 'All Categories';
    allBtn.className = 'filter-button';
    allBtn.dataset.category = 'all';
    allBtn.addEventListener('click', () => toggleCategoryFilter('all'));
    categoryFiltersContainer.appendChild(allBtn);
    
    // Add individual category buttons
    allAvailableCategories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = 'filter-button';
        button.dataset.category = category;
        button.addEventListener('click', () => toggleCategoryFilter(category));
        categoryFiltersContainer.appendChild(button);
    });

    // Set initial active state for buttons
    updateFilterButtonStates();
};

// --- Update Filter Button Visual States ---
const updateFilterButtonStates = () => {
    const allFilterButtons = categoryFiltersContainer.querySelectorAll('.filter-button');
    allFilterButtons.forEach(button => {
        const category = button.dataset.category;
        
        if (category === 'all') {
            // "All Categories" is active if no specific categories are selected
            if (selectedCategories.length === 0) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        } else {
            // Individual category is active if it's in selectedCategories
            if (selectedCategories.includes(category)) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        }
    });
};

// --- Toggle Category Filter ---
const toggleCategoryFilter = (categoryToToggle) => {
    if (categoryToToggle === 'all') {
        selectedCategories = []; // Clear all specific selections
    } else {
        const index = selectedCategories.indexOf(categoryToToggle);
        if (index > -1) {
            selectedCategories.splice(index, 1); // Remove if already selected
        } else {
            selectedCategories.push(categoryToToggle); // Add if not selected
        }
    }
    
    updateFilterButtonStates(); // Update button visuals

    // Automatically re-calculate if an amount is already entered and valid
    if (amountInput.value && parseInt(amountInput.value) > 0) {
        calculate();
    } else {
        // Clear results if filters change but input is empty/invalid
        clearResultsDisplay();
    }
};

// --- Update Budget Progress Bar ---
const updateProgressBar = (budget, totalSpent) => {
    if (budget <= 0 || isNaN(budget)) {
        budgetProgressBarContainer.classList.remove('show');
        return;
    }

    const percentageSpent = (totalSpent / budget) * 100;
    
    // Cap width at 100% visually, but allow percentage to go higher for text
    budgetProgressBar.style.width = `${Math.min(percentageSpent, 100)}%`;

    // Update color based on spending
    budgetProgressBar.classList.remove('success', 'warning', 'error');
    if (percentageSpent <= 70) {
        budgetProgressBar.classList.add('success');
    } else if (percentageSpent <= 100) {
        budgetProgressBar.classList.add('warning');
    } else {
        budgetProgressBar.classList.add('error');
    }

    // Update text content
    let progressText = `${formatNaira(totalSpent)} spent / ${formatNaira(budget)} budget`;
    if (percentageSpent > 100) {
        progressText = `Over budget: ${formatNaira(totalSpent)} spent / ${formatNaira(budget)} budget`;
    }
    budgetProgressText.textContent = progressText;

    budgetProgressBarContainer.classList.add('show');
};


// --- Clear All Results and Messages ---
const clearResultsDisplay = () => {
    basketDisplay.innerHTML = '';
    basketCategoryHeader.textContent = ''; // Clear header
    basketSection.classList.remove('show'); // Hide basket section
    remainingDisplay.innerHTML = '';
    remainingDisplay.classList.remove('show', 'positive', 'negative');
    budgetProgressBarContainer.classList.remove('show');
    messageDisplay.classList.remove('show', 'error', 'info');
    priceDisclaimer.classList.remove('show'); // Hide disclaimer
    recommendationsDisplay.innerHTML = ''; // Clear recommendations
    recommendationsSection.classList.remove('show'); // Hide recommendations section
};


// --- Generate Smart Recommendations (New Function - Asterisks removed, <strong> tags used) ---
const generateRecommendations = (budget, currentRemainingBudget, selectedCategories) => {
    recommendationsDisplay.innerHTML = ''; // Clear previous recommendations
    const recommendations = [];

    // Scenario 1: Focus on Food & Drink if selected and budget allows
    if (selectedCategories.includes("Food & Drink") || selectedCategories.length === 0) {
        const foodItems = items.filter(item => item.category === "Food & Drink");

        const pureWaterPrice = items.find(item => item.name === "Pure Water Sachet 💧")?.price || 50;
        const ricePlatePrice = items.find(item => item.name === "Plate of Rice & Stew (local buka) 🍚")?.price || 1500;
        const garriBowlPrice = items.find(item => item.name === "Plate of Garri & Soup (local buka) 🥣")?.price || 1000;
        const beansPlatePrice = items.find(item => item.name === "Plate of Beans Porridge (local buka) 🥣")?.price || 1200;
        const indomiePrice = items.find(item => item.name === "Indomie (Small pack) 🍜")?.price || 200;
        const breadAkaraPrice = items.find(item => item.name === "Bread & Akara (street food combo) 🍞")?.price || 400;

        // Pure Water Recommendation
        if (pureWaterPrice > 0 && budget >= pureWaterPrice) {
            const maxPureWater = Math.floor(budget / pureWaterPrice);
            if (maxPureWater >= 10) { // Only recommend if a significant quantity can be bought
                recommendations.push(`<strong>Pure Water Focus:</strong> You could buy up to <strong>${maxPureWater} sachets of pure water</strong> for ${formatNaira(budget)}. Each sachet costs ${formatNaira(pureWaterPrice)}.`);
            }
        }

        // Meal Combinations
        if (budget >= 1000) { // Enough for at least one meal
            const possibleMeals = [];
            
            // Rice options
            if (ricePlatePrice > 0 && budget >= ricePlatePrice) {
                const maxRicePlates = Math.floor(budget / ricePlatePrice);
                if (maxRicePlates >= 1) {
                    possibleMeals.push(`<strong>Rice:</strong> ${maxRicePlates} ${maxRicePlates > 1 ? 'plates' : 'plate'} of Rice & Stew at ${formatNaira(ricePlatePrice)} each.`);
                }
            }
            // Garri options
            if (garriBowlPrice > 0 && budget >= garriBowlPrice) {
                const maxGarriBowls = Math.floor(budget / garriBowlPrice);
                if (maxGarriBowls >= 1) {
                    possibleMeals.push(`<strong>Garri:</strong> ${maxGarriBowls} ${maxGarriBowls > 1 ? 'bowls' : 'bowl'} of Garri & Soup at ${formatNaira(garriBowlPrice)} each.`);
                }
            }
            // Beans options
            if (beansPlatePrice > 0 && budget >= beansPlatePrice) {
                const maxBeansPlates = Math.floor(budget / beansPlatePrice);
                if (maxBeansPlates >= 1) {
                    possibleMeals.push(`<strong>Beans:</strong> ${maxBeansPlates} ${maxBeansPlates > 1 ? 'plates' : 'plate'} of Beans Porridge at ${formatNaira(beansPlatePrice)} each.`);
                }
            }
            // Other quick meals
            if (indomiePrice > 0 && budget >= indomiePrice * 2) { // At least 2 Indomie
                const maxIndomie = Math.floor(budget / indomiePrice);
                possibleMeals.push(`<strong>Indomie:</strong> Up to ${maxIndomie} small packs of Indomie for quick meals.`);
            }
            if (breadAkaraPrice > 0 && budget >= breadAkaraPrice) {
                const maxBreadAkara = Math.floor(budget / breadAkaraPrice);
                if (maxBreadAkara >= 1) {
                    possibleMeals.push(`<strong>Bread & Akara:</strong> ${maxBreadAkara} ${maxBreadAkara > 1 ? 'combos' : 'combo'} for a tasty snack/light meal.`);
                }
            }

            if (possibleMeals.length > 0) {
                recommendations.push(`<strong>Meal Options for ${formatNaira(budget)}:</strong>`);
                possibleMeals.forEach(meal => recommendations.push(`- ${meal}`));
            }
        }
    }

    // Scenario 2: Airtime & Data specific recommendations
    if (selectedCategories.includes("Airtime & Data") || selectedCategories.length === 0) {
        const airtime100 = items.find(item => item.name === "Airtime (₦100) 📶")?.price || 100;
        const airtime500 = items.find(item => item.name === "Airtime (₦500) 📶")?.price || 500;
        const data100MB = items.find(item => item.name === "Data (100MB Daily) 🌐")?.price || 150;
        const data1GBW = items.find(item => item.name === "Data (1GB Weekly) 🌐")?.price || 1000;

        if (airtime500 > 0 && budget >= airtime500) {
            recommendations.push(`<strong>Airtime/Data:</strong> You could get <strong>${Math.floor(budget / airtime500)} x ₦500 Airtime cards</strong>.`);
        }
        if (data100MB > 0 && budget >= data100MB * 5) { // At least 5 daily data packs
             const max100MB = Math.floor(budget / data100MB);
             recommendations.push(`<strong>Airtime/Data:</strong> Or, about <strong>${max100MB} x 100MB daily data bundles</strong>.`);
        }
        if (data1GBW > 0 && budget >= data1GBW) {
            const max1GBW = Math.floor(budget / data1GBW);
            recommendations.push(`<strong>Airtime/Data:</strong> For longer usage, <strong>${max1GBW} x 1GB weekly data plans</strong>.`);
        }
    }

    // Scenario 3: Mixed budget recommendations (e.g., a meal + transport)
    if (budget >= 2000 && (selectedCategories.length === 0 || (selectedCategories.includes("Food & Drink") && selectedCategories.includes("Transport")))) {
        const ricePlate = items.find(item => item.name === "Plate of Rice & Stew (local buka) 🍚")?.price || 1500;
        const kekeDrop = items.find(item => item.name === "Keke Napep drop 🛺")?.price || 400;

        if (ricePlate > 0 && kekeDrop > 0 && budget >= (ricePlate + kekeDrop)) {
            recommendations.push(`<strong>Mixed Budget:</strong> Enough for <strong>1 plate of Rice & Stew (${formatNaira(ricePlate)})</strong> and still have money for a <strong>Keke Napep drop (${formatNaira(kekeDrop)})</strong>.`);
        }
    }

    // Display the recommendations
    if (recommendations.length > 0) {
        const header = document.createElement('h3');
        header.textContent = 'Smart Recommendations for Your Budget:';
        recommendationsDisplay.appendChild(header);

        recommendations.forEach(rec => {
            const p = document.createElement('p');
            p.innerHTML = rec; // Use innerHTML for bold formatting
            recommendationsDisplay.appendChild(p);
        });
        recommendationsSection.classList.add('show');
    } else {
        recommendationsSection.classList.remove('show');
    }
};


// --- Main Calculation Logic ---
const calculate = () => {
    const budget = parseInt(amountInput.value);

    clearResultsDisplay(); // Clear previous results and messages

    if (isNaN(budget) || budget <= 0) {
        displayMessage("Please enter a valid amount greater than zero to calculate.", 'error');
        return;
    }

    // Determine which items to consider based on selected categories
    let itemsToConsider = [];
    if (selectedCategories.length === 0) {
        // No specific categories selected means "All Categories"
        itemsToConsider = [...items];
    } else {
        itemsToConsider = items.filter(item => selectedCategories.includes(item.category));
    }
    
    if (itemsToConsider.length === 0) {
        const categoryList = selectedCategories.length > 0 ? selectedCategories.join(', ') : "selected categories";
        displayMessage(`No items available for the ${categoryList} filter. Try adjusting your categories or amount!`, 'info');
        updateProgressBar(budget, 0); // Show progress bar with 0 spent against budget
        return;
    }

    let itemsInBasket = [];
    let currentRemainingBudget = budget;
    let totalSpent = 0;

    // --- Logic for Variety and Smart Selection ---
    
    // 1. Try to get at least one item from each selected category (if affordable)
    const uniqueSelectedCategories = selectedCategories.length > 0 ? selectedCategories : allAvailableCategories;
    const itemsAddedPerCategory = {}; 

    // Attempt to add one cheapest item from each selected category first, prioritizing meals if food is chosen
    for (const category of uniqueSelectedCategories) {
        let itemToAdd = null;

        if (category === "Food & Drink") {
            // Prioritize a diverse set of meals if available and affordable
            const mealItems = itemsToConsider
                .filter(item => item.category === category && item.tags && item.tags.includes("meal"))
                .sort((a, b) => a.price - b.price);
            
            // Try to get one of each meal type (rice, garri, beans) if possible
            if (budget >= 1500) { // enough for a rice plate
                const ricePlate = mealItems.find(item => item.tags.includes("rice"));
                if (ricePlate && currentRemainingBudget >= ricePlate.price) {
                    itemsInBasket.push({ ...ricePlate, qty: 1 });
                    currentRemainingBudget -= ricePlate.price;
                    totalSpent += ricePlate.price;
                    itemsAddedPerCategory[category] = (itemsAddedPerCategory[category] || 0) + 1;
                }
            }
            if (budget >= 1000) { // enough for a garri bowl
                const garriBowl = mealItems.find(item => item.tags.includes("swallow") && item.name.includes("Garri"));
                if (garriBowl && currentRemainingBudget >= garriBowl.price) {
                    itemsInBasket.push({ ...garriBowl, qty: 1 });
                    currentRemainingBudget -= garriBowl.price;
                    totalSpent += garriBowl.price;
                    itemsAddedPerCategory[category] = (itemsAddedPerCategory[category] || 0) + 1;
                }
            }
             if (budget >= 1200) { // enough for a beans plate
                const beansPlate = mealItems.find(item => item.tags.includes("beans"));
                if (beansPlate && currentRemainingBudget >= beansPlate.price) {
                    itemsInBasket.push({ ...beansPlate, qty: 1 });
                    currentRemainingBudget -= beansPlate.price;
                    totalSpent += beansPlate.price;
                    itemsAddedPerCategory[category] = (itemsAddedPerCategory[category] || 0) + 1;
                }
            }

            // If no specific meal added, try the cheapest general food item
            if ((itemsAddedPerCategory[category] || 0) === 0) {
                itemToAdd = itemsToConsider
                    .filter(item => item.category === category)
                    .sort((a, b) => a.price - b.price)[0];
            }

        } else {
            // For other categories, just get the cheapest item
            itemToAdd = itemsToConsider
                .filter(item => item.category === category)
                .sort((a, b) => a.price - b.price)[0];
        }

        // Add the determined item if not already added by meal logic and affordable
        if (itemToAdd && currentRemainingBudget >= itemToAdd.price && !itemsInBasket.some(bItem => bItem.name === itemToAdd.name)) {
            itemsInBasket.push({ ...itemToAdd, qty: 1 });
            currentRemainingBudget -= itemToAdd.price;
            totalSpent += itemToAdd.price;
            itemsAddedPerCategory[category] = (itemsAddedPerCategory[category] || 0) + 1;
        }
    }

    // 2. Then, fill the rest of the budget, prioritizing diversity over single item stacking
    // Sort all relevant items by price
    let remainingItemsPool = [...itemsToConsider].sort((a, b) => a.price - b.price); 

    // Max quantity caps for certain items to encourage diversity (e.g., "tire of pure water")
    const maxPureWaterSachets = 30; // Don't recommend more than 30 sachets initially
    const maxIndomiePacks = 10; // Don't recommend more than 10 Indomie packs

    while (currentRemainingBudget > 0 && remainingItemsPool.length > 0) {
        let itemAddedInRound = false;
        
        // Iterate through the sorted pool to add more items
        for (let i = 0; i < remainingItemsPool.length; i++) {
            const item = remainingItemsPool[i];

            if (currentRemainingBudget >= item.price) {
                const existingItemIndex = itemsInBasket.findIndex(bItem => bItem.name === item.name);
                
                let canAddItem = true;
                if (item.name === "Pure Water Sachet 💧") {
                    const currentQty = existingItemIndex !== -1 ? itemsInBasket[existingItemIndex].qty : 0;
                    if (currentQty >= maxPureWaterSachets) {
                        canAddItem = false; // Cap pure water sachets
                    }
                } else if (item.name === "Indomie (Small pack) 🍜") {
                    const currentQty = existingItemIndex !== -1 ? itemsInBasket[existingItemIndex].qty : 0;
                    if (currentQty >= maxIndomiePacks) {
                        canAddItem = false; // Cap Indomie packs
                    }
                }

                if (canAddItem) {
                    if (existingItemIndex !== -1) {
                        itemsInBasket[existingItemIndex].qty += 1;
                    } else {
                        itemsInBasket.push({ ...item, qty: 1 });
                    }
                    currentRemainingBudget -= item.price;
                    totalSpent += item.price;
                    itemAddedInRound = true;
                    // For variety, don't just pick the same item again immediately.
                    // Instead of breaking, we can remove this item from the pool to force other choices
                    // or re-sort the pool to prioritize other items. For now, simple break to re-evaluate.
                    break; 
                }
            }
        }
        if (!itemAddedInRound) {
            // If no item could be added in this round, break the loop
            break;
        }
    }

    // --- Render Results ---
    if (itemsInBasket.length === 0) {
        const budgetTooLowMessage = `With ${formatNaira(budget)}, you can't buy anything from the selected categories. Try a higher amount or different filters! 😢`;
        displayMessage(budgetTooLowMessage, 'info');
        updateProgressBar(budget, totalSpent);
    } else {
        // Display selected categories above the basket
        const categoriesHeader = selectedCategories.length === 0 
            ? "Showing items from: All Categories"
            : `Showing items from: ${selectedCategories.join(', ')}`;
        
        basketCategoryHeader.textContent = categoriesHeader;
        
        // Sort items in basket for consistent display (e.g., by name or category)
        itemsInBasket.sort((a, b) => a.name.localeCompare(b.name));

        itemsInBasket.forEach((item, index) => {
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';
            itemCard.style.animationDelay = `${index * 0.05}s`; // Staggered animation
            itemCard.innerHTML = `
                <span class="item-name">${item.name}</span>
                <p class="item-details">
                    ${formatNaira(item.price)} x <strong>${item.qty}</strong>
                </p>
            `;
            basketDisplay.appendChild(itemCard);
        });

        // Display remaining balance or debt
        const remainingClass = currentRemainingBudget >= 0 ? 'positive' : 'negative';
        const remainingText = currentRemainingBudget >= 0 
            ? `💰 Change: ${formatNaira(currentRemainingBudget)}`
            : `💸 Overspent: ${formatNaira(Math.abs(currentRemainingBudget))}`;
            
        remainingDisplay.textContent = remainingText;
        remainingDisplay.className = `remaining-display show ${remainingClass}`;

        updateProgressBar(budget, totalSpent);
        basketSection.classList.add('show'); // Show the basket section
        priceDisclaimer.classList.add('show'); // Show disclaimer

        // Generate and display smart recommendations
        generateRecommendations(budget, currentRemainingBudget, selectedCategories);
    }
};

// --- Reset Function ---
const resetAll = () => {
    amountInput.value = '';
    selectedCategories = []; // Reset selected categories to empty (which implies 'All')
    updateFilterButtonStates(); // Update filter button visuals
    clearResultsDisplay();
    displayMessage(`Welcome! Enter an amount and select categories, or try a Quick Check below!`, 'info');
    amountInput.focus();
};

// --- Event Listeners ---
calculateBtn.addEventListener('click', calculate);
clearAllBtn.addEventListener('click', resetAll);

// Event listener for Quick Budget buttons
quickBudgetButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const amount = parseInt(event.target.dataset.amount);
        amountInput.value = amount;
        calculate(); // Instantly calculate with the quick budget
    });
});

// Input event listener for amount input (re-calculates on type)
amountInput.addEventListener('input', () => {
    const budget = parseInt(amountInput.value);
    if (budget > 0) {
        calculate(); // Re-calculate if amount is valid and positive
    } else {
        clearResultsDisplay(); // Clear results if input becomes invalid
        displayMessage(`Enter an amount and select categories, or try a Quick Check below!`, 'info', false); // Keep initial message, don't auto-hide
    }
});

// Allow 'Enter' key to trigger calculation
amountInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        calculateBtn.click(); // Simulate a click on the button
    }
});


// --- Initial Setup on Load ---
document.addEventListener('DOMContentLoaded', () => {
    currentYearSpan.textContent = new Date().getFullYear();
    renderCategoryFilters(); // Dynamically create category buttons
    resetAll(); // Set initial state and display welcome message
});