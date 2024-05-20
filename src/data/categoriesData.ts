import academicImg from "../assets/icons/education.png";
import admissionImg from "../assets/icons/admission.png";
import jobImg from "../assets/icons/job.png";
import designImg from "../assets/icons/design-development.png";
import noteImg from "../assets/icons/note.png";
import islamicImg from "../assets/icons/quran.png";
import recentImg from "../assets/icons/recent.png";
import skillDevelopmentImg from "../assets/icons/skill-development.png";
import tipsImg from "../assets/icons/tips.png";

const categoriesData = [
  {
    id: 1,
    title: "একাডেমিক কর্ণার",
    description: "১ম শ্রেণি থেকে দ্বাদশ শ্রেণি",
    bgColor: "#FEE2E2",
    hoverColor: "#EF4444",
    image: academicImg,
  },
  {
    id: 2,
    title: "ভর্তি প্রস্তুতি কর্ণার",
    description: "সকল ধরনের ভর্তির পরিক্ষার সমাধান",
    bgColor: "#FEF9C3",
    hoverColor: "#EAB308",
    image: admissionImg,
  },
  {
    id: 3,
    title: "চাকরি প্রস্তুতি কর্ণার",
    description: "সকল ধরনের চাকরির পরিক্ষার সমাধান",
    bgColor: "#DCFCE7",
    hoverColor: "#22C55E",
    image: jobImg,
  },
  {
    id: 4,
    title: "স্কিল ডেভেলপমেন্ট কর্ণার",
    description: "স্কিল সম্পর্কিত সকল তথ্য",
    bgColor: "#F3F4F6",
    hoverColor: "#6B7280",
    image: skillDevelopmentImg,
  },
  {
    id: 5,
    title: "সাম্প্রতিক প্রশ্ন",
    description: "সকল পরিক্ষার প্রশ্ন এবং উত্তর",
    bgColor: "#FFEDD5",
    hoverColor: "#F97316",
    image: recentImg,
  },
  {
    id: 6,
    title: "হ্যান্ড নোট",
    description: "সকল বিষয়ের হ্যান্ড নোটের সমাহার",
    bgColor: "#CBFBF1",
    hoverColor: "#14B8A6",
    image: noteImg,
  },
  {
    id: 7,
    title: "ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট",
    description: "ডিজাইন এবং ডেভেলপমেন্ট হাব",
    bgColor: "#FCE7F3",
    hoverColor: "#EC4899",
    image: designImg,
  },
  {
    id: 8,
    title: "টিপস এন্ড ট্রিকস",
    description: "সকল ধরনের টিপস এবং ট্রিকস এখানে",
    bgColor: "#DBEAFE",
    hoverColor: "#3B82F6",
    image: tipsImg,
  },
  {
    id: 9,
    title: "ইসলামিক আলাপ",
    description: "ইসলামিক বিষয় এখনে জানুন",
    bgColor: "#F3E8FF",
    hoverColor: "#A855F7",
    image: islamicImg,
  },
];

export const getAllCategoriesData = () => {
  return categoriesData;
};
