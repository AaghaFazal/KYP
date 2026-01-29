
// Initialize Lucide Icons
if (window.lucide) {
    lucide.createIcons();
}

// Syllabus Data Storage
const syllabusData = {
    'BS-CIT': {
        title: "BS-CIT",
        subtitle: "Bihar State Certificate in Information Technology",
        color: "bg-blue-600",
        icon: "monitor",
        sections: [
            {
                name: "Core IT Tools Proficiency",
                items: ["Windows 10", "Internet Browsers", "MS Word 365", "MS Excel 365", "MS PowerPoint 365", "MS Access 365", "MS Outlook 365", "Google Apps", "Open Office Writer/Calc/Impress"]
            },
            {
                name: "21st Century Daily Life Skills",
                items: ["Paytm & Cashless Transactions", "Net Banking & Online Shopping", "Email Operation & Security", "Online Bill Payments", "Cyber Bullying Protection", "File Sharing (ShareIt/CamScanner)", "Professional Networking (Naukri.com)", "Google Maps & GPS", "QR Code Scanning", "Cloud Storage (Google Drive)"]
            },
            {
                name: "21st Century Citizenship Skills",
                items: ["Aadhaar Card Online Services", "Birth/Death Certificate Applications", "Voter ID Card Registration", "Passport Application & Tracking", "Digital Locker Operation", "Driving License (Learner/Permanent)", "Government Scheme Applications (Atal Pension/PM Suraksha Bima)", "Emergency Numbers Help", "Property & Land Record Checks", "Startup & Partnership Registration"]
            },
            {
                name: "21st Century Study Skills",
                items: ["Effective Research using Wikipedia/Google", "Online Libraries & NCERT eBooks", "MOOCs (Coursera/edX/Udemy/NPTEL)", "Language Learning (Duolingo)", "Mind Mapping Tools", "Plagiarism Checking", "Educational Talks (TED/YouTube)", "Collaborative Tools (Google Docs/Calendar)", "Science & Math Virtual Experiments"]
            },
            {
                name: "21st Century Office Skills",
                items: ["Professional Resume/Profile Building", "Newsletter & Brochure Design", "Database Management", "Budgeting & Expense Tracking", "Meeting Management (Minutes/Agenda)", "Loan Calculators & Timesheets", "Marketing Advertisements", "Product Catalogues & Portfolios"]
            },
            {
                name: "Cyber Security Skills",
                items: ["Password Management", "Information Safety in Banking", "Mobile Security (IMEI/App Lockers)", "Legal Awareness (IT Act 2000)", "Social Media Privacy (FB/WhatsApp)", "Matrimonial/Work-from-home Scam Protection", "Public Wi-Fi Safety", "Data Theft Protection"]
            },
            {
                name: "Operating System & Hardware",
                items: ["Booting & File Management", "Personalizing Desktop", "Keyboard & Mouse Proficiency", "Hardware Components Overview", "Input/Output Devices", "Disk Cleanup & Maintenance", "Printers & Projector Connectivity"]
            }
        ]
    },
    'BS-CLS': {
        title: "BS-CLS",
        subtitle: "Bihar State Certificate in Language Skills",
        color: "bg-orange-600",
        icon: "message-circle",
        sections: [
            {
                name: "Communication Fundamentals",
                items: ["Speaking, Listening, Understanding", "Reading and Writing in English & Hindi", "Vocabulary Development", "Sentence Construction", "Grammar Essentials", "Pronunciation & Voice Modulation", "Non-Verbal Communication (Body Language)"]
            },
            {
                name: "Practical Application Modules",
                items: [
                    "Greetings & Introduction", "Home & Surroundings", "Friends & Family Relations",
                    "Food & Dining Etiquette", "Health and Hygiene Habits", "Time & Directions",
                    "News & Current Events", "Making Enquiries", "Public Space Communication",
                    "Helping & Services", "Telephonic Conversations", "Cyber Communication",
                    "Interview Techniques", "Workplace Meetings", "Customer Service Skills"
                ]
            }
        ]
    },
    'BS-CSS': {
        title: "BS-CSS",
        subtitle: "Bihar State Certificate in Soft Skills",
        color: "bg-emerald-600",
        icon: "heart-pulse",
        sections: [
            {
                name: "Personal & Interpersonal Competence",
                items: [
                    "Self-Awareness & Management", "Strengths & Weaknesses Identification", "Sensitivity towards Self & Others",
                    "Interpersonal Relations", "Confidence Building", "Teamwork & Workplace Relations"
                ]
            },
            {
                name: "Professional Growth Modules",
                items: [
                    "Presentation Skills (Confidence/Quality)", "Time Management (Schedules/Plans)", 
                    "Goal Setting & Initiative Taking", "Decision Making Skills", "Flexibility & Adapting to Change",
                    "Workplace Ethics & Diversity", "Conflict Resolution & Collaboration", 
                    "Stress Management (Positive Health)", "Customer Empathy & Service Attitude"
                ]
            }
        ]
    }
};

