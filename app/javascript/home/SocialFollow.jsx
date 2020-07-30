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
      {/* <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>*/}
      <a href="https://www.facebook.com/learngala/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/LearnMSC" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
       {/* <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a> */}
    </SocialContainer>
  );
}

const SocialContainer = styled.div`
  padding: 25px 30px;

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
      background-image: linear-gradient( to bottom, transparent 20%, white 20%, white 93%, transparent 93% );
      background-size: 51%;
      background-position: 51% -2px;
      background-repeat: no-repeat;
    }
  }

  a.facebook {
    color: #4968ad;
    .fa-facebook {
      color: #3b5998;
      background-image: linear-gradient( to bottom, transparent 20%, white 20%, white 93%, transparent 93% );
      background-size: 44%;
      background-position: 50% 0;
      background-repeat: no-repeat;
    }
  }

  a.twitter {
    color: #49a1eb;
  }

  a.instagram {
    .fa-instagram {
      color: black;
      background-image: linear-gradient( to bottom, transparent 20%, white 20%, white 93%, transparent 93% );
      background-size: 83%;
      background-position: 2px -2px;
      background-repeat: no-repeat;
    }
  }
`
