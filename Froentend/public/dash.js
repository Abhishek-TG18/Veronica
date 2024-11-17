// const contentDiv = document.getElementById("content");
const contentDiv = document.querySelector('#content');  // Assuming the element has id="content"

// Typing effect for the welcome message
const welcomeMessage = "Welcome to Your Dashboard";
let index = 0;

// Function to type the welcome message
const typeMessage = () => {
    if (index < welcomeMessage.length) {
        contentDiv.innerHTML = `<h1 class="text-3xl font-bold">${welcomeMessage.substring(0, index + 1)}</h1>`;
        index++;
        setTimeout(typeMessage, 100); // Adjust typing speed here
    }
};

// Function to load content dynamically
function loadContent(content) {
    contentDiv.innerHTML = content;
    index = welcomeMessage.length; // Stop typing effect
}

// Function to handle editing sections
function enableEdit(section) {
    const sectionDiv = document.getElementById(section);
    const content = sectionDiv.innerHTML;

    sectionDiv.innerHTML = `
        <form class="space-y-4">
            ${section === "personal-info" ? `
                <label class="block">
                    <span class="text-gray-700">Name:</span>
                    <input type="text" class="mt-1 block w-full border-gray-300 rounded" value="John Doe">
                </label>
                <label class="block">
                    <span class="text-gray-700">Email:</span>
                    <input type="email" class="mt-1 block w-full border-gray-300 rounded" value="johndoe@example.com">
                </label>
                <label class="block">
                    <span class="text-gray-700">Phone:</span>
                    <input type="tel" class="mt-1 block w-full border-gray-300 rounded" value="+123456789">
                </label>
            ` : ""}
            ${section === "travel-preferences" ? `
                <label class="block">
                    <span class="text-gray-700">Preferred Language:</span>
                    <input type="text" class="mt-1 block w-full border-gray-300 rounded" value="English">
                </label>
                <label class="block">
                    <span class="text-gray-700">Preferred Currency:</span>
                    <input type="text" class="mt-1 block w-full border-gray-300 rounded" value="USD">
                </label>
                <label class="block">
                    <span class="text-gray-700">Frequent Destinations:</span>
                    <input type="text" class="mt-1 block w-full border-gray-300 rounded" value="Paris, Tokyo, Sydney">
                </label>
            ` : ""}
            ${section === "additional-info" ? `
                <label class="block">
                    <span class="text-gray-700">Emergency Contact:</span>
                    <input type="text" class="mt-1 block w-full border-gray-300 rounded" value="Jane Doe - +987654321">
                </label>
                <label class="block">
                    <span class="text-gray-700">Frequent Flyer Details:</span>
                    <input type="text" class="mt-1 block w-full border-gray-300 rounded" value="XYZ Airline - Platinum">
                </label>
            ` : ""}
            <div class="mt-4 space-x-2">
                <button type="button" class="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600" onclick="saveChanges('${section}')">Save</button>
                <button type="button" class="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600" onclick="cancelEdit('${section}', \`${content}\`)">Cancel</button>
            </div>
        </form>
    `;
}

// Function to save changes
function saveChanges(section) {
    const sectionDiv = document.getElementById(section);
    sectionDiv.innerHTML = `<p class="text-green-700">Changes saved successfully!</p>`;
    setTimeout(() => {
        loadContent(manageAccountHTML);
    }, 2000); // Reload the Manage Account section after 2 seconds
}

// Function to cancel editing and revert to original content
function cancelEdit(section, originalContent) {
    document.getElementById(section).innerHTML = originalContent;
}

