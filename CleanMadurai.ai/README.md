# CleanMadurai.AI - Smart Waste Management System

Intelligent, AI-powered urban waste management platform for the Madurai Corporation.

## 🚀 Deployment
**Live URL:** [https://swachh-madurai.web.app/](https://swachh-madurai.web.app/)

## 🛠 Tech Stack
-   **Frontend:** React.js + Vite + Tailwind CSS
-   **Backend:** Mock Firebase (Auth & Firestore using LocalStorage)
-   **AI Integration:** Configuration ready for Gemini API
-   **Icons:** Lucide-React
-   **PDF Generation:** jsPDF + jsPDF-autotable
-   **QR Codes:** qrcode.react

## 🔑 Configuration
To use your own API keys, create a `.env` file in the root directory (one has been created for you):

```env
VITE_ML_API=https://cleanmadurai-ml.onrender.com
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

## 👨‍💻 Development
1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Run the development server: `npm run dev`
4.  Build for production: `npm run build`
5.  Deploy to Firebase: `firebase deploy`

## 🌟 Features
-   **5 User Roles:** Commissioner, Zone Admin, Ward Admin, Worker, Shop Owner.
-   **Real-time Dashboards:** Monitor waste levels, worker performance, and tasks.
-   **AI Forecasts:** Predictive analytics for waste volume and overflow risk.
-   **Worker App:** Mobile-first design with QR code identification and task management.
-   **Shop Owner Portal:** Request pickups, pay fees, and download PDF receipts.
-   **IoT Simulation:** Real-time simulation of smart bins and public toilets.
