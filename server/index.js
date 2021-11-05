const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.
app.get("/api/fortune", (req, res) => {
  const fortunes = ["u will die tmr",
  "A beautiful, smart, and loving person will be coming into your life.",
  "A dubious friend may be an enemy in camouflage.",
  "A faithful friend is a strong defense.",
  "A feather in the hand is better than a bird in the air.",
  "A fresh start will put you on your way.",
  "A friend asks only for your time not your money.",
  "A friend is a present you give yourself.",
  "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
  "A golden egg of opportunity falls into your lap this month.",
  "A good friendship is often more important than a passionate romance.",
  "A good time to finish up old tasks.",
  "A hunch is creativity trying to tell you something.",
  "A lifetime friend shall soon be made.",
  "A lifetime of happiness lies ahead of you.",
  "A light heart carries you through all the hard times.",
  "A new perspective will come with the new year.",
  "A person is never to (sic) old to learn."
  ];
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];
  res.status(200).send(randomFortune);
});
app.get("/api/compliment", (req, res) => {
  const compliments = ["you are looking fantastical",
					 "how are u this talented, its honestly unfair",
					 "your parents have amazing genes, it shows",
           
  ];
  let randomMindex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomMindex];

  res.status(200).send(randomCompliment);
});
app.get("/api/future", (req, res) => {
  const futures = ["My hard work finally catching up with perfect timing",
					 "Everybody just needs a second chance.",
					 "I don't write hits for myself, or for other artists, or to just be writing it. I write it because I was born to do this. I was given this gift and I'm making the most of my opportunity.",
           "I always hung around older dudes. I feel like I was more wise and I just had more knowledge of what was going on.",
           
  ];
  let randomIndex = Math.floor(Math.random() * futures.length);
  let randomFuture = futures[randomIndex];
  res.status(200).send(randomFuture);
});
app.get("/api/drake", (req, res) => {
  const drakes = ["Tired of beefin' you bums, you can't even pay me enough to react",
					 "Turned to soil and I grew up out it,Time for y'all to figure out what y'all gon' do about it",
					 "Your Javascript skills are stellar.",
           "You number one, and I'm Eddie Murphy, we tradin' places",
           "No tender love and care, no love and affection",
           "She violated, I sent her back where it all started,How quick they are to forget about their bachelor apartment"
  ];
  let randomIndex = Math.floor(Math.random() * drakes.length);
  let randomDrake = drakes[randomIndex];
  res.status(200).send(randomDrake);
});
  app.get("/api/j.cole", (req, res) => {
    const jcoles = ["No fly zone, please stay the fuck out my airspace",
             "My family tree got a history of users that struggle with demons",
             "We don't participate, ain't with that squashin' shit, all we believe in is homicides",
             "I got a good heart, so I send teddy bears every time we make they mamas cry",
             "That Jada and that Will love(look at how this aged)",
    ];
    let randomIndex = Math.floor(Math.random() * jcoles.length);
  let randomjcoles = jcoles[randomIndex];
  res.status(200).send(randomjcoles);
  });

  // choose random compliment
  
  
  // res.status(200).send(randomFortune);
  


app.listen(4000, () => console.log("Server running on 4000"));