// Define the Manage Account section
const manageAccountHTML = `
    <div class="bg-gray-50 shadow-lg rounded-lg p-8 max-w-4xl mx-auto space-y-8">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Manage Your Account</h2>
    <p class="text-gray-600">Update your account details and ensure your profile stays up-to-date.</p>

    <!-- Personal Information Card -->
    <div id="personal-info" class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-3 text-gray-700">Personal Information</h3>
        <p class="text-gray-800">Name: <strong>John Doe</strong></p>
        <p class="text-gray-800">Email: <strong>johndoe@example.com</strong></p>
        <p class="text-gray-800">Phone: <strong>+123456789</strong></p>
        <button class="bg-gray-700 text-white px-5 py-2 mt-6 rounded-md shadow-sm hover:bg-gray-800 transition" 
                onclick="enableEdit('personal-info')">
            Edit Personal Info
        </button>
    </div>

    <!-- Travel Preferences Card -->
    <div id="travel-preferences" class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-3 text-gray-700">Travel Preferences</h3>
        <p class="text-gray-800">Preferred Language: <strong>English</strong></p>
        <p class="text-gray-800">Preferred Currency: <strong>USD</strong></p>
        <p class="text-gray-800">Frequent Destinations: <strong>Paris, Tokyo, Sydney</strong></p>
        <button class="bg-gray-700 text-white px-5 py-2 mt-6 rounded-md shadow-sm hover:bg-gray-800 transition" 
                onclick="enableEdit('travel-preferences')">
            Edit Preferences
        </button>
    </div>

    <!-- Additional Information Card -->
    <div id="additional-info" class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-3 text-gray-700">Additional Information</h3>
        <p class="text-gray-800">Emergency Contact: <strong>Jane Doe - +987654321</strong></p>
        <p class="text-gray-800">Frequent Flyer Details: <strong>XYZ Airline - Platinum</strong></p>
        <button class="bg-gray-700 text-white px-5 py-2 mt-6 rounded-md shadow-sm hover:bg-gray-800 transition" 
                onclick="enableEdit('additional-info')">
            Add or Edit Info
        </button>
    </div>
</div>

`;

// Define the Expense Tracker section
const expenseTrackerHTML = `
    <div class="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto space-y-6">
        <h2 class="text-2xl font-bold mb-4">Expense Tracker</h2>
        <p class="text-gray-600">Track your travel expenses and manage your budget effectively.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Sample Expense Card -->
            <div class="bg-gray-50 p-4 rounded-lg shadow">
                <h3 class="text-lg font-semibold text-blue-700">Hotel Stay</h3>
                <p class="text-gray-700">Location: <strong>Paris</strong></p>
                <p class="text-gray-700">Cost: <strong>$300</strong></p>
                <p class="text-gray-700">Date: <strong>2024-11-10</strong></p>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg shadow">
                <h3 class="text-lg font-semibold text-green-700">Flight</h3>
                <p class="text-gray-700">Destination: <strong>Tokyo</strong></p>
                <p class="text-gray-700">Cost: <strong>$800</strong></p>
                <p class="text-gray-700">Date: <strong>2024-11-12</strong></p>
            </div>
            
             <div class="bg-blue-50 p-4 rounded-lg shadow hover:scale-105 transition-transform">
                <h3 class="text-lg font-semibold text-blue-700">Hotel Stay</h3>
                <p class="text-gray-700">Location: <strong>Paris</strong></p>
                <p class="text-gray-700">Cost: <strong>$300</strong></p>
                <p class="text-gray-700">Date: <strong>2024-11-10</strong></p>
            </div>

            <div class="bg-yellow-50 p-4 rounded-lg shadow hover:scale-105 transition-transform">
                <h3 class="text-lg font-semibold text-yellow-700">Meals</h3>
                <p class="text-gray-700">Location: <strong>Restaurant XYZ</strong></p>
                <p class="text-gray-700">Cost: <strong>$50</strong></p>
                <p class="text-gray-700">Date: <strong>2024-11-10</strong></p>
            </div>

            <div class="bg-green-50 p-4 rounded-lg shadow hover:scale-105 transition-transform">
                <h3 class="text-lg font-semibold text-green-700">Transportation</h3>
                <p class="text-gray-700">Mode: <strong>Taxi</strong></p>
                <p class="text-gray-700">Cost: <strong>$30</strong></p>
                <p class="text-gray-700">Date: <strong>2024-11-11</strong></p>
            </div>

        </div>
    </div>
`;


