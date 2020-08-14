import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <SocialContainer>
      <a href="https://www.youtube.com/channel/UCY7p3OHqkI_yqIXOt_Kfgsw"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://www.facebook.com/learngala/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.twitter.com/LearnMSC" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
       {/* <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} />
      </a> */}
    </SocialContainer>
  );
}

const SocialContainer = styled.div`
  padding: 25px 30px;
  text-align: right;
  margin-right: 0px;
  font-size: 140%;
  margin-top: -20px;

  a {
  //  background-color: white;
  }

  a.social {
    margin: 0 0.7rem;
    transition: transform 250ms;
    display: inline-block;
  }

  a.social:hover {
    transform: translateY(-2px);
  }

  a.youtube {
    .fa-youtube {
      color: #eb3223;
      color: white;
      // background-image: linear-gradient( to bottom, transparent 20%, black 20%, black 93%, transparent 93% );
      background-size: 51%;
      background-position: 51% -2px;
      background-repeat: no-repeat;
    }
  }

  a.facebook {
    .fa-facebook {
      color: white;
      // background-image: linear-gradient( to bottom, transparent 20%, black 20%, black 93%, transparent 93% );
      background-size: 44%;
      background-position: 50% 0;
      background-repeat: no-repeat;
    }
  }

  a.twitter {
    color: #49a1eb;
    color: white;
  }

  a.instagram {
    .fa-instagram {
      color: black;
      // background-image: linear-gradient( to bottom, transparent 20%, white 20%, white 93%, transparent 93% );
      background-size: 83%;
      background-position: 2px -2px;
      background-repeat: no-repeat;
    }
  }
`
