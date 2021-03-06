import React from "react";

import "./style.scss";
import cardimg1 from "../../imges/cardimg1.png";
import { Hidden, Pagination } from "@mui/material";
//"../../imges/"
import img  from  "../../imges/backgrondimg2.png"
import img444  from  "../../imges/image444.png"
import { Carousel } from 'react-carousel-minimal';

const data = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      caption: "Scotland"
    },
    {
      image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
      caption: "Darjeeling"
    },
    {
      image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
      caption: "San Francisco"
    },
    {
      image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
      caption: "Scotland"
    },
    {
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      caption: "Darjeeling"
    }
  ];
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
export default function StoryPage() {
  return (
    <div className="first-page">
      <div className="under-menu">
        <img  src={img}/>
        <div className="text">
          <h1>???? ???? ??. ?????????????????? ?????????? ???????????????? ????????????????????</h1>
          <div className="aphorism">
            <p>???????????????? ??????, ?????????????????????? ?????????????????????????????</p>
          </div>
        </div>
        <div className="languages-section">
          <div className="languages-div">
            <button>??????????????</button>
            <button className="russian">??????????????</button>
            <button>english</button>
          </div>
        </div>
      </div>
      <div className="news-section-news">
         <div style={{width:"80%",marginTop:"50px",marginBottom:"50px", overflow:"hidden"}}>
            <p>
               ?????????????????? ???????????????????????????? ?????????????????????????? ?????????????????????????? ??.?????????????????? ?????????? ???????????????? ?????????????????????? ?????????????????????? ?? ?????????????????? ???????????????????????????? ?????????????????????????? ?????? 279 ????????????????, 1994 ?????????????? ??????????????  24-????` ?????????? ?????????????????? ???????????????????????????? ?????????????????????????? ?????????????????????????? ?????????????????????? ???????????????? ???????????????????????????? ??????????????????????:  
              <br/>
              ?????????????????? ???????????????????????????? ?????????????????????????? ?????? 24 ???????????????? 1998 ?????????????? ???????????????? 16-???? ???? ???? ?????????????????????? ???????????????????? ?????????????????????? ???????????????????????????? ???????????????????????? ?????????????????????????????? ?? ???????????????? ????????????????????, ?????? ???? 1998??. ???????? ?? ???? ?????????????? 4-???????? ???????????????????? ????????????????????????????:
              ?????????????????? ???????????????????????????? ???????????????? ?????? 98 ?????????????????????? 1999 ?????????????? ???????????????????? 27-???? ???????????????? ???????????????????? ???????????????????????? ??  ?????????????????? ???????????????????????????? ?? ???????????? ???????????????????????????? ?????????????? ??????????, ???????????????? ???????????? ?????????????????? ??????????????:
            </p>
         </div>
         <img width={"100%"} src={img444}/>
         <div style={{width:"80%",marginTop:"50px",marginBottom:"50px"}}>
            <p>     
                2001??-???? ???????????????? ???????????????????? ?????????? ?? ???????????? ?????????????????????????? ?? ???????????????????? ???????????????????????????????????????? ???????????????? ?????????????? ??????????????????????: 2004??-???? ???????????????? ???????????????????????? ?????????????? ?? ?????? ?????????????? ?????????????????????? ???????????????????? ?? ?????????????????????????????????? ?????????????????? ????????????????, ?????????? ?????????? ???????????????????????? ?????????????????????? ???? ?????????????????????????????? ??????-?????? ???????????????????????? ???????????? ??????????????: 
               <br/>
               2003??-???? ?????????????????????? ?????????????? ?????????????? ???????????????????????? ???????????????? ???????????????????? ???????????? ?? ???????????????????????????? ?????????????? ?????????????? ???????????? ??????????: 2013??-???? ?????????????? ?? ?????????????????????????????????????? ???????????????????? (??????????????????????????), ?????????? ?????????????????? ???? ???????????????????????????? ?? ???????????????????? ?????????????????????? ???????????????????????????????? ???????????????????????????? ?? ???????????????????? ?????????????????????? ???????????????????? ???????????????????????? ???????????? ????????????????????????: ???? ?????????????????????????? ???????????????? 2017 ?????????????? ???????????????????? 18-?? ?????? 1356 ???????????????? ?????????????????????????????????????? ???????????????????? ?????????????????????? ?? ?????????????? ?????????????????? ???????????????????? ?????????? ?????????????????????????????????????? ????????????????????:
               <br/>
               <br/>
               2014-2015 ?????????????????? ???? ???????????????????? ?????? ???????????? ?????????? ???????????????? ??????????????????????  ?????????????? ?? ?????? ???????????? ???????? ??????????????????, ?????????? ???????????????????????????? ?????????? ?????????????????? ?? ???? ?????????????????????????? ???????????????? ????????????????:
               ?????????????????? ???????????????????????????? ?????????????????????????? 2016 ?????????????? ???????????? 28-?? ?????? 446 ???????????????? ???????????????? ???????????????????? ?????????????????????????????? ???? ???????????????? ?????????????????? ???????????????????????????? ?????????????????????????? ?????????????????????????? ?????????????? ?????????????????? ?????????? ???????????????? ?????????????????????? ?????????????? ??????????????:
            </p>
         </div>
      </div>
      <div className="Pagination" style={{marginBottom:"50px"}} >
      <Carousel
            data={data}
            time={3000}
            width="1450px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1450px",
              margin: "40px auto",
            }}
          />
      </div>
    </div>
  );
}
