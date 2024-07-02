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
    title: "ADAEZE obi",
    text: " one as the world keeps evolving. When learnt and utilized,it curbs poverty which is a global menace. HGSC² is a company that is offering digital skills to young and willing minds who are ready to evolve as the world is. HGSC² has been a great blessing to my life.I have successfully gained two skills via this company(Ghostwriting and social media management). The instructors are emphatheic and dedicated to their students.They help us learn effectively and are always willing to assist us at all times.The I.T trainings organized by the company is so superb as it gave us hands on experience on all that we learnt.It also helped us build valuable network as some of us were retained by the different companies that we volunteered for.HGSC² answered a call to serve humanity and this they are doing wholeheartedly. I pray for greater heights of this company and pray that global opportunities be opened to this company. Thank you HGSC² Digital Skills LTD.",
    image: "adaeze.jpg",
  },
  {
    title: "ADAEZE NNAMANI",
    text: " Digital skills are paramount for everyone as the world keeps evolving. When learnt and utilized,it curbs poverty which is a global menace. HGSC² is a company that is offering digital skills to young and willing minds who are ready to evolve as the world is. HGSC² has been a great blessing to my life.I have successfully gained two skills via this company(Ghostwriting and social media management). The instructors are emphatheic and dedicated to their students.They help us learn effectively and are always willing to assist us at all times.The I.T trainings organized by the company is so superb as it gave us hands on experience on all that we learnt.It also helped us build valuable network as some of us were retained by the different companies that we volunteered for.HGSC² answered a call to serve humanity and this they are doing wholeheartedly. I pray for greater heights of this company and pray that global opportunities be opened to this company. Thank you HGSC² Digital Skills LTD.",
    image: "adaeze.jpg",
  },
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
        style={{ color: "red", textAlign: "center", paddingTop: "70px" }}
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
