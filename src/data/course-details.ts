import { images } from "@/constants/images";
import type { Course, CourseDetail } from "@/types/course";

type CourseDetailContent = Omit<CourseDetail, keyof Course>;

export const courseDetailContent: Record<string, CourseDetailContent> = {
  "build-digital-asset": {
    headline: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    reviews: 172,
    preview: images.previews.digitalAsset,
    lessonPreview: [
      { title: "Introduction to Digital Assets", duration: "12 mins" },
      { title: "Design Principles for Impacts", duration: "21 mins" },
      { title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
    ],
    pitch: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
    description: [
      'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
    ],
    gallery: [
      { src: images.sneakPeek.digitalAsset[0], alt: "Sketching wireframes for a mobile layout on paper" },
      { src: images.sneakPeek.digitalAsset[1], alt: "Designing an interface in a design tool on a laptop" },
      { src: images.sneakPeek.digitalAsset[2], alt: "UI component library on a desktop monitor" },
      { src: images.sneakPeek.digitalAsset[3], alt: "Finished mobile app screens on two phones" },
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
    modules: [
      {
        title: "Introduction to Digital Assets",
        summary:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      },
      {
        title: "Design Principles for Impact",
        summary:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      },
      {
        title: "User-Centric Design Strategies",
        summary:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      },
      {
        title: "Interactive Media and Engagement",
        summary:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      },
      {
        title: "Project Showcase and Critique",
        summary:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      },
      {
        title: "Optimizing Digital Assets for Various Platforms",
        summary:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ],
    progress: 55,
    reviewsIntro:
      "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
    ratingCounts: [720, 120, 21, 12, 16],
    learnerReviews: [
      {
        name: "PurePearl Studio",
        role: "UI/UX Designer",
        avatar: images.reviewers.purepearlStudio,
        rating: 5,
        date: "2025-08-21",
        quote:
          "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
      },
      {
        name: "Albert Flores",
        role: "UI/UX Designer",
        avatar: images.reviewers.albertFlores,
        rating: 5,
        date: "2025-08-02",
        quote:
          "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      },
      {
        name: "Cody Fisher",
        role: "UI/UX Designer",
        avatar: images.reviewers.codyFisher,
        rating: 5,
        date: "2025-07-10",
        quote:
          "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      },
      {
        name: "Brooklyn Simmons",
        role: "UI/UX Designer",
        avatar: images.reviewers.brooklynSimmons,
        rating: 5,
        date: "2025-06-18",
        quote:
          "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      },
    ],
  },
};
