import "./testimonials.scss";


export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Aman Sheel",
      title: "Founder Chairman Edukado Hub",
      img:
        "https://media-exp1.licdn.com/dms/image/C5103AQGQ3y7jz02ndg/profile-displayphoto-shrink_400_400/0/1585227546753?e=1635984000&v=beta&t=l0ZbvFo6YdMs0QJMENlnOjayWFSNwyvJMZrA658WXYk",
      icon: "assets/twitter.png",
      desc:
        "Harsh Saini is hardworking, devoted to work.",
    },
    {
      id: 2,
      name: "Anmol Twickele",
      title: "Teacher",
      img:
        "assets/Anmol.jpeg",
      icon: "assets/youtube.png",
      desc:
        "Harsh Saini learn things fast and easily. he is a good person.",
      featured: true,
    },
    {
      id: 3,
      name: "Prince Kumar Singh",
      title: "Friend",
      img:
        "https://media-exp1.licdn.com/dms/image/C5603AQEZribZd_VBCw/profile-displayphoto-shrink_400_400/0/1593225605579?e=1635984000&v=beta&t=dZqleWsdC-7cspsUpBVn1RePHELfjwgfs_nC2aZg2SA",
      icon: "assets/linkedin.png",
      desc:
        "Harsh Saini is a very supportive, encouraging, smart",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