const digitalPassportHTML = `
<div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <!-- Passport Header -->
        <div class="bg-black p-6 text-white">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl font-bold">DIGITAL PASSPORT</h1>
                    <p class="text-gray-500">Travel History & Expense Logs</p>
                </div>
                <i class="fas fa-passport text-4xl"></i>
            </div>
        </div>

        <!-- Personal Information -->
        <div class="p-6 border-b">
            <div class="flex items-start gap-6">
                <div class="w-32 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                    <i class="fas fa-user text-4xl text-gray-400"></i>
                </div>
                <div class="flex-1">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <p class="text-sm text-gray-500">Full Name</p>
                            <p class="font-semibold">John Doe</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Passport Number</p>
                            <p class="font-semibold">X123456789</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Nationality</p>
                            <p class="font-semibold">United States</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Date of Birth</p>
                            <p class="font-semibold">15 Jan 1990</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Travel History -->
        <div class="p-6">
            <h2 class="text-xl font-semibold mb-4">Travel Logs</h2>
            <div class="space-y-6">
                <!-- Trip Entry 1 -->
                <div class="border rounded-lg overflow-hidden">
                    <div class="bg-blue-50 p-4 border-b">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <i class="fas fa-plane text-blue-600"></i>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold">Dubai, UAE</h3>
                                    <p class="text-sm text-gray-600">Business & Leisure</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="font-medium">20 Mar 2024 - 27 Mar 2024</p>
                                <p class="text-sm text-gray-500">7 days</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="bg-green-50 p-3 rounded-lg">
                                <p class="text-sm text-gray-600">Total Expenses</p>
                                <p class="text-lg font-semibold text-green-700">$4,850</p>
                                <div class="text-sm text-gray-500 mt-2">
                                    <p>• Hotel: $2,100</p>
                                    <p>• Activities: $1,250</p>
                                    <p>• Transportation: $800</p>
                                    <p>• Dining: $700</p>
                                </div>
                            </div>
                            <div class="bg-blue-50 p-3 rounded-lg">
                                <p class="text-sm text-gray-600">Activities & Events</p>
                                <div class="text-sm text-gray-500 mt-2">
                                    <p>• Dubai Tech Summit 2024</p>
                                    <p>• Desert Safari Experience</p>
                                    <p>• Burj Khalifa Tour</p>
                                    <p>• Dubai Mall Shopping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Trip Entry 2 -->
                <div class="border rounded-lg overflow-hidden">
                    <div class="bg-blue-50 p-4 border-b">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <i class="fas fa-plane text-blue-600"></i>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold">Bali, Indonesia</h3>
                                    <p class="text-sm text-gray-600">Vacation</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="font-medium">5 Mar 2024 - 15 Mar 2024</p>
                                <p class="text-sm text-gray-500">10 days</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="bg-green-50 p-3 rounded-lg">
                                <p class="text-sm text-gray-600">Total Expenses</p>
                                <p class="text-lg font-semibold text-green-700">$3,200</p>
                                <div class="text-sm text-gray-500 mt-2">
                                    <p>• Villa: $1,500</p>
                                    <p>• Activities: $800</p>
                                    <p>• Transportation: $400</p>
                                    <p>• Dining: $500</p>
                                </div>
                            </div>
                            <div class="bg-blue-50 p-3 rounded-lg">
                                <p class="text-sm text-gray-600">Activities & Events</p>
                                <div class="text-sm text-gray-500 mt-2">
                                    <p>• Mount Batur Sunrise Trek</p>
                                    <p>• Ubud Art Workshops</p>
                                    <p>• Nusa Penida Island Tour</p>
                                    <p>• Traditional Cooking Class</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Trip Entry 3 -->
                <div class="border rounded-lg overflow-hidden">
                    <div class="bg-blue-50 p-4 border-b">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <i class="fas fa-plane text-blue-600"></i>
                                </div>
                                <div>
                                    <h3 class="text-lg font-semibold">Barcelona, Spain</h3>
                                    <p class="text-sm text-gray-600">Cultural Tour</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="font-medium">1 Feb 2024 - 8 Feb 2024</p>
                                <p class="text-sm text-gray-500">8 days</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="bg-green-50 p-3 rounded-lg">
                                <p class="text-sm text-gray-600">Total Expenses</p>
                                <p class="text-lg font-semibold text-green-700">$2,800</p>
                                <div class="text-sm text-gray-500 mt-2">
                                    <p>• Hotel: $1,200</p>
                                    <p>• Activities: $600</p>
                                    <p>• Transportation: $400</p>
                                    <p>• Dining: $600</p>
                                </div>
                            </div>
                            <div class="bg-blue-50 p-3 rounded-lg">
                                <p class="text-sm text-gray-600">Activities & Events</p>
                                <div class="text-sm text-gray-500 mt-2">
                                    <p>• Sagrada Familia Tour</p>
                                    <p>• Spanish Cooking Workshop</p>
                                    <p>• Park Güell Visit</p>
                                    <p>• Flamenco Show</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Summary Stats -->
        <div class="bg-gray-50 p-6 border-t">
            <div class="grid grid-cols-3 gap-4">
                <div class="text-center">
                    <p class="text-gray-500 text-sm">Total Trips</p>
                    <p class="text-2xl font-bold text-blue-900">3</p>
                </div>
                <div class="text-center">
                    <p class="text-gray-500 text-sm">Total Days Traveled</p>
                    <p class="text-2xl font-bold text-blue-900">25</p>
                </div>
                <div class="text-center">
                    <p class="text-gray-500 text-sm">Total Spent</p>
                    <p class="text-2xl font-bold text-blue-900">$10,850</p>
                </div>
            </div>
        </div>

        <!-- Passport Footer -->
        <div class="bg-gray-50 p-4 text-center text-sm text-gray-500 border-t">
            <p>This is a digital representation of travel history. Not a legal document.</p>
        </div>
    </div>
`;