// Global function to open syllabus modal
window.openSyllabus = function(courseId) {
    const data = syllabusData[courseId];
    if (!data) return;

    const modal = document.getElementById('syllabus-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const modalIconContainer = document.getElementById('modal-icon-container');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalIconContainer.className = `w-12 h-12 rounded-xl flex items-center justify-center text-white ${data.color}`;
    modalIconContainer.innerHTML = `<i data-lucide="${data.icon}" class="w-7 h-7"></i>`;
    
    // Generate HTML for sections
    let html = `
        <div class="max-w-6xl mx-auto">
            <div class="grid grid-cols-1 gap-12">
    `;

    data.sections.forEach(section => {
        html += `
            <div class="space-y-6">
                <div class="flex items-center gap-3 border-b border-slate-200 pb-3">
                    <h4 class="text-xl font-bold text-slate-800">${section.name}</h4>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    ${section.items.map(item => `
                        <div class="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <i data-lucide="check-circle" class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"></i>
                            <span class="text-slate-700 text-sm font-medium">${item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    modalBody.innerHTML = html;

    // Show modal and refresh icons
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scroll
    if (window.lucide) lucide.createIcons();
};

window.closeSyllabus = function() {
    const modal = document.getElementById('syllabus-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scroll
};

// Admissions Modal Functions
window.openAdmissionModal = function() {
    const modal = document.getElementById('admission-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scroll
};

window.closeAdmissionModal = function() {
    const modal = document.getElementById('admission-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scroll
};

window.submitAdmissionForm = function() {
    const name = document.getElementById('admission-name').value;
    const phone = document.getElementById('admission-phone').value;
    const message = document.getElementById('admission-message').value;
    
    // Validate phone number is exactly 10 digits
    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit mobile number');
        return;
    }
    
    alert(`Thank you ${name}! We will contact you at ${phone} soon regarding your inquiry.`);
    
    // Reset form
    document.getElementById('admission-name').value = '';
    document.getElementById('admission-phone').value = '';
    document.getElementById('admission-message').value = 'Interested in KYP Admission';
    
    closeAdmissionModal();
};

// Header Scroll Animation
const mainHeader = document.getElementById('main-header');
const brandLogo = document.getElementById('logo-text');
const brandTagline = document.getElementById('tagline-text');
const mainToggle = document.getElementById('menu-toggle');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainHeader.classList.add('bg-white', 'shadow-md', 'py-2');
        mainHeader.classList.remove('bg-transparent', 'py-4', 'text-white');
        mainHeader.classList.add('text-slate-900');
        brandLogo.classList.add('text-blue-900');
        brandLogo.classList.remove('text-white');
        brandTagline.classList.add('text-slate-500');
        brandTagline.classList.remove('text-slate-200');
        mainToggle.classList.add('text-slate-900');
        mainToggle.classList.remove('text-white');
    } else {
        mainHeader.classList.remove('bg-white', 'shadow-md', 'py-2', 'text-slate-900');
        mainHeader.classList.add('bg-transparent', 'py-4', 'text-white');
        brandLogo.classList.remove('text-blue-900');
        brandLogo.classList.add('text-white');
        brandTagline.classList.remove('text-slate-500');
        brandTagline.classList.add('text-slate-200');
        mainToggle.classList.remove('text-slate-900');
        mainToggle.classList.add('text-white');
    }
});

// Mobile Navigation Logic
const navMobileMenu = document.getElementById('mobile-menu');
const navToggleBtn = document.getElementById('menu-toggle');
const navCloseBtn = document.getElementById('menu-close');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

const openNav = () => {
    navMobileMenu.classList.remove('hidden');
    navMobileMenu.classList.add('flex');
};

const closeNav = () => {
    navMobileMenu.classList.add('hidden');
    navMobileMenu.classList.remove('flex');
};

navToggleBtn.addEventListener('click', openNav);
navCloseBtn.addEventListener('click', closeNav);
mobileLinks.forEach(link => link.addEventListener('click', closeNav));

// Hero Slider Interaction (only run if slider exists)
let activeSlideIndex = 0;
const sliderFrames = document.querySelectorAll('.slide');
const navDots = document.querySelectorAll('.slider-dot');

if (sliderFrames.length > 0 && navDots.length > 0) {
    function renderSlider(index) {
        sliderFrames.forEach(frame => frame.classList.remove('active'));
        navDots.forEach(dot => {
            dot.classList.remove('w-10', 'bg-orange-500');
            dot.classList.add('w-2', 'bg-white/50');
        });

        sliderFrames[index].classList.add('active');
        navDots[index].classList.remove('w-2', 'bg-white/50');
        navDots[index].classList.add('w-10', 'bg-orange-500');
    }

    function rotateSlider() {
        activeSlideIndex = (activeSlideIndex + 1) % sliderFrames.length;
        renderSlider(activeSlideIndex);
    }

    // Auto-run slider
    let rotationTimer = setInterval(rotateSlider, 6000);

    navDots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            activeSlideIndex = idx;
            renderSlider(activeSlideIndex);
            clearInterval(rotationTimer);
            rotationTimer = setInterval(rotateSlider, 6000);
        });
    });

    // Initialize slider
    renderSlider(activeSlideIndex);
} else {
    console.debug('No slider found on this page; skipping slider initialization.');
}

// Implementation of Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const elementId = this.getAttribute('href');
        const targetElement = document.querySelector(elementId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
