import img1 from './assets/image/download.webp'
import img2 from './assets/image/download (1).webp';
import img3 from './assets/image/OIP.webp';
import img4 from './assets/image/OIP.jpeg'; 
import img5 from './assets/image/download (2).webp';
import img6 from './assets/image/download (3).webp';
import img7 from './assets/image/download (4).webp';
import img8 from './assets/image/OIP (1).webp';
import img9 from './assets/image/R.jpeg';
import img10 from './assets/image/download (5).webp';
import img11 from './assets/image/download (6).webp';
import img12 from './assets/image/OIP (2).webp';
import img13 from './assets/image/download (7).webp';
import img14 from './assets/image/download (10).webp';
import img15 from './assets/image/download (9).webp';
import img16 from './assets/image/download (8).webp';
import img17 from './assets/image/download (11).webp';
import img18 from './assets/image/download (12).webp';
import img19 from './assets/image/OIP (3).webp';
import img20 from './assets/image/download (13).webp';

const courses = [
  // 🟦 Web Development (5)
  {
    id: 1,
    title: "Introduction to HTML & CSS",
    duration: "6 hours",
    rate: 4.5,
    img: img1,
    price: 30,
    instructor: "Ahmed Ali",
    category: "Web Development"
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    duration: "8 hours",
    rate: 4.7,
    img: img2,
    price: 55,
    instructor: "Mona Sayed",
    category: "Web Development"
  },
  {
    id: 3,
    title: "Frontend Development with React",
    duration: "10 hours",
    rate: 4.8,
    img: img3,
    price: 25,
    instructor: "Khaled Hassan",
    category: "Web Development"
  },
  {
    id: 4,
    title: "Full-Stack Apps with MERN Stack",
    duration: "14 hours",
    rate: 4.6,
    img: img4,
    price: 40,
    instructor: "Sara Mahmoud",
    category: "Web Development"
  },
  {
    id: 5,
    title: "Responsive Design with Tailwind CSS",
    duration: "5 hours",
    rate: 4.4,
    img: img5,
    price: 60,
    instructor: "Mahmoud Nasser",
    category: "Web Development"
  },

  // 🤖 AI (3)
  {
    id: 6,
    title: "Introduction to Artificial Intelligence",
    duration: "7 hours",
    rate: 4.5,
    img: img6,
    price: 80,
    instructor: "Dr. Nada Khaled",
    category: "AI"
  },
  {
    id: 7,
    title: "Machine Learning with Python",
    duration: "9 hours",
    rate: 4.7,
    img: img7,
    price: 98,
    instructor: "Ali Youssef",
    category: "AI"
  },
  {
    id: 8,
    title: "Building AI-powered ChatBots",
    duration: "6 hours",
    rate: 4.6,
    img: img8,
    price: 122,
    instructor: "Haitham Salah",
    category: "AI"
  },

  // 🔥 Firebase (3)
  {
    id: 9,
    title: "Firebase Fundamentals",
    duration: "4 hours",
    rate: 4.3,
    img: img9,
    price: 20,
    instructor: "Amira Fouad",
    category: "Firebase"
  },
  {
    id: 10,
    title: "Firebase Authentication",
    duration: "5 hours",
    rate: 4.6,
    img: img10,
    price: 32,
    instructor: "Sherif Khattab",
    category: "Firebase"
  },
  {
    id: 11,
    title: "Connecting React to Firestore",
    duration: "6 hours",
    rate: 4.7,
    img: img11,
    price: 26,
    instructor: "Salem Hamdy",
    category: "Firebase"
  },

  // 🌍 Languages (5)
  {
    id: 12,
    title: "English for Beginners",
    duration: "10 hours",
    rate: 4.5,
    img: img12,
    price: 40,
    instructor: "Asmaa Salah",
    category: "Languages"
  },
  {
    id: 13,
    title: "Basic French Language",
    duration: "9 hours",
    rate: 4.4,
    img: img13,
    price: 39,
    instructor: "Youssef Saad",
    category: "Languages"
  },
  {
    id: 14,
    title: "German Conversation Practice",
    duration: "7 hours",
    rate: 4.3,
    img: img14,
    price: 42,
    instructor: "Dr. Manar Fahmy",
    category: "Languages"
  },
  {
    id: 15,
    title: "Learn Turkish from Scratch",
    duration: "11 hours",
    rate: 4.6,
    img: img15,
    price: 45,
    instructor: "Rana Ibrahim",
    category: "Languages"
  },
  {
    id: 16,
    title: "Spanish Language Basics",
    duration: "8 hours",
    rate: 4.4,
    img: img16,
    price: 50,
    instructor: "Hany Mohsen",
    category: "Languages"
  },

  // 📣 Marketing (4)
  {
    id: 17,
    title: "Digital Marketing Essentials",
    duration: "5 hours",
    rate: 4.6,
    img: img17,
    price: 64,
    instructor: "Iman Gaber",
    category: "Marketing"
  },
  {
    id: 18,
    title: "Facebook & Instagram Ads",
    duration: "6 hours",
    rate: 4.5,
    img: img18,
    price: 53,
    instructor: "Hossam Khattab",
    category: "Marketing"
  },
  {
    id: 19,
    title: "Search Engine Optimization (SEO)",
    duration: "7 hours",
    rate: 4.7,
    img: img19,
    price: 48,
    instructor: "Noha Sami",
    category: "Marketing"
  },
  {
    id: 20,
    title: "Content Writing for Marketing",
    duration: "4 hours",
    rate: 4.3,
    img: img20,
    price: 41,
    instructor: "Marwan Khalil",
    category: "Marketing"
  }
];

export default courses;