// Define the Premium Membership section
const premiumMembershipHTML = `
    <div class="max-w-6xl mx-auto space-y-12 relative bg-white p-4 shadow-md rounded-lg">
        <!-- Decorative Elements -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full -z-10 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full -z-10 blur-3xl"></div>

        <!-- Header Section -->
        <div class="text-center space-y-6 relative">
            <span class="px-4 py-1 bg-black text-white text-sm rounded-full inline-block mb-4">PREMIUM EXPERIENCE</span>
            <h2 class="text-5xl font-bold text-black tracking-tight">Elevate Your Journey</h2>
            <div class="w-24 h-1 bg-black mx-auto"></div>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Join an exclusive community of distinguished travelers who demand excellence in every aspect of their journey.
            </p>
            
            <!-- Stats Bar -->
            <div class="flex justify-center gap-12 mt-12 flex-wrap">
                <div class="text-center">
                    <p class="text-3xl font-bold text-black">50K+</p>
                    <p class="text-gray-600">Elite Members</p>
                </div>
                <div class="text-center">
                    <p class="text-3xl font-bold text-black">120+</p>
                    <p class="text-gray-600">Countries</p>
                </div>
                <div class="text-center">
                    <p class="text-3xl font-bold text-black">95%</p>
                    <p class="text-gray-600">Satisfaction Rate</p>
                </div>
            </div>
        </div>

        <!-- Premium Features -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div class="group hover:bg-black transition-all duration-300 p-8 rounded-2xl">
                <div class="space-y-4">
                    <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white">
                        <i class="fas fa-crown text-2xl group-hover:text-black"></i>
                    </div>
                    <h3 class="text-xl font-semibold group-hover:text-white">Elite Access</h3>
                    <p class="text-gray-600 group-hover:text-gray-300">Skip the lines with priority access to premium lounges and exclusive venues worldwide.</p>
                </div>
            </div>

            <div class="group hover:bg-black transition-all duration-300 p-8 rounded-2xl">
                <div class="space-y-4">
                    <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white">
                        <i class="fas fa-gem text-2xl group-hover:text-black"></i>
                    </div>
                    <h3 class="text-xl font-semibold group-hover:text-white">Luxury Upgrades</h3>
                    <p class="text-gray-600 group-hover:text-gray-300">Complimentary upgrades on flights, hotels, and exclusive experiences.</p>
                </div>
            </div>

            <div class="group hover:bg-black transition-all duration-300 p-8 rounded-2xl">
                <div class="space-y-4">
                    <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-white">
                        <i class="fas fa-user-tie text-2xl group-hover:text-black"></i>
                    </div>
                    <h3 class="text-xl font-semibold group-hover:text-white">Personal Concierge</h3>
                    <p class="text-gray-600 group-hover:text-gray-300">24/7 dedicated support for all your travel needs and special requests.</p>
                </div>
            </div>
        </div>

        <!-- Membership Tiers -->
        <div class="mt-24 space-y-8">
            <h3 class="text-3xl font-bold text-center">Choose Your Experience</h3>
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Essential -->
                <div class="relative p-1 rounded-2xl bg-gradient-to-br from-transparent to-gray-100">
                    <div class="bg-white p-8 rounded-xl h-full">
                        <h4 class="text-2xl font-bold mb-4">Essential</h4>
                        <p class="text-4xl font-bold mb-8">$199<span class="text-lg font-normal text-gray-500">/yr</span></p>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-center gap-2">
                                <i class="fas fa-check text-green-500"></i>
                                <span>Basic Priority Access</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-check text-green-500"></i>
                                <span>10% Travel Discounts</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-check text-green-500"></i>
                                <span>Standard Support</span>
                            </li>
                        </ul>
                        <button class="w-full py-3 border-2 border-black text-black rounded-xl hover:bg-black hover:text-white transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>

                <!-- Premium -->
                <div class="relative p-1 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-600">
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span class="bg-black text-white px-4 py-1 rounded-full text-sm">MOST POPULAR</span>
                    </div>
                    <div class="bg-white p-8 rounded-xl h-full">
                        <h4 class="text-2xl font-bold mb-4">Premium</h4>
                        <p class="text-4xl font-bold mb-8">$399<span class="text-lg font-normal text-gray-500">/yr</span></p>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-center gap-2">
                                <i class="fas fa-check text-green-500"></i>
                                <span>Full Priority Access</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-check text-green-500"></i>
                                <span>20% Travel Discounts</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-check text-green-500"></i>
                                <span>24/7 Priority Support</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-check text-green-500"></i>
                                <span>Luxury Upgrades</span>
                            </li>
                        </ul>
                        <button class="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
                            Upgrade Now
                        </button>
                    </div>
                </div>

                <!-- Elite -->
                <div class="relative p-1 rounded-2xl bg-gradient-to-br from-transparent to-gray-100">
                    <div class="bg-white p-8 rounded-xl h-full">
                        <h4 class="text-2xl font-bold mb-4">Elite</h4>
                        <p class="text-4xl font-bold mb-8">$899<span class="text-lg font-normal text-gray-500">/yr</span></p>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-center gap-2">
                                <i class="fas fa-check text-green-500"></i>
                                <span>VIP Access Everywhere</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-check text-green-500"></i>
                                <span>30% Travel Discounts</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-check text-green-500"></i>
                                <span>Personal Travel Assistant</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <i class="fas fa-check text-green-500"></i>
                                <span>Exclusive Events Access</span>
                            </li>
                        </ul>
                        <button class="w-full py-3 border-2 border-black text-black rounded-xl hover:bg-black hover:text-white transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Testimonial -->
        <div class="mt-24 bg-gray-50 p-12 rounded-3xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-1/2 h-full bg-black opacity-5 -skew-x-12"></div>
            <div class="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                <i class="fas fa-quote-left text-4xl text-gray-300"></i>
                <p class="text-2xl text-gray-800 italic leading-relaxed">
                    "The premium membership has transformed my travel experience. The personal concierge service and VIP access have made every journey extraordinary."
                </p>
                <div class="flex items-center justify-center gap-4">
                    <div class="w-16 h-16 bg-gray-200 rounded-full"></div>
                    <div class="text-left">
                        <p class="font-semibold">Alexandra Chen</p>
                        <p class="text-gray-600">Elite Member since 2022</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="mt-24 text-center space-y-8 relative">
            <h3 class="text-3xl font-bold">Ready to Elevate Your Experience?</h3>
            <p class="text-gray-600 max-w-2xl mx-auto">
                Join our exclusive community of premium travelers and discover a world of unprecedented luxury and convenience.
            </p>
            <div class="space-y-4">
                <button class="px-12 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors">
                    Start Your Premium Journey
                </button>
                <p class="text-sm text-gray-500">30-day money-back guarantee • No hidden fees • Cancel anytime</p>
            </div>
        </div>
    </div>
`;









// Add click event listeners for sidebar links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.innerText;

        switch (page) {
            case "Manage Account":
                loadContent(manageAccountHTML);
                break;
            case "Expense Tracker":
                loadContent(expenseTrackerHTML);
                break;
            case "Digital Passport":
                loadContent(digitalPassportHTML);
                break;
            case "Premium Membership": 
                loadContent(premiumMembershipHTML);
                break;
            default:
                initWelcomeMessage();
                break;
        }
    });
});

// Reinitialize the welcome message on page load
window.addEventListener('load', typeMessage);