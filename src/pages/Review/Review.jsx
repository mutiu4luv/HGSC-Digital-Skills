import React from "react";
import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ReviewCard from "../../components/revievCard/ReviewCard";
import { shuffleAndSelect } from "../../components/utilities/utilities";

const reviews = [
  {
    title: "ENIOLA PRECIOUS AYOOLA",
    text: " I decided to upskill in writing late in 2024. I was very skeptical about registering for HSGC² classes because they were so affordable.  I never regretted registering for the two classes at the discounted price then because what I got was exceptional value beyond the price I paid. I met with amazing coaches who took their time to teach us well until we were capable of standing on our feet. Not only did I get certified as a copywriter and ghostwriter after the training, I can as well boast of being well skilled through the projects we were made to do during the training.",
    image: "eniola.jpg",
  },
  {
    title: "AWOFOLAJIN GRACE FAVOUR",
    text: " In the course of building a strong and sustainable personal brand as a professional late last year, I would love to say that, one of the best favours heaven bestowed on me was the gift of HGSC² Digital Skills Academy. It's a privilege knowing this company and learning some digital skills which I refer to as lifesaving. I have had cause to learn two (2) powerful and highly sought-after skills in this academy (Graphic Design and Video Editing). At present, I'm learning two other skills. This is because, digital skills are the new trend now. I must confess that the coaches in this company are dutiful, compassionate, and know their onions. They are a very patient set of coaches I have met since I started learning digital skills. Indeed, they are excellent leaders. The most stunning thing about the company is, they give out this knowledge at very affordable prices that makes people find the offer too good to be true until they give it a try.",
    image: "awon.jpg",
  },
  {
    title: "MARK REUBEN YAKUBU ",
    text: " One of the most beautiful thing that happened to me this year was coming across HGSC² on LinkedIn. I first registered for their one month IT program and the experience was exciting and eye opening. Before I joined them, I've never had an opportunity to work with any client , but the company gave me my first ever experience.  We were not left alone to ourselves though, trainings and guidance was ongoing to ensure that we were able to give our utmost best to the clients we were assigned to. Another thing that wowed me was the way they handled the WhatsApp platforms. One would be tempted to feel like he/she was in a physical room with wonderful and lively people. No wonder I didn't hesitate to recommend them to my friends who gladly paid for a few courses with them. I paid for a few courses with them myself, and indeed, the coaches had the same effect on us the students. It seems they have their unique way of utilizing WhatsApp to deliver so much value in a virtual classroom setting.",
    image: "yakubu.jpg",
  },
  {
    title: "MARY ASIEGBU",
    text: "I'm super excited to have completed my training at HGSC² Digital Skills Academy, where I gained comprehensive knowledge in Social Media Management. I was awarded a scholarship for excelling in my class, to pursue video editing. This is a testament to the academy's commitment to recognizing excellence.  What impresses me most about HGSC² is its dedication to student success. They offer:- Affordable fees, making quality education accessible to all.A supportive alumni network that connects students with opportunities. A dedicated coaches who provide personalized guidance and mentorship A structured one-month course with daily assignments, ensuring consistent progress A certificate of completion, presented on graduation day, is a symbol of our achievement.The academy's accountability measures are top-notch, encouraging students to stay focused and motivated I appreciate the rigorous training, which prepared me for the industry. Thank you HGSC² Digital Skills Academy, for an exceptional learning.",
    image: "mary.jpg",
  },
  {
    title: "ANUOLUWAPO ABAYOMI A.",
    text: "It’s an opportunity to say a review aboutHGSC² Digital Skills Academy. I had an outstanding experience with HGSC². The passionate coaches provided a perfect blend of theory and hands-on practice, inspiring me with engaging projects and access to industry-standard tools (especially the Graphic Design Class). The comprehensive teaching outline fosters both personal and professional growth, making learning truly enjoyable.The knowledgeable and approachable coaches are dedicated to trainee success, offering personalized attention and support. If you’re looking to enhance your digital skills and advance your career, HGSC²",
    image: "anuo.jpg",
  },
  {
    title: "JUSTINE CYNTHIA",
    text: "I'm thrilled to share my incredible transformation story, which began as a social media management student at HGSC² Digital Skill Academy.  After the training, through the guidance and inspiration from the CEO we decided to form a community and help impact over 200 young minds across 9 different skills. This was how my journey as a coach began. At first, I was sceptical about it but I decided to give it a try. This journey not only led me to become a coach but also unlocked various certifications, including Ghostwriting, Social Media Management, Executive Coach, and Professional Coach. Other certifications are in progress. Through HGSC² Digital Skill Academy, I've successfully trained over 60 students and counting, with many more lives impacted. The company's support has been instrumental in my success, and I'm grateful for the opportunities that have come my way. I have secured clients through recommendations from the academy, a testament to the trust and credibility built. I wholeheartedly recommend HGSC² Digital Skill Academy to anyone seeking transformation and growth.Their approach is empowering, and their community is supportive. Don't hesitate to take the first step towards your own success story. You won't regret it! Thank you, HGSC² Digital Skill Academy, for believing in me and helping me unlock my potential..",
    image: "justine.jpg",
  },
  {
    title: "ADAEZE NNAMANI",
    text: " Digital skills are paramount for everyone as the world keeps evolving. When learnt and utilized,it curbs poverty which is a global menace. HGSC² is a company that is offering digital skills to young and willing minds who are ready to evolve as the world is. HGSC² has been a great blessing to my life.I have successfully gained two skills via this company(Ghostwriting and social media management). The instructors are emphatheic and dedicated to their students.They help us learn effectively and are always willing to assist us at all times.The I.T trainings organized by the company is so superb as it gave us hands on experience on all that we learnt.It also helped us build valuable network as some of us were retained by the different companies that we volunteered for.HGSC² answered a call to serve humanity and this they are doing wholeheartedly. I pray for greater heights of this company and pray that global opportunities be opened to this company. Thank you HGSC² Digital Skills LTD.",
    image: "adaeze.jpg",
  },
  {
    title: "Abraham Smart Uchenna",
    text: " If someone had told me I'd be saying this today, I would have just turned a deaf ear and minded my own business. I've discovered that there are companies that just need your services, stress you out, and allocate unrealistic tasks to you.However, there are also a few companies that not only need your services to better themselves but are also very interested in your personal growth. These companies are deeply concerned about you gaining the maximum knowledge you need and becoming the best version of yourself while working with them. I can attest to this because I've worked with quite a number of brands. But HGSC² outplayed all of them in this role, excelling in their commitment to the growth and development of their coaches and, most especially, the students in their academy. For the first time, I did what I never knew I could attempt, let alone receive great commendations from top professionals in the field. As a coach, I was hired, trained, and certified at HGSC². This helped me bring out the best version of myself and earn top recommendations. Moreover, I was able to communicate my copywriting knowledge as a professional coach to over 50 students in the company. If excellence and a tailored approach are what you're looking for, then HGSC² is the company you want to work and study at.",
    image: "smart.jpg",
  },
  {
    title: "Ndiukwu, Ezinne Chioma",
    text: " My journey working for 1 year at HGSC² Digital Academy gave me more knowledge and exposure.  Reflecting on my journey from a student of HGSC² Digital Academy to an executive coach in the same company is an incredible milestone to be proud of.Since I joined this noble company, my growth has been a significant one. I was among the first set of students of this company who were trained and certified in Public Speaking and social media management skills which has helped my personal growth and the growth of the company.After our training, the CEO came up with the idea of training 200 people on different digital skills for free and I volunteered to teach a LinkedIn optimization course and that was how I kick-started my coaching Journey.  To equip the coaches of the company better, the amazing CEO with a heart of gold has organized a series of training for all the coaches to be Certified and perceived as an Executive Coach with a difference. This is one of the most exciting things about working in this company as a Coach is the constant opportunity the company provides in training their staff which gives employees a better understanding of their responsibilities and the knowledge and skills they need to do that job. I have always believed that every company should touch the soul of an employee which brings high efficiency and productivity.I was awarded as the best coach for the 4th batch season which served as a driving force to do better in the company as a Coach.I have a good team leader who is the founder of this company. She is an amazing personality who has also recommended me for job opportunities outside the walls of HGSC² Company. This journey of greatness has also exposed me to a managerial skill that is an added advantage to my personal growth. This is an incredible journey that has unraveled my potential preparing me for the future. I celebrate this great achievement and I'm looking forward to greater development.I will recommend HGSC² Academy to the world for those who are hungry for great opportunities to unlock their potential to join the moving train. As you read this, keep striving for excellence!",
    image: "ezinne.jpg",
  },
  {
    title: "JEHOADDAN JOHNSON",
    text: " Three months ago, I received a message from the CEO of HGSC² asking if I could teach in our community, where I'm also a member. I felt a mix of excitement and nervousness—it was my first time teaching what I do.Despite my initial doubts, I embraced the challenge, and it turned out to be an incredible experience. When she offered me a coaching role afterwards, I didn't hesitate to accept. I've always doubted my ability to teach and never saw myself as a tutor, but now I feel confident.Seeing my first students graduate boosted my confidence even further, and receiving coaching training has been invaluable. I've grown so much in just three months.The shy person who never spoke up is now filled with confidence. I'm truly enjoying this journey of personal and professional growth with HGSC² Academy. Beyond personal growth, I've also built meaningful relationships during this time.The CEO's dedication to supporting us and ensuring we succeed is remarkable. Her selflessness and commitment to the company are inspiring, and I genuinely celebrate her and what she stands for. Being part of this family at HGSC² has been a blessing, and I look forward to the opportunities ahead.",
    image: "johnson.jpg",
  },
  {
    title: "Josephine Nwabueze",
    text: " My name is Josephine Nwabueze, a writer (content and Ghost) a public speaker , a professional coach, graphic designer, among other skills.Before I joined the HGSC² DIGITAL SKILLS ACADEMY LTD as a coach, I was her student , a major beneficiary of the Academy if you must know.Now as one of the coaches in the Academy, it's a whole lot in terms of gained values It will interest you to know that HGSC² DIGITAL SKILLS ACADEMY LTD trained and certified me in almost all my skills that have been of immensed benefits to me, family, friends and even my personal students. HGSC² DIGITAL SKILLS ACADEMY LTD changed my perspectives to a whole lots of things , even in my profession , in my marital life and among my family in general I can confidently recommend HGSC² DIGITAL SKILLS ACADEMY LTD to anyone because I know that all the person will get is values upon values HGSC² DIGITAL SKILLS ACADEMY LTD to the WORLD",
    image: "nwabueze.jpg",
  },
  {
    title: "Precious Chinwe ",
    text: " I recently completed a course at HGSC² Academy and I must say, it's been an incredibly enriching experience! The course exceeded my expectations in every way. The coaches were knowledgeable, supportive, and made the learning process engaging and fun. The curriculum was well-structured, comprehensive, and relevant to my goals.I appreciated the hands-on exercises, real-world examples, and opportunities to interact with fellow students. The skills and knowledge I gained have already started to benefit my personal and professional life.I feel more confident and equipped to tackle new challenges. HGSC² Academy truly delivers on their promise of providing high-quality skil. Their dedication to their students' success is evident in every aspect of the course. I wholeheartedly recommend HGSC² Academy to anyone looking to upskill or reskill. You won't regret it! Thank you, HGSC² Academy, for the exceptional learning experience!",
    image: "chinwe.jpg",
  },
  {
    title: "OBIALOR CHIBUGO DORIS",
    text: " It's indeed a great honour to be part of HGSC² community. It never occurs to me that one can learn a skill online and still be perfect with it, I thought online skills are waste of time and resources.I'm glad I gave it a second thought and HGSC² Academy changed that narrative. The best part is, you acquire a top notch skill with a little amount of money. Their lectures are clear, concise and engaging. The coaches are devoted and makes learning enjoyable and effective. HGSC² Academy is the best place to acquire a skill. If you are looking or confused, Try HGSC² and testify.",
    image: "doris.jpg",
  },
  {
    title: "Zainab. A. Annes ",
    text: " I never knew what gaining skills online entails, until I came across HGSC² community. I had paid for a class on how to navigate Upwork, during the class the coach asked us to name the skills we have. Since I didn't have any, someone amongst the students shared HGSC² flyer with me. Without a second thought and with the face I saw on the flyer I registered without a second though. While trying to pay for the class and was thanking God that the skills were affordable, I was trying to pay but network kept declining my payment. I had to skip my turn that day at the hospital and rushed down to a nearby POS to pay. Since I joined I have never had cause to regret my actions that day. As a student under HGSC², I gained a skill as a ghost writer, copy writer and graphics design. The journey was filled with practicals and the values I gained can't be compared with what I payed to access this skills. After our graduation, I enrolled for the professional Coaching class and I must say, that single act has opened my eyes and intellect to several opportunities.  To our Honourable and indefatigable CEO I can't thank you enough for seeing and finding me worthy of this post. If you ever come across a link online with any information regarding HGSC² information on it, don't hesitate to click on it. Know that better opportunity and offer awaits you. HGSC² to the world.",
    image: "annes.jpg",
  },
  // {
  //   title: "ENIOLA PRECIOUS AYOOLA ",
  //   text: " I decided to upskill in writing late in 2024. I was very skeptical about registering for HSGC² classes because they were so affordable. I never regretted registering for the two classes at the discounted price then because what I got was exceptional value beyond the price I paid. I met with amazing coaches who took their time to teach us well until we were capable of standing on our feet. Not only did I get certified as a copywriter and ghostwriter after the training, I can as well boast of being well skilled through the projects we were made to do during the training. I am grateful for the gift of HSGC², a digital skills academy that provides individuals across different walks of life with the opportunity to learn digital skills with ease. If you are interested in learning digital skills at affordable prices, with 100% value, then HSGC² is the best option. Thank you, HSGC² Digital Skills Academy.",
  //   image: "eniolas.jpg",
  // },
];

const ReviewsPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const selectedReviews = shuffleAndSelect(reviews, isSmallScreen ? 3 : 6);

  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        style={{ color: "green", textAlign: "center", paddingTop: "70px" }}
      >
        REVIEWS
      </Typography>

      <Grid container spacing={3}>
        {selectedReviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ReviewCard review={review} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ReviewsPage;
